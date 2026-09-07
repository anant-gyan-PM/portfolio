/**
 * Ingests content/kb/*.md into the Pinecone "portfolio-kb" index.
 * Uses Pinecone's integrated inference (hosted multilingual-e5-large embedding model),
 * so no separate embedding provider/key is needed — Pinecone embeds the text itself.
 *
 * Run locally with real keys in .env.local:
 *   pnpm ingest-kb
 *
 * Re-run any time content/kb/*.md changes (e.g. after a resume update).
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { Pinecone } from "@pinecone-database/pinecone";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const INDEX_NAME = "portfolio-kb";
const NAMESPACE = "default";
const EMBEDDING_MODEL = "multilingual-e5-large";
const KB_DIR = join(process.cwd(), "content", "kb");
const BATCH_SIZE = 90; // stay comfortably under Pinecone's per-request record limit

type Chunk = { section: string; text: string; source: string };

function chunkMarkdown(filename: string, raw: string): Chunk[] {
  const lines = raw.split("\n");
  const chunks: Chunk[] = [];
  let currentSection = "";
  let currentText: string[] = [];

  const flush = () => {
    const text = currentText.join("\n").trim();
    if (currentSection && text) {
      chunks.push({ section: currentSection, text, source: filename });
    }
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flush();
      currentSection = line.replace("## ", "").trim();
      currentText = [];
    } else {
      currentText.push(line);
    }
  }
  flush();

  return chunks;
}

async function main() {
  const apiKey = process.env.PINECONE_API_KEY;
  if (!apiKey) {
    console.error(
      "Missing PINECONE_API_KEY. Fill in the real value in .env.local first (see .env.local at the repo root)."
    );
    process.exit(1);
  }

  const pc = new Pinecone({ apiKey });

  const existing = await pc.listIndexes();
  const alreadyExists = existing.indexes?.some((i) => i.name === INDEX_NAME);

  if (!alreadyExists) {
    console.log(
      `Creating Pinecone index "${INDEX_NAME}" with integrated embedding model "${EMBEDDING_MODEL}"...`
    );
    await pc.createIndexForModel({
      name: INDEX_NAME,
      cloud: "aws",
      region: "us-east-1", // required region on the free Starter plan
      embed: {
        model: EMBEDDING_MODEL,
        fieldMap: { text: "chunk_text" },
      },
      waitUntilReady: true,
    });
  } else {
    console.log(`Index "${INDEX_NAME}" already exists — reusing it.`);
  }

  const index = pc.index(INDEX_NAME).namespace(NAMESPACE);

  const files = readdirSync(KB_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.error(`No .md files found in ${KB_DIR}`);
    process.exit(1);
  }

  const records = files.flatMap((file) => {
    const raw = readFileSync(join(KB_DIR, file), "utf-8");
    return chunkMarkdown(file, raw).map((chunk, i) => ({
      id: `${file.replace(".md", "")}-${i}`,
      chunk_text: `${chunk.section}\n\n${chunk.text}`,
      source: chunk.source,
      section: chunk.section,
    }));
  });

  console.log(`Parsed ${records.length} chunks from ${files.length} file(s).`);

  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    await index.upsertRecords({ records: batch });
    console.log(`Upserted ${Math.min(i + BATCH_SIZE, records.length)}/${records.length}`);
  }

  console.log("Done — the knowledge base is live in Pinecone.");
}

main().catch((err) => {
  console.error("Ingestion failed:", err);
  process.exit(1);
});

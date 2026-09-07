function Box({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  fill = "var(--card)",
  stroke = "var(--border)",
  titleColor = "var(--foreground)",
  subtitleColor = "var(--muted-foreground)",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle?: string;
  fill?: string;
  stroke?: string;
  titleColor?: string;
  subtitleColor?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} stroke={stroke} strokeWidth={1.5} />
      <text
        x={x + w / 2}
        y={y + h / 2 + (subtitle ? -4 : 5)}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill={titleColor}
        fontFamily="system-ui, sans-serif"
      >
        {title}
      </text>
      {subtitle && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fontSize="10.5"
          fill={subtitleColor}
          fontFamily="system-ui, sans-serif"
        >
          {subtitle}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g stroke="var(--muted-foreground)" strokeWidth={1.5} fill="none">
      <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd="url(#arrowhead)" />
    </g>
  );
}

export default function RagArchitectureDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 820 460" className={className}>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <polygon points="0 0, 7 3, 0 6" fill="var(--muted-foreground)" />
        </marker>
      </defs>
      <rect width="820" height="460" fill="var(--card)" rx={12} />

      <Box x={30} y={190} w={140} h={60} title="Visitor" subtitle="asks Nami a question" />
      <Box x={230} y={190} w={150} h={60} title="Chat Widget" subtitle="React, on every page" />

      <Box
        x={440}
        y={190}
        w={160}
        h={60}
        title="/api/chat"
        subtitle="Vercel serverless function"
        fill="var(--primary)"
        titleColor="var(--primary-foreground)"
        subtitleColor="var(--primary-foreground)"
      />

      <Box x={650} y={40} w={150} h={70} title="Upstash Redis" subtitle="rate limit — free tier" />
      <Box x={650} y={130} w={150} h={70} title="Pinecone" subtitle="semantic search — free tier" />
      <Box x={650} y={220} w={150} h={70} title="Groq" subtitle="openai/gpt-oss-120b — free tier" />
      <Box x={650} y={310} w={150} h={70} title="Grounded Answer" subtitle="or a polite decline" fill="var(--accent)" titleColor="var(--accent-foreground)" subtitleColor="var(--accent-foreground)" />

      <Arrow x1={170} y1={220} x2={228} y2={220} />
      <Arrow x1={380} y1={220} x2={438} y2={220} />

      <Arrow x1={600} y1={205} x2={648} y2={95} />
      <Arrow x1={600} y1={215} x2={648} y2={165} />
      <Arrow x1={600} y1={230} x2={648} y2={255} />
      <Arrow x1={725} y1={200} x2={725} y2={308} />

      <text x="420" y="425" textAnchor="middle" fontSize="12" fill="var(--muted-foreground)" fontFamily="system-ui, sans-serif">
        Every provider runs on a genuinely free, no-card-required tier — architecturally incapable of generating a surprise bill.
      </text>
    </svg>
  );
}

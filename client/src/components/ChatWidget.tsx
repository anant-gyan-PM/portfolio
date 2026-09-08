import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = { role: "user" | "assistant"; text: string };

const BOT_NAME = "Nami";

const GREETING: Message = {
  role: "assistant",
  text: `Hey, I'm ${BOT_NAME} 👋 Anant's virtual assistant — what can I help you with?`,
};

const SUGGESTED_QUESTIONS = [
  "What's Anant's experience in fintech?",
  "Tell me more about the ELEVATE Wisconsin",
  "What are Anant's core skills?",
  "How can I get in touch with Anant?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, showSuggestions]);

  useEffect(() => {
    const openFromOutside = () => setOpen(true);
    window.addEventListener("nami:open", openFromOutside);
    return () => window.removeEventListener("nami:open", openFromOutside);
  }, []);

  async function sendMessage(overrideText?: string) {
    const question = (overrideText ?? input).trim();
    if (!question || loading) return;

    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      const answer =
        data.answer ||
        `Something went wrong on my end — please try again, or send this question to Anant directly.`;
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong reaching the server — please try again, or send this question to Anant directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSomethingElse() {
    setShowSuggestions(false);
    inputRef.current?.focus();
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm h-[28rem] bg-background border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-primary text-primary-foreground flex items-center justify-between">
            <span className="inline-flex items-center gap-2">
              <img src="/images/nami-avatar.png" alt={BOT_NAME} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
              <span className="font-semibold text-sm" style={{ fontFamily: "'Lora', serif" }}>
                {BOT_NAME} — Anant's Assistant
              </span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:opacity-80">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm rounded-lg px-3 py-2 max-w-[85%] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}

            {showSuggestions && !loading && (
              <div className="space-y-2 pt-1">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="block w-full text-left text-sm px-3 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
                <button
                  onClick={handleSomethingElse}
                  className="block w-full text-left text-sm px-3 py-2 rounded-lg border border-dashed border-border text-muted-foreground hover:bg-card transition-colors"
                >
                  Something else…
                </button>
              </div>
            )}

            {loading && (
              <div className="bg-card border border-border text-muted-foreground text-sm rounded-lg px-3 py-2 max-w-[85%]">
                Thinking…
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.keyCode === 13 || e.which === 13) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask a question…"
              className="flex-1 text-sm px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              maxLength={500}
            />
            <Button type="submit" size="icon" disabled={loading || !input.trim()} aria-label="Send">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors overflow-hidden"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <img src="/images/nami-avatar.png" alt="Chat with Nami" className="w-full h-full object-cover" />
        )}
      </button>
    </div>
  );
}

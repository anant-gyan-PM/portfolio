export default function NamiThumbnail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="var(--card)" />
      <rect width="400" height="300" fill="var(--primary)" opacity="0.06" />

      {/* connecting lines suggesting a vector/semantic network */}
      <g stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1.5">
        <line x1="80" y1="70" x2="200" y2="150" />
        <line x1="320" y1="60" x2="200" y2="150" />
        <line x1="60" y1="220" x2="200" y2="150" />
        <line x1="330" y1="230" x2="200" y2="150" />
        <line x1="200" y1="150" x2="200" y2="80" />
      </g>
      <g fill="var(--accent)">
        <circle cx="80" cy="70" r="5" />
        <circle cx="320" cy="60" r="4" />
        <circle cx="60" cy="220" r="4" />
        <circle cx="330" cy="230" r="5" />
      </g>

      {/* central chat bubble */}
      <rect x="140" y="95" width="120" height="80" rx="18" fill="var(--primary)" />
      <path d="M175 175 L165 195 L195 175 Z" fill="var(--primary)" />
      <circle cx="175" cy="135" r="7" fill="var(--primary-foreground)" />
      <circle cx="200" cy="135" r="7" fill="var(--primary-foreground)" />
      <circle cx="225" cy="135" r="7" fill="var(--primary-foreground)" />

      <text
        x="200"
        y="245"
        textAnchor="middle"
        fill="var(--foreground)"
        fontSize="20"
        fontWeight="600"
        fontFamily="'Lora', serif"
      >
        Nami
      </text>
      <text
        x="200"
        y="266"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
      >
        RAG Portfolio Assistant
      </text>
    </svg>
  );
}

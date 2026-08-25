export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          Anant Gyan
        </a>
        <div className="flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="/#expertise" className="text-sm font-medium hover:text-primary transition-colors">Expertise</a>
          <a href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a>
          <a href="/#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
          <a href="/insights" className="text-sm font-medium hover:text-primary transition-colors">Insights</a>
          <a href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

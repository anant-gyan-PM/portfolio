export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container py-4 flex items-center justify-between gap-2">
        <a href="/" className="text-lg sm:text-xl lg:text-2xl font-bold shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
          Anant Gyan
        </a>
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <a href="/" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Home</a>
          <a href="/#expertise" className="hidden lg:inline-block text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Expertise</a>
          <a href="/case-studies" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Case Studies</a>
          <a href="/#experience" className="hidden lg:inline-block text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Experience</a>
          <a href="/insights" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Insights</a>
          <a href="/#contact" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Contact</a>
        </div>
      </div>
    </nav>
  );
}

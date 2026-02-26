import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CaseStudies() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Anant Gyan
          </a>
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl" style={{ fontFamily: "'Lora', serif" }}>
            Detailed exploration of my work across fintech, edtech, and AI domains
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {/* ELEVATE Wisconsin */}
            <Collapsible open={expandedCase === 'elevate'} onOpenChange={(open) => setExpandedCase(open ? 'elevate' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img
                      src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/GgKTm1qyairN9T4pBukRHH-img-1_1771974683000_na1fn_ZWxldmF0ZS13aXNjb25zaW4tZmluYW5jaWFsLWxpdGVyYWN5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94L0dnS1RtMXF5YWlyTjlUNHBCdWtSSEgtaW1nLTFfMTc3MTk3NDY4MzAwMF9uYTFmbl9aV3hsZG1GMFpTMTNhWE5qYjI1emFXNHRabWx1WVc1amFXRnNMV3hwZEdWeVlXTjUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eF0ECkMPdQMgGNzAuY2YbloMbtBz3K-JS-D326T9y-FAfoTBZBfnbs6u9OtmYu~FYAGWKuCdozzAww~InUjr3EpOzwrAc0hBCgQqYxXkkvjEsJ6t744KCG7m04NAxVGuqgKHEHnXbgd7UDTQ1tcCQOHMS1hEInrmuVLxiJW4mnyU7u~kNFGOFMvLF-EaGW88LKrAoiLktrt1zPjkrOu5PUUU7fpapyK~UDTx0wDainMxRH27giU0Nl~LRjt1yf46PN4jbqMjdQArbalrp0xZixFqvURh8ZvTKdhroEg-HTyOywlZDEUce1SSKB1ahNbPFa8LKXt0Rz~tzkqbiojreg__"
                      alt="ELEVATE Wisconsin"
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-3">EdTech & Financial Literacy</Badge>
                      <h3 className="text-2xl font-semibold mb-1 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                        ELEVATE Wisconsin
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">Financial Wellness Program for K-12 Students</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        A comprehensive financial wellness program designed to empower K-12 students in rural and tribal communities with essential personal finance skills.
                      </p>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="default" className="bg-primary hover:bg-primary/90 w-fit">
                        {expandedCase === 'elevate' ? (
                          <>
                            <span>Collapse</span>
                            <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
                          </>
                        ) : (
                          <>
                            <span>Explore</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>

                <CollapsibleContent>
                  <div className="border-t border-border p-6 bg-card/50">
                    <div className="space-y-8 text-muted-foreground max-w-none">
                      <div>
                        <img 
                          src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/GgKTm1qyairN9T4pBukRHH-img-1_1771974683000_na1fn_ZWxldmF0ZS13aXNjb25zaW4tZmluYW5jaWFsLWxpdGVyYWN5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94L0dnS1RtMXF5YWlyTjlUNHBCdWtSSEgtaW1nLTFfMTc3MTk3NDY4MzAwMF9uYTFmbl9aV3hsZG1GMFpTMTNhWE5qYjI1emFXNHRabWx1WVc1amFXRnNMV3hwZEdWeVlXTjUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eF0ECkMPdQMgGNzAuY2YbloMbtBz3K-JS-D326T9y-FAfoTBZBfnbs6u9OtmYu~FYAGWKuCdozzAww~InUjr3EpOzwrAc0hBCgQqYxXkkvjEsJ6t744KCG7m04NAxVGuqgKHEHnXbgd7UDTQ1tcCQOHMS1hEInrmuVLxiJW4mnyU7u~kNFGOFMvLF-EaGW88LKrAoiLktrt1zPjkrOu5PUUU7fpapyK~UDTx0wDainMxRH27giU0Nl~LRjt1yf46PN4jbqMjdQArbalrp0xZixFqvURh8ZvTKdhroEg-HTyOywlZDEUce1SSKB1ahNbPFa8LKXt0Rz~tzkqbiojreg__"
                          alt="ELEVATE Wisconsin"
                          className="w-full rounded-lg shadow-lg mb-8"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Challenge</h4>
                        <p className="leading-relaxed">Members of tribal nations receive substantial distributions ($100,000+) upon turning 18. Without proper financial education, many waste these resources on impulsive purchases or fall victim to predatory lending schemes. Rural and tribal communities lack accessible financial literacy programs integrated into school curricula, creating a critical gap in financial preparedness for young adults.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Solution</h4>
                        <p className="leading-relaxed">ELEVATE Wisconsin provides comprehensive financial education content and structured teacher training programs to integrate financial literacy into K-12 curricula. Rather than building a direct-to-student platform, we recognized that teachers are the true gatekeepers of curriculum adoption. The platform trains teachers to become financial education advocates, creating a multiplier effect across school districts. This approach ensures sustainability and cultural relevance in rural and tribal communities.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Go-to-Market Strategy</h4>
                        <p className="leading-relaxed mb-4">The GTM strategy centered on three pillars that proved critical for adoption in underserved communities:</p>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-primary font-bold">1.</span><span><strong>Advisory Board Validation:</strong> Spent 6 months building relationships with educators, tribal leaders, financial experts, and state government officials. This wasn't market research—it was co-creation that ensured the program addressed real needs.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">2.</span><span><strong>Structured Pilots:</strong> Ran 3-month pilots with 5 school districts, measuring teacher engagement, student outcomes, and operational feasibility. This data became our proof point for scaling.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">3.</span><span><strong>Multiplier Effect:</strong> Trained teachers became advocates who trained other staff, creating organic growth within districts without additional marketing spend.</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Achievements</h4>
                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">$250K</div>
                            <div className="text-sm text-muted-foreground">Funding Secured</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">25</div>
                            <div className="text-sm text-muted-foreground">Teachers Trained</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">10</div>
                            <div className="text-sm text-muted-foreground">School Districts</div>
                          </div>

                        </div>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Earned Wisconsin Governor's Award for Financial Literacy—recognition of impact in underserved communities</span></li>

                          <li className="flex gap-2"><span className="text-primary">•</span><span>Established sustainable teacher-led adoption model that scales without proportional marketing costs</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Impact & Key Learning</h4>
                        <p className="leading-relaxed">By providing financial education before students graduate from high school, ELEVATE Wisconsin prepares them to make smart financial decisions when they receive distributions from tribal governments or enter the workforce. The program has demonstrated that in EdTech, success requires understanding the true buyer (teachers and administrators), not just the end user (students). This insight became foundational to our product strategy and remains applicable across B2B2C education models.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Google Gemini */}
            <Collapsible open={expandedCase === 'google'} onOpenChange={(open) => setExpandedCase(open ? 'google' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/HJRDtHqULtrmYSPg.png"
                      alt="Google Gemini"
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-3">AI/ML & Infrastructure</Badge>
                      <h3 className="text-2xl font-semibold mb-1 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                        AI Query Optimization Engine
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">Gemini-Powered SQL Optimization at Google</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        An AI-powered SQL query optimization engine using Gemini that accelerates Google Ads infrastructure by achieving 98% faster query execution.
                      </p>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="default" className="bg-primary hover:bg-primary/90 w-fit">
                        {expandedCase === 'google' ? (
                          <>
                            <span>Collapse</span>
                            <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
                          </>
                        ) : (
                          <>
                            <span>Explore</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>

                <CollapsibleContent>
                  <div className="border-t border-border p-6 bg-card/50">
                    <div className="space-y-8 text-muted-foreground max-w-none">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Challenge</h4>
                        <p className="leading-relaxed">Google Ads infrastructure requires running thousands of SQL queries to deliver personalized ads and process user interactions. Slow query execution increases computational costs, impacts system performance, and limits scalability. Manual query optimization is time-consuming, inconsistent, and doesn't scale with query volume growth.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Solution</h4>
                        <p className="leading-relaxed">Built an AI-powered SQL Query Optimization Engine using Gemini Pro 1.5 with sophisticated prompt engineering. The platform automatically analyzes SQL queries, generates optimized alternatives, validates semantic correctness, and executes them significantly faster without manual intervention. The system uses TPC-H benchmarks to validate performance improvements across diverse query patterns.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">System Architecture</h4>
                        <img 
                          src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/zX3qcHxXvFDiP8ympTEYNN-img-1_1771976044000_na1fn_Z29vZ2xlLWdlbWluaS1hcmNoaXRlY3R1cmU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94L3pYM3FjSHhYdkZEaVA4eW1wVEVZTk4taW1nLTFfMTc3MTk3NjA0NDAwMF9uYTFmbl9aMjl2WjJ4bExXZGxiV2x1YVMxaGNtTm9hWFJsWTNSMWNtVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=C8Um9MGEz1aM2Ka5~Bqzw00ExeyZ~MKZfuu2V8mI25Ws7GK0o1Xj~Dn4dWp8DEteQxHpMy~c2i08lP33yhdpuA~jXemxirGUSf9fxjPjsmHL-sznpxjVN93IqVsqh81c9rO8POHLoMdKLQ7kuDW-48mtPWk0QjfndCAPSVpftV0yqcxk6E4aK5oM0wTegpvH3Y-zEjEv-72SjoxrTc80dkuSZVQk3-DG6QV6lyseebz0yZcp52y67GaYK7oJet47kqJo70hR-sZd0RBesAc1J6tXIKxxJ~v1a3F~yWGVI1Rq8dTu3~ma4XM5t~o6tdzee814C0f1~cRIaYCIPW4-lw__"
                          alt="Google Gemini Architecture"
                          className="w-full rounded-lg shadow-lg mb-6"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Technical Approach</h4>
                        <p className="leading-relaxed mb-4">The optimization engine follows a multi-stage pipeline:</p>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-primary font-bold">1.</span><span><strong>Query Parsing:</strong> Analyzes original SQL queries to extract structure, execution plans, and performance bottlenecks.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">2.</span><span><strong>Gemini Optimization:</strong> Uses Gemini Pro 1.5 with prompt engineering to generate semantically equivalent but faster queries. The model understands query optimization patterns and applies them intelligently.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">3.</span><span><strong>Validation Layer:</strong> Ensures semantic correctness by comparing result sets and verifying performance improvements before deployment.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">4.</span><span><strong>Benchmarking:</strong> Tests against TPC-H benchmarks (22 standardized queries, 100+ total queries) to validate performance across diverse query patterns.</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Achievements</h4>
                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">98%</div>
                            <div className="text-sm text-muted-foreground">Faster Execution</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">100+</div>
                            <div className="text-sm text-muted-foreground">Queries Tested</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">22</div>
                            <div className="text-sm text-muted-foreground">TPC-H Benchmarks</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">5</div>
                            <div className="text-sm text-muted-foreground">Team Members</div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Designed AI-powered SQL Query Optimization using Gemini with advanced prompt engineering techniques</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Led cross-functional team of 5 engineers and designers through product development and validation</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Won internal Google competition for further R&D and enterprise-wide deployment</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Impact & Future Deployment</h4>
                        <p className="leading-relaxed">The platform is now under further R&D at Google and will be deployed enterprise-wide across Google Ads infrastructure. The 98% performance improvement translates to significant computational cost reduction and improved system responsiveness. This project demonstrates the power of AI in infrastructure optimization and how LLMs can be applied to complex technical problems like query optimization.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* CryptoSmartlife */}
            <Collapsible open={expandedCase === 'crypto'} onOpenChange={(open) => setExpandedCase(open ? 'crypto' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/DfPoTklYlRvyXrHM.png"
                      alt="CryptoSmartlife"
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-3">Fintech & Compliance</Badge>
                      <h3 className="text-2xl font-semibold mb-1 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                        CryptoSmartlife
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">Fintech Platform with Institutional-Grade Compliance</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        A comprehensive cryptocurrency investment platform managing $3M+ in assets for 70,000+ users with AI-powered portfolio management and institutional-grade security.
                      </p>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="default" className="bg-primary hover:bg-primary/90 w-fit">
                        {expandedCase === 'crypto' ? (
                          <>
                            <span>Collapse</span>
                            <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
                          </>
                        ) : (
                          <>
                            <span>Explore</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>

                <CollapsibleContent>
                  <div className="border-t border-border p-6 bg-card/50">
                    <div className="space-y-8 text-muted-foreground max-w-none">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Challenge</h4>
                        <p className="leading-relaxed">Cryptocurrency investment platforms face three critical barriers: (1) Users lack expertise to select individual coins from thousands of options, (2) Manual portfolio management is time-consuming and error-prone, (3) Regulatory compliance (KYC/AML) is complex and resource-intensive, creating friction in onboarding. Additionally, security concerns around custody and wallet management deter institutional and retail investors alike.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Solution</h4>
                        <p className="leading-relaxed">CryptoSmartlife simplifies crypto investing through theme-based baskets (Metaverse, DeFi, NFT, Web 3.0), AI-powered auto-rebalancing, streamlined KYC/AML workflows, and multi-wallet flexibility with 20+ exchange integrations. The platform prioritizes institutional-grade security with 95% cold storage, BitGo custody ($250M insurance), and comprehensive compliance infrastructure.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Security Architecture</h4>
                        <img 
                          src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/TNmNFCMUUMzfwVGgiqZytH-img-1_1771976629000_na1fn_Y3J5cHRvc21hcnRsaWZlLXNlY3VyaXR5LWFyY2hpdGVjdHVyZS1tb2Rlcm4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94L1RObU5GQ01VVU16ZndWR2dpcVp5dEgtaW1nLTFfMTc3MTk3NjYyOTAwMF9uYTFmbl9ZM0o1Y0hSdmMyMWhjblJzYVdabExYTmxZM1Z5YVhSNUxXRnlZMmhwZEdWamRIVnlaUzF0YjJSbGNtNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fle7Nl1SJkE0Sqljxwt7FGssYX9WS1hB3WviiSGCgRAu6r~V-dHwhOXDEtC3nvSGkwDp2iFNHlxe9AyTSfHk6GEq4-kKzQewE~-2gMxPbCNkL3AtUeq7zAiNYRiexZgNxFyqOGVjwKm2GaCPiF90IgxuZrOVMa38PdYsv4xcQb7O7P1RtaXVg0cTNyHM1vJ2guUvA3w9qJvKFVnu3PLrgUJlWzrFt1G89Uv~JTtFRi67JUdSAmq-FE7TaQirpZ4OxsEhnYJULogY6veQgZvwYswcNdp8d5wHSban8jK2J0-9aXG2aH3Eq85LExLdWHl~~PE~pFghXQyCFtingepS9A__"
                          alt="CryptoSmartlife Security Architecture"
                          className="w-full rounded-lg shadow-lg mb-6"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Three Dimensions of Excellence</h4>
                        <p className="leading-relaxed mb-4">In fintech, product excellence requires simultaneous mastery of three dimensions. CryptoSmartlife demonstrates how to balance all three:</p>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-primary font-bold">1.</span><span><strong>User Experience Simplicity:</strong> Theme-based baskets eliminate decision paralysis. Users choose risk appetite (Low/Medium/High) rather than individual coins. Auto-rebalancing removes ongoing management burden.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">2.</span><span><strong>Operational Resilience:</strong> 24/7 monitoring with sub-5-minute issue resolution. 99.2% accuracy in identity verification. 95% cold storage with BitGo custody ensures asset security.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">3.</span><span><strong>Regulatory Compliance:</strong> SEC, FINRA, and GDPR compliant with automated reporting. Streamlined KYC/AML with 95% auto-approval rate. ISO 27001 and SOC 2 Type 2 certified identity management.</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Achievements</h4>
                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">$3M+</div>
                            <div className="text-sm text-muted-foreground">Assets Managed</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">70K+</div>
                            <div className="text-sm text-muted-foreground">Active Users</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">45%</div>
                            <div className="text-sm text-muted-foreground">Churn Reduction</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">95%</div>
                            <div className="text-sm text-muted-foreground">Auto-Approval Rate</div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Reduced churn by 45% through simultaneous optimization of UX, operations, and compliance</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Improved issue resolution to under 5 minutes with 24/7 monitoring and automated alerting</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Increased onboarding efficiency by 50% through KYC/AML workflow redesign</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Maintained 99.2% accuracy in identity verification with 95% auto-approval rate</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Ranked #3 Global best product on Product Hunt with 4.7 rating</span></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Security & Compliance Highlights</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span><span>256-bit encryption for all data transfer connections</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>AES-256 encryption for user API keys with unique secret keys</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>ISO 27001 and SOC 2 Type 2 compliant identity management via Auth0</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>BitGo custody with $250M insurance coverage</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>95% cold storage, 5% hot wallets for liquidity</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>20+ exchange integrations for wallet flexibility</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Learning</h4>
                        <p className="leading-relaxed">In fintech, product excellence requires simultaneous mastery of three dimensions: user experience simplicity, operational resilience, and regulatory compliance. The 45% churn reduction came from addressing all three simultaneously, not from optimizing any single dimension. This holistic approach is what separates successful fintech platforms from those that fail despite strong technology or compliance infrastructure.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        </div>
      </section>
    </div>
  );
}

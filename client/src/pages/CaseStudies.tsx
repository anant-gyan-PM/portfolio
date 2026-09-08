import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Nav from "@/components/Nav";

export default function CaseStudies() {
  const [expandedCase, setExpandedCase] = useState<string | null>(
    () => new URLSearchParams(window.location.search).get('study')
  );

  useEffect(() => {
    if (expandedCase) {
      document.getElementById(`case-${expandedCase}`)?.scrollIntoView({ block: 'start' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />

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
            {/* Nami RAG Assistant */}
            <Collapsible id="case-nami" open={expandedCase === 'nami'} onOpenChange={(open) => setExpandedCase(open ? 'nami' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img src="/images/nami-thumbnail.png" alt="Nami — RAG Portfolio Assistant" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-3">AI & RAG Engineering</Badge>
                      <h3 className="text-2xl font-semibold mb-1 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                        Nami — RAG Portfolio Assistant
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">A Retrieval-Augmented Generation Chatbot Built for This Site</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        A production RAG pipeline — vector search, LLM generation, and hard rate-limiting — built to let visitors ask this portfolio questions directly, grounded entirely in Anant's real experience.
                      </p>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="default" className="bg-primary hover:bg-primary/90 w-fit">
                        {expandedCase === 'nami' ? (
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
                        <p className="leading-relaxed">A static portfolio site can only answer the questions its author anticipated when writing the copy. A recruiter or hiring manager with a specific question — "what did you actually do at CryptoSmartlife?", "how does Anant think about AI in fintech?" — has to dig through pages to find (or not find) the answer. The goal was to let visitors just ask, and get an answer designed to minimize unsupported answers through source-only grounding and graceful abstention, with usage protected against abuse.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Solution</h4>
                        <p className="leading-relaxed">Nami is a full Retrieval-Augmented Generation (RAG) pipeline embedded directly in the site. A knowledge base authored from Anant's resume, case studies, interview prep, and career philosophy is chunked and embedded into Pinecone using its integrated inference (no separate embedding provider needed). When a visitor asks a question, the system retrieves the most semantically relevant chunks, feeds them to an LLM as grounding context, and generates an answer using only that content — with a strict system prompt instructing a polite decline whenever the knowledge base doesn't cover the question, rather than guessing. Every component of the stack — vector search, generation, and rate limiting — runs on each provider's free tier.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">System Architecture</h4>
                        <img src="/images/nami-architecture.png" alt="Nami RAG Architecture Diagram" className="w-full rounded-lg shadow-lg mb-6" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Technical Approach</h4>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-primary font-bold">1.</span> <span><strong>Knowledge Base & Chunking:</strong> Markdown source files, split into semantically coherent chunks by section, covering experience, case studies, behavioral stories, and career philosophy.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">2.</span> <span><strong>Retrieval:</strong> Pinecone's hosted embedding model (multilingual-e5-large) embeds both the knowledge base and each incoming question, returning the top semantically matching chunks via integrated inference — no separate embedding API to manage.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">3.</span> <span><strong>Generation:</strong> Groq serves the LLM (openai/gpt-oss-120b) that reads the retrieved chunks and writes a grounded, concise answer — or declines gracefully when nothing relevant is found.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">4.</span> <span><strong>Usage Protection:</strong> Upstash Redis enforces a two-layer rate limit — per-visitor and site-wide daily — in front of every retrieval or generation call. The system is protected by application-level rate limits and provider quotas that prevent uncontrolled usage.</span></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Pinecone (Vector DB + Integrated Embeddings)</Badge>{" "}
                          <Badge variant="secondary">Groq (LLM Inference)</Badge>{" "}
                          <Badge variant="secondary">Upstash Redis (Rate Limiting)</Badge>{" "}
                          <Badge variant="secondary">Vercel Serverless Functions</Badge>{" "}
                          <Badge variant="secondary">React</Badge>{" "}
                          <Badge variant="secondary">Claude Code</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Design Outcomes</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span> <span>Recruiters and hiring managers get direct, specific answers in seconds instead of searching across pages</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span> <span>Every answer is traceable to real source content — no fabricated claims or numbers</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span> <span>No ongoing infrastructure cost at current portfolio traffic, with enforced usage ceilings</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span> <span>A working, shippable demonstration of applied AI engineering — not just a claim on a resume</span></li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Validation</h4>
                        <p className="leading-relaxed">This is a small, informal test set from development and initial verification — not a rigorous benchmark, and no numbers here are estimated or invented. Across 10 sample questions (7 clearly in-scope, 3 clearly out-of-scope), all 7 in-scope questions were answered correctly and grounded in real source content, and all 3 out-of-scope questions were correctly declined with the fallback message. Rate limiting was verified directly against Upstash — the increment/expiry logic works correctly, and the rate-limit check runs before any retrieval or generation call in the code path — though the exact request volume needed to trigger the cap hasn't been load-tested, and response time hasn't been formally measured yet.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Learning</h4>
                        <p className="leading-relaxed">Retrieval quality alone isn't a reliable gate for "does this question belong in scope" — embedding similarity scores stayed high even for clearly off-topic questions, since the model matches general topical similarity rather than literal relevance. The more robust design puts that judgment in the LLM's hands via a strict system prompt, verified empirically rather than assumed, with the vector score kept only as a sanity floor for degenerate cases.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* ELEVATE Wisconsin */}
            <Collapsible id="case-elevate" open={expandedCase === 'elevate'} onOpenChange={(open) => setExpandedCase(open ? 'elevate' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img src="/images/elevate-wisconsin.jpg" alt="ELEVATE Wisconsin" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
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
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Challenge</h4>
                        <p className="leading-relaxed">Members of tribal nations receive substantial distributions ($100,000+) upon turning 18. Without proper financial education, many waste these resources on impulsive purchases or fall victim to predatory lending schemes. Rural and tribal communities lack accessible financial literacy programs integrated into school curricula, creating a critical gap in financial preparedness for young adults.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">The Solution</h4>
                        <p className="leading-relaxed">ELEVATE Wisconsin provides comprehensive financial education content and structured teacher training programs to integrate financial literacy into K-12 curricula. Rather than building a direct-to-student platform, we recognized that teachers are the true gatekeepers of curriculum adoption. The platform trains teachers to become financial education advocates, creating a multiplier effect across school districts. This approach ensures sustainability and cultural relevance in rural and tribal communities.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Program Architecture</h4>
                        <img src="/images/elevate-architecture.jpg" alt="ELEVATE Wisconsin Program Architecture" className="w-full rounded-lg shadow-lg mb-6" />
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
                            <div className="text-2xl font-bold text-primary">8,000+</div>
                            <div className="text-sm text-muted-foreground">Projected Reach</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">20+</div>
                            <div className="text-sm text-muted-foreground">School Districts</div>
                          </div>
                          <div className="bg-primary/10 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">1,500+</div>
                            <div className="text-sm text-muted-foreground">Departments in Rollout</div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Built AI-powered workflows that cut operational overhead 60% by automating grant research, application drafting, and budget generation</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Spearheading expansion of the Financial Wellness Champion Training to state, county, local government, colleges, and university systems across Wisconsin</span></li>
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
            <Collapsible id="case-google" open={expandedCase === 'google'} onOpenChange={(open) => setExpandedCase(open ? 'google' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img src="/images/ai-query-optimization.jpg" alt="Google Gemini" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-3">AI/ML & Infrastructure</Badge>
                      <h3 className="text-2xl font-semibold mb-1 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                        AI Query Optimization Engine
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">Gemini-Powered SQL Optimization at Google</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        An AI-powered SQL query optimization engine using Gemini that accelerates enterprise SQL infrastruture by achieving 90% faster query execution.
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
                        <img src="/images/gemini-architecture.jpg" alt="Google Gemini Architecture" className="w-full rounded-lg shadow-lg mb-6" />
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
                            <div className="text-2xl font-bold text-primary">90%</div>
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
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Project recognised in an internal Google R&D review and recommended for enterprise deployment consideration</span></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Impact & Future Deployment</h4>
                        <p className="leading-relaxed">The project was recognised in an internal Google R&D review and recommended for enterprise deployment consideration. The 90% performance improvement demonstrates how AI can restructure infrastructure logic and not just accelerate existing processes.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* CryptoSmartlife */}
            <Collapsible id="case-crypto" open={expandedCase === 'crypto'} onOpenChange={(open) => setExpandedCase(open ? 'crypto' : null)}>
              <Card className="overflow-hidden border-border hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img src="/images/cryptosmartlife.jpg" alt="CryptoSmartlife" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
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
                        <img src="/images/cryptosmartlife-security.jpg" alt="CryptoSmartlife Security Architecture" className="w-full rounded-lg shadow-lg mb-6" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Three Dimensions of Excellence</h4>
                        <p className="leading-relaxed mb-4">In fintech, product excellence requires simultaneous mastery of three dimensions. CryptoSmartlife demonstrates how to balance all three:</p>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-primary font-bold">1.</span><span><strong>User Experience Simplicity:</strong> Theme-based baskets eliminate decision paralysis. Users choose risk appetite (Low/Medium/High) rather than individual coins. Auto-rebalancing removes ongoing management burden.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">2.</span><span><strong>Operational Resilience:</strong> 24/7 monitoring with sub-5-minute issue resolution. 99.2% accuracy in identity verification. 95% cold storage with BitGo custody ensures asset security.</span></li>
                          <li className="flex gap-3"><span className="text-primary font-bold">3.</span><span><strong>Regulatory Compliance:</strong> Compliant with Indian crypto regulatory framework and BACC guidelines. Automated KYC/AML verification workflows reducing manual review to exception-only cases. Implemented Auth0's ISO 27001 and SOC2 compliant identity management solution</span></li>
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
                            <div className="text-2xl font-bold text-primary">4.85/5</div>
                            <div className="text-sm text-muted-foreground">CSAT Score</div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Reduced KYC/AML verification time from 48 hours to under 30 seconds through a negotiated vendor partnership</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Reduced churn by 45% through simultaneous optimization of UX, operations, and compliance</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Improved issue resolution to under 5 minutes with Slack-integrated monitoring and automated alerting</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Increased onboarding efficiency by 50% through KYC/AML workflow redesign</span></li>
                          <li className="flex gap-2"><span className="text-primary">•</span><span>Identified a 0.2% fee discrepancy during quarterly reconciliation and implemented automated weekly reconciliation to prevent recurrence</span></li>
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

            {/* Nami RAG Assistant */}
          </div>
        </div>
      </section>
    </div>
  );
}

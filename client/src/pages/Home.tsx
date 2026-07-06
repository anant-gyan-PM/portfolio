/*
  Neo-Modernist Editorial Design System
  - Multi-column editorial grid with generous whitespace
  - Serif-sans typography contrast for authority
  - Warm neutrals with forest green and burnt sienna accents
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, Linkedin, ExternalLink, Award, TrendingUp, Users, Zap, Shield, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Anant Gyan
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#expertise" className="text-sm font-medium hover:text-primary transition-colors">Expertise</a>
            <a href="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
            <a href="/insights" className="text-sm font-medium hover:text-primary transition-colors">Insights</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/MDuPlkcmXHJWVgGQ.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="container relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
            <div className="mb-6"></div>
            <h1 className="text-5xl lg:text-7xl mb-6 text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Product Operations Manager
            </h1>
            <p className="text-lg lg:text-xl mb-2 text-muted-foreground max-w-2xl" style={{ fontFamily: "'Lora', serif" }}>
              8+ Years in Fintech & EdTech | KYC/AML . Custody . Payments . AI Automation
            </p>
            <p className="text-lg lg:text-xl mb-8 text-muted-foreground max-w-2xl" style={{ fontFamily: "'Lora', serif" }}>
              70k+ Users . $3M+ Assets | Wisconsin MBA
            </p>
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$3M+</div>
                <div className="text-sm text-muted-foreground">Assets Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">70K+</div>
                <div className="text-sm text-muted-foreground">Users Enabled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Faster with AI</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#experience">View Work</a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            </div>
            <div className="lg:block">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/cfoNbvHXIBnddZSD.PNG" 
                alt="Anant Gyan - Product Manager" 
                className="w-full max-w-sm lg:max-w-none mx-auto lg:mx-0 rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Driving Product Success Through Data-Driven Strategy
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I build the processes, systems, and cross-functional workflows that power and scale regulated financial products. Eight-plus years across trading, custody, compliance, and financial education taught me the infrastructure layer most PMs never touch i.e. KYC/AML, custody integration, reconciliation, and audit processes, across North American, European, and Asian markets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lately I've been putting AI to work on the operations layer itself, automating grant research, reporting, and quantitative budget analysis for a non-profit using Claude. From securing $250K in funding to enabling $3M in assets for 70,000+ users, I focus on building the operational backbone that lets products scale without breaking.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Education
              </h3>
              <Card className="p-2 bg-background border-border">
                <div style={{ lineHeight: '1', marginBottom: '0px' }} className="font-semibold text-sm text-foreground">Master of Business Administration (MBA), Operations and Technology Management</div>
                <div style={{ lineHeight: '1', marginTop: '-3px', marginBottom: '0px' }} className="text-sm text-muted-foreground">University of Wisconsin-Madison</div>
                <div style={{ lineHeight: '1', marginTop: '-3px', marginBottom: '2px' }} className="text-sm text-muted-foreground">Graduated May 2025</div>
                <div className="space-y-0">
                  <div className="text-xs text-primary flex items-center gap-1">
                    <span>•</span>
                    <span>Certificate in Entrepreneurship</span>
                  </div>
                  <div className="text-xs text-primary flex items-center gap-1">
                    <span>•</span>
                    <span>President, Entrepreneurship Club</span>
                  </div>
                </div>
              </Card>
              <Card className="p-2 bg-background border-border">
                <div style={{ lineHeight: '1', marginBottom: '0px' }} className="font-semibold text-sm text-foreground">Bachelor of Technology in Information Technology</div>
                <div style={{ lineHeight: '1', marginTop: '-3px', marginBottom: '0px' }} className="text-sm text-muted-foreground">West Bengal University of Technology</div>
                <div style={{ lineHeight: '1', marginTop: '-3px' }} className="text-sm text-muted-foreground">Graduated 2016</div>
              </Card>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Certified Scrum Product Owner (CSPO)</Badge>
                <Badge variant="secondary">Certified ScrumMaster (CSM)</Badge>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="expertise" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Core Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Specialized capabilities that drive product excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* GTM Strategy */}
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="mb-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/bETHshKwMXfMuTQP.png" 
                  alt="GTM Strategy" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                GTM Strategy & Operations
              </h3>
              <p className="text-muted-foreground mb-4">
                Led research and stakeholder interviews behind a successful $250K financial literacy grant, and built a 20+ member advisory board spanning tribal nations, financial institutions, and education to guide strategy and rollout.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>RICE prioritization & GTM operations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Vendor sourcing & negotiation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Product-led growth (PLG)</span>
                </li>
              </ul>
            </Card>

            {/* Product Operations */}
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="mb-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/DJUsSKmqLNFKzlZZ.png" 
                  alt="Product Operations" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Product Operations
              </h3>
              <p className="text-muted-foreground mb-4">
                Reduced KYC/AML verification time from 48 hours to under 30 seconds and cut incident acknowledgment to under 5 minutes through Slack-integrated monitoring, contributing to a 45% drop in user churn.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Process design, SOPs & incident response</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Reconciliation & audit processes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Onboarding operations & KPI/OKR tracking</span>
                </li>
              </ul>
            </Card>

            {/* AI & Automation */}
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="mb-6">
                <img
                  src="/images/ai-automation.png"
                  alt="AI & Automation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                AI & Automation
              </h3>
              <p className="text-muted-foreground mb-4">
                Built AI-powered workflows with Claude that cut operational overhead by 60% — automating grant research, application drafting, and quantitative budget analysis for a non-profit financial literacy platform.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Claude, Claude Code & Cursor CLI</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Prompt & context engineering, LLM evaluation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>AI-native & human-in-loop workflows</span>
                </li>
              </ul>
            </Card>

            {/* Data-Driven Leadership */}
            <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
              <div className="mb-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/FrqqoPKLVUaXLbUC.png" 
                  alt="Data-Driven Leadership" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Data-Driven Leadership
              </h3>
              <p className="text-muted-foreground mb-4">
                Owned the product lifecycle for an AI-driven portfolio rebalancing feature and BitGo custody integration, defining risk profiles from data (Sharpe ratio, volatility) to simplify UX for 70,000+ users managing $3M+ in assets.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>SQL, Tableau & MixPanel</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Unit economics (LTV/CAC) & KPI tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Custody integration & risk modeling</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Building products that drive measurable impact
            </p>
          </div>

          <Tabs defaultValue="professional" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-10">
              <TabsList>
                <TabsTrigger value="professional" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Professional Experience</TabsTrigger>
                <TabsTrigger value="internship" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Experiential Learning</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="professional">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Asset Builders */}
                <Collapsible open={expandedExperience === 'asset-builders'} onOpenChange={(open) => setExpandedExperience(open ? 'asset-builders' : null)}>
                  <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
                    <div className="text-left">
                      <h3 className="text-2xl font-semibold text-foreground mb-1" style={{ fontFamily: "'Lora', serif" }}>
                        Product Operations Manager
                      </h3>
                      <div className="text-lg text-primary font-medium">Asset Builders of America (Edtech)</div>
                      <div className="text-sm text-muted-foreground mt-2">06/2025 - Present</div>
                      <a href="/case-studies?study=elevate" className="text-sm font-semibold mt-3 inline-block" style={{ color: '#2D5016' }}>
                        Access Case Study →
                      </a>
                    </div>
                    <ul className="space-y-3 mt-6 text-muted-foreground">
                      <li className="flex gap-3">
                        <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Built <strong className="text-foreground">AI-powered workflows</strong> that cut operational overhead <strong className="text-foreground">60%</strong> by automating grant research, application drafting, and budget generation</span>
                      </li>
                      <li className="flex gap-3">
                        <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Led research behind a successful <strong className="text-foreground">$250K financial literacy grant</strong> and built a 20+ member advisory group spanning tribal nations, financial institutions, and education</span>
                      </li>
                    </ul>
                    <CollapsibleTrigger asChild>
                      <p className="mt-6 font-bold cursor-pointer text-left" style={{ color: '#2D5016' }}>
                        Learn More About This Experience
                      </p>
                    </CollapsibleTrigger>
                  </Card>
                  <CollapsibleContent className="mt-2">
                    <Card className="p-6 bg-background border border-primary/20">
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Leading product operations for ELEVATE Wisconsin, a financial literacy platform designed to empower K-12 students and school staff in rural and tribal communities with personal finance knowledge. Responsible for AI-driven process automation, advisory board development, grant strategy, and scaling adoption across school districts and government systems.
                        </p>
                        <div>
                          <p className="font-medium text-foreground mb-2">Key Achievements:</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Built AI-powered workflows that cut operational overhead 60% by automating grant research (surfacing top 10 matches with overviews and contacts), drafting grant applications, and generating budgets from historical spending analysis</li>
                            <li>• Scaled two financial literacy training initiatives — Teacher Training and the Financial Wellness Champion Training — to a projected reach of 8,000+ individuals across 20+ school districts with AI-driven onboarding</li>
                            <li>• Led research and stakeholder interviews behind a successful $250K financial literacy grant and built a 20+ member advisory group spanning tribal nations, financial institutions, and education to guide strategy and provide LORs</li>
                            <li>• Spearheading expansion of the Financial Wellness Champion Training to state, county, local government, colleges, and university systems — scoping rollout across 1,500+ departments in Wisconsin</li>
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm">
                            <strong>See the case study:</strong> <a href="#projects" className="text-primary hover:underline">ELEVATE Wisconsin Financial Wellness Program →</a>
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                {/* Cryptosmartlife */}
                <Collapsible open={expandedExperience === 'cryptosmartlife'} onOpenChange={(open) => setExpandedExperience(open ? 'cryptosmartlife' : null)}>
                  <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
                    <div className="text-left">
                      <h3 className="text-2xl font-semibold text-foreground mb-1" style={{ fontFamily: "'Lora', serif" }}>
                        Product Operations Manager
                      </h3>
                      <div className="text-lg text-primary font-medium">Cryptosmartlife (Fintech)</div>
                      <div className="text-sm text-muted-foreground mt-2">04/2021 - 08/2023</div>
                      <a href="/case-studies?study=crypto" className="text-sm font-semibold mt-3 inline-block" style={{ color: '#2D5016' }}>
                        Access Case Study →
                      </a>
                    </div>
                    <ul className="space-y-3 mt-6 text-muted-foreground">
                      <li className="flex gap-3">
                        <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Reduced <strong className="text-foreground">KYC/AML verification time from 48 hours to under 30 seconds</strong> via vendor partnership, lifting CSAT from 4.1 to 4.85</span>
                      </li>
                      <li className="flex gap-3">
                        <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Owned product lifecycle for AI-driven portfolio rebalancing and BitGo custody integration, managing <strong className="text-foreground">$3M+ in assets</strong> for 70,000+ users</span>
                      </li>
                    </ul>
                    <CollapsibleTrigger asChild>
                      <p className="mt-6 font-bold cursor-pointer text-left" style={{ color: '#2D5016' }}>
                        Learn More About This Experience
                      </p>
                    </CollapsibleTrigger>
                  </Card>
                  <CollapsibleContent className="mt-2">
                    <Card className="p-6 bg-background border border-primary/20">
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Led end-to-end product operations for a cryptocurrency investment platform managing $3M+ in assets. Responsible for vendor sourcing, incident response systems, reconciliation processes, and the product lifecycle for AI-driven portfolio and custody features.
                        </p>
                        <div>
                          <p className="font-medium text-foreground mb-2">Key Achievements:</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Reduced KYC/AML verification time from 48 hours to under 30 seconds by sourcing, negotiating, and implementing a vendor partnership that automated the KYC/AML process, improving onboarding completion and lifting CSAT from 4.1 to 4.85</li>
                            <li>• Built a Slack-integrated API monitoring system that cut incident acknowledgment to under 5 minutes, contributing to a 45% drop in user churn alongside KYC/AML success rate improvements</li>
                            <li>• Identified a 0.2% fee discrepancy across all transactions during quarterly reconciliation, traced the root-cause fee logic bug, and implemented automated weekly reconciliation to prevent recurrence</li>
                            <li>• Owned the product lifecycle for an AI-driven portfolio rebalancing feature and BitGo custody integration — defining three risk profiles from data (Sharpe ratio, volatility) and simplifying the UX for 70,000+ users with $3M in assets</li>
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm">
                            <strong>See the full case study:</strong> <a href="#projects" className="text-primary hover:underline">CryptoSmartlife Featured Case Study →</a>
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                {/* DCEX */}
                <Card className="p-6 bg-background border-border">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-foreground mb-1" style={{ fontFamily: "'Lora', serif" }}>
                      Product Operations Lead
                    </h3>
                    <div className="text-lg text-primary font-medium">DCEX (Fintech)</div>
                    <div className="text-sm text-muted-foreground mt-2">01/2019 - 04/2021</div>
                  </div>
                  <ul className="space-y-3 mt-6 text-muted-foreground">
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Launched crypto exchange and onboarded <strong className="text-foreground">5,000+ verified customers in 3 months</strong> by designing mobile-first KYC/AML verification, coordinating dev and QA for regulatory compliance, and achieving near-defect-free releases</span>
                    </li>
                    <li className="flex gap-3">
                      <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Scaled crypto token listings from <strong className="text-foreground">20 to 100</strong> by standardizing API schemas and mapping with liquidity providers, reducing listing time from a week to 1 day</span>
                    </li>
                  </ul>
                </Card>

                {/* TCS */}
                <Card className="p-6 bg-background border-border">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-foreground mb-1" style={{ fontFamily: "'Lora', serif" }}>
                      System Engineer
                    </h3>
                    <div className="text-lg text-primary font-medium">Tata Consultancy Services (Consulting)</div>
                    <div className="text-sm text-muted-foreground mt-2">08/2016 - 11/2018</div>
                  </div>
                  <ul className="space-y-3 mt-6 text-muted-foreground">
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Redesigned <strong className="text-foreground">Pepsico's support architecture</strong>, eliminating redundancy while maintaining quality standards and improving system performance by <strong className="text-foreground">25%</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Trained <strong className="text-foreground">20+ team members</strong> and built a troubleshooting knowledge base and guidebook for technical support tickets, reducing SLA breach incidents by <strong className="text-foreground">30%</strong></span>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="internship">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Google */}
                <Collapsible open={expandedExperience === 'google'} onOpenChange={(open) => setExpandedExperience(open ? 'google' : null)}>
                  <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
                    <div className="text-left">
                      <h3 className="text-2xl font-semibold text-foreground mb-1" style={{ fontFamily: "'Lora', serif" }}>
                        Product Manager (Industry Project)
                      </h3>
                      <div className="text-lg text-primary font-medium">Google</div>
                      <div className="text-sm text-muted-foreground mt-2">09/2024 - 12/2024</div>
                      <a href="/case-studies?study=google" className="text-sm font-semibold mt-3 inline-block" style={{ color: '#2D5016' }}>
                        Access Case Study →
                      </a>
                    </div>
                    <ul className="space-y-3 mt-6 text-muted-foreground">
                      <li className="flex gap-3">
                        <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Achieved <strong className="text-foreground">90% faster SQL query execution</strong> using AI-powered Gemini optimization engine tested on 100+ queries including 22 TPC-H benchmarks</span>
                      </li>
                      <li className="flex gap-3">
                        <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Led cross-functional team of <strong className="text-foreground">5 engineers and designers</strong>, project recognised in an internal Google R&D reviews and recommended for enterprise deployment consideration</span>
                      </li>
                    </ul>
                    <CollapsibleTrigger asChild>
                      <p className="mt-6 font-bold cursor-pointer text-left" style={{ color: '#2D5016' }}>
                        Learn More About This Experience
                      </p>
                    </CollapsibleTrigger>
                  </Card>
                  <CollapsibleContent className="mt-2">
                    <Card className="p-6 bg-background border border-primary/20">
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Led product development for an AI-powered SQL query optimization engine designed to accelerate Google Ads infrastructure. Managed a team of 5 engineers and designers to build, test, and validate the platform using Gemini AI for query optimization.
                        </p>
                        <div>
                          <p className="font-medium text-foreground mb-2">Key Achievements:</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Designed AI-powered SQL Query Optimization Engine using Gemini with sophisticated prompt engineering</li>
                            <li>• Tested on 100+ SQL queries including 22 TPC-H benchmarks to validate performance improvements</li>
                            <li>• Achieved 90% faster query execution for optimized queries, reducing computational costs</li>
                            <li>• Led cross-functional team of 5 engineers and designers</li>
                            <li>• Project recognised in an internal Google R&D review and recommended for enterprise deployment consideration</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                {/* Smart Charging Technology */}
                <Collapsible open={expandedExperience === 'smart-charging'} onOpenChange={(open) => setExpandedExperience(open ? 'smart-charging' : null)}>
                  <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
                    <div className="text-left">
                      <h3 className="text-2xl font-semibold text-foreground mb-1" style={{ fontFamily: "'Lora', serif" }}>
                        Product Manager (IoT Intern)
                      </h3>
                      <div className="text-lg text-primary font-medium">Smart Charging Technology</div>
                      <div className="text-sm text-muted-foreground mt-2">06/2024 - 08/2024</div>
                    </div>
                    <ul className="space-y-3 mt-6 text-muted-foreground">
                      <li className="flex gap-3">
                        <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Secured <strong className="text-foreground">5 enterprise clients</strong> through structured discovery sessions with 30+ CXOs across Europe and Central America</span>
                      </li>
                      <li className="flex gap-3">
                        <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Identified <strong className="text-foreground">60+ high-fit prospects</strong> by analyzing 75+ companies and validating strong product-market fit</span>
                      </li>
                    </ul>
                    <CollapsibleTrigger asChild>
                      <p className="mt-6 font-bold cursor-pointer text-left" style={{ color: '#2D5016' }}>
                        Learn More About This Experience
                      </p>
                    </CollapsibleTrigger>
                  </Card>
                  <CollapsibleContent className="mt-2">
                    <Card className="p-6 bg-background border border-primary/20">
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Drove early-stage customer discovery and GTM strategy for an IoT-based smart charging platform. Conducted structured interviews with enterprise decision-makers across Europe and Central America to validate product-market fit and identify high-potential customers.
                        </p>
                        <div>
                          <p className="font-medium text-foreground mb-2">Key Achievements:</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Secured 5 enterprise clients through structured discovery sessions with 30+ CXOs</li>
                            <li>• Identified 60+ high-fit prospects by analyzing 75+ companies and mapping pain points</li>
                            <li>• Validated strong product-market fit across Europe and Central America</li>
                            <li>• Shaped GTM strategy and product roadmap based on customer insights</li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Case Studies Carousel */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Explore my work across fintech, edtech, and AI domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* ELEVATE Wisconsin */}
            <a href="/case-studies?study=elevate" className="group">
              <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden bg-muted">
                  <img 
                    src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/GgKTm1qyairN9T4pBukRHH-img-1_1771974683000_na1fn_ZWxldmF0ZS13aXNjb25zaW4tZmluYW5jaWFsLWxpdGVyYWN5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94L0dnS1RtMXF5YWlyTjlUNHBCdWtSSEgtaW1nLTFfMTc3MTk3NDY4MzAwMF9uYTFmbl9aV3hsZG1GMFpTMTNhWE5qYjI1emFXNHRabWx1WVc1amFXRnNMV3hwZEdWeVlXTjUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eF0ECkMPdQMgGNzAuY2YbloMbtBz3K-JS-D326T9y-FAfoTBZBfnbs6u9OtmYu~FYAGWKuCdozzAww~InUjr3EpOzwrAc0hBCgQqYxXkkvjEsJ6t744KCG7m04NAxVGuqgKHEHnXbgd7UDTQ1tcCQOHMS1hEInrmuVLxiJW4mnyU7u~kNFGOFMvLF-EaGW88LKrAoiLktrt1zPjkrOu5PUUU7fpapyK~UDTx0wDainMxRH27giU0Nl~LRjt1yf46PN4jbqMjdQArbalrp0xZixFqvURh8ZvTKdhroEg-HTyOywlZDEUce1SSKB1ahNbPFa8LKXt0Rz~tzkqbiojreg__"
                    alt="ELEVATE Wisconsin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                    ELEVATE Wisconsin
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Financial wellness program for K-12 students in rural and tribal communities
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </a>

            {/* Google Query Optimization */}
            <a href="/case-studies?study=google" className="group">
              <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden bg-muted">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/axLxiyGLsqysyBuw.png"
                    alt="Google Query Optimization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                    AI Query Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gemini-powered SQL optimization achieving 90% faster execution times
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </a>

            {/* CryptoSmartlife */}
            <a href="/case-studies?study=crypto" className="group">
              <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden bg-muted">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/DfPoTklYlRvyXrHM.png"
                    alt="CryptoSmartlife"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Lora', serif" }}>
                    CryptoSmartlife
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fintech platform managing $3M+ in assets with institutional-grade compliance
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>



      {/* Blog Section */}
      <section id="insights" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Insights & Perspectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Thought leadership on product strategy, fintech operations, and Web3 innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Article 1 */}
            <a href="/insights?article=gtm-strategy" className="group">
              <div className="rounded-lg overflow-hidden mb-4 h-48 bg-card">
                <img src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/7rBssow89K9kCRUu6m8irb-img-1_1771961696000_na1fn_YXJ0aWNsZS1ndG0tc3RyYXRlZ3k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94LzdyQnNzb3c4OUs5a0NSVXU2bThpcmItaW1nLTFfMTc3MTk2MTY5NjAwMF9uYTFmbl9ZWEowYVdOc1pTMW5kRzB0YzNSeVlYUmxaM2sucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VLgpGzLmJ7OGqx4ZzDz89aMraC9uky9tT7e-gYZ~QSRHC1I~7jUrWagPiuF5Yd2mXUNLIrHjHjpF~DneMj6~a0Kin8j3EL72Y7W1ib1KcX~PaSdjH9thXVPl5WuodYbViXxl2cQzU1NPQdFwJA5ihkll21i-FhQhUM5uvGU47JUX-JC3zFR4GzjiXWMrZ8v6h0rHNgf~741DGlIgLLvdiJUr4~8K244sx9CO5XcIJURvtU9T-2hBNihpYI3fsje7Xne0eI3D1AqABiKbxHk606dER890XNE-CAKh77v1~Am-x3IO9TPdaif9dc44jqSIv9qoWxfqoYsVwmPJS~hYQQ__" alt="EdTech GTM Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <Badge variant="secondary" className="mb-3">GTM Strategy</Badge>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                EdTech GTM Strategy
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                Advisory boards, structured pilots, and multiplier effects.
              </p>
              <div className="text-xs text-muted-foreground">8 min read</div>
            </a>

            {/* Article 2 */}
            <a href="/insights?article=fintech-operations" className="group">
              <div className="rounded-lg overflow-hidden mb-4 h-48 bg-card">
                <img src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/7rBssow89K9kCRUu6m8irb-img-2_1771961696000_na1fn_YXJ0aWNsZS1maW50ZWNoLW9wcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94LzdyQnNzb3c4OUs5a0NSVXU2bThpcmItaW1nLTJfMTc3MTk2MTY5NjAwMF9uYTFmbl9ZWEowYVdOc1pTMW1hVzUwWldOb0xXOXdjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bi64f5apdS2BVWeGKAC9oyvii4--4Dd2xyNDqsmIK2ygriSCaii0paduESDz4zfe-nUEQFpl19tSmz5ibhRTFOk7AfLWfqwCo1m9KW4jPv3t5R96d~t7WBxkREVbmNoYuLPsmccbT-6rFpMrqGu0HQPIciO-ZSTu~GBFqMdtIgXxXxMz9SFM6-SE9u4-yOn9qaGpzGEcwbYhl50Km8ZsiyEUobJKYIMmdKHhFYjioEId6Ff4A956xdY8mbK3zsyW1SLcVfFbZEypi0gpf3tPT4BBtYsFw6uA1JlodaM193FhRl-RmNvgi15cjCSDNJSHlQ8DSMdV9Buybg33k7KB1g__" alt="Fintech Operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <Badge variant="secondary" className="mb-3">Fintech Operations</Badge>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                Operational Excellence
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                45% churn reduction through UX, resilience, and compliance.
              </p>
              <div className="text-xs text-muted-foreground">10 min read</div>
            </a>

            {/* Article 3 */}
            <a href="/insights?article=web3-innovation" className="group">
              <div className="rounded-lg overflow-hidden mb-4 h-48 bg-card">
                <img src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/7rBssow89K9kCRUu6m8irb-img-3_1771961695000_na1fn_YXJ0aWNsZS13ZWIz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94LzdyQnNzb3c4OUs5a0NSVXU2bThpcmItaW1nLTNfMTc3MTk2MTY5NTAwMF9uYTFmbl9ZWEowYVdOc1pTMTNaV0l6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n6he7f6~-hRjQ2WSKi5rVILc75EFWVAeNmqLziXM1NzmWMI02m9AznS4bd8s5CxFPayBJfIgPyHkRD-VYbS0RjSh9dcbcdOEP5642gWgk~lctshZfKPXmmRrNbK34q6rWaTTigRYUl89HGVemxMM7tYUlO0AA6MzOu8CamfkevfC1W6d1-iBPyG3FHqmHaHDb8sxaacVZkp778ctuUuGsRQuTZaYgJFYqNl-ij1Hp8dhTej190iaIMga9ceSTosi18yFgC5phv4Zb5k~FUk3mcj0Ru~7Kh71mRTRE4Y69vrUMlwe42itdJms8UPoOylKmOScpdQTN6yi6W1BvnJlFg__" alt="Web3 Innovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <Badge variant="secondary" className="mb-3">Web3 & Blockchain</Badge>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                Web3 Innovation
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                Programmable money, global access, emerging markets.
              </p>
              <div className="text-xs text-muted-foreground">9 min read</div>
            </a>

            {/* Article 4 */}
            <a href="/insights?article=fintech-compliance" className="group">
              <div className="rounded-lg overflow-hidden mb-4 h-48 bg-card">
                <img src="https://private-us-east-1.manuscdn.com/sessionFile/ELzDsBUWidNcCJbqpfduYD/sandbox/7rBssow89K9kCRUu6m8irb-img-4_1771961691000_na1fn_YXJ0aWNsZS1jb21wbGlhbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRUx6RHNCVVdpZE5jQ0picXBmZHVZRC9zYW5kYm94LzdyQnNzb3c4OUs5a0NSVXU2bThpcmItaW1nLTRfMTc3MTk2MTY5MTAwMF9uYTFmbl9ZWEowYVdOc1pTMWpiMjF3YkdsaGJtTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=umSu86nVQV5or3eBTJteSHcEjQMMxCO5YcLJ-kPwBuMM5OYl47meS2K2crpl1IsKRvpefmD0uQEgQF~9BWOJ27LEIh-015TQjWfEjTcNKY6sWNE4p20S3y21Vp7jYYx0VNWGVD9QuRjCfpvnmqzESOuWU729hSBKMtxI~FjCzMNW2eQ7a9XwjBuJ9izhAmSnPGcq4V6sAShBLFLxuJlSUsxTzYFLc5ithTASy5RtujJ6TpJZtpswyGZ~2nbTSgeucIQ7Fb3jsi-t9HFL4S5MbW~Uq5cx7TRwZgo-JRoenNWWXlVqf7SoSSTwo0z5CGc6dsSxgNspoffH-zCsH8o0ug__" alt="Fintech Compliance" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <Badge variant="secondary" className="mb-3">Compliance & Regulation</Badge>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                Compliance as Advantage
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                KYC/AML automation, zero violations, trust builder.
              </p>
              <div className="text-xs text-muted-foreground">7 min read</div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Skills & Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Comprehensive toolkit for modern product management
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Product Operations
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Process Design & SOPs</Badge>
                <Badge variant="secondary">Vendor Sourcing & Negotiation</Badge>
                <Badge variant="secondary">Incident Response Systems</Badge>
                <Badge variant="secondary">Onboarding Operations</Badge>
                <Badge variant="secondary">Reconciliation & Audit Process</Badge>
                <Badge variant="secondary">GTM Strategy & Operations</Badge>
                <Badge variant="secondary">Product-Led Growth (PLG)</Badge>
                <Badge variant="secondary">RICE Prioritization</Badge>
                <Badge variant="secondary">Jira & Confluence</Badge>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                AI & Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Claude</Badge>
                <Badge variant="secondary">Claude Code</Badge>
                <Badge variant="secondary">Cursor CLI</Badge>
                <Badge variant="secondary">AI-Native & Human-in-Loop Workflows</Badge>
                <Badge variant="secondary">Prompt & Context Engineering</Badge>
                <Badge variant="secondary">LLM Evaluation</Badge>
                <Badge variant="secondary">Requirement Engineering</Badge>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Data & Reporting
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Tableau</Badge>
                <Badge variant="secondary">MixPanel</Badge>
                <Badge variant="secondary">Unit Economics (LTV/CAC)</Badge>
                <Badge variant="secondary">KPI/OKR Tracking</Badge>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Fintech & Compliance
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">API Lifecycle Management</Badge>
                <Badge variant="secondary">KYC/AML Operations</Badge>
                <Badge variant="secondary">Custody Integration</Badge>
                <Badge variant="secondary">Payment Gateway Operations</Badge>
                <Badge variant="secondary">Ledgering & Reconciliation</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-card overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663314450255/VgUSCBBCTYusZxNJ.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-12" style={{ fontFamily: "'Lora', serif" }}>
              Open to new opportunities and collaborations
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <a
                href="mailto:anant.gyan@outlook.com"
                className="flex items-center gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">anant.gyan@outlook.com</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/anantgyan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">linkedin.com/in/anantgyan</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
              </a>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="mailto:anant.gyan@outlook.com">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Anant Gyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

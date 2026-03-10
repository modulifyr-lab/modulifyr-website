import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  Code2,
  Layers,
  Settings,
  RefreshCw,
  Search,
  PenTool,
  Cpu,
  Globe,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
                Custom Software Systems <span className="text-brand-orange">Built to Scale</span> With Your Organization
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Modulifyr designs and builds modular software systems for organizations that require flexibility, scalability, and long-term reliability. We partner with companies worldwide and in Birtamode, Nepal to architect and deliver software tailored to their operations.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/request-proposal">
                  <Button size="lg">Request Proposal</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Book Discovery Call</Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-muted mt-4">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-teal" /> NDA available</span>
                <span className="w-1 h-1 rounded-full bg-border-base" />
                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-brand-teal" /> Global collaboration</span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/*
                FIX: Removed animate-pulse and animate-bounce.
                CSS animations on page load contribute to TBT (Total Blocking Time)
                and cause continuous repaints that hurt performance scores.
                Replaced with static decorative elements — visually similar, zero perf cost.
              */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-orange/10 rounded-2xl" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-navy/5 rounded-[40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-background shadow-2xl rounded-3xl p-8 border border-border-base flex flex-col gap-6">
                  <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center">
                    <Layers className="text-white w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-border-base rounded-full" />
                    <div className="h-4 w-1/2 bg-border-base rounded-full opacity-60" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-auto">
                    <div className="h-2 bg-brand-teal/40 rounded-full" />
                    <div className="h-2 bg-brand-gold/40 rounded-full" />
                    <div className="h-2 bg-brand-orange/40 rounded-full" />
                  </div>
                </div>
                {/* Floating modules — static, no animation */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-brand-navy rounded-2xl flex items-center justify-center shadow-xl">
                  <Cpu className="text-white w-10 h-10" />
                </div>
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-xl">
                  <Globe className="text-brand-navy w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POSITIONING SECTION */}
      <section className="py-24 bg-bg-secondary">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Built for organizations that need systems that evolve — not generic software.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Many businesses rely on rigid software that cannot adapt as their operations grow. Modulifyr takes a different approach. We design systems using modular architecture so that new functionality, integrations, and workflows can evolve over time without rebuilding the entire platform.
            </p>
            <p className="text-brand-orange font-semibold text-lg mt-4 italic">
              "Our work focuses on building long-term digital infrastructure rather than short-term software products."
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (SERVICES) */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Our Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">What We Do</h2>
              <p className="text-lg text-text-alt">Engineering tailored solutions for complex operational requirements.</p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="group">
                Explore All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="text-brand-orange w-7 h-7" />
              </div>
              <CardTitle>Custom Software Development</CardTitle>
              <CardDescription>
                Design and development of tailored systems aligned with your workflows, data structures, and operational processes.
              </CardDescription>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="text-brand-navy w-7 h-7" />
              </div>
              <CardTitle>System Architecture</CardTitle>
              <CardDescription>
                Design scalable architectures that allow software to evolve as your organization grows.
              </CardDescription>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Settings className="text-brand-teal w-7 h-7" />
              </div>
              <CardTitle>Integrations & Automation</CardTitle>
              <CardDescription>
                Connect internal tools, APIs, databases, and third-party platforms into unified workflows.
              </CardDescription>
            </Card>

            <Card>
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="text-brand-gold w-7 h-7" />
              </div>
              <CardTitle>Modernization & Rebuilds</CardTitle>
              <CardDescription>
                Replace legacy systems with modern, scalable platforms built for future expansion.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (PROCESS) */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">How We Work</h2>
            <p className="text-text-muted text-lg">A systematic, engineering-first approach to delivering modular systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: Search, title: "Discovery", desc: "Understanding operations, workflows, and requirements." },
              { icon: PenTool, title: "Architecture", desc: "Designing system structure, modules, and roadmap." },
              { icon: Code2, title: "Development", desc: "Building secure, maintainable systems tailored to you." },
              { icon: Globe, title: "Deployment", desc: "Cloud deployment, infrastructure, and testing." },
              { icon: RefreshCw, title: "Support", desc: "Maintenance, upgrades, and continuous improvements." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-6 group">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-orange/30 flex items-center justify-center bg-brand-navy group-hover:border-brand-orange transition-colors">
                    <step.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-10 left-[100%] w-[calc(100%-40px)] h-[2px] bg-brand-orange/30" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </section>

      {/* 5. INDUSTRIES */}
      <section className="py-24 bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-text-alt text-lg">Our modular architecture approach adapts to the operational requirements of different industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Education", "Commerce", "Healthcare", "IT", "Retail", "Services"].map((item) => (
              <div key={item} className="bg-background p-6 rounded-xl border border-border-base text-center hover:border-brand-orange transition-colors cursor-default">
                <span className="font-heading font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECT */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border-base group">
              {/*
                FIX: Added priority prop — this is the LCP element on the homepage.
                Without priority, Next.js lazy-loads it, making Google wait to measure LCP.
                Also removed the oversized ?w=2426 from the Unsplash URL — Next.js image
                optimization handles resizing, no need to pre-size the source URL.
                Added sizes so Next.js serves appropriately sized image per breakpoint.
              */}
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="The Planning Bord — ERP System built by Modulifyr"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent flex items-end p-8">
                <div className="flex flex-col gap-2">
                  <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">Featured Case Study</span>
                  <h3 className="text-2xl font-heading font-bold text-white">The Planning Bord</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">Selected Work</h2>
              <p className="text-lg text-text-alt leading-relaxed">
                <span className="font-bold text-foreground">The Planning Bord</span> is a comprehensive ERP system that brings inventory, HR, projects, finance, and automation into one powerful platform. Built for modern teams who move fast.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vercel", "Modern UI Architecture"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-bold rounded-full">{tag}</span>
                ))}
              </div>
              <Button className="w-fit">View Project Case Study</Button>
              <p className="text-sm text-text-muted italic">Additional enterprise systems available under NDA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 bg-brand-orange text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold">Planning a system for your organization?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Whether you're building new digital infrastructure or replacing legacy systems, Modulifyr can help design and build a scalable solution tailored to your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/request-proposal">
                <Button size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">Request Proposal</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Schedule Discovery Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

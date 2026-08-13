import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import GradientMesh from "@/components/ui/GradientMesh";
import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";
import HomeNetworkWrapper from "@/components/ui/HomeNetworkWrapper";

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
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Modulifyr",
    "url": "https://modulifyr.com",
    "logo": "https://modulifyr.com/company-logo.png",
    "sameAs": [
      "https://www.instagram.com/modulifyr/",
      "https://x.com/modulifyr",
      "https://web.facebook.com/profile.php?id=61591920842310",
      "https://www.linkedin.com/company/modulifyr/",
      "https://clutch.co/profile/modulifyr",
      "https://github.com/Modulifyr",
      "https://themanifest.com/company/modulifyr",
      "https://rocketreach.co/modulifyr-profile_b6410cbccbf776ff",
      "https://www.trustpilot.com/review/modulifyr.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gauri Tol, Ward 1",
      "addressLocality": "Birtamode",
      "addressRegion": "Jhapa",
      "addressCountry": "NP"
    }
  };

  return (
    <div className="flex w-full flex-col">
      {/* Homepage specific Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="bg-bg-light relative overflow-hidden py-16 md:py-24">
        <GradientMesh />
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex max-w-2xl flex-col gap-8">
              <h1 className="font-heading text-foreground text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
                2026 Custom Software Systems{" "}
                <span className="text-brand-orange">Built to Scale</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed md:text-xl">
                Modulifyr builds custom software systems for growing organizations. Our team helps
                companies in Nepal and worldwide replace rigid tools with scalable ERP platforms,
                workflow automation, integrations, and modern digital infrastructure.
              </p>
              <div className="border-border-base bg-background/80 text-text-muted flex flex-wrap gap-x-4 gap-y-2 rounded-2xl border px-4 py-3 text-sm">
                <span>By Rijan Mainali, Founder &amp; Lead Engineer</span>
                <span>Published Jan 1, 2025</span>
                <span>Updated Jul 23, 2026</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-4">
                <Link href="/request-proposal">
                  <Magnetic radius={8}>
                    <Button size="lg">Request Proposal</Button>
                  </Magnetic>
                </Link>
                <Link href="/contact">
                  <Magnetic radius={8}>
                    <Button variant="outline" size="lg">
                      Book Discovery Call
                    </Button>
                  </Magnetic>
                </Link>
              </div>
              <div className="text-text-muted mt-4 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="text-brand-teal h-4 w-4" /> NDA available
                </span>
                <span className="bg-border-base h-1 w-1 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <Globe className="text-brand-teal h-4 w-4" /> Global collaboration
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <HomeNetworkWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* 2. POSITIONING SECTION */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom text-center">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              <h2 className="font-heading text-foreground text-3xl font-bold md:text-5xl">
                Built for organizations that need systems that evolve — not generic software.
              </h2>
              <p className="text-text-secondary text-xl leading-relaxed">
                Many businesses rely on rigid software that cannot adapt as work changes. Modulifyr
                takes a different approach. We design modular systems so teams can add features,
                integrations, and workflows over time. As a result, your platform can grow without a
                full rebuild.
              </p>
              <p className="text-brand-orange mt-4 text-lg font-semibold italic">
                "We build long-term digital infrastructure, not short-term software products."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY TICKER */}
      <Marquee
        items={[
          "ERP Systems",
          "Workflow Automation",
          "API Integrations",
          "Modular Architecture",
          "Custom Software",
          "Legacy Rebuilds"
        ]}
        speed={25}
      />

      {/* 3. WHAT WE DO (SERVICES) */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="flex max-w-2xl flex-col gap-4">
                <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">
                  Our Capabilities
                </span>
                <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
                  What We Do
                </h2>
                <p className="text-text-alt text-lg">
                  Engineering tailored solutions for complex operational requirements.
                </p>
              </div>
              <Link href="/services">
                <Button variant="outline" className="group">
                  Explore All Services{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <Card>
                <div className="bg-brand-orange/10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Code2 className="text-brand-orange h-7 w-7" />
                </div>
                <CardTitle>Custom Software Development</CardTitle>
                <CardDescription>
                  We design and build tailored systems that match your workflows, data, and daily
                  operations.
                </CardDescription>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card>
                <div className="bg-brand-navy/10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Layers className="text-brand-navy h-7 w-7" />
                </div>
                <CardTitle>System Architecture</CardTitle>
                <CardDescription>
                  We design scalable architecture so your software can evolve as your organization
                  grows.
                </CardDescription>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card>
                <div className="bg-brand-teal/10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Settings className="text-brand-teal h-7 w-7" />
                </div>
                <CardTitle>Integrations & Automation</CardTitle>
                <CardDescription>
                  We connect internal tools, APIs, databases, and third-party platforms into unified
                  workflows.
                </CardDescription>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card>
                <div className="bg-brand-gold/10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                  <RefreshCw className="text-brand-gold h-7 w-7" />
                </div>
                <CardTitle>Modernization & Rebuilds</CardTitle>
                <CardDescription>
                  We replace legacy systems with modern platforms that are easier to maintain and
                  expand.
                </CardDescription>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (PROCESS) */}
      <section className="bg-brand-navy relative overflow-hidden py-24 text-white">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2 className="font-heading mb-6 text-4xl font-bold md:text-5xl">How We Work</h2>
              <p className="text-text-muted text-lg">
                A systematic, engineering-first approach to delivering modular systems.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {[
              {
                icon: Search,
                title: "Discovery",
                desc: "Understanding operations, workflows, and requirements.",
              },
              {
                icon: PenTool,
                title: "Architecture",
                desc: "Designing system structure, modules, and roadmap.",
              },
              {
                icon: Code2,
                title: "Development",
                desc: "Building secure, maintainable systems tailored to you.",
              },
              {
                icon: Globe,
                title: "Deployment",
                desc: "Cloud deployment, infrastructure, and testing.",
              },
              {
                icon: RefreshCw,
                title: "Support",
                desc: "Maintenance, upgrades, and continuous improvements.",
              },
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="group flex flex-col items-center gap-6 text-center">
                  <div className="relative">
                    <div className="border-brand-orange/30 bg-brand-navy group-hover:border-brand-orange flex h-20 w-20 items-center justify-center rounded-full border-2 transition-colors">
                      <step.icon className="text-brand-orange h-8 w-8" />
                    </div>
                    {idx < 4 && (
                      <div className="bg-brand-orange/30 absolute top-10 left-[100%] hidden h-[2px] w-[calc(100%-40px)] md:block" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-brand-teal/5 absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </section>

      {/* 5. INDUSTRIES */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <Reveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-5xl">
                Industries We Serve
              </h2>
              <p className="text-text-alt text-lg">
                Our modular approach adapts to the daily needs of teams in different industries.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {["Education", "Commerce", "Healthcare", "IT", "Retail", "Services"].map((item) => (
                <div
                  key={item}
                  className="bg-background border-border-base hover:border-brand-orange cursor-default rounded-xl border p-6 text-center transition-colors"
                >
                  <span className="font-heading text-foreground font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. FEATURED PROJECT */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="border-border-base group relative aspect-video overflow-hidden rounded-3xl border shadow-2xl">
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="from-brand-navy/80 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">
                      Featured Case Study
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      The Planning Bord
                    </h3>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex flex-col gap-6">
                <h2 className="font-heading text-foreground text-4xl font-bold">Selected Work</h2>
                <p className="text-text-alt text-lg leading-relaxed">
                  <span className="text-foreground font-bold">The Planning Bord</span> is an ERP
                  system for inventory, HR, projects, finance, and automation. It gives modern teams
                  one clear platform for daily work.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {["React", "Vercel", "Modern UI Architecture"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-brand-teal/10 text-brand-teal rounded-full px-3 py-1 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/work">
                  <Button className="w-fit">View Project Case Study</Button>
                </Link>
                <p className="text-text-muted text-sm italic">
                  Additional enterprise systems available under NDA.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-brand-orange py-24 text-white">
        <div className="container-custom text-center">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col gap-8">
              <h2 className="font-heading text-4xl font-bold md:text-6xl">
                Planning a system for your organization?
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                Building new digital infrastructure? Replacing legacy systems? Modulifyr can design
                and build a scalable solution tailored to your organization.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link href="/request-proposal">
                  <Button size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
                    Request Proposal
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Schedule Discovery Call
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

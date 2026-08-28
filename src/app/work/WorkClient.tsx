'use client'

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Target,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const caseStudies = [
  {
    id: "planning-bord",
    label: "Proprietary Alpha Build",
    labelColor: "text-brand-orange",
    title: "The Planning Bord",
    subtitle: "Internal R&D Project — Comprehensive ERP System",
    tags: ["React", "Vercel", "TailwindCSS", "Modular Architecture"],
    liveUrl: "https://the-planning-bord.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    problem:
      "The system needed to bring inventory, project tracking, HR, and finance into a single platform. Without a unified data layer, each function would require manual reconciliation and separate tooling — creating compounding maintenance overhead as the product grew.",
    architecture:
      "Built as a single modular platform where each function (inventory, HR, projects, finance) operates as a discrete module with clean data boundaries. Modules share a common data layer so inventory changes immediately reflect in finance reporting. The modular design means new workflows can be added without touching unrelated modules.",
    outcome:
      "A working ERP platform demonstrating our core architectural approach: modular, independently maintainable, and extensible. The Planning Bord is an active internal build — new modules are being added as the product evolves.",
    metrics: [
      { label: "Architecture pattern", value: "Modular" },
      { label: "Platform type", value: "ERP" },
      { label: "Status", value: "Active internal build" },
    ],
  },
];

// Custom 3D Tilt Component for Work Cards
function TiltCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      "ontouchstart" in window
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 5; // max ~5deg
    const rotateY = ((x - centerX) / centerX) * 5; // max ~5deg
    el.style.transition = "none";
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.25s ease-out";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  );
}

export default function WorkClient() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-bg-light border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-up">
              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-6xl">
                Proven Technical <span className="text-brand-orange">Execution</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary mb-8 text-xl leading-relaxed">
                Our current portfolio reflects our internal builds and architectural approach. As we
                take on client projects, documented case studies will be added here.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="text-brand-teal flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
                <ShieldCheck className="h-5 w-5" /> Client Projects Available Under NDA After Engagement
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Public Case Study */}
      {caseStudies.map((cs) => (
        <section key={cs.id} className="py-24">
          <div className="container-custom">
            <div className="mb-10 flex flex-col gap-2">
              <Reveal variant="fade-scale">
                <span className={`text-xs font-bold tracking-widest uppercase ${cs.labelColor}`}>
                  {cs.label}
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-foreground text-4xl font-bold">{cs.title}</h2>
              </Reveal>
              <Reveal variant="fade-up" delay={150}>
                <p className="text-text-muted text-sm font-semibold tracking-widest uppercase">
                  {cs.subtitle}
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              {/* Left: image + metrics */}
              <div className="flex flex-col gap-6">
                <Reveal variant="fade-scale" delay={100}>
                  <TiltCard className="border-border-base group relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 parallax-subtle-up"
                    />
                    <div className="from-brand-navy/70 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8">
                      <div className="flex flex-wrap gap-2">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((m, i) => (
                    <Reveal key={i} variant="fade-scale" delay={150 + i * 50}>
                      <div
                        className="bg-bg-secondary border-border-base rounded-2xl border p-5 text-center h-full"
                      >
                        <p className="text-brand-orange font-heading mb-1 text-sm leading-tight font-bold">
                          {m.value}
                        </p>
                        <p className="text-text-muted text-xs leading-tight">{m.label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal variant="fade-up" delay={250}>
                  <Link href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="group flex w-full items-center justify-center gap-2">
                      View Live Project{" "}
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </Button>
                  </Link>
                </Reveal>
              </div>

              {/* Right: problem → architecture → outcome */}
              <div className="flex flex-col gap-8">
                <Reveal variant="fade-up" delay={150}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      </div>
                      <h3 className="font-heading text-foreground font-bold">The Problem</h3>
                    </div>
                    <p className="text-text-secondary pl-11 text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                </Reveal>

                <Reveal variant="fade-up" delay={250}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-teal/10 border-brand-teal/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
                        <Layers className="text-brand-teal h-4 w-4" />
                      </div>
                      <h3 className="font-heading text-foreground font-bold">
                        The Architecture Decision
                      </h3>
                    </div>
                    <p className="text-text-secondary pl-11 text-sm leading-relaxed">
                      {cs.architecture}
                    </p>
                  </div>
                </Reveal>

                <Reveal variant="fade-up" delay={350}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50">
                        <Target className="h-4 w-4 text-green-600" />
                      </div>
                      <h3 className="font-heading text-foreground font-bold">The Outcome</h3>
                    </div>
                    <p className="text-text-secondary pl-11 text-sm leading-relaxed">{cs.outcome}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Coming soon — honest placeholder instead of fabricated NDA studies */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="mb-12">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                Client Work
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-xl text-lg leading-relaxed">
                We are pre-launch and actively taking on our first client projects. Documented case
                studies will be added here as engagements complete. If you want to be an early client,{" "}
                <Link href="/request-proposal" className="text-brand-orange font-semibold hover:underline">
                  request a proposal
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade-scale" delay={150}>
            <div className="border-border-base rounded-3xl border bg-white p-10 text-center max-w-2xl">
              <div className="bg-brand-orange/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle2 className="text-brand-orange h-8 w-8" />
              </div>
              <h3 className="font-heading text-foreground mb-3 text-xl font-bold">
                Technical Standards Available Now
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                While client case studies are pending, our full engineering standards, architecture
                patterns, and technical briefing are available for review.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about/technical-standards">
                  <Button>View Technical Standards</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Speak with an Engineer</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dedicated Product Team */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal variant="fade-scale">
                <span className="bg-brand-orange/20 text-brand-orange w-fit rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase">
                  Available Engagement Model
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-3xl font-bold md:text-4xl">
                  Dedicated <span className="text-brand-orange">Product Team</span>
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={150}>
                <p className="text-text-muted leading-relaxed">
                  Most Nepal IT firms sell project-based work. We also offer a dedicated team model:
                  a focused engineering team embedded in your product long-term, operating as an
                  extension of your own team. Monthly retainer, no re-scoping overhead, no handoff
                  risk
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={200}>
                <p className="text-text-muted text-sm leading-relaxed">
                  Best suited for startups and scale-ups that have a working product and need reliable
                  ongoing engineering capacity without the cost and overhead of hiring locally.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Engagement type", val: "Monthly retainer" },
                  { label: "Minimum term", val: "3 months" },
                  { label: "Team size", val: "Scoped per project" },
                  { label: "Onboarding", val: "2 weeks" },
                ].map((item, i) => (
                  <Reveal key={i} variant="fade-scale" delay={250 + i * 50}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 h-full">
                      <p className="text-text-muted text-xs">{item.label}</p>
                      <p className="mt-0.5 font-bold text-white">{item.val}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal variant="fade-up" delay={450}>
                <Link href="/request-proposal" className="w-fit">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                    Discuss Dedicated Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Reveal>
            </div>

            <Reveal variant="fade-scale" delay={300}>
              <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10">
                <h3 className="font-heading text-xl font-bold text-white">
                  How it's different from project work
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      label: "Scope changes",
                      project: "New SOW required",
                      team: "Handled in sprint",
                    },
                    {
                      label: "Context switching",
                      project: "Re-onboarding each phase",
                      team: "Team already knows your codebase",
                    },
                    {
                      label: "Delivery risk",
                      project: "Handoff at project end",
                      team: "Continuous ownership",
                    },
                    { label: "Budget", project: "Variable by milestone", team: "Fixed monthly cost" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-3 text-xs">
                      <span className="text-text-muted font-semibold">{row.label}</span>
                      <span className="rounded bg-red-500/10 px-2 py-1 text-center text-red-300/80">
                        {row.project}
                      </span>
                      <span className="rounded bg-green-500/10 px-2 py-1 text-center text-green-300/80">
                        {row.team}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="bg-bg-secondary py-20">
        <div className="container-custom text-center">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground text-3xl font-bold">
                Want to see how we think about architecture?
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary text-lg leading-relaxed">
                We can walk through our technical standards, architecture patterns, and internal
                system design with any serious prospect.
              </p>
            </Reveal>
            <Reveal variant="fade-scale" delay={150}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about/technical-standards">
                  <Button size="lg">View Technical Standards</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Speak with an Engineer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

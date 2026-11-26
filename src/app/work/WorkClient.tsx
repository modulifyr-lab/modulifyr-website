"use client";

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

const technicalBuilds = [
  {
    id: "educom",
    label: "Technical Build · Web Platform & Automation",
    labelColor: "text-[#2D738D]",
    title: "Educom",
    subtitle: "Modular Student Inquiry & Operations Portal",
    tags: ["Next.js", "TypeScript", "Hono", "PostgreSQL", "Automation"],
    loomPlaceholder: "[TODO: Add Loom walkthrough URL]",
    image: "/blog/blog-one.jpg",
    problem:
      "Education teams often lose prospective student inquiries across disconnected web forms, spreadsheets, and manual chat follow-ups—causing slow response times and messy enrollment tracking.",
    architecture:
      "Built with Next.js App Router, TypeScript, and PostgreSQL using clean modular domain boundaries. Validated intake forms trigger automated notification pipelines and structured database records with zero manual re-entry.",
    outcome:
      "A fast, maintainable portal demonstrating our core delivery model: clean TypeScript + PostgreSQL architecture paired with automated follow-up workflows.",
    metrics: [
      { label: "Core stack", value: "Next.js + Postgres" },
      { label: "Build type", value: "Web App & Ops" },
      { label: "Walkthrough", value: "Demo Ready" },
    ],
  },
  {
    id: "nepal-smb-automation",
    label: "Interactive Live Demo · Automation Layer",
    labelColor: "text-[#2D738D]",
    title: "WhatsApp, eSewa & Lead Sync Pipeline",
    subtitle: "Working n8n & Webhook Automation Demo for Nepal SMBs",
    tags: ["n8n", "WhatsApp Business", "eSewa / Khalti", "Google Sheets", "Webhooks"],
    loomPlaceholder: "[TODO: Add Loom walkthrough URL]",
    image: "/blog/blog-three.jpg",
    problem:
      "Local businesses spend hours every week copying inquiry details from website forms into Google Sheets, chasing payment confirmations, and manually messaging staff on WhatsApp.",
    architecture:
      "Event-driven n8n webhook pipelines validate incoming form submissions and eSewa/Khalti payment callbacks, sync structured rows to Google Sheets or CRM, and dispatch instant WhatsApp/email alerts with built-in retry handling.",
    outcome:
      "Eliminates dropped leads and manual copy-pasting with clear failure alerts, audit logs, and direct client ownership of connected accounts.",
    metrics: [
      { label: "Orchestration", value: "n8n + Webhooks" },
      { label: "Local rails", value: "eSewa / WhatsApp" },
      { label: "Reliability", value: "Retry-Safe" },
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
                Interactive Live Demos &amp;{" "}
                <span className="text-[#2D738D]">Technical Builds</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary mb-8 text-xl leading-relaxed">
                Explore working builds across Launch Kit websites, n8n/WhatsApp/eSewa automation
                pipelines, and focused TypeScript + Next.js + PostgreSQL applications. Every
                engagement is scoped around measurable business outcomes and clean client ownership.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="text-brand-teal flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
                <ShieldCheck className="h-5 w-5" /> NDA Protection &amp; 100% Client IP Ownership
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical Builds & Live Demos */}
      {technicalBuilds.map((cs, csIdx) => {
        const baseDelay = csIdx * 120;
        return (
          <section
            key={cs.id}
            className={`py-24 ${csIdx % 2 === 1 ? "bg-bg-secondary/60 border-border-base border-t" : ""}`}
          >
            <div className="container-custom">
              <div className="mb-10 flex flex-col gap-2">
                <Reveal variant="fade-up" delay={baseDelay}>
                  <span className={`text-xs font-bold tracking-widest uppercase ${cs.labelColor}`}>
                    {cs.label}
                  </span>
                </Reveal>
                <Reveal variant="fade-up" delay={baseDelay + 80}>
                  <h2 className="font-heading text-foreground text-4xl font-bold">{cs.title}</h2>
                </Reveal>
                <Reveal variant="fade-up" delay={baseDelay + 140}>
                  <p className="text-text-muted text-sm font-semibold tracking-widest uppercase">
                    {cs.subtitle}
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                {/* Left: image + metrics */}
                <div className="flex flex-col gap-6">
                  <Reveal variant="fade-up" delay={baseDelay + 120}>
                    <TiltCard className="border-border-base group relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl">
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        priority={csIdx === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="parallax-subtle-up object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="from-brand-navy/70 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8">
                        <div className="flex flex-wrap gap-2">
                          {cs.tags.map((tag, tagIdx) => (
                            <Reveal
                              key={tag}
                              variant="fade-up"
                              delay={baseDelay + 180 + tagIdx * 50}
                            >
                              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                {tag}
                              </span>
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, i) => (
                      <Reveal key={m.label} variant="fade-up" delay={baseDelay + 180 + i * 80}>
                        <div className="bg-bg-secondary border-border-base h-full rounded-2xl border p-5 text-center">
                          <p className="font-heading mb-1 text-sm leading-tight font-bold text-[#2D738D]">
                            {m.value}
                          </p>
                          <p className="text-text-muted text-xs leading-tight">{m.label}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal variant="fade-up" delay={baseDelay + 340}>
                    <div className="border-border-base bg-bg-alt flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-xs">
                        <p className="text-foreground font-semibold">Walkthrough Video</p>
                        <p className="text-text-muted mt-0.5">{cs.loomPlaceholder}</p>
                      </div>
                      <Link href="/contact" className="shrink-0">
                        <Button size="sm" variant="outline" className="group flex items-center gap-2">
                          Request Live Walkthrough{" "}
                          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                        </Button>
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Right: problem → architecture → outcome */}
                <div className="flex flex-col gap-8">
                  <Reveal variant="fade-up" delay={baseDelay + 160}>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        </div>
                        <h3 className="font-heading text-foreground font-bold">The Problem</h3>
                      </div>
                      <p className="text-text-secondary pl-11 text-sm leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal variant="fade-up" delay={baseDelay + 260}>
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

                  <Reveal variant="fade-up" delay={baseDelay + 360}>
                    <div className="flex flex-col gap-3">
                      <div className="flex h-8 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50">
                          <Target className="h-4 w-4 text-green-600" />
                        </div>
                        <h3 className="font-heading text-foreground font-bold">The Outcome</h3>
                      </div>
                      <p className="text-text-secondary pl-11 text-sm leading-relaxed">
                        {cs.outcome}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Interactive Live Sandbox & Case Study Roadmap */}
      <section className="bg-bg-secondary border-border-base border-t py-24">
        <div className="container-custom">
          <div className="mb-12">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                Try Our Live Scope &amp; Workflow Demos
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
                Alongside our published technical builds, you can test our interactive Launch Kit
                and Automation Layer previews on the homepage or{" "}
                <Link
                  href="/request-proposal"
                  className="font-semibold text-[#2D738D] hover:underline"
                >
                  request a proposal
                </Link>{" "}
                for a walkthrough tailored to your workflow.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={150}>
            <div className="border-border-base bg-bg-alt max-w-2xl rounded-3xl border p-10 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2D738D]/10">
                <CheckCircle2 className="h-8 w-8 text-[#2D738D]" />
              </div>
              <h3 className="font-heading text-foreground mb-3 text-xl font-bold">
                Engineering Standards &amp; Live Demos Available
              </h3>
              <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                Inspect our production TypeScript, Next.js, Hono, and PostgreSQL standards, or book
                a live 15-minute session to see working n8n, WhatsApp, and eSewa automation flows.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about/technical-standards">
                  <Button>View Technical Standards</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Schedule a Live Demo</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="bg-bg-secondary border-border-base border-t py-20">
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

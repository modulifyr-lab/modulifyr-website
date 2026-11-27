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
  PlayCircle,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { BOOKING_URL } from "@/lib/links";

/**
 * Single configuration variable for the inline, un-gated walkthrough demo video.
 * Supports either a direct .mp4/.webm path (e.g. "/demos/walkthrough.mp4") or an embed URL.
 * Leave empty ("") to display the clean high-resolution preview fallback.
 */
export const DEMO_VIDEO_URL = "";

function isDirectVideoFile(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

const technicalBuilds = [
  {
    id: "educom",
    label: "Internal Working Demo · Web Platform & Lead Flow",
    labelColor: "text-[#2D738D]",
    title: "Educom",
    subtitle: "Modular Student Inquiry & Operations Portal",
    tags: ["Next.js", "TypeScript", "Hono", "PostgreSQL", "Lead Routing"],
    image: "/blog/blog-one.jpg",
    demoVideoUrl: DEMO_VIDEO_URL,
    problem:
      "Education teams often lose prospective student inquiries across disconnected web forms, spreadsheets, and manual chat follow-ups—causing slow response times and messy enrollment tracking.",
    architecture:
      "Built with Next.js App Router, TypeScript, and PostgreSQL using clean modular boundaries. Validated intake forms sync via REST APIs and webhooks with structured database records and instant follow-up notifications.",
    outcome:
      "A fast, maintainable portal demonstrating our internal delivery model: clean TypeScript + PostgreSQL architecture paired with reliable inquiry tracking.",
    metrics: [
      { label: "Core stack", value: "Next.js + Postgres" },
      { label: "Build status", value: "Internal Working Demo" },
      { label: "Walkthrough", value: "Un-gated Preview" },
    ],
  },
  {
    id: "nepal-smb-automation",
    label: "Internal Working Demo · Automation Layer",
    labelColor: "text-[#2D738D]",
    title: "eSewa, Lead Form & SMS/Telegram Sync Demo",
    subtitle: "Working REST API & Webhook Automation Demo for Nepal SMBs",
    tags: [
      "REST APIs & Webhooks",
      "Facebook / Google Leads",
      "eSewa / Khalti / Fonepay",
      "Email, Telegram & Nepali SMS",
      "Google Sheets",
    ],
    image: "/blog/blog-three.jpg",
    demoVideoUrl: DEMO_VIDEO_URL,
    problem:
      "Local businesses spend hours copying inquiry details from website or Facebook lead forms into Google Sheets, chasing eSewa/Khalti confirmations, and manually alerting staff.",
    architecture:
      "Webhook and scheduled sync pipelines validate incoming website or ad leads and eSewa/Khalti/Fonepay callbacks, log clean rows to Google Sheets or CRM, and dispatch instant alerts via Email, Telegram, Nepali SMS (Sparrow/Aakash), and Click-to-WhatsApp links.",
    outcome:
      "Eliminates dropped inquiries and manual copy-pasting with clear failure alerts, retry safety, and direct client ownership of connected accounts.",
    metrics: [
      { label: "Orchestration", value: "REST + Webhooks" },
      { label: "Local rails", value: "eSewa / SMS / Email" },
      { label: "Build status", value: "Internal Working Demo" },
    ],
  },
];

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
    const rotateX = ((centerY - y) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
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

function DemoMediaContainer({
  title,
  image,
  tags,
  videoUrl,
  priority,
  baseDelay,
}: {
  title: string;
  image: string;
  tags: readonly string[];
  videoUrl: string;
  priority: boolean;
  baseDelay: number;
}) {
  const trimmedUrl = videoUrl.trim();

  if (trimmedUrl) {
    return (
      <div className="border-border-base bg-brand-navy overflow-hidden rounded-3xl border shadow-2xl">
        <div className="aspect-video w-full bg-black">
          {isDirectVideoFile(trimmedUrl) ? (
            <video
              src={trimmedUrl}
              poster={image}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              Your browser does not support inline video playback.
            </video>
          ) : (
            <iframe
              src={trimmedUrl}
              title={`${title} walkthrough video`}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-xs text-slate-300">
          <span className="inline-flex items-center gap-1.5 font-semibold text-white">
            <PlayCircle className="h-4 w-4 text-[#4FB6C6]" />
            Un-gated Internal Working Demo
          </span>
          <span>No signup required</span>
        </div>
      </div>
    );
  }

  return (
    <TiltCard className="border-border-base group relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl">
      <Image
        src={image}
        alt={`${title} internal working demo preview`}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="parallax-subtle-up object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="from-brand-navy/85 absolute inset-0 flex flex-col justify-between bg-gradient-to-t via-brand-navy/20 to-transparent p-6 sm:p-8">
        <div className="flex justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <PlayCircle className="h-3.5 w-3.5 text-[#4FB6C6]" />
            Internal Working Demo · Preview
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <Reveal key={tag} variant="fade-up" delay={baseDelay + 180 + tagIdx * 50}>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </TiltCard>
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
                Working Demos &amp;{" "}
                <span className="text-[#2D738D]">Internal Builds</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary mb-8 text-xl leading-relaxed">
                Explore Modulifyr&apos;s internal working demos across fast Next.js websites,
                lead/eSewa webhook automation pipelines, and PostgreSQL web applications. Every build
                shows exact working flows—no inflated numbers or gated forms.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="text-brand-teal flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
                <ShieldCheck className="h-5 w-5" /> Honest Internal Working Demos · 100% Client IP
                Ownership
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal Working Demos */}
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
                {/* Left: inline video / screenshot preview + metrics */}
                <div className="flex flex-col gap-6">
                  <Reveal variant="fade-up" delay={baseDelay + 120}>
                    <DemoMediaContainer
                      title={cs.title}
                      image={cs.image}
                      tags={cs.tags}
                      videoUrl={cs.demoVideoUrl}
                      priority={csIdx === 0}
                      baseDelay={baseDelay}
                    />
                  </Reveal>

                  {/* Honest Labels */}
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
                        <p className="text-foreground font-semibold">Live Walkthrough Available</p>
                        <p className="text-text-muted mt-0.5">
                          See this internal working demo live on your Free 20-Min Checkup.
                        </p>
                      </div>
                      <Button
                        href={BOOKING_URL}
                        external
                        size="sm"
                        variant="outline"
                        className="group flex shrink-0 items-center gap-2"
                      >
                        Watch Live on Call{" "}
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                      </Button>
                    </div>
                  </Reveal>
                </div>

                {/* Right: problem -> architecture -> outcome */}
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
                          How We Built It
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
                        <h3 className="font-heading text-foreground font-bold">What It Shows</h3>
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

      {/* Un-gated Demo Callout */}
      <section className="bg-bg-secondary border-border-base border-t py-24">
        <div className="container-custom">
          <div className="mb-12">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                Explore Interactive Previews Without Signing Up
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
                Test our Launch Kit, Automation Layer, and real-time pricing estimator directly on
                the homepage, or{" "}
                <Link
                  href="/request-proposal"
                  className="font-semibold text-[#2D738D] hover:underline"
                >
                  request a proposal
                </Link>{" "}
                tailored to your tools.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={150}>
            <div className="border-border-base bg-bg-alt max-w-2xl rounded-3xl border p-10 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2D738D]/10">
                <CheckCircle2 className="h-8 w-8 text-[#2D738D]" />
              </div>
              <h3 className="font-heading text-foreground mb-3 text-xl font-bold">
                Internal Working Demos &amp; Engineering Standards
              </h3>
              <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                Inspect our TypeScript, Next.js, and PostgreSQL standards, or book a Free 20-Min
                Checkup to see working lead-capture and eSewa/Khalti webhook flows live.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about/technical-standards">
                  <Button>View Technical Standards</Button>
                </Link>
                <Button href={BOOKING_URL} external variant="outline">
                  Book a Free 20-Min Checkup <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

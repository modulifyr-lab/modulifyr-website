"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Clock,
  Search,
  ChevronRight,
  XCircle,
  AlertCircle,
  FileText,
  Map,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";
import {
  FOUNDING_SLOTS_REMAINING,
  formatTierPriceActive,
  formatTierPriceStandard,
} from "@/lib/pricing";
import { BOOKING_URL } from "@/lib/links";
import { REGIONS, REGION_CODES } from "@/lib/regions";
import Reveal from "@/components/ui/Reveal";

const tiers = [
  {
    name: "Tier 1 — Focused Tool Audit",
    tierKey: "tier1_basicScoping",
    duration: "3–5 business days",
    bestFor: "Businesses choosing the right website, CRM, or workflow setup before spending",
    descriptionNepal:
      "Get a plain-English tool recommendation & scope plan so you never pay for software you don't need.",
    descriptionInternational:
      "Focused consulting to compare off-the-shelf software vs custom development for one workflow.",
    included: [
      "Follow-up deep-dive after your Free 20-Minute Checkup",
      "Comparison of ready-made tools vs custom development options",
      "Plain-English scope summary with budget & timeline boundaries",
      "100% of fee credited if you start a build within 30 days",
    ],
    notIncluded: [
      "Multi-department workflow mapping",
      "Full custom database schema & API diagrams",
      "Multiple stakeholder workshops",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Full Digitalization Audit",
    tierKey: "tier2_fullDiscovery",
    duration: "1 week",
    bestFor: "Businesses connecting 2–4 workflows across sales, forms, billing & teams",
    descriptionNepal:
      "Map how inquiries, staff follow-ups, and payments flow across your business and get a clear rollout plan.",
    descriptionInternational:
      "Structured multi-tool digitalization audit with vendor evaluation, integration map & phased rollout.",
    included: [
      "2–3 structured consulting sessions with your key staff",
      "Tool-by-tool audit (forms, CRM, sheets, SMS, payments)",
      "Clear system blueprint & build vs buy recommendations",
      "Phased rollout roadmap with milestone estimates",
      "100% of fee credited if you start a build within 30 days",
    ],
    notIncluded: [
      "Full multi-branch legacy codebase audit",
      "More than 3 stakeholder workshops",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Complex System Blueprint",
    tierKey: "tier3_complexArchitecture",
    duration: "1–2 weeks",
    bestFor: "Larger portals, multi-workflow operations, or white-label agency system specs",
    descriptionNepal:
      "Complete technical architecture, database schema, and integration plan before custom engineering.",
    descriptionInternational:
      "Deep technical blueprint covering Next.js / PostgreSQL architecture, API contracts & build sequencing.",
    included: [
      "Full workshop series (3–5 stakeholder sessions)",
      "Complete system architecture blueprint & PostgreSQL data model",
      "Integration mapping across all third-party tools & webhooks",
      "Risk mitigation plan & dependency-sequenced delivery roadmap",
      "100% of fee credited if you start a build within 30 days",
    ],
    notIncluded: [],
    highlight: false,
  },
] as const;

const whatYouOwnAfter = [
  {
    icon: FileText,
    label: "Plain-English Tool Audit Report",
    desc: "Know which off-the-shelf tools to adopt and what actually needs custom work",
  },
  {
    icon: Map,
    label: "Clear Rollout Roadmap",
    desc: "Phased steps with fixed milestone pricing — never a vague wish list",
  },
  {
    icon: Layers,
    label: "100% Build Credit (30 Days)",
    desc: "Every rupee/dollar you invest goes straight toward your build if you proceed",
  },
];

export default function StrategySprintPage() {
  const { region, setRegion } = useRegion();
  const activeRegion = region ?? "NP";

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-scale">
              <div className="mb-4 flex items-center gap-2">
                <Search className="h-6 w-6 text-[#2D738D]" />
                <span className="text-xs font-bold tracking-widest text-[#2D738D] uppercase">
                  03 · Digitalization Consulting &amp; Tool Audit
                </span>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-6xl">
                Strategy Sprint
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted text-xl leading-relaxed">
                Every engagement starts with a{" "}
                <strong className="text-white">Free 20-Minute Checkup</strong>—never a paid gate.
                When your team needs deep multi-tool research across CRM, websites, payments, and
                off-the-shelf vs custom software, Strategy Sprint gives you a clear plan before
                writing code.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={250}>
              <div className="mt-6 rounded-2xl border border-[#4FB6C6]/40 bg-[#4FB6C6]/10 px-5 py-4 text-sm leading-relaxed text-[#E2F4F7]">
                <strong>Start with a Free 20-Minute Checkup.</strong> Need deep multi-tool research?{" "}
                <strong>100% of your Strategy Sprint fee is credited toward your build</strong> if
                you start within 30 days.
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={BOOKING_URL}
                  external
                  size="lg"
                  className="bg-[#2D738D] hover:bg-[#235b70]"
                >
                  Book Free 20-Min Checkup First
                </Button>
                <Button
                  href="/request-proposal?pkg=strategy-sprint"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Request Deep Tool Audit
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you own after */}
      <section className="bg-bg-secondary border-border-base border-b py-12">
        <div className="container-custom">
          <p className="text-text-muted mb-8 text-xs font-bold tracking-widest uppercase">
            What you own after the audit
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatYouOwnAfter.map((item, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div className="flex h-full gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2D738D]/10">
                    <item.icon className="h-5 w-5 text-[#2D738D]" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 text-sm font-bold">{item.label}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Reveal variant="fade-up">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h2 className="font-heading text-foreground text-3xl font-bold">
                    Consulting &amp; Audit Tiers
                  </h2>
                  {FOUNDING_SLOTS_REMAINING > 0 && (
                    <span className="rounded-full border border-[#4FB6C6]/40 bg-[#4FB6C6]/10 px-3 py-0.5 text-xs font-bold text-[#2D738D]">
                      {FOUNDING_SLOTS_REMAINING} Founding Client slots remaining
                    </span>
                  )}
                </div>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
                  Already know you just need a business website or single workflow automation? Skip
                  this sprint and start with your Free 20-Min Checkup—or pick an audit tier below.
                </p>
              </Reveal>
            </div>

            {/* 6-Currency Selector */}
            <div
              className="border-border-base bg-bg-alt inline-flex flex-wrap items-center gap-1 self-start rounded-xl border p-1"
              role="group"
              aria-label="Select display currency"
            >
              {REGION_CODES.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setRegion(code)}
                  className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                    activeRegion === code
                      ? "bg-[#2D738D] text-white"
                      : "text-text-alt hover:text-foreground"
                  }`}
                >
                  {REGIONS[code].currency}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 80}>
                <Card
                  className={`relative flex h-full flex-col gap-5 ${
                    tier.highlight
                      ? "border-[#2D738D] ring-[#2D738D]/20 shadow-xl ring-1"
                      : ""
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute top-0 left-8 -translate-y-1/2 rounded-full bg-[#2D738D] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Most Common
                    </div>
                  )}

                  <div>
                    <h3 className="text-foreground mb-1 text-base font-bold">{tier.name}</h3>
                    <div className="font-heading text-2xl font-bold text-[#2D738D] tabular-nums">
                      {formatTierPriceActive("strategySprint", tier.tierKey, activeRegion)}
                    </div>
                    {FOUNDING_SLOTS_REMAINING > 0 && (
                      <p className="text-text-muted mt-1 text-xs">
                        Standard:{" "}
                        <span className="line-through">
                          {formatTierPriceStandard("strategySprint", tier.tierKey, activeRegion)}
                        </span>
                      </p>
                    )}
                    <div className="text-brand-teal mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase">
                      <Clock className="h-3 w-3" /> {tier.duration}
                    </div>
                  </div>

                  <p className="text-text-muted border-border-base border-t pt-3 text-xs font-semibold tracking-wider uppercase">
                    Best for: {tier.bestFor}
                  </p>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {activeRegion === "NP" ? tier.descriptionNepal : tier.descriptionInternational}
                  </p>

                  <div>
                    <p className="text-foreground mb-3 text-xs font-bold tracking-widest uppercase">
                      Included
                    </p>
                    <ul className="space-y-2">
                      {tier.included.map((d, j) => (
                        <li key={j} className="text-text-secondary flex items-start gap-2 text-sm">
                          <CheckCircle2 className="text-brand-teal mt-0.5 h-4 w-4 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.notIncluded.length > 0 && (
                    <div>
                      <p className="text-text-muted mb-3 text-xs font-bold tracking-widest uppercase">
                        Not included
                      </p>
                      <ul className="space-y-2">
                        {tier.notIncluded.map((d, j) => (
                          <li key={j} className="text-text-muted flex items-start gap-2 text-xs">
                            <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-300" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/request-proposal?pkg=strategy-sprint&tier=${i + 1}&region=${activeRegion}`}
                      className="w-full"
                    >
                      <Button
                        variant={tier.highlight ? "primary" : "outline"}
                        className="group w-full justify-between"
                      >
                        Request This Tier
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Concise Note */}
      <section className="bg-bg-secondary py-12">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="border-border-base bg-bg-alt max-w-3xl rounded-2xl border p-8">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2D738D]" />
                <h3 className="text-foreground font-bold">How the 30-day credit works</h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  100% of your Strategy Sprint fee is deducted from your Launch Kit, Automation
                  Layer, or custom build invoice if you start within 30 days
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  If you decide to pause or hire another vendor, you keep 100% of the written
                  tool audit and roadmap documents
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="bg-brand-navy max-w-3xl rounded-3xl p-12 text-white">
              <h2 className="font-heading mb-3 text-2xl font-bold text-white">
                Start with your Free 20-Min Checkup
              </h2>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">
                Not sure if you need an audit or just a simple website/automation fix? Talk to us
                first—we&apos;ll give you an honest answer in 20 minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={BOOKING_URL} external className="bg-[#2D738D] hover:bg-[#235b70]">
                  Book Free 20-Min Checkup
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Back to All Services
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

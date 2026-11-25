"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Calculator, Sparkles } from "lucide-react";
import { useRegion } from "@/components/RegionProvider";
import { REGIONS, REGION_CODES, type Region } from "@/lib/regions";
import {
  formatTierPriceFounding,
  formatTierPriceStandard,
  FOUNDING_SLOTS_REMAINING,
  type PackagePricingKey,
} from "@/lib/pricing";
import { SERVICES, type Service } from "@/lib/services";

interface TierOption {
  tierKey: string;
  tierNumber: number;
  label: string;
  duration: string;
  scopeSummary: string;
  deliverables: readonly string[];
}

const PACKAGE_TIERS: Record<PackagePricingKey, readonly TierOption[]> = {
  strategySprint: [
    {
      tierKey: "tier1_basicScoping",
      tierNumber: 1,
      label: "Tier 1 · Basic Scoping",
      duration: "3–5 business days",
      scopeSummary: "Single product or feature with a clear initial boundary.",
      deliverables: [
        "Written brief & requirements document",
        "High-level tech stack recommendation",
        "Phased delivery roadmap",
      ],
    },
    {
      tierKey: "tier2_fullDiscovery",
      tierNumber: 2,
      label: "Tier 2 · Full Discovery",
      duration: "1 week",
      scopeSummary: "Multi-feature business systems with 2–4 connected modules.",
      deliverables: [
        "2–3 structured stakeholder workshops",
        "System & component architecture blueprint",
        "Phased roadmap with time estimates",
      ],
    },
    {
      tierKey: "tier3_complexArchitecture",
      tierNumber: 3,
      label: "Tier 3 · Complex Architecture",
      duration: "1–2 weeks",
      scopeSummary: "Large, unclear, legacy, or multi-team system scope.",
      deliverables: [
        "3–5 deep-dive architecture workshops",
        "Full integration map & risk mitigation plan",
        "Dependency-sequenced engineering roadmap",
      ],
    },
    {
      tierKey: "tier4_enterpriseStrategy",
      tierNumber: 4,
      label: "Tier 4 · Enterprise Strategy",
      duration: "2–3 weeks",
      scopeSummary: "Enterprise governance, SLA planning, and formal SOW readiness.",
      deliverables: [
        "5+ cross-department workshops & specs",
        "Procurement-ready SOW & resource estimates",
        "SLA-backed delivery blueprint",
      ],
    },
  ],
  launchKit: [
    {
      tierKey: "tier1_essential",
      tierNumber: 1,
      label: "Tier 1 · Essential",
      duration: "7–10 business days",
      scopeSummary: "1–3 responsive pages for rapid local business launch.",
      deliverables: [
        "Mobile-first responsive layout (no animations)",
        "Figma wireframe approval + 1 revision round",
        "Email-connected contact form + Vercel handoff",
      ],
    },
    {
      tierKey: "tier2_business",
      tierNumber: 2,
      label: "Tier 2 · Business",
      duration: "2–3 weeks",
      scopeSummary: "4–10 pages with smooth scroll reveals and booking/quote tools.",
      deliverables: [
        "Desktop & mobile Figma high-fidelity prototypes",
        "Soft animations + 2 structured revision rounds",
        "Booking embed, calculator/newsletter & SEO tags",
      ],
    },
    {
      tierKey: "tier3_premium",
      tierNumber: 3,
      label: "Tier 3 · Premium",
      duration: "3–4 weeks",
      scopeSummary: "11–20 pages with full motion design and analytics integration.",
      deliverables: [
        "4 interactive Figma prototypes + 3 revisions",
        "Scroll-triggered motion & micro-interactions",
        "Multi-step forms, filtering & full SEO structure",
      ],
    },
    {
      tierKey: "tier4_enterpriseLaunch",
      tierNumber: 4,
      label: "Tier 4 · Enterprise Launch",
      duration: "4–5 weeks",
      scopeSummary: "20+ pages with full launch suite, analytics dashboard & SOWs.",
      deliverables: [
        "5+ interactive prototypes + 4 revision rounds",
        "SEO basics, social setup & analytics dashboard",
        "Procurement-ready SOWs + optional SLA support",
      ],
    },
  ],
  automationLayer: [
    {
      tierKey: "tier1_basicConnection",
      tierNumber: 1,
      label: "Tier 1 · Basic Connection",
      duration: "1–2 weeks",
      scopeSummary: "Connect 2 tools to eliminate repetitive manual copy-pasting.",
      deliverables: [
        "2 systems connected (trigger → action flow)",
        "Basic failure alert notifications",
        "Clear developer handover documentation",
      ],
    },
    {
      tierKey: "tier2_multiSystemSync",
      tierNumber: 2,
      label: "Tier 2 · Multi-System Sync",
      duration: "2–4 weeks",
      scopeSummary: "3–5 systems synced reliably with automatic retries.",
      deliverables: [
        "Bidirectional sync across 3–5 business tools",
        "Automatic retry logic & context-rich alerts",
        "Flow health monitoring & full docs",
      ],
    },
    {
      tierKey: "tier3_complexPipeline",
      tierNumber: 3,
      label: "Tier 3 · Complex Pipeline",
      duration: "4–6 weeks",
      scopeSummary: "6+ systems or conditional branching across departments.",
      deliverables: [
        "Multi-directional conditional workflows",
        "Comprehensive error recovery & health alerts",
        "End-to-end operational runbook",
      ],
    },
    {
      tierKey: "tier4_enterpriseAutomation",
      tierNumber: 4,
      label: "Tier 4 · Enterprise Automation",
      duration: "6–8 weeks",
      scopeSummary: "Unlimited integrations with custom monitoring & 3-month support.",
      deliverables: [
        "Custom monitoring dashboard & alerting rules",
        "SLA-backed uptime & SOW compliance",
        "3 months ongoing optimization included",
      ],
    },
  ],
};

export function ScopeEstimatorSection() {
  const { region, setRegion } = useRegion();
  const activeRegion: Exclude<Region, null> = region ?? "NP";

  const [selectedSlug, setSelectedSlug] = React.useState<Service["slug"]>("launch-kit");
  const [tierIndex, setTierIndex] = React.useState<number>(1);
  const [useFoundingRate, setUseFoundingRate] = React.useState<boolean>(
    FOUNDING_SLOTS_REMAINING > 0
  );

  const selectedService =
    SERVICES.find((s) => s.slug === selectedSlug) ?? SERVICES[1];
  const tiers = PACKAGE_TIERS[selectedService.pkgKey];
  const activeTier = tiers[tierIndex] ?? tiers[0];

  const foundingPrice = formatTierPriceFounding(
    selectedService.pkgKey,
    activeTier.tierKey,
    activeRegion
  );
  const standardPrice = formatTierPriceStandard(
    selectedService.pkgKey,
    activeTier.tierKey,
    activeRegion
  );

  const displayPrice = useFoundingRate ? foundingPrice : standardPrice;
  const proposalHref = `/request-proposal?pkg=${selectedService.slug}&tier=${activeTier.tierNumber}&region=${activeRegion}`;

  return (
    <section
      id="scope-estimator"
      className="bg-bg-alt/60 border-border-base border-y py-20 transition-colors duration-300 md:py-24"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-sans text-sm font-semibold tracking-wider text-[#E8A33D] uppercase">
              Transparent Pricing &amp; Scope Estimator
            </span>
            <h2 className="text-on-background mt-2 text-3xl leading-[1.12] font-bold sm:text-4xl">
              Estimate Your Project Scope in Real Time
            </h2>
            <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
              Pick your currency, package, and complexity tier to see exact published ranges—built
              for Nepal SMB budgets and international engagements alike.
            </p>
          </div>

          {/* Inline Region / Currency Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border-base bg-surface p-1.5">
            {REGION_CODES.map((code) => {
              const isSelected = activeRegion === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setRegion(code)}
                  className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                    isSelected
                      ? "bg-cta text-on-cta shadow-sm"
                      : "text-on-surface-variant hover:text-on-background"
                  }`}
                >
                  {code === "NP" ? "Nepal · NPR" : `${code} · ${REGIONS[code].currency}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Estimator Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* LEFT: Configuration Controls */}
          <div className="border-border-base bg-surface flex flex-col justify-between gap-8 rounded-3xl border p-6 shadow-sm sm:p-8 lg:col-span-7">
            {/* Step 1: Service Track */}
            <div className="space-y-3">
              <p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                01. Choose Service Track
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {SERVICES.map((svc) => {
                  const isActive = svc.slug === selectedSlug;
                  return (
                    <button
                      key={svc.slug}
                      type="button"
                      onClick={() => {
                        setSelectedSlug(svc.slug);
                        setTierIndex(1);
                      }}
                      className={`cursor-pointer rounded-2xl border p-4 text-left transition-all duration-150 ${
                        isActive
                          ? "border-cta bg-cta/10 text-on-background"
                          : "border-border-base bg-background/60 text-on-surface-variant hover:border-cta/40"
                      }`}
                    >
                      <p className="text-on-background text-sm font-bold">{svc.title}</p>
                      <p className="text-on-surface-variant mt-1 text-xs leading-snug">
                        {svc.bestFor}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Tier */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  02. Select Complexity Tier
                </p>
                <span className="text-on-surface-variant text-xs font-medium tabular-nums">
                  {activeTier.duration}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {tiers.map((tier, idx) => {
                  const isActive = idx === tierIndex;
                  return (
                    <button
                      key={tier.tierKey}
                      type="button"
                      onClick={() => setTierIndex(idx)}
                      className={`cursor-pointer rounded-2xl border p-4 text-left transition-all duration-150 ${
                        isActive
                          ? "border-cta bg-cta/10 text-on-background"
                          : "border-border-base bg-background/60 text-on-surface-variant hover:border-cta/40"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-on-background text-sm font-bold">{tier.label}</span>
                        <span className="text-cta text-xs font-semibold tabular-nums">
                          {tier.duration}
                        </span>
                      </div>
                      <p className="text-on-surface-variant mt-1 text-xs leading-snug">
                        {tier.scopeSummary}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Founding Client Toggle */}
            <div className="border-border-base flex flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A33D]" />
                <div>
                  <p className="text-on-background text-sm font-semibold">
                    Founding Partner Rate (20% Off)
                  </p>
                  <p className="text-on-surface-variant text-xs">
                    {FOUNDING_SLOTS_REMAINING} founding client slots remaining for early partners.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1 rounded-lg border border-border-base bg-background p-1">
                <button
                  type="button"
                  onClick={() => setUseFoundingRate(true)}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    useFoundingRate
                      ? "bg-cta text-on-cta"
                      : "text-on-surface-variant hover:text-on-background"
                  }`}
                >
                  Founding Rate
                </button>
                <button
                  type="button"
                  onClick={() => setUseFoundingRate(false)}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    !useFoundingRate
                      ? "bg-cta text-on-cta"
                      : "text-on-surface-variant hover:text-on-background"
                  }`}
                >
                  Standard Rate
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Estimate Output */}
          <div className="bg-brand-navy border-border-base flex flex-col justify-between rounded-3xl border p-6 text-white shadow-xl sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#B8E0E9] uppercase">
                    Estimated Investment
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {selectedService.title} · {activeTier.label}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#B8E0E9]">
                  <Calculator className="h-5 w-5" />
                </div>
              </div>

              <div className="my-6">
                <div className="font-heading text-3xl font-bold tracking-tight text-white tabular-nums sm:text-4xl">
                  {displayPrice}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  {useFoundingRate && (
                    <span className="line-through opacity-70 tabular-nums">{standardPrice}</span>
                  )}
                  <span>Delivery: {activeTier.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>{REGIONS[activeRegion].label} ({REGIONS[activeRegion].currency})</span>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  Included in this scope
                </p>
                <ul className="space-y-2.5">
                  {activeTier.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4FB6C6]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 pt-4">
              <Link
                href={proposalHref}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2D738D] px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#235b70]"
              >
                Lock This Scope in Proposal
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link
                href={`/services/${selectedService.slug}`}
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/20 px-6 text-xs font-semibold text-slate-200 transition-colors duration-150 hover:bg-white/10"
              >
                Compare All {selectedService.title} Tiers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Calculator } from "lucide-react";
import { useRegion } from "@/components/RegionProvider";
import { REGIONS, REGION_CODES, type Region } from "@/lib/regions";
import {
  formatTierPriceStandard,
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
      scopeSummary: "Single custom MVP feature or automation workflow with clear boundaries.",
      deliverables: [
        "Written brief & requirements document",
        "Next.js / Hono / PostgreSQL stack plan",
        "Phased delivery roadmap (credited toward build)",
      ],
    },
    {
      tierKey: "tier2_fullDiscovery",
      tierNumber: 2,
      label: "Tier 2 · Full Discovery",
      duration: "1 week",
      scopeSummary: "Custom web apps & MVPs with 2–4 connected user/data modules.",
      deliverables: [
        "2–3 structured discovery workshops",
        "System, database & API blueprint",
        "Phased roadmap with time estimates (credited toward build)",
      ],
    },
    {
      tierKey: "tier3_complexArchitecture",
      tierNumber: 3,
      label: "Tier 3 · Complex Architecture",
      duration: "1–2 weeks",
      scopeSummary: "Multi-workflow custom apps or cross-system automation scoping.",
      deliverables: [
        "3–5 deep-dive architecture workshops",
        "Full integration map & risk mitigation plan",
        "Dependency-sequenced build roadmap (credited toward build)",
      ],
    },
  ],
  launchKit: [
    {
      tierKey: "tier1_essential",
      tierNumber: 1,
      label: "Tier 1 · Essential",
      duration: "3–5 business days",
      scopeSummary: "1–3 responsive pages built on our modular Next.js & Tailwind component system.",
      deliverables: [
        "Mobile-first responsive layout (modular Next.js + Tailwind)",
        "SEO meta tags + WhatsApp / email lead form routing",
        "1 revision round + Vercel deployment handoff",
      ],
    },
    {
      tierKey: "tier2_business",
      tierNumber: 2,
      label: "Tier 2 · Business",
      duration: "5–7 business days",
      scopeSummary: "4–10 pages built on our modular Next.js & Tailwind system with booking & payments.",
      deliverables: [
        "Modular Next.js & Tailwind build (optional Figma add-on)",
        "Booking embed, WhatsApp & eSewa/Khalti/Stripe link setup",
        "On-page SEO structure + 2 structured revision rounds",
      ],
    },
    {
      tierKey: "tier3_premium",
      tierNumber: 3,
      label: "Tier 3 · Premium",
      duration: "2–4 weeks",
      scopeSummary: "11–20 pages with custom Figma design, interactive motion & analytics setup.",
      deliverables: [
        "Bespoke Figma prototypes covering key flows + 3 revisions",
        "Scroll-triggered motion & micro-interactions",
        "Multi-step forms, filtering & full SEO structure",
      ],
    },
  ],
  automationLayer: [
    {
      tierKey: "tier1_basicConnection",
      tierNumber: 1,
      label: "Tier 1 · Basic Connection",
      duration: "1–2 weeks",
      scopeSummary: "Connect 2 tools via n8n, Make, Zapier, or webhooks.",
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
      scopeSummary: "6+ systems or conditional branching across workflows.",
      deliverables: [
        "Multi-directional conditional workflows",
        "Comprehensive error recovery & health alerts",
        "End-to-end operational runbook",
      ],
    },
  ],
};

export function ScopeEstimatorSection() {
  const { region, setRegion } = useRegion();
  const activeRegion: Exclude<Region, null> = region ?? "NP";

  const [selectedSlug, setSelectedSlug] = React.useState<Service["slug"]>("launch-kit");
  const [tierIndex, setTierIndex] = React.useState<number>(1);

  const selectedService =
    SERVICES.find((s) => s.slug === selectedSlug) ?? SERVICES[1];
  const tiers = PACKAGE_TIERS[selectedService.pkgKey];
  const activeTier = tiers[tierIndex] ?? tiers[0];

  const displayPrice = formatTierPriceStandard(
    selectedService.pkgKey,
    activeTier.tierKey,
    activeRegion
  );
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

            {/* Step 3: Commercial Terms Note */}
            <div className="border-border-base flex flex-col justify-between gap-2 border-t pt-5 sm:flex-row sm:items-center">
              <p className="text-on-background text-sm font-semibold">
                Milestone billing &amp; 100% client IP ownership
              </p>
              <p className="text-on-surface-variant text-xs">
                Third-party SaaS &amp; hosting accounts stay in your name at cost.
              </p>
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

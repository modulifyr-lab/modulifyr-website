"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Check, ShieldCheck } from "lucide-react";
import { useRegion } from "@/components/RegionProvider";
import { REGIONS, REGION_CODES, type Region } from "@/lib/regions";
import {
  FOUNDING_SLOTS_REMAINING,
  formatMonthlyCarePrice,
  formatTierPriceActive,
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
  launchKit: [
    {
      tierKey: "tier1_essential",
      tierNumber: 1,
      label: "Tier 1 · Essential",
      duration: "3–5 business days",
      scopeSummary: "1–3 responsive mobile-first pages to get your business credible online fast.",
      deliverables: [
        "Mobile-first responsive layout (1–3 fast pages)",
        "Local SEO tags + Click-to-WhatsApp & email lead routing",
        "1 revision round + 100% code & domain ownership handoff",
      ],
    },
    {
      tierKey: "tier2_business",
      tierNumber: 2,
      label: "Tier 2 · Business",
      duration: "5–7 business days",
      scopeSummary: "4–10 business pages with online booking embed, WhatsApp & payment links.",
      deliverables: [
        "4–10 fast pages with clean conversion-focused sections",
        "Cal.com / Calendly booking & eSewa / Khalti / Stripe link setup",
        "On-page SEO structure + 2 structured revision rounds",
      ],
    },
    {
      tierKey: "tier3_premium",
      tierNumber: 3,
      label: "Tier 3 · Premium",
      duration: "2–4 weeks",
      scopeSummary: "11–20 pages with bespoke Figma design, interactive forms & analytics.",
      deliverables: [
        "Custom Figma prototypes covering key flows + 3 revisions",
        "Interactive quote calculators or multi-step inquiry forms",
        "Full SEO structure across all pages + analytics setup",
      ],
    },
  ],
  automationLayer: [
    {
      tierKey: "tier1_basicConnection",
      tierNumber: 1,
      label: "Tier 1 · Basic Connection",
      duration: "1–2 weeks",
      scopeSummary: "Connect 2 tools via REST APIs, webhooks & scheduled sync.",
      deliverables: [
        "Website / Facebook lead form → CRM or Google Sheets sync",
        "Instant alerts via Email, Telegram, or Nepali SMS (Sparrow/Aakash)",
        "Plain-English handover guide & error alerts",
      ],
    },
    {
      tierKey: "tier2_multiSystemSync",
      tierNumber: 2,
      label: "Tier 2 · Multi-System Sync",
      duration: "2–4 weeks",
      scopeSummary: "3–5 systems synced reliably with automatic retries.",
      deliverables: [
        "Sync across forms, CRMs, Sheets & eSewa/Khalti/Fonepay/Stripe webhooks",
        "Automatic retry logic & context-rich failure alerts",
        "Flow health monitoring & full handover docs",
      ],
    },
    {
      tierKey: "tier3_complexPipeline",
      tierNumber: 3,
      label: "Tier 3 · Complex Pipeline",
      duration: "4–6 weeks",
      scopeSummary: "6+ systems or conditional branching across operations.",
      deliverables: [
        "Multi-step conditional workflows across departments",
        "Full error recovery, duplicate prevention & staff alerts",
        "End-to-end operational runbook",
      ],
    },
  ],
  strategySprint: [
    {
      tierKey: "tier1_basicScoping",
      tierNumber: 1,
      label: "Tier 1 · Focused Tool Audit",
      duration: "3–5 business days",
      scopeSummary: "Plain-English tool evaluation & scope clarity before committing to code.",
      deliverables: [
        "Off-the-shelf software vs custom build recommendation",
        "Clear feature boundaries & milestone budget estimate",
        "100% fee credited toward your build within 30 days",
      ],
    },
    {
      tierKey: "tier2_fullDiscovery",
      tierNumber: 2,
      label: "Tier 2 · Full Digitalization Audit",
      duration: "1 week",
      scopeSummary: "Multi-department workflow review across 2–4 operational bottlenecks.",
      deliverables: [
        "2–3 structured stakeholder workshops",
        "System, database & integration blueprint",
        "Phased rollout roadmap (100% credited within 30 days)",
      ],
    },
    {
      tierKey: "tier3_complexArchitecture",
      tierNumber: 3,
      label: "Tier 3 · Complex System Blueprint",
      duration: "1–2 weeks",
      scopeSummary: "Deep multi-tool architecture & custom software specification.",
      deliverables: [
        "3–5 deep-dive consulting workshops",
        "Full integration map, risk plan & vendor comparison",
        "Step-by-step build roadmap (100% credited within 30 days)",
      ],
    },
  ],
};

export function ScopeEstimatorSection() {
  const { region, setRegion } = useRegion();
  const activeRegion: Exclude<Region, null> = region ?? "NP";

  const [selectedSlug, setSelectedSlug] = React.useState<Service["slug"]>("launch-kit");
  const [tierIndex, setTierIndex] = React.useState<number>(0);
  const [includeMonthlyCare, setIncludeMonthlyCare] = React.useState<boolean>(false);

  const selectedService =
    SERVICES.find((s) => s.slug === selectedSlug) ?? SERVICES[0];
  const tiers = PACKAGE_TIERS[selectedService.pkgKey];
  const activeTier = tiers[tierIndex] ?? tiers[0];

  const activePrice = formatTierPriceActive(
    selectedService.pkgKey,
    activeTier.tierKey,
    activeRegion
  );
  const standardPrice = formatTierPriceStandard(
    selectedService.pkgKey,
    activeTier.tierKey,
    activeRegion
  );
  const monthlyCarePrice = formatMonthlyCarePrice(activeRegion);
  const proposalHref = `/request-proposal?pkg=${selectedService.slug}&tier=${activeTier.tierNumber}&region=${activeRegion}${
    includeMonthlyCare ? "&care=monthly" : ""
  }`;

  return (
    <section
      id="scope-estimator"
      className="bg-bg-alt/60 border-border-base border-y py-20 transition-colors duration-300 md:py-24"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-sm font-semibold tracking-wider text-[#E8A33D] uppercase">
                Transparent Pricing &amp; Scope Estimator
              </span>
              {FOUNDING_SLOTS_REMAINING > 0 && (
                <span className="rounded-full border border-[#4FB6C6]/40 bg-[#4FB6C6]/10 px-3 py-0.5 text-xs font-bold text-[#2D738D] dark:text-[#8CCBDA]">
                  {FOUNDING_SLOTS_REMAINING} Founding Client slots remaining
                </span>
              )}
            </div>
            <h2 className="text-on-background mt-2 text-3xl leading-[1.12] font-bold sm:text-4xl">
              Estimate Your Project Scope in Real Time
            </h2>
            <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
              Pick your currency, package, and tier to see exact published pricing—built for Nepal
              businesses and global agency or SMB teams alike.
            </p>
          </div>

          {/* Inline 6-Currency Switcher */}
          <div
            className="border-border-base bg-surface flex flex-wrap items-center gap-1.5 rounded-xl border p-1.5"
            role="group"
            aria-label="Currency selector"
          >
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
                  {REGIONS[code].currency}
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
                01. Choose Package
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
                        setTierIndex(0);
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
                  02. Select Tier
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
                Milestone billing &amp; 100% code/domain ownership
              </p>
              <p className="text-on-surface-variant text-xs">
                External hosting, domains &amp; SMS credits stay in your name at cost.
              </p>
            </div>
          </div>

          {/* RIGHT: Live Estimate Output */}
          <div className="bg-brand-navy border-border-base flex flex-col justify-between rounded-3xl border p-6 text-white shadow-xl sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#B8E0E9] uppercase">
                    {FOUNDING_SLOTS_REMAINING > 0
                      ? `Founding Partner Rate · ${FOUNDING_SLOTS_REMAINING} Slots Left`
                      : "Estimated Investment"}
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
                  {activePrice}
                </div>
                {FOUNDING_SLOTS_REMAINING > 0 && (
                  <p className="mt-1.5 text-xs text-slate-300">
                    Standard rate:{" "}
                    <span className="line-through opacity-80">{standardPrice}</span> · 20% Founding
                    Partner discount active
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span>Delivery: {activeTier.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {REGIONS[activeRegion].label} ({REGIONS[activeRegion].currency})
                  </span>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  Included in this tier
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

              {includeMonthlyCare && (
                <div className="mt-5 rounded-xl border border-[#4FB6C6]/35 bg-[#4FB6C6]/10 px-4 py-3 text-xs text-slate-200">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>+ Monthly Care &amp; Lead-Ops Plan</span>
                    <span>{monthlyCarePrice} / mo</span>
                  </div>
                  <p className="mt-1 text-slate-300">
                    Monitoring, uptime checks &amp; up to 2 small text/photo/banner updates monthly.
                  </p>
                </div>
              )}
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

        {/* Monthly Care & Lead-Ops Plan Add-On Card directly below Estimator */}
        <div className="border-border-base bg-surface mt-6 flex flex-col justify-between gap-5 rounded-3xl border p-6 shadow-sm sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-start gap-4">
            <div className="bg-cta/10 text-cta flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-on-background text-base font-bold">
                  Optional Add-On: Monthly Care &amp; Lead-Ops Plan
                </h3>
                <span className="text-cta text-sm font-extrabold tabular-nums">
                  {monthlyCarePrice} / month
                </span>
              </div>
              <p className="text-on-surface-variant max-w-3xl text-xs leading-relaxed sm:text-sm">
                Keep your site and lead forms healthy after launch: uptime monitoring, broken-link
                &amp; form checks, and{" "}
                <strong className="text-on-background font-semibold">
                  up to 2 small text, photo, or banner updates per month
                </strong>{" "}
                (unused updates do not roll over; new pages or redesigns scoped separately).
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIncludeMonthlyCare((prev) => !prev)}
            aria-pressed={includeMonthlyCare}
            className={`shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-xs font-bold whitespace-nowrap transition-colors ${
              includeMonthlyCare
                ? "border-cta bg-cta text-on-cta"
                : "border-cta text-cta hover:bg-cta/10"
            }`}
          >
            {includeMonthlyCare ? "Added to Estimate ✓" : "Include Monthly Care"}
          </button>
        </div>
      </div>
    </section>
  );
}

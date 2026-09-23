"use client";

import Link from "next/link";
import { ArrowRight, Compass, Layout, Workflow } from "lucide-react";
import { useRegion } from "@/components/RegionProvider";
import { RegionSelector } from "@/components/RegionSelector";
import { formatTierPrice } from "@/lib/pricing";

interface PricingTier {
  name: string;
  tierKey: string;
  scope: string;
}

interface PricingBlock {
  title: string;
  pkgKey: "strategySprint" | "launchKit" | "automationLayer";
  description: string;
  icon: typeof Compass;
  tiers: PricingTier[];
}

const PRICING_BLOCKS: PricingBlock[] = [
  {
    title: "Strategy Sprint",
    pkgKey: "strategySprint",
    description: "For unclear requirements, architecture decisions, and complex scoping.",
    icon: Compass,
    tiers: [
      { name: "Tier 1 — Basic Scoping", tierKey: "tier1_basicScoping", scope: "One clear product, feature or decision" },
      { name: "Tier 2 — Full Discovery", tierKey: "tier2_fullDiscovery", scope: "Multi-feature work with several moving parts" },
      { name: "Tier 3 — Complex Architecture", tierKey: "tier3_complexArchitecture", scope: "Large, unclear, legacy or multi-system scope" },
      { name: "Tier 4 — Enterprise Strategy", tierKey: "tier4_enterpriseStrategy", scope: "Enterprise-scale planning, procurement-ready scope" },
    ],
  },
  {
    title: "Launch Kit",
    pkgKey: "launchKit",
    description: "For static landing pages, marketing sites, and brochure sites.",
    icon: Layout,
    tiers: [
      { name: "Tier 1 — Essential", tierKey: "tier1_essential", scope: "1–3 page static site" },
      { name: "Tier 2 — Business", tierKey: "tier2_business", scope: "Small business or service website" },
      { name: "Tier 3 — Premium", tierKey: "tier3_premium", scope: "Larger, brand-focused static site" },
      { name: "Tier 4 — Enterprise Launch", tierKey: "tier4_enterpriseLaunch", scope: "Large static site, procurement-grade delivery" },
    ],
  },
  {
    title: "Automation Layer",
    pkgKey: "automationLayer",
    description: "For connecting existing systems, APIs, and workflows.",
    icon: Workflow,
    tiers: [
      { name: "Tier 1 — Basic Connection", tierKey: "tier1_basicConnection", scope: "Two systems, simple trigger-to-action logic" },
      { name: "Tier 2 — Multi-System Sync", tierKey: "tier2_multiSystemSync", scope: "Three to five systems, reliable sync" },
      { name: "Tier 3 — Complex Pipeline", tierKey: "tier3_complexPipeline", scope: "Six or more systems, complex branching" },
      { name: "Tier 4 — Enterprise Automation", tierKey: "tier4_enterpriseAutomation", scope: "Enterprise monitoring, recovery, support" },
    ],
  },
];

export default function PricingPage() {
  const { region } = useRegion();

  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main py-20 md:py-28 border-b border-border-main transition-colors duration-300">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            PRICING
          </span>
          <h1 className="text-h1 font-bold text-foreground leading-[1.1]">
            Simple, Outcome-Based Pricing.
          </h1>
          <p className="text-body1 text-text-alt max-w-2xl mx-auto leading-relaxed">
            Fixed price ranges for every engagement. Confirm scope, pick a tier, know the cost before
            we start.
          </p>

          {/* Region selector bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="text-caption2 font-semibold text-text-dim uppercase tracking-wider">
              Display Currency:
            </span>
            <RegionSelector compact={false} />
          </div>
        </div>
      </section>

      {/* ── 2. PRICING BLOCKS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-alt/40 transition-colors duration-300">
        <div className="container-custom space-y-20">
          {PRICING_BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.pkgKey} className="space-y-8">
                {/* Block Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-main">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-h3 font-bold text-foreground">
                        {block.title}
                      </h2>
                      <p className="text-body2 text-text-alt">
                        {block.description}
                      </p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <button
                      type="button"
                      className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-5 py-2 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer shrink-0"
                    >
                      Choose Package
                    </button>
                  </Link>
                </div>

                {/* 4 Tier Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {block.tiers.map((tier) => {
                    const priceString = region
                      ? formatTierPrice(block.pkgKey, tier.tierKey, region)
                      : "$ USD Tier Price";

                    return (
                      <div
                        key={tier.tierKey}
                        className="bg-bg-main border-border-main rounded-2xl border p-6 flex flex-col justify-between shadow-sm hover:border-[#2D738D]/50 transition-colors"
                      >
                        <div className="space-y-4">
                          <span className="text-caption1 font-bold text-[#2D738D] uppercase tracking-wider">
                            {tier.name}
                          </span>
                          <div className="text-h4 font-extrabold text-foreground">
                            {priceString}
                          </div>
                          <p className="text-body2 text-text-alt leading-relaxed">
                            {tier.scope}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-border-main/60 mt-6">
                          <Link href="/contact" className="block">
                            <button
                              type="button"
                              className="bg-bg-alt hover:bg-bg-main text-foreground border border-border-main w-full rounded-lg py-2.5 text-xs font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
                            >
                              Get Started
                              <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-bg-main border-t border-border-main text-center transition-colors duration-300">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="text-h2 font-bold text-foreground">
            Ready to Scope Your Project?
          </h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Talk to our engineering lead to confirm scope, evaluate tiers, and lock in exact
            milestone delivery.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Schedule Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

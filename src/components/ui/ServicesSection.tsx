"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRegion } from "@/components/RegionProvider";
import { RegionSelector } from "@/components/RegionSelector";
import type { PackagePricingKey } from "@/lib/pricing";

/* ── Currency ────────────────────────────────────────────────────────────────
   TODO: keys and rates below are placeholders. Align them with whatever
   "@/lib/pricing" / RegionProvider already uses so there is one source of truth.
   Unknown regions fall back to USD. */
const CURRENCIES: Record<string, { code: string; rate: number; locale: string }> = {
  US: { code: "USD", rate: 1, locale: "en-US" },
  AU: { code: "AUD", rate: 1.5, locale: "en-AU" },
  GB: { code: "GBP", rate: 0.78, locale: "en-GB" },
  EU: { code: "EUR", rate: 0.92, locale: "de-DE" },
  IN: { code: "INR", rate: 84, locale: "en-IN" },
  NP: { code: "NPR", rate: 135, locale: "en-US" },
};

function formatRange(range: [number, number], region: string): string {
  const cur = CURRENCIES[region] ?? CURRENCIES.US;
  const convert = (usd: number) =>
    cur.code === "USD" ? usd : Math.round((usd * cur.rate) / 10) * 10;
  const fmt = new Intl.NumberFormat(cur.locale, {
    style: "currency",
    currency: cur.code,
    maximumFractionDigits: 0,
  });
  return `${fmt.format(convert(range[0]))}–${fmt.format(convert(range[1]))}`;
}

/* ── Data (prices in USD) ──────────────────────────────────────────────────── */
export interface ServiceTier {
  name: string;
  usd: [number, number];
  hint: string;
}

export interface ServiceData {
  id: string;
  slug: "strategy-sprint" | "launch-kit" | "automation-layer";
  pkgKey: PackagePricingKey;
  title: string;
  tiersIntro: string;
  tiers: ServiceTier[];
  link: string;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "strategy-sprint",
    slug: "strategy-sprint",
    pkgKey: "strategySprint",
    title: "Strategy Sprint",
    tiersIntro: "For unclear requirements, architecture decisions, and complex scoping.",
    tiers: [
      { name: "Basic Scoping", usd: [160, 240], hint: "One clear product, feature or decision" },
      {
        name: "Full Discovery",
        usd: [320, 440],
        hint: "Multi-feature work with several moving parts",
      },
      {
        name: "Complex Architecture",
        usd: [520, 680],
        hint: "Large, unclear, legacy or multi-system scope",
      },
      {
        name: "Enterprise Strategy",
        usd: [800, 1120],
        hint: "Enterprise-scale planning, procurement-ready scope",
      },
    ],
    link: "/services/strategy-sprint",
  },
  {
    id: "launch-kit",
    slug: "launch-kit",
    pkgKey: "launchKit",
    title: "Launch Kit",
    tiersIntro: "For static landing pages, marketing sites, and brochure sites.",
    tiers: [
      { name: "Essential", usd: [240, 320], hint: "1–3 page static site" },
      { name: "Business", usd: [480, 640], hint: "Small business or service website" },
      { name: "Premium", usd: [800, 1040], hint: "Larger, brand-focused static site" },
      {
        name: "Enterprise Launch",
        usd: [1280, 1760],
        hint: "Large static site, procurement-grade delivery",
      },
    ],
    link: "/services/launch-kit",
  },
  {
    id: "automation-layer",
    slug: "automation-layer",
    pkgKey: "automationLayer",
    title: "Automation Layer",
    tiersIntro: "For connecting existing systems, APIs, and workflows.",
    tiers: [
      {
        name: "Basic Connection",
        usd: [280, 360],
        hint: "Two systems, simple trigger-to-action logic",
      },
      { name: "Multi-System Sync", usd: [640, 880], hint: "Three to five systems, reliable sync" },
      {
        name: "Complex Pipeline",
        usd: [1440, 1920],
        hint: "Six or more systems, complex branching",
      },
      {
        name: "Enterprise Automation",
        usd: [2560, 3600],
        hint: "Enterprise monitoring, recovery, support",
      },
    ],
    link: "/services/automation-layer",
  },
];

export function ServicesSection() {
  const { region } = useRegion();
  const displayRegion = region ?? "US";

  return (
    <section className="bg-bg-main py-14 transition-colors duration-300 sm:py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-h2 text-foreground font-bold">Built for Every Stage</h2>
          <p className="text-body2 sm:text-body1 text-text-alt">
            From strategy and websites to automation, our services are designed around your business
            needs.
          </p>

          {/* Currency Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <span className="text-caption2 text-text-dim font-semibold tracking-wider uppercase">
              Display currency:
            </span>
            <RegionSelector compact={false} />
          </div>
        </div>

        {/* Tier Breakdown */}
        <div className="space-y-10 sm:space-y-14">
          {SERVICES_DATA.map((service) => (
            <div key={`${service.id}-tiers`} className="space-y-4 sm:space-y-5">
              <div className="space-y-1">
                <h3 className="text-foreground text-xl font-bold sm:text-2xl">{service.title}</h3>
                <p className="text-body2 text-text-alt">{service.tiersIntro}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
                {service.tiers.map((tier, tIdx) => (
                  <div
                    key={tier.name}
                    tabIndex={0}
                    className="group bg-bg-alt border-border-main flex h-full cursor-pointer flex-col rounded-2xl border p-5 transition-all duration-300 ease-out focus-within:border-[#2D738D]/60 hover:-translate-y-0.5 hover:border-[#2D738D]/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D738D]"
                  >
                    <div className="space-y-2">
                      <h4 className="sm:text-body2 text-foreground text-sm leading-snug font-semibold">
                        Tier {tIdx + 1} — {tier.name}
                      </h4>
                      <div className="text-xl leading-tight font-extrabold break-words text-[#3B9AB8] sm:text-2xl">
                        {formatRange(tier.usd, displayRegion)}
                      </div>
                      <p className="text-caption1 sm:text-body2 text-text-alt leading-relaxed">
                        {tier.hint}
                      </p>
                    </div>

                    {/* CTA: always visible below lg, revealed on hover/focus from lg up */}
                    <div className="mt-auto pt-5">
                      <div className="border-border-main/60 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t pt-4 transition-all duration-300 ease-out lg:translate-y-1 lg:opacity-0 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                        <Link
                          href={service.link}
                          className="text-caption1 sm:text-body2 inline-flex items-center gap-1.5 font-bold text-[#2D738D] hover:underline"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                          href={`/request-proposal?pkg=${service.slug}&tier=${tIdx + 1}`}
                          className="text-caption1 sm:text-body2 inline-flex items-center gap-1.5 font-bold text-[#2D738D] hover:underline"
                        >
                          Request a Proposal
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

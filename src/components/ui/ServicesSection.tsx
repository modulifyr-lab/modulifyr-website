"use client";

import { useRegion } from "@/components/RegionProvider";
import { BOOKING_URL } from "@/lib/links";
import {
  FOUNDING_SLOTS_REMAINING,
  formatCurrencyValue,
  formatMonthlyCarePrice,
  formatPackageRange,
  formatTierPriceActive,
  formatTierPriceStandard,
  getPackageRange,
} from "@/lib/pricing";
import { REGIONS, REGION_CODES } from "@/lib/regions";
import { SERVICES, serviceDetailHref, serviceRequestHref, type Service } from "@/lib/services";
import { Button } from "@/components/Button";
import { CalendarCheck } from "lucide-react";

const SERVICE_SUBTITLES: Record<Service["slug"], string> = {
  "launch-kit": "Fast Business Websites",
  "automation-layer": "Lead & Workflow Automation",
  "strategy-sprint": "Digitalization Consulting & Tool Audit",
};

export function ServicesSection() {
  const { region, setRegion } = useRegion();
  const displayRegion = region ?? "NP";
  const customAppsMin = displayRegion === "NP" ? "NPR 45,000+" : "$600+ USD";
  const carePrice = formatMonthlyCarePrice(displayRegion);

  return (
    <section className="bg-bg-main py-14 transition-colors duration-300 sm:py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              OUR SERVICES
            </span>
            {FOUNDING_SLOTS_REMAINING > 0 && (
              <span className="rounded-full border border-[#4FB6C6]/40 bg-[#4FB6C6]/10 px-3 py-0.5 text-xs font-bold text-[#2D738D] dark:text-[#8CCBDA]">
                {FOUNDING_SLOTS_REMAINING} Founding Client slots remaining
              </span>
            )}
          </div>
          <h1 className="text-h2 text-foreground font-bold">
            Fixed-Scope Packages Built for Growing Businesses
          </h1>
          <p className="text-body2 sm:text-body1 text-text-alt">
            Transparent pricing in NPR and global currencies to help Nepal SMBs and international
            teams launch faster, capture every lead, and own 100% of their code.
          </p>

          {/* 6-Currency Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <span className="text-caption2 text-text-dim font-semibold tracking-wider uppercase">
              Currency:
            </span>
            <div
              className="border-border-base bg-bg-alt inline-flex flex-wrap items-center gap-1 rounded-xl border p-1"
              role="group"
              aria-label="Select display currency"
            >
              {REGION_CODES.map((code) => {
                const isSelected = displayRegion === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setRegion(code)}
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                      isSelected
                        ? "bg-[#2D738D] text-white"
                        : "text-text-alt hover:text-foreground"
                    }`}
                  >
                    {REGIONS[code].currency}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Service Cards (Reordered: Launch Kit -> Automation Layer -> Strategy Sprint) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service: Service, index: number) => {
            const priceRange = formatPackageRange(service.pkgKey, displayRegion);
            const startingAmount = formatCurrencyValue(
              getPackageRange(service.pkgKey, displayRegion)[0],
              displayRegion
            );
            const launchStandardTier1 = formatTierPriceStandard(
              "launchKit",
              "tier1_essential",
              displayRegion
            );
            const launchFoundingTier1 = formatTierPriceActive(
              "launchKit",
              "tier1_essential",
              displayRegion
            );

            return (
              <div
                key={service.slug}
                className="bg-bg-alt border-border-main flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300"
              >
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold tracking-wider text-[#2D738D] uppercase">
                      0{index + 1}. {SERVICE_SUBTITLES[service.slug]}
                    </span>
                    <h2 className="text-foreground mt-1 text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-body2 text-text-alt leading-relaxed">{service.summary}</p>
                  <p className="text-caption1 text-text-dim">
                    <strong className="text-foreground font-semibold">Best for: </strong>
                    {service.bestFor}
                  </p>
                </div>

                <div className="border-border-main my-6 border-t pt-6">
                  {service.slug === "launch-kit" && (
                    <>
                      <div className="text-caption2 text-text-dim font-bold tracking-wider uppercase">
                        Starts at (Founding 20% off)
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-[#3B9AB8] tabular-nums">
                        {startingAmount}+
                      </div>
                      <div className="text-caption2 text-text-alt mt-1">
                        Tier 1: {launchFoundingTier1} (Standard: {launchStandardTier1}) · Full range{" "}
                        {priceRange}
                      </div>
                    </>
                  )}
                  {service.slug === "automation-layer" && (
                    <>
                      <div className="text-caption2 text-text-dim font-bold tracking-wider uppercase">
                        Starts at
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-[#3B9AB8] tabular-nums">
                        {startingAmount}+
                      </div>
                      <div className="text-caption2 text-text-alt mt-1">
                        Full tier range: {priceRange}
                      </div>
                    </>
                  )}
                  {service.slug === "strategy-sprint" && (
                    <>
                      <div className="text-caption2 text-text-dim font-bold tracking-wider uppercase">
                        Free 20-Min Checkup first
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-[#3B9AB8] tabular-nums">
                        {priceRange}
                      </div>
                      <div className="text-caption2 text-text-alt mt-1">
                        Deep consulting &amp; tool audit (100% credited within 30 days)
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row lg:flex-col xl:flex-row">
                  <Button
                    href={serviceDetailHref(service)}
                    variant="outline"
                    className="max-w-none! flex-1"
                  >
                    View details
                  </Button>
                  <Button
                    href={serviceRequestHref(service)}
                    variant="primary"
                    className="max-w-none! flex-1"
                  >
                    Request proposal
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Web Apps & White-Label Agency Builds Callout */}
        <div className="bg-bg-alt border-border-main mt-10 flex flex-col justify-between gap-6 rounded-2xl border p-8 shadow-sm lg:flex-row lg:items-center">
          <div className="min-w-0 max-w-3xl flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-wider text-[#E8A33D] uppercase">
                Custom Web Apps &amp; White-Label Agency Builds
              </span>
              <span className="text-xs font-semibold text-[#2D738D]">
                Optional Monthly Care &amp; Lead-Ops: {carePrice}/mo
              </span>
            </div>
            <h2 className="text-foreground text-xl font-bold sm:text-2xl">
              Need a custom booking portal, client dashboard, or white-label Next.js + PostgreSQL
              build for your agency?
            </h2>
            <p className="text-body2 text-text-alt leading-relaxed">
              Scoped per project after a free call (from{" "}
              <strong className="text-foreground">{customAppsMin}</strong>). Clean code ownership
              and direct engineering communication for businesses and agency partners.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href={BOOKING_URL}
              external
              className="w-auto! max-w-none! px-6 whitespace-nowrap"
            >
              Book a Free 20-Min Checkup
              <CalendarCheck className="h-4 w-4 shrink-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

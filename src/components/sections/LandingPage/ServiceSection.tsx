"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Compass,
  Globe,
  Monitor,
  Play,
  RotateCcw,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/Button";
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
import { SERVICES, serviceDetailHref, type Service } from "@/lib/services";

const DEMO_TABS: readonly {
  slug: Service["slug"];
  number: string;
  subtitle: string;
  headline: string;
  outcome: string;
}[] = [
  {
    slug: "launch-kit",
    number: "01.",
    subtitle: "Fast Business Websites",
    headline: "Launch Kit — Fast Business Websites",
    outcome:
      "Turn local Google and social searches into real inquiries in 3–7 days. Clean, mobile-first business pages wired to Click-to-WhatsApp, online booking, and payment links.",
  },
  {
    slug: "automation-layer",
    number: "02.",
    subtitle: "Lead & Workflow Automation",
    headline: "Automation Layer — Lead & Workflow Automation",
    outcome:
      "Connect website forms, Facebook/Google lead forms, CRMs, Google Sheets, and eSewa/Khalti/Fonepay/Stripe webhooks with instant Email, Telegram & Nepali SMS alerts.",
  },
  {
    slug: "strategy-sprint",
    number: "03.",
    subtitle: "Digitalization Consulting & Tool Audit",
    headline: "Strategy Sprint — Digitalization Consulting & Tool Audit",
    outcome:
      "Start with a Free 20-Min Checkup. Need deep multi-tool research? We audit your workflows and pick off-the-shelf vs custom tools—100% credited if you build within 30 days.",
  },
];

function LaunchKitMicroDemo() {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-on-surface-variant flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <Globe className="text-cta h-4 w-4" />
          Fast Mobile-First Preview
        </span>
        <div className="border-border-base bg-background flex gap-1 rounded-lg border p-1">
          <button
            type="button"
            onClick={() => setViewport("desktop")}
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              viewport === "desktop"
                ? "bg-cta text-on-cta"
                : "text-on-surface-variant hover:text-on-background"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" /> Desktop
          </button>
          <button
            type="button"
            onClick={() => setViewport("mobile")}
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              viewport === "mobile"
                ? "bg-cta text-on-cta"
                : "text-on-surface-variant hover:text-on-background"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" /> Mobile
          </button>
        </div>
      </div>

      <div className="border-border-base bg-background/70 flex items-center justify-center rounded-2xl border p-6">
        <div
          className={`border-border-base bg-surface rounded-xl border p-4 shadow-sm transition-all duration-200 ${
            viewport === "desktop" ? "w-full" : "w-52"
          }`}
        >
          <div className="border-border-base flex items-center justify-between border-b pb-2.5">
            <span className="text-on-background text-xs font-bold">Himalayan Mart</span>
            <span className="text-cta text-[11px] font-semibold">WhatsApp Inquiry</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="text-on-background text-sm leading-snug font-bold">
              Built to Load Fast on Nepali Mobile Data
            </div>
            <div className="text-on-surface-variant text-xs">
              Local SEO structure · 100% code &amp; domain ownership
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] font-semibold tabular-nums">
              <div className="border-border-base rounded-lg border p-2">
                <p className="text-cta">3–7 Days</p>
                <p className="text-on-surface-variant">Delivery</p>
              </div>
              <div className="border-border-base rounded-lg border p-2">
                <p className="text-cta">&lt; 1.2s</p>
                <p className="text-on-surface-variant">Load Time</p>
              </div>
              <div className="border-border-base rounded-lg border p-2">
                <p className="text-cta">SEO</p>
                <p className="text-on-surface-variant">Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-on-surface-variant border-border-base border-t pt-4 text-xs">
        Optional Monthly Care &amp; Lead-Ops Plan keeps hosting monitored with up to 2 small text,
        photo, or banner updates each month.
      </p>
    </div>
  );
}

function AutomationMicroDemo() {
  const [step, setStep] = useState<number>(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const steps = [
    {
      label: "01. Facebook / Google lead or eSewa webhook fires",
      detail: "REST API & webhook validation checks every field",
    },
    {
      label: "02. CRM, Google Sheets & ledger updated",
      detail: "Scheduled & real-time sync with retry safety",
    },
    {
      label: "03. Instant team alert dispatched",
      detail: "Email, Telegram & Nepali SMS (Sparrow / Aakash) + Click-to-WhatsApp link",
    },
  ];

  const triggerRun = () => {
    clearTimers();
    setStep(1);
    timersRef.current.push(
      setTimeout(() => setStep(2), 450),
      setTimeout(() => setStep(3), 900)
    );
  };

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-on-surface-variant flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <Workflow className="text-cta h-4 w-4" />
          Lead &amp; Payment Flow Simulator
        </span>
        <button
          type="button"
          onClick={step === 3 ? () => setStep(0) : triggerRun}
          className="bg-cta text-on-cta inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-90"
        >
          {step === 3 ? (
            <>
              <RotateCcw className="h-3.5 w-3.5" /> Reset Flow
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5" /> Run Demo Flow
            </>
          )}
        </button>
      </div>

      <div className="space-y-2.5">
        {steps.map((item, idx) => {
          const active = step > idx;
          return (
            <div
              key={item.label}
              className={`rounded-xl border px-4 py-3 transition-all duration-200 ${
                active
                  ? "border-cta bg-cta/10 text-on-background"
                  : "border-border-base bg-background/70 text-on-surface-variant"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold">{item.label}</span>
                <span className="text-xs font-semibold">{active ? "Synced" : "Standby"}</span>
              </div>
              <p className="mt-1 text-xs opacity-80">{item.detail}</p>
            </div>
          );
        })}
      </div>

      <p className="text-on-surface-variant border-border-base border-t pt-4 text-xs">
        Built with REST APIs, webhooks &amp; scheduled sync plus failure alerts so customer leads are
        never quietly dropped.
      </p>
    </div>
  );
}

function StrategyMicroDemo() {
  const [layer, setLayer] = useState<"checkup" | "audit" | "plan">("checkup");

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-on-surface-variant flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <Compass className="text-cta h-4 w-4" />
          Consulting &amp; Tool Audit Preview
        </span>
        <div className="border-border-base bg-background flex gap-1 rounded-lg border p-1">
          {(["checkup", "audit", "plan"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setLayer(tab)}
              className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-semibold capitalize transition-colors ${
                layer === tab
                  ? "bg-cta text-on-cta"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {layer === "checkup" && (
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Free 20-Min Checkup", note: "First step for every business" },
            { name: "Website & Lead Check", note: "Spot quick fixes immediately" },
            { name: "Tool vs Custom Advice", note: "Never overbuild what off-the-shelf solves" },
            { name: "Clear Next Step", note: "Website, automation, or audit" },
          ].map((item) => (
            <div
              key={item.name}
              className="border-border-base bg-background/70 rounded-xl border p-4"
            >
              <p className="text-on-background text-sm font-bold">{item.name}</p>
              <p className="text-on-surface-variant mt-1 text-xs">{item.note}</p>
            </div>
          ))}
        </div>
      )}

      {layer === "audit" && (
        <div className="border-border-base bg-background/70 space-y-2.5 rounded-xl border p-4 text-xs">
          <div className="text-cta font-semibold">
            1. Audit spreadsheets, forms, CRM &amp; billing bottlenecks
          </div>
          <div className="text-on-surface-variant">
            2. Compare ready-made software tools vs custom build costs
          </div>
          <div className="text-on-surface-variant">
            3. Deliver plain-English action plan &amp; fixed milestone pricing
          </div>
        </div>
      )}

      {layer === "plan" && (
        <div className="space-y-2.5">
          {[
            "Written tool & software recommendation report you own",
            "Step-by-step rollout timeline without vendor lock-in",
            "100% of Strategy Sprint fee credited if you build within 30 days",
          ].map((phase) => (
            <div
              key={phase}
              className="border-border-base bg-background/70 text-on-background flex items-center gap-2.5 rounded-xl border px-4 py-3 text-xs font-medium"
            >
              <Check className="text-cta h-4 w-4 shrink-0" />
              {phase}
            </div>
          ))}
        </div>
      )}

      <p className="text-on-surface-variant border-border-base border-t pt-4 text-xs">
        Start with a Free 20-Minute Checkup. Need deep multi-tool research? 100% of your Strategy
        Sprint fee is credited toward your build if you start within 30 days.
      </p>
    </div>
  );
}

export function ServicesSection() {
  const { region, setRegion } = useRegion();
  const displayRegion = region ?? "NP";
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTab = DEMO_TABS[activeIndex];
  const activeService = SERVICES.find((s) => s.slug === activeTab.slug) ?? SERVICES[0];

  const getSummaryBadgePrice = (slug: Service["slug"]) => {
    if (slug === "launch-kit") {
      const startActive = formatCurrencyValue(getPackageRange("launchKit", displayRegion)[0], displayRegion);
      const standardTier1 = formatTierPriceStandard("launchKit", "tier1_essential", displayRegion);
      return FOUNDING_SLOTS_REMAINING > 0
        ? `Starts at ${startActive} (20% off ${standardTier1})`
        : `Starts at ${startActive}`;
    }
    if (slug === "automation-layer") {
      const startActive = formatCurrencyValue(
        getPackageRange("automationLayer", displayRegion)[0],
        displayRegion
      );
      return `Starts at ${startActive}`;
    }
    return `Free 20-Min Checkup · ${formatPackageRange("strategySprint", displayRegion)}`;
  };

  const priceRange = formatPackageRange(activeService.pkgKey, displayRegion);
  const customAppsMin = displayRegion === "NP" ? "NPR 45,000+" : "$600+ USD";
  const carePrice = formatMonthlyCarePrice(displayRegion);

  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        {/* Header + Currency Switcher */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-sans text-sm font-semibold tracking-wider text-[#FFC24B] uppercase">
              Our Services
            </span>
            <h2 className="text-on-background mt-2 text-3xl leading-[1.12] font-bold sm:text-4xl">
              Clear Packages Built for Growing Businesses
            </h2>
            <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
              Start with what solves today&apos;s bottleneck first—whether that&apos;s a fast website
              or automated lead follow-ups—with transparent pricing in NPR and global currencies.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div
              className="border-border-base bg-surface flex flex-wrap items-center gap-1 rounded-xl border p-1"
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
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-colors ${
                      isSelected
                        ? "bg-cta text-on-cta"
                        : "text-on-surface-variant hover:text-on-background"
                    }`}
                  >
                    {REGIONS[code].currency}
                  </button>
                );
              })}
            </div>

            <Link href="/services" className="group inline-block shrink-0">
              <Button variant="outline" className="w-auto! max-w-none! px-6 whitespace-nowrap">
                Compare All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Interactive Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* LEFT: Reordered 01 Launch Kit -> 02 Automation Layer -> 03 Strategy Sprint */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {DEMO_TABS.map((tab, idx) => {
              const svc = SERVICES.find((s) => s.slug === tab.slug)!;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-2xl border p-5 text-left transition-all duration-150 ${
                    isActive
                      ? "border-cta bg-surface shadow-md"
                      : "border-border-base bg-background/60 hover:border-cta/40"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-cta text-sm font-bold tabular-nums">{tab.number}</span>
                      <span className="text-on-background text-lg font-bold">{svc.title}</span>
                    </div>
                    <span className="text-cta text-xs font-bold whitespace-nowrap tabular-nums">
                      {formatPackageRange(svc.pkgKey, displayRegion)}
                    </span>
                  </div>
                  <p className="text-cta mt-1 text-xs font-semibold">{tab.subtitle}</p>
                  <p className="text-on-surface-variant mt-1.5 text-xs font-medium">
                    {getSummaryBadgePrice(tab.slug)}
                  </p>
                  <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                    {tab.outcome}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Interactive Micro-Demo Panel */}
          <div className="border-border-base bg-surface flex flex-col justify-between rounded-3xl border p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="border-border-base mb-6 flex flex-wrap items-center justify-between gap-4 border-b pb-5">
              <div>
                <h3 className="text-on-background text-xl font-bold">{activeTab.headline}</h3>
                <p className="text-on-surface-variant mt-1 text-xs">
                  {activeTab.slug === "launch-kit" ? (
                    <>
                      Tier 1 Founding Rate:{" "}
                      <strong className="text-cta tabular-nums">
                        {formatTierPriceActive("launchKit", "tier1_essential", displayRegion)}
                      </strong>{" "}
                      (Full range {priceRange})
                    </>
                  ) : (
                    <>
                      Published range:{" "}
                      <strong className="text-cta tabular-nums">{priceRange}</strong>
                    </>
                  )}{" "}
                  ·{" "}
                  <Link
                    href={serviceDetailHref(activeService)}
                    className="text-cta font-semibold hover:underline"
                  >
                    View full tier checklist
                  </Link>
                </p>
              </div>
              <Link
                href="#scope-estimator"
                className="text-cta text-xs font-semibold whitespace-nowrap hover:underline"
              >
                Customize in Estimator →
              </Link>
            </div>

            <div className="flex-1">
              {activeTab.slug === "launch-kit" && <LaunchKitMicroDemo />}
              {activeTab.slug === "automation-layer" && <AutomationMicroDemo />}
              {activeTab.slug === "strategy-sprint" && <StrategyMicroDemo />}
            </div>
          </div>
        </div>

        {/* Custom Web Apps & White-Label Agency Builds Callout */}
        <div className="border-border-base bg-surface mt-8 flex flex-col justify-between gap-6 rounded-3xl border p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-wider text-[#FFC24B] uppercase">
                Custom Web Apps &amp; White-Label Agency Builds
              </span>
              <span className="text-cta text-xs font-semibold">
                Optional Monthly Care &amp; Lead-Ops: {carePrice}/mo
              </span>
            </div>
            <h3 className="text-on-background text-xl font-bold">
              Need a custom booking portal, client dashboard, or white-label Next.js + PostgreSQL
              build for your agency?
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Scoped per project after a free call (from{" "}
              <strong className="text-on-background">{customAppsMin}</strong>). Ideal for global
              agencies needing reliable TypeScript delivery or growing businesses ready for custom
              portals.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href={BOOKING_URL}
              external
              className="bg-cta text-on-cta w-auto! max-w-none! px-6 whitespace-nowrap"
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

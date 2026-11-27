"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  Globe,
  Play,
  RotateCcw,
  Smartphone,
  Monitor,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useRegion } from "@/components/RegionProvider";
import { formatPackageRange } from "@/lib/pricing";
import { SERVICES, serviceDetailHref, type Service } from "@/lib/services";

const DEMO_TABS: readonly {
  slug: Service["slug"];
  number: string;
  headline: string;
  outcome: string;
}[] = [
  {
    slug: "strategy-sprint",
    number: "01.",
    headline: "System Architecture & Technical Scoping Blueprint",
    outcome:
      "Lock down exact architecture, database schema, and milestone pricing in 3–10 days before building—with 100% of the sprint fee credited toward your build.",
  },
  {
    slug: "launch-kit",
    number: "02.",
    headline: "Fast Mobile-First Business Websites & Local SEO",
    outcome:
      "Turn local and international searches into real inquiries in 3–7 days. Modular Next.js & Tailwind pages wired to WhatsApp, booking, and payment forms.",
  },
  {
    slug: "automation-layer",
    number: "03.",
    headline: "Business Workflow, CRM & eSewa/Khalti/Fonepay Automation",
    outcome:
      "Sync incoming inquiries, WhatsApp alerts, CRMs, and payment/ledger records via n8n, Zapier, Make, or webhooks so no lead is dropped.",
  },
];

function StrategyMicroDemo() {
  const [layer, setLayer] = useState<"requirements" | "blueprint" | "roadmap">("requirements");

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-on-surface-variant flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <Compass className="text-cta h-4 w-4" />
          Interactive Sprint Deliverable Preview
        </span>
        <div className="flex gap-1 rounded-lg border border-border-base bg-background p-1">
          {(["requirements", "blueprint", "roadmap"] as const).map((tab) => (
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

      {layer === "requirements" && (
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Goals & Constraints", note: "Clear scope boundaries" },
            { name: "Feature Breakdown", note: "User flows & edge cases" },
            { name: "Tech Stack Choice", note: "Documented trade-offs" },
            { name: "Risk Mitigation", note: "Dependencies & blockers" },
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

      {layer === "blueprint" && (
        <div className="border-border-base bg-background/70 space-y-2.5 rounded-xl border p-4 font-mono text-xs">
          <div className="text-cta font-semibold">Client Interface ──▶ API / Webhook Layer</div>
          <div className="text-on-surface-variant">System Components ──▶ Integration Mapping</div>
          <div className="text-on-surface-variant">Auth &amp; Access Rules ──▶ Risk Mitigation Plan</div>
        </div>
      )}

      {layer === "roadmap" && (
        <div className="space-y-2.5">
          {[
            "Phase 1: Core Requirements & Architecture Sign-Off",
            "Phase 2: System Integration & Workflow Sequencing",
            "Phase 3: Testing, Documentation & Production Handoff",
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
        100% of your Strategy Sprint fee can be credited toward a Launch Kit or Automation Layer build.
      </p>
    </div>
  );
}

function LaunchKitMicroDemo() {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-on-surface-variant flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <Globe className="text-cta h-4 w-4" />
          Responsive Delivery Preview
        </span>
        <div className="flex gap-1 rounded-lg border border-border-base bg-background p-1">
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
          <div className="flex items-center justify-between border-b border-border-base pb-2.5">
            <span className="text-on-background text-xs font-bold">Himalayan Mart</span>
            <span className="text-cta text-[11px] font-semibold">Order Now</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="text-on-background text-sm font-bold leading-snug">
              Fast, Mobile-Ready Storefront
            </div>
            <div className="text-on-surface-variant text-xs">
              Static edge delivery · Zero server maintenance
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] font-semibold tabular-nums">
              <div className="border-border-base rounded-lg border p-2">
                <p className="text-cta">99+</p>
                <p className="text-on-surface-variant">Speed</p>
              </div>
              <div className="border-border-base rounded-lg border p-2">
                <p className="text-cta">&lt; 1.2s</p>
                <p className="text-on-surface-variant">Load</p>
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
        Built on Modulifyr&apos;s modular Next.js &amp; Tailwind component system—fast 3–7 day delivery,
        SEO-ready, and Vercel-ready deployment. (Bespoke Figma reserved for Tier 3 or add-on.)
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
    { label: "01. Customer submits order or fee form", detail: "Validated payload received" },
    { label: "02. Invoice & ledger synced automatically", detail: "Record written to Zoho / Sheets" },
    { label: "03. Instant team notification sent", detail: "WhatsApp / Slack alert + retry log" },
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
          Live Pipeline Simulator
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
                <span className="text-xs font-semibold">
                  {active ? "Synced" : "Standby"}
                </span>
              </div>
              <p className="mt-1 text-xs opacity-80">{item.detail}</p>
            </div>
          );
        })}
      </div>

      <p className="text-on-surface-variant border-border-base border-t pt-4 text-xs">
        Built with automatic retry logic and error alerts so silent failures never lose customer data.
      </p>
    </div>
  );
}

export function ServicesSection() {
  const { region } = useRegion();
  const displayRegion = region ?? "NP";
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTab = DEMO_TABS[activeIndex];
  const activeService = SERVICES.find((s) => s.slug === activeTab.slug) ?? SERVICES[0];
  const priceRange = formatPackageRange(activeService.pkgKey, displayRegion);

  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-sans text-sm font-semibold tracking-wider text-[#FFC24B] uppercase">
              Our Services
            </span>
            <h2 className="text-on-background mt-2 text-3xl leading-[1.12] font-bold sm:text-4xl">
              Three Fixed-Scope Packages Built for Measurable Outcomes
            </h2>
            <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
              Explore how each package helps growing businesses cut wasted spend, win customer
              trust online, and save hours of repetitive team work.
            </p>
          </div>

          <Link href="/services" className="group inline-block shrink-0">
            <Button variant="outline" className="w-auto! max-w-none! px-6 whitespace-nowrap">
              Compare All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Interactive Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* LEFT: Interactive Editorial Service List */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {DEMO_TABS.map((tab, idx) => {
              const svc = SERVICES.find((s) => s.slug === tab.slug)!;
              const isActive = idx === activeIndex;
              const range = formatPackageRange(svc.pkgKey, displayRegion);

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
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-cta text-sm font-bold tabular-nums">{tab.number}</span>
                      <span className="text-on-background text-lg font-bold">{svc.title}</span>
                    </div>
                    <span className="text-cta text-xs font-bold whitespace-nowrap tabular-nums">
                      {range}
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                    {tab.outcome}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Interactive Micro-Demo Panel */}
          <div className="border-border-base bg-surface flex flex-col justify-between rounded-3xl border p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border-base pb-5">
              <div>
                <h3 className="text-on-background text-xl font-bold">{activeTab.headline}</h3>
                <p className="text-on-surface-variant mt-1 text-xs">
                  Published range: <strong className="text-cta tabular-nums">{priceRange}</strong> ·{" "}
                  <Link href={serviceDetailHref(activeService)} className="text-cta hover:underline font-semibold">
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
              {activeTab.slug === "strategy-sprint" && <StrategyMicroDemo />}
              {activeTab.slug === "launch-kit" && <LaunchKitMicroDemo />}
              {activeTab.slug === "automation-layer" && <AutomationMicroDemo />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

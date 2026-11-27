"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Clock,
  Settings,
  ChevronRight,
  XCircle,
  AlertCircle,
  GitMerge,
  RefreshCw,
  Activity,
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
    name: "Tier 1 — Basic Connection",
    tierKey: "tier1_basicConnection",
    duration: "1–2 weeks",
    bestFor: "Two tools that need to stay in sync without manual copy-pasting",
    descriptionNepal:
      "Route website or Facebook/Google lead forms into Google Sheets/CRM with instant Email, Telegram & Nepali SMS alerts.",
    descriptionInternational:
      "Connect lead forms directly to your CRM or sheet with instant Email/Telegram alerts and Click-to-WhatsApp handoff.",
    included: [
      "2 tools connected via REST APIs, webhooks & scheduled sync",
      "Website, Facebook, or Google lead form → CRM or Google Sheets sync",
      "Instant alerts via Email, Telegram, or Nepali SMS (Sparrow/Aakash) + Click-to-WhatsApp link",
      "Plain-English handover notes so your team stays in control",
    ],
    notIncluded: [
      "Bidirectional sync across multiple CRMs",
      "Automatic retry queues",
      "Monitoring dashboard UI",
      "Subscriptions or SMS credits for connected platforms",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Multi-System Sync",
    tierKey: "tier2_multiSystemSync",
    duration: "2–4 weeks",
    bestFor: "3 to 5 tools that need payment webhooks, CRM sync & error recovery",
    descriptionNepal:
      "Sync lead forms, eSewa/Khalti/Fonepay payment webhooks, CRM records, and instant team alerts reliably.",
    descriptionInternational:
      "Multi-tool workflow automation connecting forms, Stripe/payment webhooks, CRM, and retry-safe alerts.",
    included: [
      "3–5 tools connected via REST APIs, webhooks & scheduled sync",
      "eSewa, Khalti, Fonepay & Stripe payment confirmation callbacks",
      "Automatic retry logic — failed syncs retry automatically before alerting",
      "Context-rich failure alerts via Email or Telegram",
      "Full documentation of all workflows",
    ],
    notIncluded: [
      "More than 5 systems",
      "Complex conditional branching logic",
      "Custom monitoring UI",
      "Third-party platform fees or SMS credits",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Complex Pipeline",
    tierKey: "tier3_complexPipeline",
    duration: "4–6 weeks",
    bestFor: "6+ systems or operations with branching logic across teams",
    descriptionNepal:
      "End-to-end operational automation from lead capture and payment verification to billing and staff alerts.",
    descriptionInternational:
      "Multi-system workflow pipeline with conditional branching, retry safety, and operational runbooks.",
    included: [
      "6+ tools connected, or conditional branching logic across departments",
      "Multi-step sync across forms, CRMs, Sheets, invoices & payment webhooks",
      "Full error handling, duplicate checks & alert notifications",
      "Workflow health checks & operational runbook for your team",
    ],
    notIncluded: [
      "Custom React admin dashboard UI (scoped separately as custom web app)",
      "Third-party hosting, SaaS, or SMS gateway usage fees",
      "Ongoing monthly changes beyond launch",
    ],
    highlight: false,
  },
] as const;

const whatWeConnect = [
  {
    icon: GitMerge,
    label: "REST APIs, webhooks & scheduled sync",
    desc: "Facebook & Google lead forms, website inquiries, and eSewa/Khalti/Fonepay/Stripe callbacks",
  },
  {
    icon: RefreshCw,
    label: "CRM, Notion & Google Sheets sync",
    desc: "Scheduled or event-driven sync between lead forms, sheets, invoices, and CRMs",
  },
  {
    icon: Activity,
    label: "Click-to-WhatsApp, Email, Telegram & Nepali SMS",
    desc: "Instant follow-up alerts via Email, Telegram, Sparrow/Aakash SMS & Click-to-WhatsApp",
  },
];

export default function AutomationLayerPage() {
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
                <Settings className="h-6 w-6 text-[#2D738D]" />
                <span className="text-xs font-bold tracking-widest text-[#2D738D] uppercase">
                  02 · Lead &amp; Workflow Automation
                </span>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-6xl">
                Automation Layer
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted text-xl leading-relaxed">
                Re-typing customer inquiries into spreadsheets and manually messaging staff costs you
                deals. Automation Layer connects your website forms, Facebook/Google lead ads, CRMs,
                and eSewa/Khalti/Fonepay/Stripe payments via REST APIs, webhooks &amp; scheduled sync.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={BOOKING_URL}
                  external
                  size="lg"
                  className="bg-[#2D738D] hover:bg-[#235b70]"
                >
                  Book a Free 20-Min Checkup
                </Button>
                <Button
                  href="/request-proposal?pkg=automation-layer"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Request Automation Layer
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we connect */}
      <section className="bg-bg-secondary border-border-base border-b py-10">
        <div className="container-custom">
          <p className="text-text-muted mb-6 text-xs font-bold tracking-widest uppercase">
            What we connect
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatWeConnect.map((item, i) => (
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
                    Three Tiers — Priced by System Count and Complexity
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
                  Pricing depends on how many tools we connect and how complex the sync logic needs
                  to be. Start with a free 20-minute checkup if you want help scoping it.
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
                    tier.highlight ? "border-[#2D738D] shadow-xl ring-1 ring-[#2D738D]/20" : ""
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
                      {formatTierPriceActive("automationLayer", tier.tierKey, activeRegion)}
                    </div>
                    {FOUNDING_SLOTS_REMAINING > 0 && (
                      <p className="text-text-muted mt-1 text-xs">
                        Standard:{" "}
                        <span className="line-through">
                          {formatTierPriceStandard("automationLayer", tier.tierKey, activeRegion)}
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

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/request-proposal?pkg=automation-layer&tier=${i + 1}&region=${activeRegion}`}
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

      {/* Concise Ownership & Account FAQ Note */}
      <section className="bg-bg-secondary py-12">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="border-border-base bg-bg-alt max-w-3xl rounded-2xl border p-8">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2D738D]" />
                <h3 className="text-foreground font-bold">
                  How accounts &amp; third-party tools work
                </h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  You provide admin/API credentials during setup so we can wire and test live flows
                  end to end
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  All connected accounts (n8n, Make, Zapier, Sparrow/Aakash SMS credits, CRMs) stay
                  in your business name and are billed directly by those providers at cost
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
                Not sure which tools can connect?
              </h2>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">
                Show us your current forms, sheets, or payment flow on a free 20-minute checkup.
                We&apos;ll map the simplest automation setup right on the call.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={BOOKING_URL}
                  external
                  className="bg-[#2D738D] hover:bg-[#235b70]"
                >
                  Book a Free 20-Min Checkup
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

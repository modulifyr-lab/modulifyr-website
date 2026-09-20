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
  formatTierPriceStandard,
  formatTierPriceFounding,
  FOUNDING_SLOTS_REMAINING,
} from "@/lib/pricing";
import Reveal from "@/components/ui/Reveal";

const tiers = [
  {
    name: "Tier 1 — Basic Connection",
    tierKey: "tier1_basicConnection",
    duration: "1–2 weeks",
    bestFor: "Two systems that need to talk — simple trigger and action flows",
    descriptionNepal: "Automate a single repetitive workflow to save hours every week.",
    descriptionInternational: "Automate one key workflow – simple, effective, and reliable.",
    included: [
      "2 systems connected",
      "Simple trigger → action flow — e.g. form submission creates a record elsewhere",
      "Basic error notification — you get alerted when something breaks",
      "Documentation of the flow so any developer can maintain it",
    ],
    notIncluded: [
      "Bidirectional sync",
      "Retry logic or advanced error handling",
      "Monitoring dashboard",
      "More than 2 systems",
      "Subscriptions to any connected platform",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Multi-System Sync",
    tierKey: "tier2_multiSystemSync",
    duration: "2–4 weeks",
    bestFor: "3 to 5 systems that need reliable data sync with error recovery",
    descriptionNepal: "Connect multiple workflows for end‑to‑end process automation.",
    descriptionInternational: "Multi‑workflow automation with robust error handling.",
    included: [
      "3–5 systems connected",
      "Bidirectional sync where required",
      "Retry logic — failed operations automatically retry before alerting",
      "Basic monitoring — visibility into flow health",
      "Error alerting with context so you know what broke and why",
      "Full documentation of all flows",
    ],
    notIncluded: [
      "More than 5 systems",
      "Complex conditional branching logic",
      "Monitoring dashboard UI",
      "Subscriptions to any connected platform",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Complex Pipeline",
    tierKey: "tier3_complexPipeline",
    duration: "4–6 weeks",
    bestFor: "6+ systems or flows with conditional logic and branching",
    descriptionNepal: "Full automation of your entire operational process – from lead to delivery.",
    descriptionInternational:
      "Enterprise automation suite with SLA‑guaranteed uptime and PO acceptance.",
    included: [
      "6 or more systems connected, or highly complex logic in fewer systems",
      "Multi-directional flows with conditional branching",
      "Full error handling with alerting and context",
      "Monitoring setup — flow health visibility",
      "Comprehensive documentation covering all flows, error states, and recovery steps",
    ],
    notIncluded: [
      "Custom monitoring dashboard UI — monitoring is tool-based, not a built interface",
      "Subscriptions to any connected platform",
      "Ongoing maintenance beyond the build — handled separately",
    ],
    highlight: false,
  },
  {
    name: "Tier 4 — Enterprise Automation",
    tierKey: "tier4_enterpriseAutomation",
    duration: "6–8 weeks",
    bestFor: "Enterprise-scale automation requiring dedicated support and SLAs",
    descriptionNepal:
      "Custom enterprise‑grade automation with full integration and ongoing optimisation.",
    descriptionInternational:
      "Complete enterprise solution with dedicated support, SLAs, and procurement compliance.",
    included: [
      "Unlimited systems connected, or highly complex logic across many systems",
      "Multi-directional flows with advanced conditional branching",
      "Full error handling with alerting, context, and automated recovery",
      "Monitoring setup with custom dashboards and alerting rules",
      "Comprehensive documentation covering all flows, error states, and recovery steps",
      "SLA-backed uptime guarantees",
      "Procurement-compliant documentation and SOWs",
      "Dedicated support channel during business hours",
      "Ongoing optimization and maintenance included for 3 months",
    ],
    notIncluded: [
      "Subscriptions to any connected platform",
      "Custom UI development beyond monitoring dashboards",
    ],
    highlight: false,
  },
] as const;

const whatWeConnect = [
  { icon: GitMerge, label: "APIs & webhooks", desc: "REST, GraphQL, or webhook-based connections" },
  {
    icon: RefreshCw,
    label: "Data sync jobs",
    desc: "Scheduled or event-driven sync between platforms",
  },
  {
    icon: Activity,
    label: "n8n workflows",
    desc: "Visual workflow automation — n8n subscription paid by client",
  },
];

export default function AutomationLayerPage() {
  const { region } = useRegion();
  const activeRegion = region;

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-scale">
              <div className="mb-4 flex items-center gap-2">
                <Settings className="text-[#2D738D] h-6 w-6" />
                <span className="text-[#2D738D] text-xs font-bold tracking-widest uppercase">
                  Integrations & Automation
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
                Connect your systems, eliminate manual data entry, and build reliable flows between
                platforms. Three tiers based on how many systems are involved and how complex the
                logic needs to be.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-proposal">
                  <Button size="lg" className="bg-[#2D738D] hover:bg-[#235b70]">
                    Request an Automation Layer
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Ask a Question First
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we connect */}
      <section className="bg-bg-secondary border-border-base border-b py-10">
        <div className="container-custom">
          <p className="text-text-muted mb-6 text-xs font-bold tracking-widest uppercase">
            What we build
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatWeConnect.map((item, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div className="flex h-full gap-4">
                  <div className="bg-[#2D738D]/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <item.icon className="text-[#2D738D] h-5 w-5" />
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
          <div className="mb-12">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                Four Tiers — Priced by System Count and Complexity
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
                The main drivers of price are how many systems are connected and how complex the
                logic needs to be. Not sure where your project lands? Describe it and we will
                advise.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                    <div className="bg-[#2D738D] absolute top-0 left-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Most Common
                    </div>
                  )}

                  <div>
                    <h3 className="text-foreground mb-1 text-base font-bold">{tier.name}</h3>
                    {activeRegion ? (
                      FOUNDING_SLOTS_REMAINING > 0 ? (
                        <div className="flex flex-col gap-1">
                          <div className="text-text-muted text-xs line-through">
                            {formatTierPriceStandard("automationLayer", tier.tierKey, activeRegion)}
                          </div>
                          <div className="font-heading text-[#2D738D] text-2xl font-bold">
                            {formatTierPriceFounding("automationLayer", tier.tierKey, activeRegion)}
                          </div>
                          <div className="text-text-muted mt-0.5 text-[11px]">
                            Founding client pricing — {FOUNDING_SLOTS_REMAINING} spots remaining.
                          </div>
                        </div>
                      ) : (
                        <div className="font-heading text-[#2D738D] text-2xl font-bold">
                          {formatTierPriceStandard("automationLayer", tier.tierKey, activeRegion)}
                        </div>
                      )
                    ) : (
                      <div className="text-text-muted text-sm font-semibold">
                        Select region for pricing
                      </div>
                    )}
                    <div className="text-brand-teal mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase">
                      <Clock className="h-3 w-3" /> {tier.duration}
                    </div>
                  </div>

                  <p className="text-text-muted border-border-base border-t pt-3 text-xs font-semibold tracking-wider uppercase">
                    Best for: {tier.bestFor}
                  </p>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {tier.descriptionInternational}
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
                      href={`/request-proposal?pkg=automation-layer&tier=${i + 1}`}
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

      {/* Third-party disclaimer */}
      <section className="bg-bg-secondary py-12">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="border-border-base max-w-3xl rounded-2xl border bg-white p-8">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="text-[#2D738D] mt-0.5 h-5 w-5 shrink-0" />
                <h3 className="text-foreground font-bold">What you are responsible for</h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#2D738D] mt-0.5 h-4 w-4 shrink-0" />
                  API credentials, access tokens, and admin access to all systems being connected —
                  we cannot build integrations without this
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#2D738D] mt-0.5 h-4 w-4 shrink-0" />
                  Timely responses during the build window — blocked credentials or missing access
                  stall the entire project
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-[#2D738D] mt-0.5 h-4 w-4 shrink-0" />
                  Any documentation on the APIs or systems involved if available
                </li>
              </ul>
              <p className="text-text-muted border-border-base mt-6 border-t pt-4 text-xs leading-relaxed">
                <strong className="text-foreground">
                  Third-party tool costs are entirely your responsibility.
                </strong>{" "}
                Modulifyr does not cover, pay for, or manage subscriptions to any platform being
                integrated — including but not limited to n8n cloud, Make, Zapier, any SaaS
                subscription, API usage fees, or any other external service. These are direct client
                costs, billed to and owned by the client.
              </p>
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
                Not sure which tier covers your setup?
              </h2>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">
                List the systems you need connected and what data needs to move between them. We
                will tell you which tier fits and whether your setup has any scope complications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[#2D738D] hover:bg-[#235b70]">
                    Describe Your Setup
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Back to All Services
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

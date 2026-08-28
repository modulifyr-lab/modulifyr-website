"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Clock,
  Search,
  ChevronRight,
  XCircle,
  AlertCircle,
  FileText,
  Map,
  Layers,
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
    name: "Tier 1 — Basic Scoping",
    tierKey: "tier1_basicScoping",
    duration: "3–5 business days",
    bestFor: "Single product or feature with a relatively clear scope",
    descriptionNepal: "Get a clear strategic roadmap tailored to your business – fast and focused.",
    descriptionInternational:
      "Rapid strategic planning to align your product vision with market needs.",
    included: [
      "1 async discovery session — written brief or single call",
      "Requirements document covering goals, constraints, and assumptions",
      "High-level tech stack recommendation with reasoning",
      "Simple phased roadmap — phases only, no hour estimates",
    ],
    notIncluded: [
      "Architecture diagrams or system blueprints",
      "Risk analysis document",
      "Multiple stakeholder sessions",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Full Discovery",
    tierKey: "tier2_fullDiscovery",
    duration: "1 week",
    bestFor: "Multi-feature projects or systems with 2–4 moving parts",
    descriptionNepal: "Map user journeys and identify key opportunities for your product.",
    descriptionInternational: "Strategic user‑flow mapping with actionable insights.",
    included: [
      "2–3 structured discovery calls or workshops",
      "Detailed requirements breakdown per feature area",
      "Architecture blueprint with system and component diagram",
      "Tech stack recommendation with justification",
      "Phased roadmap with rough time estimates per phase",
    ],
    notIncluded: [
      "Risk analysis document",
      "Legacy system audit",
      "More than 3 stakeholder sessions",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Complex Architecture",
    tierKey: "tier3_complexArchitecture",
    duration: "1–2 weeks",
    bestFor: "Large, unclear, legacy, or multi-team scope",
    descriptionNepal:
      "Comprehensive strategy covering market positioning, feature prioritisation, and go‑to‑market.",
    descriptionInternational:
      "Full strategic package including competitive analysis and feature prioritisation.",
    included: [
      "Full workshop series — 3 to 5 sessions across stakeholders",
      "Complete architecture blueprint",
      "Integration mapping across all connected systems",
      "Risk analysis and mitigation plan",
      "Detailed phased roadmap with dependencies and sequencing",
    ],
    notIncluded: [],
    highlight: false,
  },
  {
    name: "Tier 4 — Enterprise Strategy",
    tierKey: "tier4_enterpriseStrategy",
    duration: "2–3 weeks",
    bestFor: "Enterprise-scale initiatives requiring SLA-backed delivery",
    descriptionNepal:
      "All‑in‑one strategy with a detailed implementation plan to hit the ground running.",
    descriptionInternational:
      "Enterprise‑grade strategy with SLA‑backed delivery and procurement‑friendly documentation.",
    included: [
      "Full workshop series — 5+ sessions across all stakeholders",
      "Complete architecture blueprint with technical specifications",
      "Integration mapping across all connected systems",
      "Risk analysis and mitigation plan",
      "Detailed phased roadmap with dependencies, sequencing, and resource estimates",
      "SLA-backed delivery commitments",
      "Procurement-friendly documentation and SOWs",
    ],
    notIncluded: [],
    highlight: false,
  },
] as const;

const whatYouOwnAfter = [
  {
    icon: FileText,
    label: "Requirements document",
    desc: "Written, structured, shareable with any team or investor",
  },
  {
    icon: Map,
    label: "Delivery roadmap",
    desc: "Phased plan with clear sequencing — not a vague list of features",
  },
  {
    icon: Layers,
    label: "Architecture blueprint",
    desc: "Tier 2 and 3 only — system diagram you own and can build from",
  },
];

// Custom 3D Tilt Card (if needed, but restricted on pricing tiers per instruction)
// Remember: Pricing page and pricing-tier-like sections should not use too much tilt to keep readability clean, but we can have soft fade-ups/reveals.

export default function StrategySprintPage() {
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
                <Search className="text-brand-orange h-6 w-6" />
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                  Discovery & Strategy
                </span>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl text-white">Strategy Sprint</h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted text-xl leading-relaxed">
                Most projects fail because scope was never properly defined. A Strategy Sprint gives
                you a requirements document, architecture blueprint, and phased roadmap before any
                code is written — so you know exactly what you are building and what it will cost.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-proposal">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                    Request a Strategy Sprint
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

      {/* What you own after */}
      <section className="bg-bg-secondary border-border-base border-b py-12">
        <div className="container-custom">
          <p className="text-text-muted mb-8 text-xs font-bold tracking-widest uppercase">
            What you own after the sprint
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatYouOwnAfter.map((item, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div className="flex gap-4 h-full">
                  <div className="bg-brand-orange/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <item.icon className="text-brand-orange h-5 w-5" />
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
                Four Tiers — Priced by Complexity
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
                Price increases with scope complexity and deliverable count. Not sure which fits?
                Describe your project in a contact message — we will tell you.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {tiers.map((tier, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 80}>
                <Card
                  className={`relative flex flex-col gap-5 h-full ${
                    tier.highlight ? "border-brand-orange ring-brand-orange/20 shadow-xl ring-1" : ""
                  }`}
                >
                  {tier.highlight && (
                    <div className="bg-brand-orange absolute top-0 left-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Most Common
                    </div>
                  )}

                  <div>
                    <h3 className="text-foreground mb-1 text-base font-bold">{tier.name}</h3>
                    {activeRegion ? (
                      FOUNDING_SLOTS_REMAINING > 0 ? (
                        <div className="flex flex-col gap-1">
                          <div className="text-text-muted text-xs line-through">
                            {formatTierPriceStandard("strategySprint", tier.tierKey, activeRegion)}
                          </div>
                          <div className="font-heading text-brand-orange text-2xl font-bold">
                            {formatTierPriceFounding("strategySprint", tier.tierKey, activeRegion)}
                          </div>
                          <div className="text-text-muted text-[11px] mt-0.5">
                            Founding client pricing — {FOUNDING_SLOTS_REMAINING} spots remaining.
                          </div>
                        </div>
                      ) : (
                        <div className="font-heading text-brand-orange text-2xl font-bold">
                          {formatTierPriceStandard("strategySprint", tier.tierKey, activeRegion)}
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

                  {tier.notIncluded.length > 0 && (
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
                  )}

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/request-proposal?pkg=strategy-sprint&tier=${i + 1}`}
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
                <AlertCircle className="text-brand-orange mt-0.5 h-5 w-5 shrink-0" />
                <h3 className="text-foreground font-bold">What you are responsible for</h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                  Access to relevant stakeholders during the sprint window — delays on your end extend
                  the timeline
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                  Any existing documentation, system diagrams, or business process docs you want
                  incorporated
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                  Timely responses during discovery — a sprint cannot run one direction for days then
                  reverse
                </li>
              </ul>
              <p className="text-text-muted border-border-base mt-6 border-t pt-4 text-xs leading-relaxed">
                <strong className="text-foreground">
                  Third-party tool costs are entirely your responsibility.
                </strong>{" "}
                Modulifyr does not cover, pay for, or manage costs for any external platforms —
                including but not limited to Vercel, Netlify, any domain registrar, n8n cloud,
                Supabase, any SaaS subscription, or API usage fees. These are direct client costs,
                billed to and owned by the client.
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
              <h2 className="font-heading mb-3 text-2xl font-bold text-white">Not sure which tier fits?</h2>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">
                Describe your project briefly. We will tell you which tier is appropriate and why — no
                commitment required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-brand-orange hover:bg-brand-orange/90">
                    Describe Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
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

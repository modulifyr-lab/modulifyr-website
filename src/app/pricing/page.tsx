"use client";

import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Clock,
  FileText,
  BarChart4,
  RefreshCw,
  MapPin,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";

// ─── Pricing data ────────────────────────────────────────────────────────────

const pricingNepal = [
  {
    title: "Discovery Phase",
    price: "NPR 2,00,000 – 4,50,000",
    subprice: "approx. $1,500 – $3,400",
    duration: "2-4 Weeks",
    desc: "A focused engagement to define scope, architecture, and roadmap for a new system.",
    features: [
      "Discovery report & audit",
      "System architecture diagram",
      "Prioritized product backlog",
      "High-level roadmap & estimate",
      "Technical feasibility study",
    ],
    cta: "Start Discovery",
    highlight: false,
  },
  {
    title: "Pilot / Proof-of-Value",
    price: "NPR 6,00,000 – 15,00,000",
    subprice: "approx. $4,500 – $11,000",
    duration: "4-8 Weeks",
    desc: "Development of a working prototype for a critical workflow or integration.",
    features: [
      "Working prototype (core flow)",
      "Simulated production data",
      "Modular technical blueprint",
      "Fixed-fee delivery",
      "Signed IP & code handoff",
    ],
    cta: "Book Pilot Briefing",
    highlight: true,
  },
  {
    title: "Full Build / Team",
    price: "Custom Quote",
    subprice: "Starting NPR 15,00,000+",
    duration: "Milestone-based",
    desc: "End-to-end development of a complete modular system or dedicated engineering team.",
    features: [
      "Production-ready modular system",
      "Full documentation & SRE",
      "Milestone-based payments",
      "Scalable engineering team",
      "Long-term support & SLA",
    ],
    cta: "Request Proposal",
    highlight: false,
  },
];

const pricingInternational = [
  {
    title: "Discovery Phase",
    price: "$6,000 – $12,000",
    subprice: "USD · fixed fee",
    duration: "2-4 Weeks",
    desc: "A focused engagement to define scope, architecture, and roadmap for a new system.",
    features: [
      "Discovery report & audit",
      "System architecture diagram",
      "Prioritized product backlog",
      "High-level roadmap & estimate",
      "Technical feasibility study",
    ],
    cta: "Start Discovery",
    highlight: false,
  },
  {
    title: "Pilot / Proof-of-Value",
    price: "$15,000 – $35,000",
    subprice: "USD · fixed fee",
    duration: "4-8 Weeks",
    desc: "Development of a working prototype for a critical workflow or integration.",
    features: [
      "Working prototype (core flow)",
      "Simulated production data",
      "Modular technical blueprint",
      "Fixed-fee delivery",
      "Signed IP & code handoff",
    ],
    cta: "Book Pilot Briefing",
    highlight: true,
  },
  {
    title: "Full Build / Team",
    price: "Custom Quote",
    subprice: "Starting $40,000+",
    duration: "Milestone-based",
    desc: "End-to-end development of a complete modular system or dedicated engineering team.",
    features: [
      "Production-ready modular system",
      "Full documentation & SRE",
      "Milestone-based payments",
      "Scalable engineering team",
      "Long-term support & SLA",
    ],
    cta: "Request Proposal",
    highlight: false,
  },
];

const engagementModels = [
  {
    title: "Fixed-Price Milestone",
    icon: BarChart4,
    desc: "Clear deliverables and defined budgets per milestone. Ideal for Pilot and Full Build phases.",
  },
  {
    title: "Time & Materials",
    icon: Clock,
    desc: "Flexible resourcing for discovery and iterative development where scope is evolving.",
  },
  {
    title: "Monthly Retainer",
    icon: RefreshCw,
    desc: "Ongoing engineering support, maintenance, and technical consulting with a set capacity.",
  },
  {
    title: "SLA-based Support",
    icon: ShieldCheck,
    desc: "Uptime-guaranteed maintenance agreements tailored to system criticality.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const { region, setRegion } = useRegion();

  // Default to international if no choice yet (avoids blank state)
  const isNepal = region === "nepal";
  const tiers = isNepal ? pricingNepal : pricingInternational;

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-bg-light border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="font-heading text-brand-navy mb-6 text-4xl font-bold md:text-6xl">
              Transparent <span className="text-brand-orange">Engagement</span> Models
            </h1>
            <p className="text-text-secondary max-w-2xl text-xl leading-relaxed">
              We provide representative pricing bands and structured engagement models designed for
              procurement-friendly partnerships. No hidden costs.
            </p>
          </div>
        </div>
      </section>

      {/* Region Switcher */}
      <section className="bg-bg-secondary border-border-base border-b py-8">
        <div className="container-custom">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="text-text-muted text-sm font-bold tracking-widest uppercase">
              Showing prices for:
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => setRegion("nepal")}
                className={`flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-semibold transition-all ${
                  isNepal
                    ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                    : "border-border-base text-text-secondary hover:border-brand-orange/50 bg-white"
                }`}
              >
                <MapPin className="h-4 w-4" /> Nepal / South Asia (NPR)
              </button>
              <button
                onClick={() => setRegion("international")}
                className={`flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-semibold transition-all ${
                  !isNepal
                    ? "border-brand-teal bg-brand-teal/10 text-brand-teal"
                    : "border-border-base text-text-secondary hover:border-brand-teal/50 bg-white"
                }`}
              >
                <Globe className="h-4 w-4" /> International (USD)
              </button>
            </div>
            <span className="text-text-muted text-xs italic">
              {isNepal
                ? "Rates calibrated for the Nepal and South Asian market"
                : "Rates reflect global mid-market agency standards"}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative overflow-hidden py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`relative flex h-full flex-col transition-all ${
                  tier.highlight
                    ? "border-brand-orange z-10 scale-105 shadow-xl hover:shadow-2xl"
                    : "hover:border-brand-navy"
                }`}
              >
                {tier.highlight && (
                  <div className="bg-brand-orange absolute top-0 right-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    Recommended Start
                  </div>
                )}
                <div className="mb-8 flex flex-col gap-1">
                  <h3 className="text-text-muted text-sm font-bold tracking-widest uppercase">
                    {tier.title}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-heading text-brand-navy text-2xl font-bold md:text-3xl">
                      {tier.price}
                    </span>
                  </div>
                  <span className="text-text-muted text-xs">{tier.subprice}</span>
                  <div className="text-brand-teal mt-1 flex items-center gap-2 text-xs font-semibold uppercase">
                    <Clock className="h-4 w-4" /> {tier.duration}
                  </div>
                </div>

                <p className="text-text-secondary mb-8 flex-grow text-sm leading-relaxed">
                  {tier.desc}
                </p>

                <ul className="mb-8 space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-3 text-sm">
                      <CheckCircle2 className="text-brand-teal mt-0.5 h-4 w-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/request-proposal" className="w-full">
                  <Button
                    variant={tier.highlight ? "primary" : "outline"}
                    className="group w-full justify-between"
                  >
                    {tier.cta}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Context note */}
          <div className="mt-10 text-center">
            <p className="text-text-muted text-sm">
              {isNepal
                ? "All NPR figures are indicative ranges. Final pricing confirmed in written SOW after discovery."
                : "All USD figures are indicative ranges. Final pricing confirmed in written SOW after discovery."}{" "}
              <button
                onClick={() => setRegion(isNepal ? "international" : "nepal")}
                className="text-brand-orange font-semibold hover:underline"
              >
                Switch to {isNepal ? "international USD pricing" : "Nepal NPR pricing"}
              </button>
            </p>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute top-1/2 left-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" />
      </section>

      {/* Engagement Models */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl px-4 text-center">
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
              Flexible Engagement Models
            </h2>
            <p className="text-text-secondary">
              We adapt to your organization's internal procurement processes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="border-border-base flex flex-col gap-4 rounded-2xl border bg-white p-8"
              >
                <model.icon className="text-brand-orange h-8 w-8" />
                <h4 className="font-heading text-brand-navy font-bold">{model.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-brand-navy flex flex-col items-center gap-12 rounded-3xl p-12 text-white md:flex-row md:p-16">
            <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold">
                Procurement-Friendly{" "}
                <span className="text-brand-orange">Digital Infrastructure</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FileText className="text-brand-gold h-5 w-5" />
                  <span className="text-text-muted">Standard SOWs & Proposals (PDF/RFP)</span>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="text-brand-gold h-5 w-5" />
                  <span className="text-text-muted">NDA & Confidentiality Agreements Ready</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-brand-gold h-5 w-5" />
                  <span className="text-text-muted">Accepted POs & Structured Invoicing</span>
                </div>
              </div>
            </div>
            <div className="flex flex-grow justify-center">
              <div className="relative flex h-80 w-64 rotate-3 flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="h-2 w-3/4 rounded-full bg-white/20" />
                <div className="h-2 w-1/2 rounded-full bg-white/10" />
                <div className="mt-4 space-y-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-1 w-full rounded-full bg-white/5" />
                  ))}
                </div>
                <div className="mt-auto flex justify-between">
                  <div className="bg-brand-orange/30 h-4 w-12 rounded" />
                  <div className="bg-brand-teal/30 h-4 w-12 rounded" />
                </div>
                <div className="from-brand-navy/60 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24">
        <div className="container-custom text-center">
          <h3 className="font-heading text-brand-navy mb-4 text-2xl font-bold">
            Have questions about our pricing structure?
          </h3>
          <p className="text-text-secondary mb-8">
            Every project is unique. Request a custom estimate for your specific engineering
            requirements.
          </p>
          <Link href="/request-proposal">
            <Button variant="outline" size="lg">
              Send Request for Proposal (RFP)
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

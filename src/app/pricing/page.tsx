"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Clock,
  FileText,
  BarChart4,
  RefreshCw,
  MapPin,
  Globe,
  Search,
  Layers,
  LayoutGrid,
  Settings,
  Cloud,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";

// ─── All 8 packages ───────────────────────────────────────────────────────────

const packagesNepal = [
  {
    icon: Search,
    internalName: "Discovery Sprint",
    clientName: "Strategy Sprint",
    price: "NPR 2,00,000 – 6,60,000",
    subprice: "approx. $1,500–$5,000",
    duration: "1–2 Weeks",
    desc: "For new clients, unclear scope, architecture decisions, and system rescues.",
    features: [
      "Workshops & requirement breakdown",
      "Architecture blueprint",
      "Scope definition & roadmap",
      "Tech stack recommendation",
    ],
    cta: "Start Discovery",
    highlight: false,
    bestFor: "New projects / unclear scope",
  },
  {
    icon: Globe,
    internalName: "Static Website Package",
    clientName: "Launch Kit",
    price: "NPR 3,30,000 – 10,60,000",
    subprice: "approx. $2,500–$8,000",
    duration: "1–3 Weeks",
    desc: "Landing pages, marketing sites, brochure sites, and documentation.",
    features: [
      "4–8 responsive pages",
      "SEO basics & analytics",
      "Content editing flow",
      "Cloudflare Pages / Vercel deploy",
    ],
    cta: "Request Launch Kit",
    highlight: false,
    bestFor: "Marketing & content sites",
  },
  {
    icon: Layers,
    internalName: "Web App MVP Package",
    clientName: "Product MVP",
    price: "NPR 15,90,000 – 59,60,000",
    subprice: "approx. $12,000–$45,000",
    duration: "4–10 Weeks",
    desc: "SaaS MVPs, portals, dashboards, and client-facing product systems.",
    features: [
      "Authentication & database setup",
      "Core workflows & admin panel",
      "QA pass & launch support",
      "Production deployment",
    ],
    cta: "Build Your MVP",
    highlight: true,
    bestFor: "SaaS & product teams",
  },
  {
    icon: LayoutGrid,
    internalName: "Internal Tool Package",
    clientName: "Internal Ops System",
    price: "NPR 10,60,000 – 39,80,000",
    subprice: "approx. $8,000–$30,000",
    duration: "3–8 Weeks",
    desc: "Operations systems, approval flows, HR tools, and internal CRM-like apps.",
    features: [
      "Roles & permissions system",
      "CRUD workflows & reporting",
      "Audit trail basics",
      "Integrations when needed",
    ],
    cta: "Build Internal Tool",
    highlight: false,
    bestFor: "Operational teams",
  },
  {
    icon: Settings,
    internalName: "Integrations & Automation",
    clientName: "Automation Layer",
    price: "NPR 4,00,000 – 26,50,000",
    subprice: "approx. $3,000–$20,000",
    duration: "1–6 Weeks",
    desc: "API development, workflow automation, data sync, and system-to-system connections.",
    features: [
      "API implementation & webhooks",
      "Sync jobs & retry logic",
      "Monitoring & error handling",
      "Third-party integrations",
    ],
    cta: "Automate Workflows",
    highlight: false,
    bestFor: "Integration-focused",
  },
  {
    icon: RefreshCw,
    internalName: "Modernization / Refactoring",
    clientName: "Modernization Sprint",
    price: "NPR 19,90,000 – 1,06,00,000+",
    subprice: "approx. $15,000–$80,000+",
    duration: "4–16 Weeks",
    desc: "Legacy systems, performance issues, cloud migration, and modular cleanup.",
    features: [
      "Code audit & refactor plan",
      "Modularisation & migration",
      "Performance optimisation",
      "Zero-downtime approach",
    ],
    cta: "Modernise Your Stack",
    highlight: false,
    bestFor: "Legacy systems",
  },
  {
    icon: Cloud,
    internalName: "Infrastructure & SRE Setup",
    clientName: "Platform Setup",
    price: "NPR 6,60,000 – 33,20,000",
    subprice: "approx. $5,000–$25,000",
    duration: "1–4 Weeks",
    desc: "Cloud setup, CI/CD pipelines, security hardening, and release automation.",
    features: [
      "Cloud environment & Terraform IaC",
      "GitHub Actions CI/CD",
      "Logging, monitoring & alerting",
      "Secrets & security baseline",
    ],
    cta: "Set Up Platform",
    highlight: false,
    bestFor: "Cloud-native teams",
  },
  {
    icon: Users,
    internalName: "Dedicated Product Team Retainer",
    clientName: "Engineering Retainer",
    price: "NPR 5,30,000 – 23,90,000+ /mo",
    subprice: "approx. $4,000–$18,000+ /mo",
    duration: "Monthly · 3-month min",
    desc: "Fixed monthly engineering capacity, codebase ownership, and roadmap execution.",
    features: [
      "1 Senior Full-Stack + 1 specialist",
      "Codebase ownership continuity",
      "Monthly roadmap execution",
      "No SOW per feature",
    ],
    cta: "Start Retainer",
    highlight: false,
    bestFor: "Ongoing product work",
  },
];

const packagesInternational = [
  {
    icon: Search,
    internalName: "Discovery Sprint",
    clientName: "Strategy Sprint",
    price: "$1,500 – $5,000",
    subprice: "USD · fixed fee",
    duration: "1–2 Weeks",
    desc: "For new clients, unclear scope, architecture decisions, and system rescues.",
    features: [
      "Workshops & requirement breakdown",
      "Architecture blueprint",
      "Scope definition & roadmap",
      "Tech stack recommendation",
    ],
    cta: "Start Discovery",
    highlight: false,
    bestFor: "New projects / unclear scope",
  },
  {
    icon: Globe,
    internalName: "Static Website Package",
    clientName: "Launch Kit",
    price: "$2,500 – $8,000",
    subprice: "USD · fixed fee",
    duration: "1–3 Weeks",
    desc: "Landing pages, marketing sites, brochure sites, and documentation.",
    features: [
      "4–8 responsive pages",
      "SEO basics & analytics",
      "Content editing flow",
      "Cloudflare Pages / Vercel deploy",
    ],
    cta: "Request Launch Kit",
    highlight: false,
    bestFor: "Marketing & content sites",
  },
  {
    icon: Layers,
    internalName: "Web App MVP Package",
    clientName: "Product MVP",
    price: "$12,000 – $45,000",
    subprice: "USD · fixed fee",
    duration: "4–10 Weeks",
    desc: "SaaS MVPs, portals, dashboards, and client-facing product systems.",
    features: [
      "Authentication & database setup",
      "Core workflows & admin panel",
      "QA pass & launch support",
      "Production deployment",
    ],
    cta: "Build Your MVP",
    highlight: true,
    bestFor: "SaaS & product teams",
  },
  {
    icon: LayoutGrid,
    internalName: "Internal Tool Package",
    clientName: "Internal Ops System",
    price: "$8,000 – $30,000",
    subprice: "USD · fixed fee",
    duration: "3–8 Weeks",
    desc: "Operations systems, approval flows, HR tools, and internal CRM-like apps.",
    features: [
      "Roles & permissions system",
      "CRUD workflows & reporting",
      "Audit trail basics",
      "Integrations when needed",
    ],
    cta: "Build Internal Tool",
    highlight: false,
    bestFor: "Operational teams",
  },
  {
    icon: Settings,
    internalName: "Integrations & Automation",
    clientName: "Automation Layer",
    price: "$3,000 – $20,000",
    subprice: "USD · fixed fee",
    duration: "1–6 Weeks",
    desc: "API development, workflow automation, data sync, and system-to-system connections.",
    features: [
      "API implementation & webhooks",
      "Sync jobs & retry logic",
      "Monitoring & error handling",
      "Third-party integrations",
    ],
    cta: "Automate Workflows",
    highlight: false,
    bestFor: "Integration-focused",
  },
  {
    icon: RefreshCw,
    internalName: "Modernization / Refactoring",
    clientName: "Modernization Sprint",
    price: "$15,000 – $80,000+",
    subprice: "USD · fixed fee",
    duration: "4–16 Weeks",
    desc: "Legacy systems, performance issues, cloud migration, and modular cleanup.",
    features: [
      "Code audit & refactor plan",
      "Modularisation & migration",
      "Performance optimisation",
      "Zero-downtime approach",
    ],
    cta: "Modernise Your Stack",
    highlight: false,
    bestFor: "Legacy systems",
  },
  {
    icon: Cloud,
    internalName: "Infrastructure & SRE Setup",
    clientName: "Platform Setup",
    price: "$5,000 – $25,000",
    subprice: "USD · fixed fee",
    duration: "1–4 Weeks",
    desc: "Cloud setup, CI/CD pipelines, security hardening, and release automation.",
    features: [
      "Cloud environment & Terraform IaC",
      "GitHub Actions CI/CD",
      "Logging, monitoring & alerting",
      "Secrets & security baseline",
    ],
    cta: "Set Up Platform",
    highlight: false,
    bestFor: "Cloud-native teams",
  },
  {
    icon: Users,
    internalName: "Dedicated Product Team Retainer",
    clientName: "Engineering Retainer",
    price: "$4,000 – $18,000+ /mo",
    subprice: "USD · monthly",
    duration: "Monthly · 3-month min",
    desc: "Fixed monthly engineering capacity, codebase ownership, and roadmap execution.",
    features: [
      "1 Senior Full-Stack + 1 specialist",
      "Codebase ownership continuity",
      "Monthly roadmap execution",
      "No SOW per feature",
    ],
    cta: "Start Retainer",
    highlight: false,
    bestFor: "Ongoing product work",
  },
];

const engagementModels = [
  {
    title: "Fixed-Price Milestone",
    icon: BarChart4,
    desc: "Clear deliverables and defined budgets per milestone. Best for Discovery, Launch Kit, MVP, and platform builds.",
  },
  {
    title: "Time & Materials",
    icon: Clock,
    desc: "Flexible resourcing for discovery and iterative development where scope is still evolving.",
  },
  {
    title: "Monthly Retainer",
    icon: RefreshCw,
    desc: "Ongoing engineering capacity with a set monthly budget. No re-scoping, no handoffs, no ramp-up cost.",
  },
  {
    title: "SLA-based Support",
    icon: ShieldCheck,
    desc: "Uptime-guaranteed maintenance agreements tailored to system criticality — up to 99.9% uptime.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const { region, setRegion } = useRegion();
  const isNepal = region === "nepal";
  const packages = isNepal ? packagesNepal : packagesInternational;

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-bg-light border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="font-heading text-brand-navy mb-6 text-4xl font-bold md:text-6xl">
              Simple Packages, <span className="text-brand-orange">Transparent Prices</span>
            </h1>
            <p className="text-text-secondary max-w-2xl text-xl leading-relaxed">
              Eight clearly defined packages covering everything from a 1-week discovery sprint to a
              full ongoing engineering retainer. Fixed fees when scope is clear; retainer when work
              is ongoing.
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

      {/* All 8 packages */}
      <section className="relative overflow-hidden py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`relative flex h-full flex-col transition-all ${
                  pkg.highlight
                    ? "border-brand-orange z-10 shadow-xl hover:shadow-2xl lg:col-span-2"
                    : "hover:border-brand-navy"
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-brand-orange absolute top-0 right-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    Most Popular
                  </div>
                )}

                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-bg-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <pkg.icon className="text-brand-orange h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-brand-navy text-sm font-bold">{pkg.clientName}</h3>
                    <p className="text-text-muted text-[10px] font-medium tracking-wider uppercase">
                      {pkg.internalName}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="font-heading text-brand-navy text-xl font-bold">{pkg.price}</div>
                  <div className="text-text-muted text-xs">{pkg.subprice}</div>
                  <div className="text-brand-teal mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase">
                    <Clock className="h-3 w-3" /> {pkg.duration}
                  </div>
                </div>

                <p className="text-text-secondary mb-5 flex-grow text-sm leading-relaxed">
                  {pkg.desc}
                </p>

                <ul className="mb-6 space-y-2.5">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="text-brand-teal mt-0.5 h-3.5 w-3.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/request-proposal" className="w-full">
                  <Button
                    variant={pkg.highlight ? "primary" : "outline"}
                    className="group w-full justify-between text-sm"
                  >
                    {pkg.cta}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-text-muted text-sm">
              All figures are indicative ranges. Final pricing confirmed in a written SOW after
              discovery.{" "}
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

      {/* Decision flow */}
      <section className="bg-bg-secondary py-16">
        <div className="container-custom">
          <h2 className="font-heading text-brand-navy mb-8 text-2xl font-bold">
            Not sure which package to start with?
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                q: "Scope is unclear or brand-new project",
                a: "Start with Strategy Sprint (Discovery)",
                color: "border-brand-orange",
              },
              {
                q: "Ongoing product work or feature delivery",
                a: "Engineering Retainer is the best fit",
                color: "border-brand-teal",
              },
              {
                q: "Scope is clear and defined",
                a: "Go straight to fixed-fee: MVP, Internal Tool, or Platform Setup",
                color: "border-brand-navy",
              },
            ].map((item, i) => (
              <div key={i} className={`border-l-4 ${item.color} rounded-xl bg-white p-6`}>
                <p className="text-text-muted mb-2 text-xs font-bold tracking-widest uppercase">
                  If…
                </p>
                <p className="text-brand-navy mb-3 font-semibold">{item.q}</p>
                <p className="text-brand-orange text-sm font-bold">→ {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl px-4 text-center">
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
              Flexible Engagement Models
            </h2>
            <p className="text-text-secondary">
              We adapt to your organisation's internal procurement processes.
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
              <div className="flex flex-col gap-4">
                <Link href="/request-proposal">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                    Request Proposal
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Speak with an Engineer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

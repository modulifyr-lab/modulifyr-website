"use client";

import { useState } from "react";
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
import { RegionSelector } from "@/components/RegionSelector";
import { formatTierPrice } from "@/lib/pricing";
import { REGIONS } from "@/lib/regions";
import type { Region } from "@/lib/regions";
import Reveal from "@/components/ui/Reveal";

// ─── Sunset Trigger Configuration ─────────────────────────────────────────────
// Hardcoded toggle - set to true when sunset trigger fires (5 engagements or 2027-01-15)
const SUNSET_TRIGGERED = false;

// ─── Package Configs (3 active + 5 coming soon) ──────────────────────────────
type PackageKey =
  | "strategySprint"
  | "launchKit"
  | "automationLayer"
  | "productMVP"
  | "internalOps"
  | "modernization"
  | "platformSetup"
  | "engineeringRetainer";

interface PackageConfig {
  key: PackageKey;
  icon: React.ComponentType<{ className?: string }>;
  internalName: string;
  clientName: string;
  price?: string;
  subprice?: string;
  duration?: string;
  desc: string;
  features: string[];
  cta: string;
  link?: string;
  highlight?: boolean;
  bestFor: string;
  comingSoon: boolean;
  tierNames?: string[];
}

const packageConfigs: PackageConfig[] = [
  {
    key: "strategySprint",
    icon: Search,
    internalName: "Discovery Sprint",
    clientName: "Strategy Sprint",
    duration: "1–2 Weeks",
    desc: "For new clients, unclear scope, architecture decisions, and system rescues.",
    features: [
      "Workshops & requirement breakdown",
      "Architecture blueprint",
      "Scope definition & roadmap",
      "Tech stack recommendation",
    ],
    cta: "View Tiers",
    link: "/services/strategy-sprint",
    highlight: false,
    bestFor: "New projects / unclear scope",
    comingSoon: false,
    tierNames: [
      "Tier 1 — Basic Scoping",
      "Tier 2 — Full Discovery",
      "Tier 3 — Complex Architecture",
      "Tier 4 — Enterprise Strategy",
    ],
  },
  {
    key: "launchKit",
    icon: Globe,
    internalName: "Static Website Package",
    clientName: "Launch Kit",
    duration: "1–3 Weeks",
    desc: "Landing pages, marketing sites, brochure sites, and documentation.",
    features: [
      "4–8 responsive pages",
      "SEO basics & analytics",
      "Content editing flow",
      "Cloudflare Pages / Vercel deploy",
    ],
    cta: "View Tiers",
    link: "/services/launch-kit",
    highlight: false,
    bestFor: "Marketing & content sites",
    comingSoon: false,
    tierNames: [
      "Tier 1 — Essential",
      "Tier 2 — Business",
      "Tier 3 — Premium",
      "Tier 4 — Enterprise Launch",
    ],
  },
  {
    key: "automationLayer",
    icon: Settings,
    internalName: "Integrations & Automation",
    clientName: "Automation Layer",
    duration: "1–6 Weeks",
    desc: "API development, workflow automation, data sync, and system-to-system connections.",
    features: [
      "API implementation & webhooks",
      "Sync jobs & retry logic",
      "Monitoring & error handling",
      "Third-party integrations",
    ],
    cta: "View Tiers",
    link: "/services/automation-layer",
    highlight: false,
    bestFor: "Integration-focused",
    comingSoon: false,
    tierNames: [
      "Tier 1 — Basic Connection",
      "Tier 2 — Multi-System Sync",
      "Tier 3 — Complex Pipeline",
      "Tier 4 — Enterprise Automation",
    ],
  },
  {
    key: "productMVP",
    icon: Layers,
    internalName: "Web App MVP Package",
    clientName: "Product MVP",
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
    comingSoon: true,
  },
  {
    key: "internalOps",
    icon: LayoutGrid,
    internalName: "Internal Tool Package",
    clientName: "Internal Ops System",
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
    comingSoon: true,
  },
  {
    key: "modernization",
    icon: RefreshCw,
    internalName: "Modernization / Refactoring",
    clientName: "Modernization Sprint",
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
    comingSoon: true,
  },
  {
    key: "platformSetup",
    icon: Cloud,
    internalName: "Infrastructure & SRE Setup",
    clientName: "Platform Setup",
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
    comingSoon: true,
  },
  {
    key: "engineeringRetainer",
    icon: Users,
    internalName: "Dedicated Product Team Retainer",
    clientName: "Engineering Retainer",
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
    comingSoon: true,
  },
];

// ─── Active Pricing Getter ────────────────────────────────────────────────────
const activeTierKeys = {
  strategySprint: [
    "tier1_basicScoping",
    "tier2_fullDiscovery",
    "tier3_complexArchitecture",
    "tier4_enterpriseStrategy",
  ],
  launchKit: ["tier1_essential", "tier2_business", "tier3_premium", "tier4_enterpriseLaunch"],
  automationLayer: [
    "tier1_basicConnection",
    "tier2_multiSystemSync",
    "tier3_complexPipeline",
    "tier4_enterpriseAutomation",
  ],
} as const;

type ActivePackageKey = keyof typeof activeTierKeys;

function getActivePricing(region: Exclude<Region, null>, pkg: ActivePackageKey): string[] {
  return activeTierKeys[pkg].map((tierKey) => formatTierPrice(pkg, tierKey, region));
}

// ─── Build Package Objects for Rendering ──────────────────────────────────────
interface PackageForRender {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  internalName: string;
  clientName: string;
  price?: string;
  subprice?: string;
  duration?: string;
  desc: string;
  features: string[];
  cta: string;
  link?: string;
  highlight?: boolean;
  bestFor: string;
  comingSoon: boolean;
  tierNames?: string[];
  tierPrices?: string[];
  isTiered?: boolean;
}

function buildPackages(region: Region): PackageForRender[] {
  return packageConfigs.map((cfg) => {
    if (cfg.comingSoon || !region || !(cfg.key in activeTierKeys)) {
      return {
        ...cfg,
        price: cfg.comingSoon ? "Pricing to be announced" : undefined,
        subprice: cfg.comingSoon
          ? "Select a region now; localized pricing will appear when this package launches."
          : undefined,
        tierPrices: [],
        isTiered: false,
      };
    }

    const tierPrices = getActivePricing(region, cfg.key as ActivePackageKey);
    return {
      ...cfg,
      tierPrices,
      tierNames: cfg.tierNames,
      isTiered: true,
      price: `${tierPrices[0]} – ${tierPrices[tierPrices.length - 1]}`,
      subprice: `${REGIONS[region].currency} · fixed fee`,
    };
  });
}

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
  const [showSunset, setShowSunset] = useState(false);
  const packages = buildPackages(region);

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-bg-light border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Reveal variant="fade-up">
              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-6xl">
                Simple Packages, <span className="text-brand-orange">Transparent Prices</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-xl leading-relaxed">
                Eight clearly defined packages covering everything from a 1-week discovery sprint to a
                full ongoing engineering retainer. Fixed fees when scope is clear; retainer when work
                is ongoing.
              </p>
            </Reveal>
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
            <RegionSelector />
            <span className="text-text-muted text-xs italic">
              {region
                ? `Rates shown in ${REGIONS[region].currency} for ${REGIONS[region].label}`
                : "Select a region to load localized pricing"}
            </span>
          </div>
        </div>
      </section>

      {/* Sunset Toggle Banner */}
      <section
        className={`bg-brand-orange/10 border-border-base border-y py-4 ${SUNSET_TRIGGERED || showSunset ? "block" : "hidden"}`}
      >
        <div className="container-custom flex items-center justify-between">
          <span className="text-foreground font-bold">
            {SUNSET_TRIGGERED
              ? "⚠ Sunset pricing active — showing post-trigger rates"
              : "⚠ Sunset pricing preview — showing post-trigger rates"}
          </span>
          <div className="flex items-center gap-4">
            <span className="text-text-muted text-sm">
              Triggered: {SUNSET_TRIGGERED ? "Yes" : "No"} (5 engagements or 2027-01-15)
            </span>
            <button
              onClick={() => setShowSunset(!showSunset)}
              className="text-brand-orange text-sm font-medium hover:underline"
            >
              {showSunset ? "Show current pricing" : "Show sunset pricing"}
            </button>
          </div>
        </div>
      </section>

      {/* All 8 packages */}
      <section className="relative overflow-hidden py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, idx) => (
              <Reveal key={idx} variant="fade-up" delay={idx * 50}>
                {/* DELIBERATE RESTRICTION: No tilt/magnetic on pricing cards */}
                <Card
                  className={`relative flex h-full flex-col transition-all ${
                    pkg.highlight && !pkg.comingSoon
                      ? "border-brand-orange z-10 shadow-xl lg:col-span-2"
                      : ""
                  }`}
                >
                  {/* Coming Soon overlay */}
                  {pkg.comingSoon && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/85 backdrop-blur-[2px]">
                      <span className="bg-brand-navy rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
                        Coming Soon
                      </span>
                      <p className="text-text-muted max-w-[160px] text-center text-xs leading-relaxed">
                        On our roadmap. Reach out to be notified when it launches.
                      </p>
                    </div>
                  )}

                  {/* Most Popular badge */}
                  {pkg.highlight && !pkg.comingSoon && (
                    <div className="bg-brand-orange absolute top-0 right-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-bg-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <pkg.icon className="text-brand-orange h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-sm font-bold">{pkg.clientName}</h3>
                      <p className="text-text-muted text-[10px] font-medium tracking-wider uppercase">
                        {pkg.internalName}
                      </p>
                    </div>
                  </div>

                  {pkg.isTiered && pkg.tierNames && pkg.tierPrices ? (
                    // Tiered pricing display
                    <div className="mb-4 flex-grow space-y-2">
                      {pkg.tierNames.map((tierName, i) => (
                        <div key={i} className="bg-bg-secondary rounded-xl p-3">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-foreground text-sm font-semibold">{tierName}</span>
                            <span className="font-heading text-brand-orange text-lg font-bold">
                              {pkg.tierPrices![i]}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Simple pricing for coming soon packages
                    <div className="mb-4">
                      <div className="font-heading text-foreground text-xl font-bold">
                        {pkg.price}
                      </div>
                      <div className="text-text-muted text-xs">{pkg.subprice}</div>
                      <div className="text-brand-teal mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase">
                        <Clock className="h-3 w-3" /> {pkg.duration}
                      </div>
                    </div>
                  )}

                  {pkg.comingSoon ? (
                    <div className="w-full"></div>
                  ) : (
                    <Link href={pkg.link || "/request-proposal"} className="mt-auto w-full">
                      <Button
                        variant={pkg.highlight && !pkg.comingSoon ? "primary" : "outline"}
                        className="group w-full justify-between text-sm"
                      >
                        {pkg.cta}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-text-muted text-sm">
              All figures are indicative ranges. Final pricing confirmed in a written SOW after
              discovery.{" "}
              <button
                onClick={() => setRegion(null)}
                className="text-brand-orange font-semibold hover:underline"
              >
                Choose a different pricing region
              </button>
            </p>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute top-1/2 left-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" />
      </section>

      {/* Decision flow */}
      <section className="bg-bg-secondary py-16">
        <div className="container-custom">
          <Reveal variant="fade-up">
            <h2 className="font-heading text-foreground mb-8 text-2xl font-bold">
              Not sure which package to start with?
            </h2>
          </Reveal>
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
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div className={`border-l-4 ${item.color} rounded-xl bg-white p-6 h-full`}>
                  <p className="text-text-muted mb-2 text-xs font-bold tracking-widest uppercase">
                    If…
                  </p>
                  <p className="text-foreground mb-3 font-semibold">{item.q}</p>
                  <p className="text-brand-orange text-sm font-bold">→ {item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl px-4 text-center">
            <Reveal variant="fade-scale">
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                Flexible Engagement Models
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary">
                We adapt to your organisation's internal procurement processes.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div
                  className="border-border-base flex flex-col gap-4 rounded-2xl border bg-white p-8 h-full"
                >
                  <model.icon className="text-brand-orange h-8 w-8" />
                  <h4 className="font-heading text-foreground font-bold">{model.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{model.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="bg-brand-navy flex flex-col items-center gap-12 rounded-3xl p-12 text-white md:flex-row md:p-16">
              <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
                <h2 className="font-heading text-3xl font-bold text-white">
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}

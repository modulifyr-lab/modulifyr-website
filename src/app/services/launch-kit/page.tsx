"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Globe, ChevronRight, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";
import {
  formatTierPriceStandard,
  formatTierPriceFounding,
  FOUNDING_SLOTS_REMAINING,
  formatManagedHostingPrice,
} from "@/lib/pricing";
import Reveal from "@/components/ui/Reveal";

const tiers = [
  {
    name: "Tier 1 — Essential",
    tierKey: "tier1_essential",
    duration: "7–10 business days",
    bestFor: "Validation pages, waitlists, single-event sites, simple portfolios",
    descriptionNepal: "A professionally designed landing page to launch your idea in 7–10 days.",
    descriptionInternational: "Professional landing page built for speed – get online quickly.",
    included: [
      "1–3 responsive pages",
      "Clean structural layout — no animations",
      "1 Figma low-fidelity wireframe for approval before build",
      "1 round of minor adjustments after delivery",
      "Contact form connected to a form-handling service — submissions go to your email",
      "Deployment-ready handoff — Vercel or Netlify compatible",
      "Mobile-first responsive design",
    ],
    notIncluded: [
      "Any animations or transitions",
      "Custom illustrations or graphic design",
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "SEO beyond basic meta tags",
      "Custom server-side logic or databases",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Business",
    tierKey: "tier2_business",
    duration: "2–3 weeks",
    bestFor: "Service businesses, agencies, professional portfolios, small corporate sites",
    descriptionNepal: "Full‑featured website with a CMS – easy to manage and update.",
    descriptionInternational: "Dynamic website with CMS integration – no SLA required.",
    included: [
      "4–10 responsive pages",
      "Soft animations — scroll reveals, hover states, smooth scroll",
      "2 Figma high-fidelity prototypes — desktop and mobile views",
      "2 structured revision rounds during design and build",
      "Contact form with validation, connected to a form-handling service",
      "One additional lightweight interactive element — e.g. newsletter signup, quote estimator, or simple calculator — powered by third-party tools, no custom server required",
      "Booking/scheduling embed (e.g. Calendly) if needed — client's own account",
      "SEO meta tags and basic on-page structure",
      "Reusable component architecture for long-term consistency",
      "Deployment-ready handoff",
    ],
    notIncluded: [
      "Background animations or 3D elements",
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "Analytics platform subscription",
      "Custom illustration or photography",
      "Custom server-side logic, databases, or user accounts",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Premium",
    tierKey: "tier3_premium",
    duration: "3–4 weeks",
    bestFor: "Brands that need a high-end digital presence with full motion design",
    descriptionNepal: "Website plus third‑party integrations (CRM, email, analytics).",
    descriptionInternational:
      "Comprehensive website with API integrations and scalable architecture.",
    included: [
      "11–20 responsive pages",
      "Full animation — scroll-triggered sequences, background motion, micro-interactions",
      "4 high-fidelity interactive Figma prototypes covering all key flows",
      "3 comprehensive revision rounds throughout design and build",
      "Multiple contact/inquiry forms with validation, connected to a form-handling service",
      "Several lightweight interactive elements — e.g. multi-step forms, quote calculators, dynamic filtering — powered by third-party tools or stateless functions, no custom server or database required",
      "Booking/scheduling embed (e.g. Calendly) if needed — client's own account",
      "Full SEO meta structure across all pages",
      "Analytics integration setup — platform subscription paid by client",
      "Performance-optimised asset delivery",
      "Deployment-ready handoff",
    ],
    notIncluded: [
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "Analytics platform subscription",
      "Custom 3D modeling or video production",
      "Custom server infrastructure, databases, or persistent user data storage",
    ],
    highlight: false,
  },
  {
    name: "Tier 4 — Enterprise Launch",
    tierKey: "tier4_enterpriseLaunch",
    duration: "4–5 weeks",
    bestFor: "Enterprise launches requiring procurement-ready documentation",
    descriptionNepal: "Complete launch suite including social setup, SEO basics, and analytics.",
    descriptionInternational:
      "Full launch suite with procurement‑ready SOWs and optional SLA support.",
    included: [
      "20+ responsive pages",
      "Full animation — scroll-triggered sequences, background motion, micro-interactions",
      "5+ high-fidelity interactive Figma prototypes covering all key flows",
      "4 comprehensive revision rounds throughout design and build",
      "Multiple contact/inquiry forms with validation, connected to a form-handling service",
      "Multiple lightweight interactive elements — e.g. multi-step forms, quote calculators, dynamic filtering — powered by third-party tools or stateless functions, no custom server or database required",
      "Booking/scheduling embed (e.g. Calendly) if needed — client's own account",
      "Full SEO meta structure across all pages",
      "Analytics integration setup — platform subscription paid by client",
      "Performance-optimised asset delivery",
      "Social media profile setup and basic optimisation",
      "SEO basics implementation",
      "Analytics dashboard configuration",
      "Procurement-ready SOWs",
      "Optional SLA support available",
      "Deployment-ready handoff",
    ],
    notIncluded: [
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "Analytics platform subscription",
      "Custom 3D modeling or video production",
      "Custom server infrastructure, databases, or persistent user data storage",
    ],
    highlight: false,
  },
] as const;

const animationGuide = [
  { tier: "Tier 1", motion: "None", example: "Static layout, no movement" },
  {
    tier: "Tier 2",
    motion: "Soft",
    example: "Fade-ins on scroll, hover colour changes, smooth page scroll",
  },
  {
    tier: "Tier 3",
    motion: "Full",
    example: "Scroll-triggered sequences, background animations, advanced transitions",
  },
];

export default function LaunchKitPage() {
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
                <Globe className="text-brand-teal h-6 w-6" />
                <span className="text-brand-teal text-xs font-bold tracking-widest uppercase">
                  Static Websites & Landing Pages
                </span>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl text-white">Launch Kit</h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted text-xl leading-relaxed">
                Static websites with no backend — fast, secure, and built to rank. Three tiers based
                on page count, animation level, and how many review rounds you need before launch.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-proposal">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                    Request a Launch Kit
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

      {/* Animation reference */}
      <section className="bg-bg-secondary border-border-base border-b py-10">
        <div className="container-custom">
          <p className="text-text-muted mb-6 text-xs font-bold tracking-widest uppercase">
            Animation level by tier
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {animationGuide.map((row, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div
                  className="border-border-base flex items-start gap-4 rounded-xl border bg-white p-5 h-full"
                >
                  <div className="bg-brand-navy flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    <span className="text-[10px] font-bold text-white">T{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-bold">{row.motion}</p>
                    <p className="text-text-muted text-xs leading-relaxed">{row.example}</p>
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
                Four Tiers — Priced by Scope
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
                Price scales with page count, animation complexity, and revision rounds. Not sure
                which tier fits? Describe your project and we will advise.
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
                            {formatTierPriceStandard("launchKit", tier.tierKey, activeRegion)}
                          </div>
                          <div className="font-heading text-brand-orange text-2xl font-bold">
                            {formatTierPriceFounding("launchKit", tier.tierKey, activeRegion)}
                          </div>
                          <div className="text-text-muted text-[11px] mt-0.5">
                            Founding client pricing — {FOUNDING_SLOTS_REMAINING} spots remaining.
                          </div>
                        </div>
                      ) : (
                        <div className="font-heading text-brand-orange text-2xl font-bold">
                          {formatTierPriceStandard("launchKit", tier.tierKey, activeRegion)}
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
                    <Link href={`/request-proposal?pkg=launch-kit&tier=${i + 1}`} className="w-full">
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

      {/* Managed Hosting & Maintenance Add-On Section */}
      <section className="bg-bg-secondary border-border-base border-y py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <Reveal variant="fade-scale">
                <span className="text-brand-orange mb-3 block text-xs font-bold tracking-widest uppercase">
                  Add-On Service
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-foreground mb-4 text-3xl font-bold text-foreground">
                  Managed Hosting & Maintenance
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={150}>
                <p className="text-text-secondary text-base leading-relaxed">
                  Once your site is live, you can manage hosting yourself or hand it to us. If you
                  manage it, we'll give you clear setup instructions. If you'd rather not deal with
                  it, we handle deployment, uptime monitoring, and fixes for a monthly fee.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <Reveal variant="fade-up" delay={200}>
                    <div className="flex gap-4">
                      <div className="bg-brand-orange/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                        <CheckCircle2 className="text-brand-orange h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold text-sm mb-1">Ownership First</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          You always own your domain. Nothing about this arrangement changes that —
                          you can move hosting elsewhere at any time.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal variant="fade-up" delay={250}>
                    <div className="flex gap-4">
                      <div className="bg-brand-orange/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                        <CheckCircle2 className="text-brand-orange h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold text-sm mb-1">Itemized Costs</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Two separate charges, both itemized on your invoice: the exact cost of any
                          third-party subscription (Vercel, hosting, etc.) with no markup, and our
                          management fee for the ongoing work.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal variant="fade-scale" delay={200}>
                <div className="border-border-base rounded-2xl border bg-white p-8 shadow-sm">
                  <h3 className="text-foreground font-bold text-lg mb-4">Management Fee Range</h3>
                  <div className="font-heading text-brand-orange text-3xl font-bold mb-2">
                    {activeRegion ? formatManagedHostingPrice(activeRegion) : "Select region for pricing"}
                    <span className="text-text-muted text-sm font-normal"> / month</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed mb-6">
                    *This fee is separate from third-party subscription costs.
                  </p>

                  <div className="border-t border-border-base pt-6">
                    <h4 className="text-foreground font-bold text-xs tracking-wider uppercase mb-3">
                      Invoice Line Items Example:
                    </h4>
                    <ul className="space-y-2 text-xs text-text-secondary">
                      <li className="flex justify-between py-1 border-b border-dashed border-border-base">
                        <span>Vercel Pro Subscription (Passthrough)</span>
                        <span className="font-semibold text-foreground">Exact Cost (No Markup)</span>
                      </li>
                      <li className="flex justify-between py-1">
                        <span>Modulifyr Managed Hosting & Maintenance</span>
                        <span className="font-semibold text-foreground">Management Fee</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
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
                  All written copy — page text, headlines, CTAs, and any other content must be
                  provided by you before build begins
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                  All image and media assets — photos, logos, icons, and brand files
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                  Timely feedback during revision rounds — delays extend the delivery timeline
                </li>
              </ul>
              <p className="text-text-muted border-border-base mt-6 border-t pt-4 text-xs leading-relaxed">
                <strong className="text-foreground">
                  Third-party tool costs are entirely your responsibility.
                </strong>{" "}
                Modulifyr does not cover, pay for, or manage costs for any external platforms —
                including but not limited to Vercel, Netlify, Cloudflare, any domain registrar,
                analytics subscriptions, form services, or any other SaaS tool. These are direct
                client costs, billed to and owned by the client.
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
              <h2 className="font-heading mb-3 text-2xl font-bold text-white">Ready to start?</h2>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">
                Tell us your page count, what content you have ready, and your target launch date. We
                will confirm the right tier and timeline.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/request-proposal">
                  <Button className="bg-brand-orange hover:bg-brand-orange/90">
                    Request a Launch Kit
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

"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Globe, ChevronRight, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";
import {
  FOUNDING_SLOTS_REMAINING,
  formatMonthlyCarePrice,
  formatTierPriceActive,
  formatTierPriceStandard,
} from "@/lib/pricing";
import { BOOKING_URL } from "@/lib/links";
import { REGIONS, REGION_CODES } from "@/lib/regions";
import Reveal from "@/components/ui/Reveal";

const tiers = [
  {
    name: "Tier 1 — Essential",
    tierKey: "tier1_essential",
    duration: "3–5 business days",
    bestFor: "Local service businesses, clinics, validation pages, single-event sites & portfolios",
    descriptionNepal:
      "Get online fast in 3–5 days with a clean, mobile-first business site wired to WhatsApp and your inbox.",
    descriptionInternational:
      "Fast 1–3 page business site built for quick credibility, local search visibility, and direct leads.",
    included: [
      "1–3 responsive pages built on clean, fast-loading code",
      "Mobile-first layout that loads quickly on Nepali & global connections",
      "1 round of structured revisions after preview",
      "Contact form + Click-to-WhatsApp routing — inquiries go straight to your team",
      "Basic on-page SEO meta tags & sitemap setup",
      "Clean handoff — 100% client ownership of code repository & domain",
    ],
    notIncluded: [
      "Bespoke Figma design from scratch (available as an add-on or in Tier 3)",
      "Heavy scroll animations or 3D elements",
      "Copywriting — all text must be provided by client",
      "Domain purchase or third-party hosting subscriptions",
      "Custom server-side databases or user logins",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Business",
    tierKey: "tier2_business",
    duration: "5–7 business days",
    bestFor: "Growing businesses, clinics, consultancies, agencies & corporate sites",
    descriptionNepal:
      "Turn local searches into bookings and inquiries with 4–10 pages, online scheduling, WhatsApp & payment links.",
    descriptionInternational:
      "Responsive 4–10 page business site with online booking embeds, lead capture & payment links.",
    included: [
      "4–10 responsive pages tailored to your services and trust proof",
      "Clean interactive transitions without bloated scripts",
      "2 structured revision rounds during build",
      "Validated lead capture forms + Click-to-WhatsApp routing",
      "Cal.com / Calendly booking embed & eSewa / Khalti / Stripe payment link setup",
      "On-page SEO structure, OpenGraph tags & Google Business alignment",
      "Reusable structure + clean deployment handoff in your name",
    ],
    notIncluded: [
      "Bespoke Figma prototypes from scratch (available as add-on or in Tier 3)",
      "Heavy motion sequences or custom 3D elements",
      "Copywriting — all text must be provided by client",
      "Domain purchase or third-party hosting subscriptions",
      "Custom server-side dashboards or user accounts",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Premium",
    tierKey: "tier3_premium",
    duration: "2–4 weeks",
    bestFor: "Brands that need bespoke Figma design, interactive forms, and 11–20 custom pages",
    descriptionNepal:
      "Stand out in competitive markets with bespoke Figma UI design, 11–20 pages, interactive flows & full SEO.",
    descriptionInternational:
      "Custom multi-page website with bespoke Figma prototypes, interactive elements, and analytics setup.",
    included: [
      "11–20 responsive pages",
      "Bespoke Figma prototypes covering all key flows before build",
      "Custom interactive reveals & polished micro-interactions",
      "3 comprehensive revision rounds throughout design and build",
      "Multiple contact/inquiry forms with validation & lead routing",
      "Interactive elements — multi-step forms, quote calculators, or dynamic filtering",
      "Booking/scheduling embed & payment gateway link setup",
      "Full SEO meta structure across all pages + analytics integration setup",
      "Optimized asset delivery & clean repository handoff",
    ],
    notIncluded: [
      "Copywriting — all text must be provided by client",
      "Domain purchase or third-party hosting subscriptions",
      "Analytics platform subscriptions",
      "Custom 3D modeling or video production",
      "Custom server databases or user accounts (scoped separately from NPR 45,000+ / $600+)",
    ],
    highlight: false,
  },
] as const;

const speedGuide = [
  {
    tier: "Tier 1",
    motion: "Clean & Fast (3–5 Days)",
    example: "Focused 1–3 page website built for instant loading and direct WhatsApp/form leads",
  },
  {
    tier: "Tier 2",
    motion: "Business Growth (5–7 Days)",
    example: "4–10 pages with online booking, WhatsApp routing, and payment link integration",
  },
  {
    tier: "Tier 3",
    motion: "Bespoke Figma + Interactive (2–4 Weeks)",
    example: "Custom Figma UI design, quote calculators, multi-step forms & full site SEO",
  },
];

export default function LaunchKitPage() {
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
                <Globe className="text-brand-teal h-6 w-6" />
                <span className="text-brand-teal text-xs font-bold tracking-widest uppercase">
                  01 · Fast Business Websites
                </span>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-6xl">
                Launch Kit
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted text-xl leading-relaxed">
                Customers check you online before they ever call or walk in. Launch Kit gives your
                business a fast, mobile-first website built to rank locally and capture inquiries
                reliably—without slow drag-and-drop themes, surprise bills, or agency lock-in.
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
                  href="/request-proposal?pkg=launch-kit"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Request a Launch Kit
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tier overview */}
      <section className="bg-bg-secondary border-border-base border-b py-10">
        <div className="container-custom">
          <p className="text-text-muted mb-6 text-xs font-bold tracking-widest uppercase">
            How each tier ships
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {speedGuide.map((row, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 100}>
                <div className="border-border-base bg-bg-alt flex h-full items-start gap-4 rounded-xl border p-5">
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
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Reveal variant="fade-up">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h2 className="font-heading text-foreground text-3xl font-bold">
                    Three Tiers — Priced by Scope
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
                  Tiers 1 &amp; 2 launch in 3–7 business days with transparent fixed pricing. Need
                  bespoke Figma design from scratch? Choose Tier 3 or add it on.
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
                      {formatTierPriceActive("launchKit", tier.tierKey, activeRegion)}
                    </div>
                    {FOUNDING_SLOTS_REMAINING > 0 && (
                      <p className="text-text-muted mt-1 text-xs">
                        Standard:{" "}
                        <span className="line-through">
                          {formatTierPriceStandard("launchKit", tier.tierKey, activeRegion)}
                        </span>{" "}
                        (20% Founding Partner discount)
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
                      href={`/request-proposal?pkg=launch-kit&tier=${i + 1}&region=${activeRegion}`}
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

      {/* Monthly Care & Lead-Ops Plan Add-On Section */}
      <section className="bg-bg-secondary border-border-base border-y py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <Reveal variant="fade-scale">
                <span className="mb-3 block text-xs font-bold tracking-widest text-[#2D738D] uppercase">
                  Optional Ongoing Care
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-foreground mb-4 text-3xl font-bold">
                  Monthly Care &amp; Lead-Ops Plan
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={150}>
                <p className="text-text-secondary text-base leading-relaxed">
                  Once your website is live, you can host it yourself using our clean handoff
                  instructions—or let us watch over hosting, uptime alerts, form health checks, and
                  small monthly site updates for one clear flat fee.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <Reveal variant="fade-up" delay={200}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2D738D]/10">
                        <CheckCircle2 className="h-5 w-5 text-[#2D738D]" />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-1 text-sm font-bold">
                          Strict Monthly Update Scope
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Includes up to <strong>2 small text, photo, or banner updates per month</strong>,
                          uptime monitoring, and inquiry form checks. Unused updates do not roll
                          over; new pages or redesigns are scoped separately.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal variant="fade-up" delay={250}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2D738D]/10">
                        <CheckCircle2 className="h-5 w-5 text-[#2D738D]" />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-1 text-sm font-bold">
                          100% Ownership &amp; At-Cost Passthrough
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          You always own your domain and accounts. Any paid third-party hosting
                          subscription (such as Vercel Pro if needed) is itemized at exact cost with
                          zero markup.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal variant="fade-scale" delay={200}>
                <div className="border-border-base bg-bg-alt rounded-2xl border p-8 shadow-sm">
                  <h3 className="text-foreground mb-4 text-lg font-bold">
                    Monthly Care &amp; Lead-Ops Fee
                  </h3>
                  <div className="font-heading mb-2 text-3xl font-bold text-[#2D738D] tabular-nums">
                    {formatMonthlyCarePrice(activeRegion)}
                    <span className="text-text-muted text-sm font-normal"> / month</span>
                  </div>
                  <p className="text-text-muted mb-6 text-xs leading-relaxed">
                    Cancel anytime. Separate from domain renewal or paid third-party subscriptions.
                  </p>

                  <div className="border-border-base border-t pt-6">
                    <h4 className="text-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                      What&apos;s Included Every Month:
                    </h4>
                    <ul className="text-text-secondary space-y-2 text-xs">
                      <li className="border-border-base flex justify-between border-b border-dashed py-1">
                        <span>Uptime, SSL &amp; Form Health Checks</span>
                        <span className="text-foreground font-semibold">Included</span>
                      </li>
                      <li className="border-border-base flex justify-between border-b border-dashed py-1">
                        <span>Small Text, Photo or Banner Updates</span>
                        <span className="text-foreground font-semibold">Up to 2 / month</span>
                      </li>
                      <li className="flex justify-between py-1">
                        <span>Paid Hosting Tier (If Required)</span>
                        <span className="text-foreground font-semibold">
                          Exact Cost (No Markup)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Concise ownership note */}
      <section className="bg-bg-secondary py-12">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="border-border-base bg-bg-alt max-w-3xl rounded-2xl border p-8">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2D738D]" />
                <h3 className="text-foreground font-bold">What you provide &amp; own</h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  Your business text, photos, and logo before build starts (plus timely feedback on
                  draft previews)
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  Your domain name and hosting accounts stay registered directly in your name at
                  cost, so you always stay in control
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
              <h2 className="font-heading mb-3 text-2xl font-bold text-white">Ready to launch?</h2>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">
                Start with a free 20-minute checkup or send your page count and target launch date.
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

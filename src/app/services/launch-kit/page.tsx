"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Globe, ChevronRight, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";
import {
  formatTierPriceStandard,
  formatManagedHostingPrice,
} from "@/lib/pricing";
import Reveal from "@/components/ui/Reveal";

const tiers = [
  {
    name: "Tier 1 — Essential",
    tierKey: "tier1_essential",
    duration: "3–5 business days",
    bestFor: "Validation pages, local service businesses, single-event sites, clean portfolios",
    descriptionNepal:
      "Get online in 3–5 days with our fast modular Next.js & Tailwind component system.",
    descriptionInternational:
      "Fast 1–3 page launch built on Modulifyr's modular Next.js & Tailwind component system.",
    included: [
      "1–3 responsive pages built on Modulifyr's modular Next.js & Tailwind component system",
      "Mobile-first responsive layout — clean, fast, zero heavy motion bloat",
      "1 round of structured revisions after preview",
      "Contact form & WhatsApp click-to-chat routing — submissions go straight to your inbox",
      "Basic on-page SEO meta tags & sitemap setup",
      "Deployment-ready handoff — Vercel compatible, 100% client code & domain ownership",
    ],
    notIncluded: [
      "Bespoke Figma design from scratch (available as an optional priced add-on or in Tier 3)",
      "Heavy scroll animations or 3D elements",
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "Custom server-side logic or databases",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Business",
    tierKey: "tier2_business",
    duration: "5–7 business days",
    bestFor: "Service businesses, clinics, consultancies, agencies, small corporate sites",
    descriptionNepal:
      "Turn local searches into real inquiries with 4–10 modular pages, booking, WhatsApp, and payment links.",
    descriptionInternational:
      "Responsive 4–10 page site built on our modular Next.js & Tailwind system with booking & payment integration.",
    included: [
      "4–10 responsive pages built on Modulifyr's modular Next.js & Tailwind component system",
      "Subtle hover & transition polish — fast load times without bloated animation scripts",
      "2 structured revision rounds during build",
      "Lead capture forms with validation + WhatsApp routing",
      "Booking/scheduling embed (Cal.com / Calendly) & eSewa / Khalti / Stripe payment link integration",
      "On-page SEO structure, OpenGraph meta tags & Google Business alignment",
      "Reusable component structure + Vercel deployment handoff",
    ],
    notIncluded: [
      "Bespoke Figma prototypes from scratch (optional priced add-on, or included in Tier 3)",
      "Heavy motion sequences or custom 3D elements",
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "Custom server-side logic, databases, or user accounts",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Premium",
    tierKey: "tier3_premium",
    duration: "2–4 weeks",
    bestFor: "Brands that need bespoke Figma design, interactive motion, and 11–20 custom pages",
    descriptionNepal:
      "Stand out in competitive markets with bespoke Figma design, 11–20 pages, interactive flows, and full SEO.",
    descriptionInternational:
      "Custom multi-page website with bespoke Figma prototypes, tailored motion design, and analytics setup.",
    included: [
      "11–20 responsive pages",
      "Bespoke Figma prototypes covering all key flows before build",
      "Custom motion — scroll-triggered reveals & micro-interactions",
      "3 comprehensive revision rounds throughout design and build",
      "Multiple contact/inquiry forms with validation & lead routing",
      "Interactive elements — multi-step forms, quote calculators, or dynamic filtering",
      "Booking/scheduling embed & payment gateway link setup",
      "Full SEO meta structure across all pages + analytics integration setup",
      "Performance-optimised asset delivery & clean repository handoff",
    ],
    notIncluded: [
      "Copywriting — all text must be provided by client",
      "Domain purchase or hosting subscription",
      "Analytics platform subscription",
      "Custom 3D modeling or video production",
      "Custom server infrastructure, databases, or persistent user data storage (see Custom Web Apps)",
    ],
    highlight: false,
  },
] as const;

const animationGuide = [
  {
    tier: "Tier 1",
    motion: "Modular & Fast",
    example: "Modulifyr Next.js & Tailwind component system — crisp, clean, 3–5 day delivery",
  },
  {
    tier: "Tier 2",
    motion: "Modular + Polish",
    example: "Subtle UI transitions, booking & WhatsApp/payment integration — 5–7 day delivery",
  },
  {
    tier: "Tier 3",
    motion: "Bespoke Figma + Motion",
    example: "Custom Figma prototypes, scroll-triggered sequences & interactive flows",
  },
];

export default function LaunchKitPage() {
  const { region } = useRegion();
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
                  Static Websites & Landing Pages
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
                reliably—without sluggish templates, server headaches, or surprise maintenance bills.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="/request-proposal?pkg=launch-kit"
                  size="lg"
                  className="bg-[#2D738D] hover:bg-[#235b70]"
                >
                  Request a Launch Kit
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Ask a Question First
                </Button>
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
          <div className="mb-12">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                Three Tiers — Priced by Scope
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
                Tiers 1 &amp; 2 launch fast on our modular Next.js &amp; Tailwind component system
                (3–7 business days). Need bespoke Figma design from scratch? Choose Tier 3 or add it
                on.
              </p>
            </Reveal>
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
                    {activeRegion ? (
                      <div className="font-heading text-2xl font-bold text-[#2D738D]">
                        {formatTierPriceStandard("launchKit", tier.tierKey, activeRegion)}
                      </div>
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

      {/* Managed Hosting & Maintenance Add-On Section */}
      <section className="bg-bg-secondary border-border-base border-y py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <Reveal variant="fade-scale">
                <span className="mb-3 block text-xs font-bold tracking-widest text-[#2D738D] uppercase">
                  Add-On Service
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-foreground text-foreground mb-4 text-3xl font-bold">
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
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2D738D]/10">
                        <CheckCircle2 className="h-5 w-5 text-[#2D738D]" />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-1 text-sm font-bold">Ownership First</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          You always own your domain. Nothing about this arrangement changes that —
                          you can move hosting elsewhere at any time.
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
                        <h4 className="text-foreground mb-1 text-sm font-bold">Itemized Costs</h4>
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
                <div className="border-border-base bg-bg-alt rounded-2xl border p-8 shadow-sm">
                  <h3 className="text-foreground mb-4 text-lg font-bold">Management Fee Range</h3>
                  <div className="font-heading mb-2 text-3xl font-bold text-[#2D738D]">
                    {activeRegion
                      ? formatManagedHostingPrice(activeRegion)
                      : "Select region for pricing"}
                    <span className="text-text-muted text-sm font-normal"> / month</span>
                  </div>
                  <p className="text-text-muted mb-6 text-xs leading-relaxed">
                    *This fee is separate from third-party subscription costs.
                  </p>

                  <div className="border-border-base border-t pt-6">
                    <h4 className="text-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                      Invoice Line Items Example:
                    </h4>
                    <ul className="text-text-secondary space-y-2 text-xs">
                      <li className="border-border-base flex justify-between border-b border-dashed py-1">
                        <span>Vercel Pro Subscription (Passthrough)</span>
                        <span className="text-foreground font-semibold">
                          Exact Cost (No Markup)
                        </span>
                      </li>
                      <li className="flex justify-between py-1">
                        <span>Modulifyr Managed Hosting & Maintenance</span>
                        <span className="text-foreground font-semibold">Management Fee</span>
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
            <div className="border-border-base bg-bg-alt max-w-3xl rounded-2xl border p-8">
              <div className="mb-4 flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2D738D]" />
                <h3 className="text-foreground font-bold">What you are responsible for</h3>
              </div>
              <ul className="text-text-secondary space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  All written copy — page text, headlines, CTAs, and any other content must be
                  provided by you before build begins
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
                  All image and media assets — photos, logos, icons, and brand files
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2D738D]" />
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
                Tell us your page count, what content you have ready, and your target launch date.
                We will confirm the right tier and timeline.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/request-proposal?pkg=launch-kit"
                  className="bg-[#2D738D] hover:bg-[#235b70]"
                >
                  Request a Launch Kit
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

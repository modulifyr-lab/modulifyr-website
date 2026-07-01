"use client";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";

const tiers = [
  {
    name: "Tier 1",
    priceNepal: "NPR 40,000 – 66,000",
    priceInternational: "$300 – $500",
    duration: "3–5 days",
    description: "Single scope, ideal for small projects with clear objectives.",
    features: [
      "1 async workshop",
      "Basic requirements document",
      "High-level roadmap",
      "Scope definition",
    ],
    highlight: false,
  },
  {
    name: "Tier 2",
    priceNepal: "NPR 66,000 – 86,000",
    priceInternational: "$500 – $650",
    duration: "1 week",
    description: "Multi-feature scope, perfect for medium-sized projects.",
    features: [
      "2–3 calls",
      "Architecture blueprint",
      "Phased roadmap with estimates",
      "Tech stack recommendation",
    ],
    highlight: true,
  },
  {
    name: "Tier 3",
    priceNepal: "NPR 86,000 – 1,05,000",
    priceInternational: "$650 – $800",
    duration: "1–2 weeks",
    description: "Large/unclear/legacy scope, comprehensive discovery.",
    features: [
      "Full workshop series",
      "Complete architecture + risk analysis",
      "Integration mapping",
      "Detailed delivery plan",
    ],
    highlight: false,
  },
];

export default function StrategySprintPage() {
  const { region } = useRegion();
  const isNepal = region === "nepal";

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-brand-orange" />
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                Discovery & Strategy
              </span>
            </div>
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl">
              Strategy Sprint
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              Clarify your requirements, define your architecture, and get a clear roadmap before any build begins. Choose the tier that matches your project scope.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`relative flex h-full flex-col ${
                  tier.highlight
                    ? "border-brand-orange ring-brand-orange/20 ring-2"
                    : "hover:border-brand-navy"
                }`}
              >
                {tier.highlight && (
                  <div className="bg-brand-orange absolute top-0 right-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="font-heading text-brand-navy mb-2 text-2xl font-bold">
                  {tier.name}
                </h3>

                <div className="mb-4">
                  <div className="font-heading text-brand-navy text-3xl font-bold">
                    {isNepal ? tier.priceNepal : tier.priceInternational}
                  </div>
                  <div className="text-brand-teal mt-1 flex items-center gap-1.5 text-sm font-semibold uppercase">
                    <Clock className="h-4 w-4" /> {tier.duration}
                  </div>
                </div>

                <p className="text-text-secondary mb-6 flex-grow text-sm leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-2 text-sm">
                      <CheckCircle2 className="text-brand-teal mt-0.5 h-5 w-5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/request-proposal" className="w-full">
                  <Button
                    variant={tier.highlight ? "primary" : "outline"}
                    className="group w-full justify-between text-sm"
                  >
                    Get Started
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-heading text-brand-navy text-3xl font-bold md:text-4xl">
              Not sure which tier is right for you?
            </h2>
            <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
              Reach out and we'll help you choose the perfect tier for your project.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

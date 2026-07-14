"use client";

import { Metadata } from "next";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight, Clock, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/contexts/RegionProvider";

export const metadata: Metadata = {
    title: "Strategy Sprint Services | Modulifyr Nepal",
    description: "Fast, focused strategic planning for your product. Choose from 4 tiers tailored to your needs.",
};

// ─── Pricing data ────────────────────────────────────────────────────────────

const nprCopy = [
    {
        tier: 1,
        price: "NPR 50,000",
        desc: "Get a clear strategic roadmap tailored to your business – fast and focused.",
        features: ["Market overview", "Basic roadmap", "1-week delivery"],
    },
    {
        tier: 2,
        price: "NPR 65,000",
        desc: "Map user journeys and identify key opportunities for your product.",
        features: ["User journey mapping", "Opportunity analysis", "2-week delivery"],
    },
    {
        tier: 3,
        price: "NPR 75,000",
        desc: "Comprehensive strategy covering market positioning, feature prioritisation, and go-to-market.",
        features: ["Market positioning", "Feature prioritisation", "Go-to-market plan", "3-week delivery"],
    },
    {
        tier: 4,
        price: "NPR 85,000",
        desc: "All-in-one strategy with a detailed implementation plan to hit the ground running.",
        features: ["Complete strategy package", "Implementation roadmap", "Stakeholder workshops", "4-week delivery"],
    },
];

const usdCopy = [
    {
        tier: 1,
        price: "$300",
        desc: "Rapid strategic planning to align your product vision with market needs.",
        features: ["Market overview", "Basic roadmap", "1-week delivery"],
    },
    {
        tier: 2,
        price: "$450",
        desc: "Strategic user-flow mapping with actionable insights.",
        features: ["User journey mapping", "Opportunity analysis", "2-week delivery"],
    },
    {
        tier: 3,
        price: "$600",
        desc: "Full strategic package including competitive analysis and feature prioritisation.",
        features: ["Market positioning", "Feature prioritisation", "Go-to-market plan", "3-week delivery"],
    },
    {
        tier: 4,
        price: "$800",
        desc: "Enterprise-grade strategy with SLA-backed delivery and procurement-friendly documentation.",
        features: ["Complete strategy package", "Implementation roadmap", "Stakeholder workshops", "SLA-backed delivery", "4-week delivery"],
    },
];

export default function StrategySprintPage() {
    const { region } = useRegion();
    const isNepal = region === "nepal";

    const tiers = isNepal ? nprCopy : usdCopy;

    return (
        <div className="flex flex-col w-full">
            {/* Hero */}
            <section className="bg-brand-navy text-white py-24">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Strategy <span className="text-brand-orange">Sprint</span>
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            Fast, focused strategic planning to get your product moving in the right direction.
                            Choose the tier that fits your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Region Switcher */}
            <section className="py-8 bg-bg-secondary border-b border-border-base">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="text-sm font-bold text-text-muted uppercase tracking-widest">
                            Showing prices for:
                        </span>
                        <div className="flex gap-3">
                            <Link
                                href="?region=nepal"
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                                    isNepal
                                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                                        : "border-border-base bg-white text-text-secondary hover:border-brand-orange/50"
                                }`}
                            >
                                <MapPin className="w-4 h-4" /> Nepal (NPR)
                            </Link>
                            <Link
                                href="?region=international"
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                                    !isNepal
                                        ? "border-brand-teal bg-brand-teal/10 text-brand-teal"
                                        : "border-border-base bg-white text-text-secondary hover:border-brand-teal/50"
                                }`}
                            >
                                <Globe className="w-4 h-4" /> International (USD)
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tiers.map((tier) => (
                            <Card key={tier.tier} className="flex flex-col h-full relative">
                                <div className="flex flex-col gap-1 mb-6">
                                    <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Tier {tier.tier}</span>
                                    <div className="text-2xl font-heading font-bold text-brand-navy">{tier.price}</div>
                                </div>

                                <CardDescription className="mb-6 flex-grow">{tier.desc}</CardDescription>

                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                            <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/request-proposal" className="w-full">
                                    <Button variant={tier.tier === 4 ? "primary" : "outline"} className="w-full justify-between group">
                                        Get Started
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Ready to Start Your Strategy Sprint?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                        Book a free consultation to discuss which tier is right for your project.
                    </p>
                    <Link href="/request-proposal">
                        <Button>Request Proposal</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

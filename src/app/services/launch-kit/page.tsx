"use client";

import { Metadata } from "next";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/contexts/RegionProvider";

export const metadata: Metadata = {
    title: "Launch Kit Services | Modulifyr Nepal",
    description: "Professional landing pages and websites to launch your idea. Choose from 4 tiers.",
};

const nprCopy = [
    { tier: 1, price: "NPR 15,000", desc: "A professionally designed landing page to launch your idea in 7–10 days.", features: ["Single landing page", "Responsive design", "7-10 day delivery"] },
    { tier: 2, price: "NPR 25,000", desc: "Full-featured website with a CMS – easy to manage and update.", features: ["Multi-page website", "CMS integration", "Content management training", "2-3 week delivery"] },
    { tier: 3, price: "NPR 40,000", desc: "Website plus third-party integrations (CRM, email, analytics).", features: ["Full website", "CMS + integrations", "CRM/email/analytics setup", "3-4 week delivery"] },
    { tier: 4, price: "NPR 65,000", desc: "Complete launch suite including social setup, SEO basics, and analytics.", features: ["Complete website package", "Social media setup", "SEO fundamentals", "Analytics & reporting", "4-5 week delivery"] },
];

const usdCopy = [
    { tier: 1, price: "$80", desc: "Professional landing page built for speed – get online quickly.", features: ["Single landing page", "Responsive design", "7-10 day delivery"] },
    { tier: 2, price: "$250", desc: "Dynamic website with CMS integration – no SLA required.", features: ["Multi-page website", "CMS integration", "Content management training", "2-3 week delivery"] },
    { tier: 3, price: "$450", desc: "Comprehensive website with API integrations and scalable architecture.", features: ["Full website", "CMS + integrations", "CRM/email/analytics setup", "3-4 week delivery"] },
    { tier: 4, price: "$700", desc: "Full launch suite with procurement-ready SOWs and optional SLA support.", features: ["Complete website package", "Social media setup", "SEO fundamentals", "Analytics & reporting", "Procurement-ready documentation", "4-5 week delivery"] },
];

export default function LaunchKitPage() {
    const { region } = useRegion();
    const isNepal = region === "nepal";
    const tiers = isNepal ? nprCopy : usdCopy;

    return (
        <div className="flex flex-col w-full">
            <section className="bg-brand-navy text-white py-24">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Launch <span className="text-brand-orange">Kit</span></h1>
                        <p className="text-xl text-text-muted leading-relaxed">Professional websites and landing pages to get your product online fast. Choose the tier that fits your launch needs.</p>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-bg-secondary border-b border-border-base">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="text-sm font-bold text-text-muted uppercase tracking-widest">Showing prices for:</span>
                        <div className="flex gap-3">
                            <Link href="?region=nepal" className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${isNepal ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border-base bg-white text-text-secondary hover:border-brand-orange/50"}`}><MapPin className="w-4 h-4" /> Nepal (NPR)</Link>
                            <Link href="?region=international" className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${!isNepal ? "border-brand-teal bg-brand-teal/10 text-brand-teal" : "border-border-base bg-white text-text-secondary hover:border-brand-teal/50"}`}><Globe className="w-4 h-4" /> International (USD)</Link>
                        </div>
                    </div>
                </div>
            </section>

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
                                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary"><CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />{feature}</li>
                                    ))}
                                </ul>
                                <Link href="/request-proposal" className="w-full"><Button variant={tier.tier === 4 ? "primary" : "outline"} className="w-full justify-between group">Get Started<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button></Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Ready to Launch?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">Book a free consultation to discuss which Launch Kit tier is right for your project.</p>
                    <Link href="/request-proposal"><Button>Request Proposal</Button></Link>
                </div>
            </section>
        </div>
    );
}

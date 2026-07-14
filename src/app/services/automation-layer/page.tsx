"use client";

import { Metadata } from "next";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/contexts/RegionProvider";

export const metadata: Metadata = {
    title: "Automation Layer Services | Modulifyr Nepal",
    description: "Automate your workflows and save time. Choose from 4 tiers of automation services.",
};

const nprCopy = [
    { tier: 1, price: "NPR 45,000", desc: "Automate a single repetitive workflow to save hours every week.", features: ["Single workflow automation", "Basic integration", "1-2 week delivery"] },
    { tier: 2, price: "NPR 75,000", desc: "Connect multiple workflows for end-to-end process automation.", features: ["Multi-workflow automation", "Error handling", "2-3 week delivery"] },
    { tier: 3, price: "NPR 125,000", desc: "Full automation of your entire operational process – from lead to delivery.", features: ["End-to-end automation", "Full integration", "Process optimization", "3-4 week delivery"] },
    { tier: 4, price: "NPR 195,000", desc: "Custom enterprise-grade automation with full integration and ongoing optimisation.", features: ["Complete automation suite", "Custom integrations", "Ongoing optimization", "Dedicated support", "4-6 week delivery"] },
];

const usdCopy = [
    { tier: 1, price: "$300", desc: "Automate one key workflow – simple, effective, and reliable.", features: ["Single workflow automation", "Basic integration", "1-2 week delivery"] },
    { tier: 2, price: "$800", desc: "Multi-workflow automation with robust error handling.", features: ["Multi-workflow automation", "Error handling", "2-3 week delivery"] },
    { tier: 3, price: "$1,200", desc: "Enterprise automation suite with SLA-guaranteed uptime and PO acceptance.", features: ["End-to-end automation", "Full integration", "SLA-backed delivery", "PO acceptance", "3-4 week delivery"] },
    { tier: 4, price: "$2,000", desc: "Complete enterprise solution with dedicated support, SLAs, and procurement compliance.", features: ["Complete automation suite", "Custom integrations", "Ongoing optimization", "Dedicated support", "SLA & procurement compliance", "4-6 week delivery"] },
];

export default function AutomationLayerPage() {
    const { region } = useRegion();
    const isNepal = region === "nepal";
    const tiers = isNepal ? nprCopy : usdCopy;

    return (
        <div className="flex flex-col w-full">
            <section className="bg-brand-navy text-white py-24">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Automation <span className="text-brand-orange">Layer</span></h1>
                        <p className="text-xl text-text-muted leading-relaxed">Automate repetitive workflows and save hours every week. Choose the tier that fits your automation needs.</p>
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
                                <Link href="/request-proposal" className="w-full"><Button variant={tier.tier >= 3 ? "primary" : "outline"} className="w-full justify-between group">Get Started<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button></Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Ready to Automate?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">Book a free consultation to discuss which Automation Layer tier is right for your workflow.</p>
                    <Link href="/request-proposal"><Button>Request Proposal</Button></Link>
                </div>
            </section>
        </div>
    );
}

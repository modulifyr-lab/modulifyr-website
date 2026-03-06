import { Metadata } from "next";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Pricing & Engagement Models",
    description: "Transparent pricing structure and flexible engagement models for discovery, pilot, and full system builds.",
};
import { Button } from "@/components/ui/Button";
import {
    CheckCircle2,
    HelpCircle,
    ChevronRight,
    ArrowRight,
    ShieldCheck,
    Clock,
    FileText,
    BarChart4,
    RefreshCw
} from "lucide-react";
import Link from "next/link";

const pricingTiers = [
    {
        title: "Discovery Phase",
        price: "$3k – $8k",
        duration: "2-4 Weeks",
        desc: "A focused engagement to define scope, architecture, and roadmap for a new system.",
        features: [
            "Discovery report & audit",
            "System architecture diagram",
            "Prioritized product backlog",
            "High-level roadmap & estimate",
            "Technical feasibility study"
        ],
        cta: "Start Discovery",
        variant: "outline"
    },
    {
        title: "Pilot / Proof-of-Value",
        price: "$8k – $20k+",
        duration: "4-8 Weeks",
        desc: "Development of a working prototype for a critical workflow or integration.",
        features: [
            "Working prototype (core flow)",
            "Simulated production data",
            "Modular technical blueprint",
            "Fixed-fee delivery",
            "Signed IP & code handoff"
        ],
        cta: "Book Pilot Briefing",
        variant: "primary",
        highlight: true
    },
    {
        title: "Full Build / Team",
        price: "Custom Quote",
        duration: "Milestone-based",
        desc: "End-to-end development of a complete modular system or dedicated engineering team.",
        features: [
            "Production-ready modular system",
            "Full documentation & SRE",
            "Milestone-based payments",
            "Scalable engineering team",
            "Long-term support & SLA"
        ],
        cta: "Request Proposal",
        variant: "secondary"
    }
];

export default function PricingPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="bg-bg-light py-24 border-b border-border-base">
                <div className="container-custom text-center lg:text-left">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">Transparent <span className="text-brand-orange">Engagement</span> Models</h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We provide representative pricing bands and structured engagement models designed for procurement-friendly partnerships. No hidden costs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, idx) => (
                            <Card
                                key={idx}
                                className={`flex flex-col h-full relative ${tier.highlight ? "border-brand-orange shadow-xl hover:shadow-2xl z-10 scale-105" : "hover:border-brand-navy"}`}
                            >
                                {tier.highlight && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        Recommended Start
                                    </div>
                                )}
                                <div className="flex flex-col gap-2 mb-8">
                                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest">{tier.title}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">{tier.price}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-teal uppercase mt-1">
                                        <Clock className="w-4 h-4" /> {tier.duration}
                                    </div>
                                </div>

                                <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow">
                                    {tier.desc}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                                            <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/request-proposal" className="w-full">
                                    <Button
                                        variant={tier.variant as any}
                                        className="w-full justify-between group"
                                    >
                                        {tier.cta} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/5 -translate-x-1/2 rounded-full blur-3xl -z-10" />
            </section>

            {/* Engagement Models Detail */}
            <section className="py-24 bg-bg-secondary">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16 px-4">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4 text-center">Flexible Engagement Models</h2>
                        <p className="text-text-secondary text-center">We adapt to your organization's internal procurement processes.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Fixed-Price Milestone", icon: BarChart4, desc: "Clear deliverables and defined budgets per milestone. Ideal for Pilot and Full Build phases." },
                            { title: "Time & Materials", icon: Clock, desc: "Flexible resourcing for discovery and iterative development where scope is evolving." },
                            { title: "Monthly Retainer", icon: RefreshCw, desc: "Ongoing engineering support, maintenance, and technical consulting with a set capacity." },
                            { title: "SLA-based Support", icon: ShieldCheck, desc: "Uptime-guaranteed maintenance agreements tailored to system criticality." }
                        ].map((model, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-border-base flex flex-col gap-4">
                                <model.icon className="w-8 h-8 text-brand-orange" />
                                <h4 className="font-heading font-bold text-brand-navy">{model.title}</h4>
                                <p className="text-xs text-text-muted leading-relaxed">{model.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procurement friendly lines */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-brand-navy rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
                        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
                            <h2 className="text-3xl font-heading font-bold">Procurement-Friendly <span className="text-brand-orange">Digital Infrastructure</span></h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <FileText className="w-5 h-5 text-brand-gold" />
                                    <span className="text-text-muted">Standard SOWs & Proposals (PDF/RFP)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                                    <span className="text-text-muted">NDA & Confidentiality Agreements Ready</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                                    <span className="text-text-muted">Accepted POs & Structured Invoicing</span>
                                </div>
                            </div>
                            <Button className="w-fit bg-brand-orange hover:bg-brand-orange/90 group mt-4">
                                Download Sample SOW <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                        <div className="flex-grow flex justify-center">
                            <div className="w-64 h-80 bg-white/5 border border-white/10 rounded-2xl rotate-3 relative p-8 flex flex-col gap-4 overflow-hidden">
                                {/* Dummy Document Mockup */}
                                <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                                <div className="space-y-2 mt-4">
                                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-1 w-full bg-white/5 rounded-full" />)}
                                </div>
                                <div className="mt-auto flex justify-between">
                                    <div className="w-12 h-4 bg-brand-orange/30 rounded" />
                                    <div className="w-12 h-4 bg-brand-teal/30 rounded" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Link */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Have questions about our pricing structure?</h3>
                    <p className="text-text-secondary mb-8">Every project is unique. Request a custom estimate for your specific engineering requirements.</p>
                    <Link href="/request-proposal">
                        <Button variant="outline" size="lg">Send Request for Proposal (RFP)</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

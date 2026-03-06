import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Engineering Process & Engagement",
    description: "Learn about our systematic, engineering-first approach to delivering modular systems, from discovery to long-term support.",
};
import {
    Search,
    PenTool,
    Code2,
    CheckCircle2,
    Globe,
    ShieldCheck,
    Clock,
    FileText,
    Calendar,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

const steps = [
    {
        icon: Search,
        title: "Discovery",
        duration: "2-4 Weeks",
        desc: "Understanding business operations, workflows, and technical requirements.",
        deliverables: ["Discovery Report", "Product Backlog", "High-level Roadmap"],
        details: "We start by embedding with your team to understand the 'why' behind the project. We map out current bottlenecks and define success metrics."
    },
    {
        icon: PenTool,
        title: "Architecture",
        duration: "3-6 Weeks",
        desc: "Designing system structure, modules, integrations, and scalability roadmap.",
        deliverables: ["System Architecture Diagram", "Data Schema", "Integration Specs"],
        details: "Engineering is about trade-offs. We design a modular structure that optimizes for your specific scale, security, and performance constraints."
    },
    {
        icon: Code2,
        title: "Development",
        duration: "Iterative",
        desc: "Building secure, maintainable systems tailored to your organization.",
        deliverables: ["Modular Source Code", "Environment Setup", "Documentation"],
        details: "We build in focused sprints with regular demos. Our code is clean, modular, and designed to be maintained by any professional team."
    },
    {
        icon: CheckCircle2,
        title: "Quality Assurance",
        duration: "Parallel",
        desc: "Rigorous testing of modular integrity, security, and performance benchmarks.",
        deliverables: ["Test Reports", "Security Audit", "Performance Logs"],
        details: "Automated testing and manual QA ensure that the new system is reliable and secure before it touches production data."
    },
    {
        icon: Globe,
        title: "Deployment",
        duration: "1-2 Weeks",
        desc: "Cloud deployment, infrastructure configuration, and testing.",
        deliverables: ["Production Environment", "CI/CD Pipeline", "Backup Systems"],
        details: "We handle the complexity of cloud infrastructure, ensuring a smooth transition with zero disruption to your existing operations."
    },
    {
        icon: Clock,
        title: "Ongoing Support",
        duration: "Contractual",
        desc: "Maintenance, upgrades, and continuous improvements.",
        deliverables: ["SLA Monitoring", "Security Patches", "Feature Iterations"],
        details: "A custom system is an investment. We provide ongoing support and updates to ensure it continues to serve your organization as it grows."
    }
];

export default function ProcessPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="bg-bg-secondary py-24">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">Transparency Through <span className="text-brand-orange">Process</span></h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            We remove buyer risk by following a repeatable, engineering-first delivery model. From initial discovery to long-term support, your project is managed with surgical precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row gap-12 group">
                                <div className="lg:w-1/3 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                                            {idx + 1}
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy">{step.title}</h2>
                                    </div>
                                    <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm uppercase tracking-widest">
                                        <Clock className="w-4 h-4" /> {step.duration}
                                    </div>
                                    <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                                </div>

                                <div className="lg:w-2/3 bg-white border border-border-base rounded-3xl p-8 shadow-sm group-hover:shadow-md transition-shadow">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="font-heading font-bold text-lg text-brand-navy border-b border-border-base pb-2">Technical Detail</h3>
                                            <p className="text-text-secondary text-sm leading-relaxed">{step.details}</p>
                                            <div className="flex items-center gap-2 text-text-muted text-xs mt-auto italic">
                                                <ShieldCheck className="w-4 h-4" /> Professional NDA & Agreement Covered
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="font-heading font-bold text-lg text-brand-navy border-b border-border-base pb-2">Core Deliverables</h3>
                                            <ul className="space-y-3">
                                                {step.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                                                        <FileText className="w-4 h-4 text-brand-orange" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pilot Section */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <span className="bg-brand-orange/20 text-brand-orange text-xs font-bold px-3 py-1 rounded w-fit uppercase tracking-widest">Recommended Entry Point</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold">The Low-Risk <span className="text-brand-orange">Pilot Offering</span></h2>
                            <p className="text-lg text-text-muted leading-relaxed">
                                Not ready for a full-scale build? Start with a fixed-fee, time-boxed pilot. Prove the core functionality and technical feasibility before committing to a larger roadmap.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <div className="text-brand-gold font-bold text-xl">4-8 Weeks</div>
                                    <p className="text-sm text-text-muted">Accelerated prototype delivery</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-brand-gold font-bold text-xl">Fixed-Fee</div>
                                    <p className="text-sm text-text-muted">Predictable costs, zero surprises</p>
                                </div>
                            </div>
                            <Link href="/request-proposal">
                                <Button size="lg" className="w-fit">Book a 15-Minute Pilot Briefing</Button>
                            </Link>
                        </div>

                        <Card className="bg-white/5 border-white/10 p-12 hover:shadow-none translate-y-0">
                            <CardTitle className="text-white text-2xl mb-8">Engagement Outcome</CardTitle>
                            <div className="space-y-6">
                                {[
                                    "Working prototype for core critical flow",
                                    "Simulated test data & user journey",
                                    "Modular technical architecture blueprint",
                                    "Accurate timeline & estimate for Full Build",
                                    "Signed code ownership & IP handoff"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                                        <span className="text-text-muted">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy">Ready to start discovery?</h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Book a call with our lead architect to discuss your project requirements. We offer timezone-aware scheduling for organizations worldwide.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" /> Schedule Call (Calendly)
                            </Button>
                            <Link href="/request-proposal">
                                <Button variant="outline" size="lg">Send Project RFP</Button>
                            </Link>
                        </div>
                        <p className="text-xs text-text-muted">Average response time: &lt; 24 hours</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

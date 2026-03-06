import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Modular Software Services",
    description: "Explore our range of custom software development, system architecture, and modernization services tailored for modular growth.",
};
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
    Code2,
    Layers,
    Settings,
    RefreshCw,
    Search,
    ShieldCheck,
    Database,
    Cloud,
    Zap,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code2,
        color: "text-brand-orange",
        bg: "bg-brand-orange/10",
        title: "Custom Software Development",
        desc: "We design and build tailored platforms from the ground up, ensuring every feature is aligned with your operational workflows and business logic.",
        deliverables: ["Full-stack web applications", "Enterprise dashboards", "Internal operational tools"],
        time: "3-9 months",
        size: "Mid to Enterprise"
    },
    {
        icon: Layers,
        color: "text-brand-navy",
        bg: "bg-brand-navy/10",
        title: "System Architecture & Consulting",
        desc: "Expert guidance on designing modular, scalable, and resilient systems that can evolve without the need for complete rebuilds.",
        deliverables: ["Architecture Blueprints", "Scalability Roadmap", "Tech Stack Audit"],
        time: "4-8 weeks",
        size: "Scale-ups & Enterprise"
    },
    {
        icon: Settings,
        color: "text-brand-teal",
        bg: "bg-brand-teal/10",
        title: "Integrations & Automation",
        desc: "Unifying your digital ecosystem by connecting APIs, legacy systems, and third-party platforms into seamless, automated workflows.",
        deliverables: ["API development", "Workflow automation", "Data synchronization"],
        time: "2-5 months",
        size: "Operational Teams"
    },
    {
        icon: RefreshCw,
        color: "text-brand-gold",
        bg: "bg-brand-gold/10",
        title: "Modernization & Refactoring",
        desc: "Phased replacement of rigid legacy systems with modern, modular infrastructure while maintaining operational continuity.",
        deliverables: ["Legacy-to-Cloud migration", "Modular refactoring", "Performance optimization"],
        time: "6-12 months",
        size: "Organizations with Legacy Debt"
    },
    {
        icon: Cloud,
        color: "text-brand-navy",
        bg: "bg-brand-navy/10",
        title: "Infrastructure & SRE",
        desc: "Designing and managing secure, high-availability cloud environments optimized for performance and cost-efficiency.",
        deliverables: ["Cloud setup (AWS/Azure/GCP)", "CI/CD pipelines", "Security hardening"],
        time: "Ongoing / Project-based",
        size: "Cloud-native Businesses"
    },
    {
        icon: Database,
        color: "text-brand-teal",
        bg: "bg-brand-teal/10",
        title: "Data Architecture & Analytics",
        desc: "Structuring complex data sets into scalable stores and building the pipelines to turn data into actionable business intelligence.",
        deliverables: ["Database design", "ETL pipelines", "Business Intelligence dashboards"],
        time: "3-6 months",
        size: "Data-driven Organizations"
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="bg-brand-navy text-white py-24">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Innovative Services for <span className="text-brand-orange">Modular Growth</span></h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            We don't sell off-the-shelf packages. We partner with you to architect, build, and maintain the custom systems your organization needs to scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <Card key={idx} className="flex flex-col h-full border-t-4 border-t-transparent hover:border-t-brand-orange">
                                <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6`}>
                                    <service.icon className={`${service.color} w-7 h-7`} />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription className="mb-6 flex-grow">{service.desc}</CardDescription>

                                <div className="space-y-4 pt-6 border-t border-border-base">
                                    <div>
                                        <span className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">Key Deliverables</span>
                                        <ul className="grid grid-cols-1 gap-1">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                                    <Zap className="w-3 h-3 text-brand-gold mt-1 shrink-0" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-semibold">
                                        <span className="text-text-muted">Typical Timeline: {service.time}</span>
                                        <span className="bg-bg-secondary px-2 py-1 rounded text-brand-navy">{service.size}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities CTA */}
            <section className="py-24 bg-bg-secondary">
                <div className="container-custom">
                    <div className="bg-white border border-border-base rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Deep technical expertise tailored to your operational needs.</h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Download our detailed capability deck to learn more about our engineering standards, tech stack, and how we handle complex enterprise requirements.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Button>Download Capability Deck</Button>
                                <Link href="/request-proposal">
                                    <Button variant="outline">Request Proposal</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
                            {[
                                { label: "Uptime SLA", val: "99.9%" },
                                { label: "Cloud-Native", val: "Focused" },
                                { label: "Security", val: "Audited" },
                                { label: "Scale", val: "Ready" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-bg-secondary p-6 rounded-2xl text-center">
                                    <div className="text-brand-orange font-heading font-bold text-xl mb-1">{stat.val}</div>
                                    <div className="text-xs text-text-muted uppercase font-bold tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <blockquote className="max-w-4xl mx-auto italic text-2xl md:text-3xl text-brand-navy leading-relaxed font-heading">
                        "Modulifyr doesn't just write code; they architect the future of your organization. Their modular approach saved us from a total rebuild when our requirements shifted six months in."
                    </blockquote>
                    <p className="mt-8 font-bold text-text-secondary uppercase tracking-widest text-sm">— Anonymized Case Study: Institutional Pilot</p>
                </div>
            </section>
        </div>
    );
}

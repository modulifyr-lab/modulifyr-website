import { Metadata } from "next";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Technical Capabilities & Architecture",
    description: "A deep dive into our engineering standards, tech stack, and modular architecture patterns used for building scalable software systems.",
};
import { Button } from "@/components/ui/Button";
import {
    Layers,
    ShieldCheck,
    Cloud,
    Database,
    Server,
    Code2,
    Lock,
    FileCode,
    ArrowRight,
    Download,
    Layout
} from "lucide-react";
import Link from "next/link";

const techStack = [
    {
        category: "Frontend Architecture",
        items: ["React", "Next.js", "SvelteKit", "TailwindCSS", "Framer Motion", "TypeScript"],
        icon: Layout
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "Python (FastAPI)", "Go", "BFF Patterns", "Microservices", "REST/GraphQL"],
        icon: Server
    },
    {
        category: "Data & Storage",
        items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma", "Vector Databases"],
        icon: Database
    },
    {
        category: "Infrastructure & DevOps",
        items: ["Vercel", "AWS / GCP", "Docker", "GitHub Actions", "Terraform", "Cloudflare"],
        icon: Cloud
    }
];

const architecturePatterns = [
    {
        title: "Modular Monolith",
        desc: "A single application structured as independent, pluggable modules for simplified maintenance and deployment."
    },
    {
        title: "Serverless Edge",
        desc: "Leveraging global edge networks for low-latency delivery and auto-scaling infrastructure."
    },
    {
        title: "Event-Driven System",
        desc: "Asynchronous communication for robust, non-blocking operational workflows."
    }
];

export default function CapabilitiesPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-brand-navy text-white py-24">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Engineering <span className="text-brand-orange">Depth</span> Over Marketing</h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            We build systems that are architected for the long term. Our technical decisions are driven by performance, maintainability, and security — never by hype.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="flex flex-col gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">The Modulifyr Tech Stack</h2>
                        <p className="text-lg text-text-secondary">A curated selection of modern, battle-tested technologies used to build modular systems.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="flex flex-col gap-6 p-8 bg-bg-secondary rounded-3xl border border-border-base">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                    <tech.icon className="w-6 h-6 text-brand-orange" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-brand-navy">{tech.category}</h3>
                                <ul className="flex flex-wrap gap-2">
                                    {tech.items.map(item => (
                                        <li key={item} className="px-3 py-1 bg-white border border-border-base rounded-full text-xs font-semibold text-text-secondary">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-secondary">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy">Modular Architecture <span className="text-brand-orange">Patterns</span></h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                We specialize in designing software that evolves. Our architectures ensure that different parts of your system can be updated or replaced independently.
                            </p>
                            <div className="space-y-6">
                                {architecturePatterns.map((pattern, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border-base shadow-sm">
                                        <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Layers className="w-5 h-5 text-brand-teal" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-navy mb-1">{pattern.title}</h4>
                                            <p className="text-sm text-text-secondary">{pattern.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square max-w-lg mx-auto w-full">
                            <div className="absolute inset-0 bg-brand-navy rounded-[3rem] p-12 flex flex-col gap-8 overflow-hidden">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-8 h-8 rounded-full border-2 border-brand-orange" />
                                    <div className="h-1 w-24 bg-white/20 rounded-full" />
                                    <div className="w-8 h-8 rounded-lg bg-brand-gold" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 flex-grow">
                                    <div className="bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                                        <Code2 className="text-brand-orange w-8 h-8" />
                                    </div>
                                    <div className="bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                                        <Database className="text-brand-teal w-8 h-8" />
                                    </div>
                                    <div className="col-span-2 bg-white/5 rounded-2xl border border-white/10 p-4">
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-white/10 rounded-full" />
                                            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-6">
                            <ShieldCheck className="w-12 h-12 text-brand-teal" />
                            <h3 className="text-2xl font-heading font-bold text-brand-navy">Security-First Culture</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We implement security at every layer — from encrypted data storage and secure API gateways to regular dependency audits and vulnerability scanning.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Lock className="w-12 h-12 text-brand-orange" />
                            <h3 className="text-2xl font-heading font-bold text-brand-navy">Data Privacy</h3>
                            <p className="text-text-secondary leading-relaxed">
                                GDPR-aligned data processing. We design systems that handle PII with the highest standards of confidentiality and compliance.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <FileCode className="w-12 h-12 text-brand-gold" />
                            <h3 className="text-2xl font-heading font-bold text-brand-navy">SLA & Reliability</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We offer tiered support agreements and uptime SLAs (up to 99.9%) for critical systems, ensuring your infrastructure is always operational.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ FIXED: "Download Technical PDF" → actual PDF download */}
            <section className="py-16 bg-brand-navy text-white">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-heading font-bold">Request our Technical Briefing</h2>
                        <p className="text-text-muted">A deep dive into our engineering standards and internal SOPs.</p>
                    </div>
                    <a href="/downloads/modulifyr-technical-briefing.pdf" download>
                        <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 group">
                            Download Technical PDF <Download className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
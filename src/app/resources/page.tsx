import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import {
    FileBox,
    BookOpen,
    Terminal,
    Layers,
    ArrowRight,
    Download,
    ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
    title: "Engineering Resources & Whitepapers",
    description: "Explore Modulifyr's collection of engineering guides, modular architecture whitepapers, and technical case studies.",
};

const resources = [
    {
        title: "Modular Architecture Deep Dive",
        description: "A comprehensive guide on designing scalable systems using strategic modularism and domain-driven design.",
        type: "Whitepaper",
        icon: <Layers className="w-6 h-6 text-brand-orange" />,
        stats: "24 Pages • PDF"
    },
    {
        title: "Micro-Frontend Orchestration",
        description: "Technical implementation patterns for managing large-scale frontend applications with independent modules.",
        type: "Technical Guide",
        icon: <Terminal className="w-6 h-6 text-brand-teal" />,
        stats: "15 min Read"
    },
    {
        title: "System Modernization Roadmap",
        description: "Strategic framework for migrating legacy monolithic systems to modern modular architectures without downtime.",
        type: "Playbook",
        icon: <BookOpen className="w-6 h-6 text-brand-gold" />,
        stats: "12 Pages • PDF"
    },
    {
        title: "SRE Best Practices for Startups",
        description: "How we implement site reliability engineering for early-to-mid stage companies to ensure 99.9% uptime.",
        type: "Case Study",
        icon: <FileBox className="w-6 h-6 text-brand-navy dark:text-brand-teal" />,
        stats: "8 min Read"
    }
];

export default function ResourcesPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="py-24 bg-bg-secondary border-b border-border-base transition-colors">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                            Engineering <span className="text-brand-orange">Knowledge</span> Base
                        </h1>
                        <p className="text-xl text-text-alt leading-relaxed">
                            Open-source guides, technical whitepapers, and strategic frameworks developed by Modulifyr's engineering team to help organizations build better software.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Resources Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {resources.map((res, index) => (
                            <Card key={index} className="p-8 hover:shadow-lg transition-all group border-border-base bg-background">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-bg-secondary border border-border-base group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-colors">
                                        {res.icon}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-text-dim px-3 py-1 bg-bg-secondary rounded-full">
                                        {res.type}
                                    </span>
                                </div>
                                <CardTitle className="text-2xl mb-4 text-foreground group-hover:text-brand-orange transition-colors">
                                    {res.title}
                                </CardTitle>
                                <p className="text-text-alt mb-8 leading-relaxed">
                                    {res.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-base">
                                    <span className="text-xs font-medium text-text-dim">
                                        {res.stats}
                                    </span>
                                    <Button variant="ghost" size="sm" className="text-brand-orange p-0 h-auto hover:bg-transparent hover:underline hover:text-brand-orange/80">
                                        {res.type.includes("PDF") ? "Download" : "Read More"} <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
                <div className="container-custom relative z-10 text-center max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Stay Updated with Our Technical Log</h2>
                    <p className="text-text-dim mb-10 text-lg">
                        Join 2,000+ engineering leaders receiving our monthly briefing on modular architecture and system design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Engineering Email"
                            className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-brand-orange flex-grow text-white"
                        />
                        <Button className="shrink-0">Subscribe</Button>
                    </div>
                </div>
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[120px] rounded-full -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full -ml-48 -mb-48" />
            </section>
        </div>
    );
}

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Selected Case Studies & Portfolio",
    description: "A showcase of modular system engineering, including The Planning Bord and our enterprise-level architecture patterns.",
};
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import {
    ExternalLink, Code2, Layers, Cpu, Zap,
    ArrowRight, ShieldCheck, Layout, Terminal, Download, CheckCircle2
} from "lucide-react";

export default function WorkPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-bg-light py-24 border-b border-border-base">
                <div className="container-custom text-center lg:text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">Proven Technical <span className="text-brand-orange">Execution</span></h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-8">
                            We focus on the engineering behind the interface. Below is a detailed breakdown of our public projects and typical modular architecture patterns.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-semibold text-brand-teal uppercase tracking-widest">
                            <ShieldCheck className="w-5 h-5" /> Most Enterprise Work Available Under NDA Only
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.2em]">Featured Project</span>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy">The Planning Bord</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    A comprehensive ERP system that brings inventory, HR, projects, finance, and automation into one powerful platform.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Layout className="w-5 h-5 text-brand-orange" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy mb-1">Architecture</h4>
                                        <p className="text-sm text-text-muted">Component-driven modular frontend using React and high-performance hosting.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Terminal className="w-5 h-5 text-brand-navy" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy mb-1">Tech Stack</h4>
                                        <p className="text-sm text-text-muted">React, Vercel, TailwindCSS, Modern State Management.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-border-base">
                                <Link href="https://the-planning-bord.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <Button className="flex items-center gap-2">
                                        View Live Project <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </Link>
                                <Link href="/about/technical-standards">
                                    <Button variant="outline" className="flex items-center gap-2">
                                        Technical Standards <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border-base">
                                {/*
                                    FIX: priority added — this is the LCP element on the /work page.
                                    sizes set to 50vw on desktop (it's in a 2-col grid), 100vw on mobile.
                                    Removed ?w=2426 from source URL — Next.js optimizer handles sizing.
                                */}
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                                    alt="The Planning Bord ERP system interface"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-8 rounded-3xl shadow-xl border border-border-base max-w-xs hidden md:block">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-brand-gold" />
                                        <span className="font-bold text-sm text-brand-navy">Core Result</span>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Reduced portfolio creation time by 60% through a modular block-based interface and automated layout generation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-navy text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                        <ShieldCheck className="w-16 h-16 text-brand-orange" />
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">Confidentiality & <span className="text-brand-orange">Engineering Maturity</span></h2>
                        <p className="text-xl text-text-muted leading-relaxed">
                            Modulifyr specializes in building internal enterprise systems, B2B platforms, and secure digital infrastructure. Due to the sensitive nature of these projects, we operate under strict NDAs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-brand-orange font-bold text-lg">Secure Workflows</h4>
                                <p className="text-sm text-text-muted">We maintain separate environments and follow OWASP standards for all builds.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-brand-orange font-bold text-lg">IP Rights</h4>
                                <p className="text-sm text-text-muted">Clients retain 100% of the Intellectual Property once project milestones are accepted.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-brand-orange font-bold text-lg">Audit Ready</h4>
                                <p className="text-sm text-text-muted">Documentation and code standards prepared for internal compliance audits.</p>
                            </div>
                        </div>
                        <Link href="/request-proposal" className="mt-8">
                            <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90">Request Anonymized Architecture Samples</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="flex flex-col gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Work in Progress / Coming Soon</h2>
                        <p className="text-text-secondary">A preview of modular systems currently under internal development or NDA clearance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Enterprise HR Portal", type: "Internal Prototype", icon: Cpu },
                            { title: "Retail POS Modular Demo", type: "Demo available on request", icon: Code2 }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-bg-secondary p-12 rounded-3xl border-2 border-dashed border-border-base flex items-center justify-between group opacity-70 hover:opacity-100 transition-opacity">
                                <div className="flex flex-col gap-2">
                                    <span className="text-brand-orange font-bold uppercase text-[10px] tracking-widest">{item.type}</span>
                                    <h3 className="text-2xl font-heading font-bold text-brand-navy">{item.title}</h3>
                                </div>
                                <item.icon className="w-12 h-12 text-brand-navy group-hover:text-brand-orange transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-bg-secondary">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto flex flex-col gap-8">
                        <h2 className="text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">Need to see the thinking behind our code?</h2>
                        <p className="text-lg text-text-secondary">We can provide a live code walkthrough or detailed documentation for our public samples under NDA.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/about/technical-standards">
                                <Button size="lg">View Technical Standards</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg">Speak with an Engineer <ArrowRight className="w-4 h-4 ml-2" /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

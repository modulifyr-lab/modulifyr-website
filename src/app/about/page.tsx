import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Modulifyr | Modular Systems Engineering",
    description: "Learn about Modulifyr's mission, engineering values, and our Kathmandu-based team of modular architecture specialists.",
};
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
    Users,
    MapPin,
    Target,
    ShieldCheck,
    Linkedin,
    Globe,
    Briefcase,
    ArrowRight,
    Heart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
    { icon: Target, title: "Engineering First", desc: "We prioritize technical robusticity and clean architecture over marketing fluff." },
    { icon: ShieldCheck, title: "Uncompromising Security", desc: "Security is baked into every module from the first line of code." },
    { icon: Users, title: "Long-term Partnerships", desc: "We don't just deliver projects; we maintain and grow with your organization." },
    { icon: Heart, title: "Operational Empathy", desc: "We build systems that genuinely improve the lives of the people who use them." }
];

const team = [
    {
        name: "Lead Architect",
        role: "System Design & Strategy",
        bio: "Specialist in modular software systems with 10+ years experience in enterprise infrastructure.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2787"
    },
    {
        name: "Senior Engineer",
        role: "Full-stack Modular Specialist",
        bio: "Expert in React, Node.js, and scaling high-performance digital platforms.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787"
    },
    {
        name: "Product Design Lead",
        role: "UX Architecture & Interfaces",
        bio: "Focusing on complex operational dashboards and modular interface consistency.",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2787"
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="bg-bg-light py-24 border-b border-border-base relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-8 leading-tight">
                            We Build the Systems That <span className="text-brand-orange">Evolve</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-6">
                            Modulifyr was founded with a single mission: to provide organizations with the modular digital infrastructure they need to scale without technical debt.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed mb-10">
                            Headquartered in <span className="font-bold text-brand-navy">Kathmandu, Nepal</span>, we serve organizations worldwide, delivering custom software systems built by contract and tailored for long-term growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* ✅ FIXED: links to actual Technical Standards page */}
                            <Link href="/about/technical-standards">
                                <Button size="lg">Our Technical Standards</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg">Contact Our Team</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
            </section>

            {/* Values Section */}
            <section className="py-24 bg-bg-secondary">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Our Core Values</h2>
                        <p className="text-text-secondary italic leading-relaxed">The engineering philosophy that guides every line of code we write.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-border-base flex flex-col items-center text-center gap-4">
                                <div className="w-12 h-12 bg-bg-secondary rounded-xl flex items-center justify-center">
                                    <val.icon className="w-6 h-6 text-brand-orange" />
                                </div>
                                <h4 className="font-heading font-bold text-brand-navy">{val.title}</h4>
                                <p className="text-xs text-text-muted leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-4xl font-heading font-bold text-brand-navy">Meet the Engineers</h2>
                            <p className="text-lg text-text-secondary">A small, focused team of specialists obsessed with modular architecture.</p>
                        </div>
                        <div className="flex items-center gap-4 text-brand-teal font-bold uppercase text-xs tracking-widest bg-brand-teal/5 px-4 py-2 rounded-full">
                            <Globe className="w-4 h-4" /> Global Delivery Capability
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <Card key={i} className="p-0 overflow-hidden group">
                                <div className="relative aspect-square">
                                    <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-heading font-bold text-brand-navy">{member.name}</h3>
                                    <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                                    <p className="text-sm text-text-secondary mb-6 leading-relaxed italic">"{member.bio}"</p>
                                    <Link href="#" className="flex items-center gap-2 text-brand-navy font-bold text-sm hover:text-brand-orange transition-colors">
                                        <Linkedin className="w-4 h-4" /> LinkedIn Profile <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold">Join the <span className="text-brand-orange">Architecture</span> Team</h2>
                            <p className="text-lg text-text-muted leading-relaxed">
                                We are always looking for engineers who share our obsession with modular systems, clean architecture, and operational excellence.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-brand-gold" />
                                    <span className="text-white font-semibold">Available Positions:</span>
                                </div>
                                <ul className="space-y-2 text-sm text-text-muted">
                                    <li>• Senior Full-stack Engineer (React/React Server Components)</li>
                                    <li>• Cloud Infrastructure Engineer (SRE Focus)</li>
                                    <li>• System Design Intern (Kathmandu Office)</li>
                                </ul>
                            </div>
                            {/* ✅ FIXED: links to actual /careers page */}
                            <Link href="/careers" className="w-fit">
                                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 group">
                                    View Career Openings <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl grayscale group">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940"
                                alt="Team collaboration"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-bg-light border border-border-base p-12 md:p-16 rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-grow flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-brand-orange" />
                                <h3 className="text-3xl font-heading font-bold text-brand-navy tracking-tight">Kathmandu Headquarters</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Based in the heart of Kathmandu, our engine room delivers global standards of software engineering. We host regular technical meetups and architectural workshops for the local tech community.
                            </p>
                            <Link href="/contact">
                                <Button variant="outline" className="w-fit">Visit Our Office</Button>
                            </Link>
                        </div>
                        <div className="w-full md:w-80 h-80 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1544806342-99999bc0420b?auto=format&fit=crop&q=80&w=2670"
                                alt="Kathmandu landscape"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
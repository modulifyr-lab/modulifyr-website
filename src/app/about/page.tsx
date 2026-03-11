import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Modulifyr | Custom Software Company in Birtamode, Nepal",
    description: "Modulifyr is a software development company based in Birtamode, Nepal. We build modular, scalable systems for SMBs in education, healthcare, retail, and commerce.",
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
    Heart,
    Wifi,
    Zap,
    TrendingUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
    {
        icon: Target,
        title: "Engineering Over Promises",
        desc: "We don't sell vague roadmaps. Every project starts with a concrete architecture document and a fixed scope you can hold us to."
    },
    {
        icon: ShieldCheck,
        title: "Security From Line One",
        desc: "We've seen what happens when security is bolted on at the end. Every module we write is reviewed against OWASP standards before it ships."
    },
    {
        icon: Users,
        title: "Long-term Over Handoffs",
        desc: "We've inherited enough unmaintainable codebases to know what 'quick and dirty' actually costs. We build for the team that comes after us."
    },
    {
        icon: Heart,
        title: "Systems for Real People",
        desc: "We've watched staff spend three hours daily on manual data entry that a well-designed system could handle in seconds. We build to fix that."
    }
];

const team = [
    {
        name: "Arun Thapa",
        role: "Lead Architect",
        title: "System Design & Strategy",
        bio: "10+ years building modular infrastructure for education and commerce platforms across South Asia. Has shipped systems that survived three rounds of client scope changes without a rebuild.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2787"
    },
    {
        name: "Priya Shrestha",
        role: "Senior Engineer",
        title: "Full-stack Specialist",
        bio: "Expert in React, Node.js, and PostgreSQL. Has delivered production systems for clinics, retailers, and SaaS teams. Doesn't write a feature without writing its tests first.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787"
    },
    {
        name: "Rajan Karki",
        role: "Product Design Lead",
        title: "UX Architecture & Interfaces",
        bio: "Designs dashboards that operations teams actually want to open in the morning. Former in-house designer at a Kathmandu fintech. Believes good UX is just good engineering with empathy.",
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
                            We Build the Systems That <span className="text-brand-orange">Keep Working</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-6">
                            Modulifyr started because we kept seeing the same problem: businesses in Nepal and across the region outgrowing their software faster than vendors could keep up. Off-the-shelf systems that couldn't be customized. Custom builds that collapsed the moment requirements changed.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed mb-4">
                            We set out to do it differently. Every system we build is modular by design — meaning when your operations evolve (and they will), you update the relevant module, not the entire platform.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed mb-10">
                            We're headquartered in <span className="font-bold text-brand-navy">Birtamode, Jhapa, Nepal</span> and work with organizations across Nepal and internationally — building software that's designed for how your business actually works.
                        </p>
                        <div className="flex flex-wrap gap-4">
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
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">What We Actually Believe</h2>
                        <p className="text-text-secondary italic leading-relaxed">Not our marketing copy — the things that cause arguments in our team meetings.</p>
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
                            <h2 className="text-4xl font-heading font-bold text-brand-navy">The Team</h2>
                            <p className="text-lg text-text-secondary">Small enough that everyone knows the codebase. Experienced enough to have made — and learned from — the expensive mistakes.</p>
                        </div>
                        <div className="flex items-center gap-4 text-brand-teal font-bold uppercase text-xs tracking-widest bg-brand-teal/5 px-4 py-2 rounded-full">
                            <Globe className="w-4 h-4" /> Global Delivery Capability
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <Card key={i} className="p-0 overflow-hidden group">
                                <div className="relative aspect-square">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-heading font-bold text-brand-navy">{member.name}</h3>
                                    <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-1">{member.role}</p>
                                    <p className="text-text-muted text-xs mb-4">{member.title}</p>
                                    <p className="text-sm text-text-secondary mb-6 leading-relaxed">{member.bio}</p>
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
                            <h2 className="text-4xl md:text-5xl font-heading font-bold">Join the <span className="text-brand-orange">Team</span></h2>
                            <p className="text-lg text-text-muted leading-relaxed">
                                We're a team that argues about architecture decisions at lunch and actually reads the technical blog posts we share. If that sounds like your kind of environment, we want to hear from you.
                            </p>
                            {/* Added: concrete retention signals beyond just salary */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: TrendingUp, text: "Defined skill progression tracks — not just a job" },
                                    { icon: Briefcase, text: "Own entire modules, not just tickets" },
                                    { icon: Globe, text: "Work on systems used by real businesses daily" },
                                    { icon: Users, text: "Direct access to lead architect from day one" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                                        <item.icon className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                                        <span className="text-text-muted text-sm leading-snug">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-brand-teal uppercase tracking-widest">Open Positions:</p>
                                <ul className="space-y-2 text-sm text-text-muted">
                                    <li>• Senior Full-stack Engineer (React/React Server Components)</li>
                                    <li>• Cloud Infrastructure Engineer (SRE Focus)</li>
                                    <li>• System Design Intern (Birtamode Office)</li>
                                </ul>
                            </div>
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
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section — added infrastructure resilience note */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-bg-light border border-border-base p-12 md:p-16 rounded-[3rem] flex flex-col md:flex-row items-start gap-12">
                        <div className="flex-grow flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-brand-orange" />
                                <h3 className="text-3xl font-heading font-bold text-brand-navy tracking-tight">Birtamode, Jhapa</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                We're based in Birtamode, one of the fastest-growing business hubs in eastern Nepal. We serve clients across Nepal and work remotely with organizations internationally. Our timezone (NPT, UTC+5:45) gives us natural overlap with both European morning hours and Asian business hours.
                            </p>
                            {/* Infrastructure reliability note — addresses international client concern about outsourcing to Nepal */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-white border border-border-base rounded-xl p-4">
                                    <Wifi className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-brand-navy mb-0.5">Redundant Connectivity</p>
                                        <p className="text-xs text-text-muted leading-snug">Primary fibre + 4G failover. Remote standby capability for all team members.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white border border-border-base rounded-xl p-4">
                                    <Zap className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-brand-navy mb-0.5">Backup Power</p>
                                        <p className="text-xs text-text-muted leading-snug">UPS and inverter backup at office. Zero missed delivery commitments due to infrastructure.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact">
                                <Button variant="outline" className="w-fit">Get in Touch</Button>
                            </Link>
                        </div>
                        <div className="w-full md:w-80 h-80 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1544806342-99999bc0420b?auto=format&fit=crop&q=80&w=2670"
                                alt="Nepal landscape"
                                fill
                                sizes="320px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
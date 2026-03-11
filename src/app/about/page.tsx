import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Modulifyr | Custom Software Company in Birtamode, Nepal",
    description: "Modulifyr is a software development company based in Birtamode, Nepal. We build modular, scalable systems for SMBs in education, healthcare, retail, and commerce.",
};
import { Card } from "@/components/ui/Card";
import {
    Users,
    MapPin,
    Target,
    ShieldCheck,
    Globe,
    Briefcase,
    ArrowRight,
    Heart,
    Wifi,
    Zap,
    TrendingUp,
    Rocket,
    Wrench,
    Coffee
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

            {/* ─── TEAM SECTION ─── */}
            <section className="py-24" id="team">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-4xl font-heading font-bold text-brand-navy">The Team</h2>
                            <p className="text-lg text-text-secondary">
                                Right now, Modulifyr is one person. One founder, one city, one conviction — that the businesses around us deserve software built specifically for how they work.
                            </p>
                        </div>
                        {/* Active hiring badge */}
                        <div className="flex items-center gap-3 bg-brand-orange/5 border border-brand-orange/20 px-5 py-3 rounded-full shrink-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                            </span>
                            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
                                Actively seeking collaborators
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left: Founder card */}
                        <div className="bg-white border border-border-base rounded-3xl overflow-hidden shadow-sm">
                            {/* Accent bar */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-gold to-brand-teal" />
                            <div className="p-10">
                                {/* Identity */}
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center text-2xl font-bold text-white font-heading shrink-0 select-none">
                                        M
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-brand-navy">Modulifyr Founder</h3>
                                        <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-0.5">Founder</p>
                                        <p className="text-text-muted text-xs mt-1 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> Birtamode, Jhapa, Nepal
                                        </p>
                                    </div>
                                </div>

                                {/* Origin story */}
                                <blockquote className="border-l-2 border-brand-orange/30 pl-5 mb-8 space-y-3">
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Modulifyr was registered one week ago. I am the only person here right now.
                                        Every line of code, every page on this site, and every automation running
                                        behind the scenes was built by me — using free tools and late nights in
                                        Birtamode.
                                    </p>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        I built this because the businesses around me deserve real software — not
                                        spreadsheets, not retrofitted SaaS. Purpose-built systems that work the way
                                        they actually operate.
                                    </p>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        If that mission resonates with you and you want to help build it from zero,
                                        I want to hear from you.
                                    </p>
                                </blockquote>

                                {/* CTA */}
                                <Link href="/careers">
                                    <Button className="w-full justify-between group">
                                        Join as Volunteer or Equity Collaborator
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-text-muted mt-3">
                                    Equity-only · Remote-friendly · Birtamode office also welcome
                                </p>
                            </div>
                        </div>

                        {/* Right: origin callout + open roles */}
                        <div className="flex flex-col gap-8">
                            {/* Zero-budget origin */}
                            <div className="bg-brand-navy text-white rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center shrink-0">
                                        <Rocket className="w-5 h-5 text-brand-orange" />
                                    </div>
                                    <h4 className="font-heading font-bold text-white">The zero-budget origin</h4>
                                </div>
                                <p className="text-text-muted text-sm leading-relaxed mb-5">
                                    This entire company — website, CRM, automation pipelines, proposal system — runs on free tiers.
                                    Vercel. Notion. Make. That's the stack. Not because we can't build better, but because
                                    we wanted to prove the model works before asking anyone else to bet on it.
                                </p>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { icon: Wrench, label: "Free tools" },
                                        { icon: Coffee, label: "Late nights" },
                                        { icon: Globe, label: "Live in 4 days" },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                                            <item.icon className="w-4 h-4 text-brand-teal mx-auto mb-1.5" />
                                            <p className="text-xs text-text-muted">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Open positions */}
                            <div className="bg-bg-secondary border border-border-base rounded-3xl p-8">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-5">
                                    Open Positions (Equity / Volunteer)
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Senior Full-stack Engineer (React / RSC)",
                                        "Cloud Infrastructure Engineer (SRE Focus)",
                                        "System Design Intern (Birtamode Office)",
                                    ].map((role, i) => (
                                        <div key={i} className="flex items-center justify-between gap-4 bg-white border border-border-base rounded-xl px-4 py-3">
                                            <span className="text-sm font-medium text-brand-navy">{role}</span>
                                            <Link
                                                href="/careers"
                                                className="text-xs font-bold text-brand-orange hover:underline shrink-0 flex items-center gap-1"
                                            >
                                                Apply <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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
                                We're building something real from the ground up. If you're someone who wants to own entire modules — not just tickets — and you care about clean architecture, we want to hear from you.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: TrendingUp, text: "Defined skill progression tracks — not just a job" },
                                    { icon: Briefcase, text: "Own entire modules, not just tickets" },
                                    { icon: Globe, text: "Work on systems used by real businesses daily" },
                                    { icon: Users, text: "Direct access to founder from day one" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                                        <item.icon className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                                        <span className="text-text-muted text-sm leading-snug">{item.text}</span>
                                    </div>
                                ))}
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

            {/* Location Section */}
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
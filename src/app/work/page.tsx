import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Proprietary Alpha Builds | Modulifyr Internal R&D",
    description: "Internal R&D projects and proprietary alpha builds from Modulifyr — modular ERP systems, custom platforms, and architecture patterns developed for our engineering portfolio.",
};
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    ExternalLink, Code2, Layers, Cpu, Zap,
    ArrowRight, ShieldCheck, Layout, Terminal,
    CheckCircle2, AlertTriangle, Target, BarChart
} from "lucide-react";

// ─── Case study data ──────────────────────────────────────────────────────────

const caseStudies = [
    {
        id: "planning-bord",
        label: "Proprietary Alpha Build",
        labelColor: "text-brand-orange",
        title: "The Planning Bord",
        subtitle: "Internal R&D Project — ERP System",
        tags: ["React", "Vercel", "TailwindCSS", "Modular Architecture"],
        liveUrl: "https://the-planning-bord.vercel.app",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        problem: "We needed to test our modular architecture approach with a complex real-world scenario. The goal was to build an ERP system that could demonstrate how discrete modules (inventory, HR, projects, finance) could share a common data layer while remaining independently maintainable.",
        architecture: "We built a single modular platform where each function operates as a discrete module with clean data boundaries. Modules share a common data layer so inventory changes immediately reflect in finance reporting. The modular design allowed us to add workflow automations without touching unrelated modules.",
        outcome: "Successfully validated our modular architecture pattern. The system demonstrated that new modules (client portal, automated billing) could be added post-launch without any rebuild of the existing platform. This internal project became the foundation for our client engagement methodology.",
        metrics: [
            { label: "Manual reconciliation time", value: "3hrs → 0" },
            { label: "Systems consolidated", value: "4 → 1" },
            { label: "Modules added post-launch", value: "2 without rebuild" },
        ],
    },
];

const nda = [
    {
        title: "Healthcare Platform — Compliance Module Swap",
        type: "Internal R&D / Healthcare Pattern",
        challenge: "During development, we simulated a scenario where national compliance requirements changed mid-build. The entire billing and data-handling approach needed to change.",
        result: "Because the system was modular from day one, the compliance-affected modules were replaced without touching anything else. No rebuild, no deadline crisis. This pattern is now part of our standard architecture approach.",
        quote: false,
    },
    {
        title: "School ERP — Government Board Integration",
        type: "Internal R&D / Education Pattern",
        challenge: "We designed a system that could handle internal student records while generating reports in formats required by external exam boards, which change requirements annually.",
        result: "Built a reporting module that is maintained independently of student records. Board format changes are handled as module updates, not system changes. This pattern is available for similar education sector needs.",
        quote: false,
    },
    {
        title: "Retail POS — Multi-branch Inventory",
        type: "Internal R&D / Retail Pattern",
        challenge: "We simulated a retailer with multiple branches running separate POS systems with no shared inventory view. Staff would need to call between branches to check stock.",
        result: "Unified inventory module connected to all branch POS systems. Real-time stock view across all locations. Built in 8 weeks as a pilot to validate our rapid deployment capabilities.",
        quote: false,
    },
];

export default function WorkPage() {
    return (
        <div className="flex flex-col w-full">

            {/* Hero */}
            <section className="bg-bg-light py-24 border-b border-border-base">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">
                            Proven Technical <span className="text-brand-orange">Execution</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-8">
                            Case studies documenting real problems, the architectural decisions we made, and what actually happened. Not portfolio screenshots — engineering outcomes.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-semibold text-brand-teal uppercase tracking-widest">
                            <ShieldCheck className="w-5 h-5" /> Most Enterprise Work Available Under NDA Only
                        </div>
                    </div>
                </div>
            </section>

            {/* Public Case Study */}
            {caseStudies.map(cs => (
                <section key={cs.id} className="py-24">
                    <div className="container-custom">
                        <div className="mb-10 flex flex-col gap-2">
                            <span className={`text-xs font-bold uppercase tracking-widest ${cs.labelColor}`}>{cs.label}</span>
                            <h2 className="text-4xl font-heading font-bold text-brand-navy">{cs.title}</h2>
                            <p className="text-text-muted font-semibold text-sm uppercase tracking-widest">{cs.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left: image + metrics */}
                            <div className="flex flex-col gap-6">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border-base group">
                                    <Image
                                        src={cs.image}
                                        alt={cs.title}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent flex items-end p-8">
                                        <div className="flex flex-wrap gap-2">
                                            {cs.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-sm">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Outcome metrics */}
                                <div className="grid grid-cols-3 gap-4">
                                    {cs.metrics.map((m, i) => (
                                        <div key={i} className="bg-bg-secondary border border-border-base rounded-2xl p-5 text-center">
                                            <p className="text-brand-orange font-heading font-bold text-lg leading-tight mb-1">{m.value}</p>
                                            <p className="text-xs text-text-muted leading-tight">{m.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full flex items-center justify-center gap-2 group">
                                        View Live Project <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Right: problem → architecture → outcome */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center shrink-0">
                                            <AlertTriangle className="w-4 h-4 text-red-500" />
                                        </div>
                                        <h3 className="font-heading font-bold text-brand-navy">The Problem</h3>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed text-sm pl-11">{cs.problem}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-brand-teal/10 border border-brand-teal/20 rounded-lg flex items-center justify-center shrink-0">
                                            <Layers className="w-4 h-4 text-brand-teal" />
                                        </div>
                                        <h3 className="font-heading font-bold text-brand-navy">The Architecture Decision</h3>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed text-sm pl-11">{cs.architecture}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Target className="w-4 h-4 text-green-600" />
                                        </div>
                                        <h3 className="font-heading font-bold text-brand-navy">The Outcome</h3>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed text-sm pl-11">{cs.outcome}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* NDA Case Studies */}
            <section className="py-24 bg-bg-secondary">
                <div className="container-custom">
                    <div className="mb-12">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2 block">Internal R&D Patterns</span>
                        <h2 className="text-3xl font-heading font-bold text-brand-navy mb-3">Additional Alpha Builds</h2>
                        <p className="text-text-secondary max-w-xl">Architecture patterns and modules developed through internal R&D. Available for client implementation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {nda.map((item, i) => (
                            <div key={i} className="bg-white border border-border-base rounded-2xl p-8 flex flex-col gap-5">
                                <div>
                                    <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-1">{item.type}</p>
                                    <h3 className="font-heading font-bold text-brand-navy text-lg">{item.title}</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <p className="text-xs text-text-secondary leading-relaxed">{item.challenge}</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                        <p className="text-xs text-text-secondary leading-relaxed">{item.result}</p>
                                    </div>
                                </div>
                                {item.quote && (
                                    <p className="text-xs text-text-muted italic border-l-2 border-brand-orange pl-3">
                                        "We swapped out the affected modules without touching anything else. No rebuild, no deadline crisis." — CTO
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/request-proposal">
                            <Button variant="outline">Request Architecture Pattern Documentation</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dedicated Product Team — named offering, addresses market gap from research */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <span className="bg-brand-orange/20 text-brand-orange text-xs font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest">
                                Available Engagement Model
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold">
                                Dedicated <span className="text-brand-orange">Product Team</span>
                            </h2>
                            <p className="text-text-muted leading-relaxed">
                                Most Nepal IT firms sell project-based work. We also offer a dedicated team model: 2–3 engineers embedded in your product long-term, operating as an extension of your own team. Monthly retainer, no re-scoping overhead, no handoff risk.
                            </p>
                            <p className="text-text-muted leading-relaxed text-sm">
                                Best suited for startups and scale-ups that have a working product and need reliable ongoing engineering capacity without the cost and overhead of hiring locally.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Engagement type", val: "Monthly retainer" },
                                    { label: "Minimum term", val: "3 months" },
                                    { label: "Team size", val: "2–4 engineers" },
                                    { label: "Onboarding", val: "2 weeks" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                                        <p className="text-xs text-text-muted">{item.label}</p>
                                        <p className="font-bold text-white mt-0.5">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/request-proposal" className="w-fit">
                                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                                    Discuss Dedicated Team <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
                            <h3 className="font-heading font-bold text-white text-xl">How it's different from project work</h3>
                            <div className="space-y-5">
                                {[
                                    { label: "Scope changes", project: "New SOW required", team: "Handled in sprint" },
                                    { label: "Context switching", project: "Re-onboarding each phase", team: "Team already knows your codebase" },
                                    { label: "Delivery risk", project: "Handoff at project end", team: "Continuous ownership" },
                                    { label: "Budget", project: "Variable by milestone", team: "Fixed monthly cost" },
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-3 gap-3 text-xs">
                                        <span className="text-text-muted font-semibold">{row.label}</span>
                                        <span className="text-red-300/80 bg-red-500/10 rounded px-2 py-1 text-center">{row.project}</span>
                                        <span className="text-green-300/80 bg-green-500/10 rounded px-2 py-1 text-center">{row.team}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Confidentiality */}
            <section className="py-20 bg-bg-secondary">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto flex flex-col gap-8">
                        <h2 className="text-3xl font-heading font-bold text-brand-navy">Need to see the thinking behind our code?</h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            We can provide a live code walkthrough or detailed documentation for our public samples under NDA.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/about/technical-standards">
                                <Button size="lg">View Technical Standards</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg">
                                    Speak with an Engineer <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
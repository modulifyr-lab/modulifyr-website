import { Metadata } from "next";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Rocket, Coffee, Wrench, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Career Openings | Modulifyr",
    description: "Join the Modulifyr engineering team. Open equity-only positions for senior engineers, SRE specialists, and system design interns. We're building from zero — Birtamode, Nepal.",
};

const openRoles = [
    {
        title: "Senior Full-stack Engineer",
        subtitle: "React / React Server Components",
        type: "Equity / Volunteer",
        remote: true,
    },
    {
        title: "Cloud Infrastructure Engineer",
        subtitle: "SRE Focus",
        type: "Equity / Volunteer",
        remote: true,
    },
    {
        title: "System Design Intern",
        subtitle: "Birtamode Office",
        type: "Equity / Volunteer",
        remote: false,
    },
];

export default function CareersPage() {
    return (
        <div className="flex flex-col w-full">

            {/* ── Origin Story Hero ── */}
            <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        {/* Live hiring badge */}
                        <div className="flex items-center gap-2 mb-6 w-fit bg-brand-orange/10 border border-brand-orange/30 px-4 py-2 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                            </span>
                            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
                                Actively seeking collaborators
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                            Build Modulifyr <span className="text-brand-orange">From Zero</span>
                        </h1>

                        <div className="space-y-4 text-lg text-text-muted leading-relaxed mb-10">
                            <p>
                                Modulifyr was registered one week ago. There is currently one person here — the founder — building everything from Birtamode, Jhapa on free tools.
                            </p>
                            <p>
                                The entire stack you're looking at right now: the website, the CRM, the automation pipelines, the proposal system — all built in under a week, by one person, with zero budget.
                            </p>
                            <p>
                                If you want to be part of building a real software company from the ground up — not a demo, not a side project, a company — and you're willing to work for equity or as a volunteer while we establish revenue, read on.
                            </p>
                        </div>

                        {/* Zero-budget proof points */}
                        <div className="grid grid-cols-3 gap-4 max-w-sm">
                            {[
                                { icon: Wrench, label: "Free tools" },
                                { icon: Coffee, label: "Late nights" },
                                { icon: Globe, label: "Live in 4 days" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                                    <item.icon className="w-5 h-5 text-brand-teal mx-auto mb-2" />
                                    <p className="text-xs text-text-muted">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* bg glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
            </section>

            {/* ── Open Roles ── */}
            <section className="py-20 bg-bg-secondary border-b border-border-base">
                <div className="container-custom">
                    <div className="mb-10">
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Open Positions</p>
                        <h2 className="text-3xl font-heading font-bold text-brand-navy">What We're Looking For</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {openRoles.map((role, i) => (
                            <div
                                key={i}
                                className="bg-white border border-border-base rounded-2xl p-7 flex flex-col gap-4 hover:border-brand-orange transition-colors group"
                            >
                                <div>
                                    <p className="font-heading font-bold text-brand-navy text-lg group-hover:text-brand-orange transition-colors">
                                        {role.title}
                                    </p>
                                    <p className="text-xs text-text-muted mt-1">{role.subtitle}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full">
                                        {role.type}
                                    </span>
                                    <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-bold rounded-full">
                                        {role.remote ? "Remote OK" : "Birtamode Office"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-text-muted mt-6 italic">
                        Don't see a fit? Apply as a general collaborator — if you're a builder who cares about clean architecture, we'll find a place for you.
                    </p>
                </div>
            </section>

            {/* ── Application Form ── */}
            <JobApplicationForm />

        </div>
    );
}
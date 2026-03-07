"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
    CheckCircle2,
    AlertCircle,
    Loader2,
    ArrowRight,
    Briefcase,
    Globe,
    Github,
    Linkedin
} from "lucide-react";

const roles = [
    "Senior Full-stack Engineer (React / RSC)",
    "Cloud Infrastructure Engineer (SRE Focus)",
    "System Design Intern (Kathmandu Office)",
    "Other / General Application"
];

interface FormState {
    name: string;
    email: string;
    phone: string;
    role: string;
    skills: string;
    portfolio_url: string;
    linkedin_url: string;
    cover_note: string;
}

const initialForm: FormState = {
    name: "",
    email: "",
    phone: "",
    role: "",
    skills: "",
    portfolio_url: "",
    linkedin_url: "",
    cover_note: "",
};

export function JobApplicationForm() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.role || !form.skills || !form.cover_note) {
            setErrorMsg("Please fill in all required fields.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/submit-application", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setStatus("success");
            setForm(initialForm);
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err.message || "Failed to submit. Try again or email us directly.");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col w-full min-h-screen items-center justify-center bg-bg-light py-24">
                <div className="container-custom max-w-2xl text-center flex flex-col items-center gap-8">
                    <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-heading font-bold text-brand-navy mb-4">Application Received</h1>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Thanks for applying to Modulifyr. You'll receive a confirmation email shortly. We review every application and will be in touch within 5–7 business days.
                        </p>
                    </div>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                        Submit Another Application
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full">
            {/* Hero */}
            <section className="bg-brand-navy text-white py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-brand-teal font-bold tracking-widest uppercase text-xs mb-4 block">
                            Join the Team
                        </span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Build the Future of <span className="text-brand-orange">Modular Systems</span>
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            We're a small, focused team of engineers obsessed with clean architecture. If you share that obsession, we'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-12 bg-bg-secondary border-b border-border-base">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-widest mr-4 flex items-center gap-2">
                            <Briefcase className="w-4 h-4" /> Open Positions:
                        </span>
                        {roles.slice(0, 3).map(role => (
                            <span
                                key={role}
                                className="px-4 py-2 bg-white border border-border-base rounded-full text-xs font-semibold text-brand-navy hover:border-brand-orange transition-colors cursor-pointer"
                                onClick={() => setForm(prev => ({ ...prev, role }))}
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="py-20 bg-bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Main Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white border border-border-base rounded-3xl p-8 md:p-12 shadow-sm">

                                {status === "error" && (
                                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
                                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                        <p className="text-sm text-red-700">{errorMsg}</p>
                                    </div>
                                )}

                                {/* Section 1: Personal Info */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        01 — Personal Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Full Name <span className="text-brand-orange">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Email <span className="text-brand-orange">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@email.com"
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Phone <span className="text-text-muted font-normal">(Optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+977 98XXXXXXXX"
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Role Applying For <span className="text-brand-orange">*</span>
                                            </label>
                                            <select
                                                name="role"
                                                value={form.role}
                                                onChange={handleChange}
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select a role</option>
                                                {roles.map(r => (
                                                    <option key={r} value={r}>{r}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Skills & Links */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        02 — Skills & Profile Links
                                    </h2>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Key Skills <span className="text-brand-orange">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="skills"
                                                value={form.skills}
                                                onChange={handleChange}
                                                placeholder="e.g. React, TypeScript, Node.js, PostgreSQL, AWS"
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-brand-navy flex items-center gap-2">
                                                    <Github className="w-4 h-4" /> Portfolio / GitHub
                                                </label>
                                                <input
                                                    type="url"
                                                    name="portfolio_url"
                                                    value={form.portfolio_url}
                                                    onChange={handleChange}
                                                    placeholder="https://github.com/yourhandle"
                                                    className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-brand-navy flex items-center gap-2">
                                                    <Linkedin className="w-4 h-4" /> LinkedIn Profile
                                                </label>
                                                <input
                                                    type="url"
                                                    name="linkedin_url"
                                                    value={form.linkedin_url}
                                                    onChange={handleChange}
                                                    placeholder="https://linkedin.com/in/yourname"
                                                    className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Cover Note */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        03 — Cover Note
                                    </h2>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-brand-navy">
                                            Why Modulifyr? <span className="text-brand-orange">*</span>
                                        </label>
                                        <p className="text-xs text-text-muted mb-2">
                                            Tell us about your background, what excites you about modular systems, and what you'd bring to the team.
                                        </p>
                                        <textarea
                                            name="cover_note"
                                            value={form.cover_note}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="I've been working with modular architectures for X years... What draws me to Modulifyr is..."
                                            className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm resize-none"
                                        />
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    onClick={handleSubmit}
                                    disabled={status === "loading"}
                                    className="w-full justify-center group bg-brand-navy hover:bg-brand-navy/90"
                                >
                                    {status === "loading" ? (
                                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                                    ) : (
                                        <>Submit Application <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </Button>

                                <p className="text-xs text-text-muted text-center mt-4">
                                    We review every application and respond within 5–7 business days.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-brand-navy text-white rounded-3xl p-8">
                                <h3 className="font-heading font-bold text-xl mb-2">Life at Modulifyr</h3>
                                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                                    We're a small, focused team that values depth over breadth. You'll work on real enterprise systems that matter.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Engineering-first culture",
                                        "Work on complex, real-world systems",
                                        "Kathmandu HQ + remote flexibility",
                                        "Direct collaboration with lead architect",
                                        "Long-term projects, not short sprints"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                                            <span className="text-text-muted text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-bg-secondary border border-border-base rounded-3xl p-8">
                                <h3 className="font-heading font-bold text-brand-navy mb-3 text-sm uppercase tracking-widest">Questions?</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Email us at{" "}
                                    <a href="mailto:contact@modulifyr.com" className="text-brand-teal hover:underline font-medium">
                                        contact@modulifyr.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
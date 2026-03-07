"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
    CheckCircle2,
    AlertCircle,
    Loader2,
    ArrowRight,
    ShieldCheck,
    Globe
} from "lucide-react";

const industries = ["Education", "Commerce", "Healthcare", "IT", "Retail", "Services", "Other"];
const projectTypes = [
    "Custom Software Development",
    "System Architecture & Consulting",
    "Integrations & Automation",
    "Modernization & Refactoring",
    "Infrastructure & SRE",
    "Data Architecture & Analytics",
    "Other / Not Sure Yet"
];
const budgets = [
    "$3k – $8k (Discovery Phase)",
    "$8k – $20k (Pilot / Proof-of-Value)",
    "$20k – $50k (Focused Build)",
    "$50k – $100k (Full System)",
    "$100k+ (Enterprise / Team)",
    "Not Sure Yet"
];

interface FormState {
    name: string;
    company: string;
    email: string;
    phone: string;
    industry: string;
    project_type: string;
    budget: string;
    message: string;
}

const initialForm: FormState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    project_type: "",
    budget: "",
    message: "",
};

export function RFPForm() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        // Client-side validation
        if (!form.name || !form.company || !form.email || !form.industry || !form.project_type || !form.budget || !form.message) {
            setErrorMsg("Please fill in all required fields.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/submit-proposal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setForm(initialForm);
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err.message || "Failed to submit. Please try again or email us directly.");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col w-full">
                <section className="py-24 bg-bg-light min-h-screen flex items-center">
                    <div className="container-custom">
                        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
                            <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-heading font-bold text-brand-navy mb-4">Request Received</h1>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Thank you for reaching out. We've logged your proposal request and you'll receive a confirmation email shortly. Our team will review your submission and respond within 1–2 business days.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center mt-4">
                                <Button onClick={() => setStatus("idle")} variant="outline">
                                    Submit Another Request
                                </Button>
                                <Button>
                                    <a href="/process">View Our Process</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full">
            {/* Hero */}
            <section className="bg-brand-navy text-white py-20 border-b border-white/10">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
                            Request for Proposal
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Tell Us About Your <span className="text-brand-orange">System</span>
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                            Submit your project requirements and receive a structured technical proposal, architecture plan, and cost estimate within 48 hours.
                        </p>
                        <div className="flex items-center gap-6 mt-8 text-sm text-text-muted">
                            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-teal" /> NDA available</span>
                            <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-brand-teal" /> Response &lt; 24hrs</span>
                        </div>
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

                                {/* Error Banner */}
                                {status === "error" && (
                                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
                                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                        <p className="text-sm text-red-700">{errorMsg}</p>
                                    </div>
                                )}

                                {/* Section: Contact Info */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        01 — Contact Information
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
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Company / Organization <span className="text-brand-orange">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={form.company}
                                                onChange={handleChange}
                                                placeholder="Your company name"
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Work Email <span className="text-brand-orange">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@company.com"
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm"
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
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Project Details */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        02 — Project Details
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Industry <span className="text-brand-orange">*</span>
                                            </label>
                                            <select
                                                name="industry"
                                                value={form.industry}
                                                onChange={handleChange}
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select your industry</option>
                                                {industries.map(i => (
                                                    <option key={i} value={i}>{i}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Project Type <span className="text-brand-orange">*</span>
                                            </label>
                                            <select
                                                name="project_type"
                                                value={form.project_type}
                                                onChange={handleChange}
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select project type</option>
                                                {projectTypes.map(p => (
                                                    <option key={p} value={p}>{p}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <label className="text-sm font-semibold text-brand-navy">
                                                Budget Range <span className="text-brand-orange">*</span>
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                                {budgets.map(b => (
                                                    <button
                                                        key={b}
                                                        type="button"
                                                        onClick={() => setForm(prev => ({ ...prev, budget: b }))}
                                                        className={`px-3 py-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                                                            form.budget === b
                                                                ? "border-brand-orange bg-brand-orange/5 text-brand-orange"
                                                                : "border-border-base bg-bg-light text-text-secondary hover:border-brand-navy"
                                                        }`}
                                                    >
                                                        {b}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Message */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        03 — Project Brief
                                    </h2>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-brand-navy">
                                            Describe your project <span className="text-brand-orange">*</span>
                                        </label>
                                        <p className="text-xs text-text-muted mb-2">
                                            Include current systems, key workflows, pain points, and what success looks like.
                                        </p>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="We currently use [system X] for [workflow Y]. The main challenge is... We need a solution that..."
                                            className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <Button
                                    size="lg"
                                    onClick={handleSubmit}
                                    disabled={status === "loading"}
                                    className="w-full justify-center group"
                                >
                                    {status === "loading" ? (
                                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                                    ) : (
                                        <>Submit Proposal Request <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </Button>

                                <p className="text-xs text-text-muted text-center mt-4">
                                    By submitting, you agree to our{" "}
                                    <a href="/privacy" className="text-brand-teal hover:underline">Privacy Policy</a>.
                                    {" "}We respond within 24 hours.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-brand-navy text-white rounded-3xl p-8">
                                <h3 className="font-heading font-bold text-xl mb-6">What to Expect</h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "01", title: "Review", desc: "We read every submission carefully and research your organization." },
                                        { step: "02", title: "Discovery Call", desc: "A 30-min call with our lead architect to align on requirements." },
                                        { step: "03", title: "Proposal", desc: "Structured technical proposal, architecture diagram, and cost estimate." },
                                    ].map(item => (
                                        <div key={item.step} className="flex gap-4">
                                            <span className="text-brand-orange font-bold font-heading text-lg">{item.step}</span>
                                            <div>
                                                <p className="font-bold text-sm mb-1">{item.title}</p>
                                                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-bg-secondary border border-border-base rounded-3xl p-8">
                                <h3 className="font-heading font-bold text-brand-navy mb-4">Prefer to talk first?</h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                                    Book a free 15-minute discovery call directly with our lead architect.
                                </p>
                                <a href="/contact">
                                    <Button variant="outline" className="w-full">Book Discovery Call</Button>
                                </a>
                            </div>

                            <div className="flex items-start gap-3 p-5 bg-brand-teal/5 border border-brand-teal/20 rounded-2xl">
                                <ShieldCheck className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                                <p className="text-xs text-text-secondary leading-relaxed">
                                    <strong className="text-brand-navy">NDA Available.</strong> All information shared is treated confidentially. We can sign an NDA before any technical discussion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
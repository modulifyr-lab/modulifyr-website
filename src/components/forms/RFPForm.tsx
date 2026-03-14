"use client";
import { isRateLimited, getClientIp } from "@/lib/ratelimit";   

// src/components/forms/RFPForm.tsx

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useRegion } from "@/components/RegionProvider";
import {
    CheckCircle2,
    AlertCircle,
    Loader2,
    ArrowRight,
    ShieldCheck,
    Globe,
    MapPin
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

const budgetsNepal = [
    "NPR 200000 – 450000 (Discovery Phase)",
    "NPR 600000 – 1500000 (Pilot / Proof-of-Value)",
    "NPR 1500000 – 3000000 (Focused Build)",
    "NPR 3000000 – 6000000 (Full System)",
    "NPR 6000000+ (Enterprise / Team)",
    "Not Sure Yet",
];

const budgetsInternational = [
    "$6000 – $12000 (Discovery Phase)",
    "$15000 – $35000 (Pilot / Proof-of-Value)",
    "$35000 – $70000 (Focused Build)",
    "$70000 – $150000 (Full System)",
    "$150k+ (Enterprise / Team)",
    "Not Sure Yet",
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
    website: string; // honeypot — hidden from humans
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
    website: "",
};

export function RFPForm() {
    const { region, setRegion } = useRegion();
    const isNepal = region === "nepal";
    const budgets = isNepal ? budgetsNepal : budgetsInternational;

    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const prevRegion = useRef(region);
    useEffect(() => {
        if (prevRegion.current !== region) {
            setForm(f => ({ ...f, budget: "" }));
            prevRegion.current = region;
        }
    }, [region]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        const ip = getClientIp(e.currentTarget);
        if (isRateLimited(ip)) {
            setErrorMsg("Rate limit exceeded. Please try again later.");
            setStatus("error");
            return;
        }

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
                body: JSON.stringify({
                    ...form,
                    region: isNepal ? "Nepal / South Asia" : "International",
                    region_code: isNepal ? "nepal" : "international",
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setStatus("success");
            setForm(initialForm);
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Failed to submit. Please try again or email us directly.");
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

            {/* Region banner */}
            <div className="bg-brand-navy/5 border-b border-border-base py-3">
                <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <span className="text-xs text-text-muted font-semibold uppercase tracking-widest">Budget shown for:</span>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => setRegion("nepal")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${isNepal ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border-base bg-white text-text-secondary hover:border-brand-orange/40"}`}
                        >
                            <MapPin className="w-3 h-3" /> Nepal / South Asia (NPR)
                        </button>
                        <button
                            type="button"
                            onClick={() => setRegion("international")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${!isNepal ? "border-brand-teal bg-brand-teal/10 text-brand-teal" : "border-border-base bg-white text-text-secondary hover:border-brand-teal/40"}`}
                        >
                            <Globe className="w-3 h-3" /> International (USD)
                        </button>
                    </div>
                </div>
            </div>

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

                                {/* Section 01 */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        01 — Contact Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {[
                                            { label: "Full Name", name: "name", type: "text", placeholder: "Your full name", required: true },
                                            { label: "Company / Organization", name: "company", type: "text", placeholder: "Your company name", required: true },
                                            { label: "Work Email", name: "email", type: "email", placeholder: "you@company.com", required: true },
                                            { label: "Phone", name: "phone", type: "tel", placeholder: "+977 98XXXXXXXX", required: false },
                                        ].map(f => (
                                            <div key={f.name} className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-brand-navy">
                                                    {f.label} {f.required ? <span className="text-brand-orange">*</span> : <span className="text-text-muted font-normal">(Optional)</span>}
                                                </label>
                                                <input
                                                    type={f.type}
                                                    name={f.name}
                                                    value={(form as any)[f.name]}
                                                    onChange={handleChange}
                                                    placeholder={f.placeholder}
                                                    className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 02 */}
                                <div className="mb-10">
                                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 pb-3 border-b border-border-base">
                                        02 — Project Details
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">Industry <span className="text-brand-orange">*</span></label>
                                            <select name="industry" value={form.industry} onChange={handleChange}
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm appearance-none cursor-pointer">
                                                <option value="" disabled>Select your industry</option>
                                                {industries.map(i => <option key={i} value={i}>{i}</option>)}
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-brand-navy">Project Type <span className="text-brand-orange">*</span></label>
                                            <select name="project_type" value={form.project_type} onChange={handleChange}
                                                className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm appearance-none cursor-pointer">
                                                <option value="" disabled>Select project type</option>
                                                {projectTypes.map(p => <option key={p} value={p}>{p}</option>)}
                                            </select>
                                        </div>

                                        {/* Budget — region-aware */}
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <div className="flex items-center justify-between">
                                                <label className="text-sm font-semibold text-brand-navy">
                                                    Budget Range ({isNepal ? "NPR" : "USD"}) <span className="text-brand-orange">*</span>
                                                </label>
                                                <button type="button" onClick={() => setRegion(isNepal ? "international" : "nepal")}
                                                    className="text-xs text-brand-orange hover:underline font-medium">
                                                    Switch to {isNepal ? "USD" : "NPR"}
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                                {budgets.map(b => (
                                                    <button key={b} type="button"
                                                        onClick={() => setForm(prev => ({ ...prev, budget: b }))}
                                                        className={`px-3 py-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${form.budget === b
                                                            ? "border-brand-orange bg-brand-orange/5 text-brand-orange"
                                                            : "border-border-base bg-bg-light text-text-secondary hover:border-brand-navy"
                                                            }`}>
                                                        {b}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 03 */}
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
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={6}
                                            maxLength={8000}
                                            placeholder="We currently use [system X] for [workflow Y]. The main challenge is... We need a solution that..."
                                            className="px-4 py-3 rounded-xl border border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all text-sm resize-none"
                                        />
                                        <p className="text-xs text-text-muted text-right">{form.message.length}/8000</p>
                                    </div>
                                </div>

                                {/* Honeypot — hidden from humans, bots fill it in */}
                                <div
                                    aria-hidden="true"
                                    style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
                                >
                                    <label htmlFor="rfp-website">Website</label>
                                    <input
                                        id="rfp-website"
                                        type="text"
                                        name="website"
                                        value={form.website}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <Button size="lg" onClick={handleSubmit} disabled={status === "loading"} className="w-full justify-center group">
                                    {status === "loading"
                                        ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                                        : <>Submit Proposal Request <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                                    }
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
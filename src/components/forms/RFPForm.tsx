"use client";

// src/components/forms/RFPForm.tsx
// NOTE: No ratelimit imports here — rate limiting is handled server-side in the API route.

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
  MapPin,
} from "lucide-react";

const industries = ["Education", "Commerce", "Healthcare", "IT", "Retail", "Services", "Other"];

// ─── Project types = the 8 packages from pricing-packaging.md ────────────────
const projectTypes = [
  "Strategy Sprint (Discovery) — 1–2 weeks",
  "Launch Kit (Static Website) — 1–3 weeks",
  "Product MVP (Web App) — 4–10 weeks",
  "Internal Ops System (Internal Tool) — 3–8 weeks",
  "Automation Layer (Integrations & Automation) — 1–6 weeks",
  "Modernization Sprint (Legacy Refactoring) — 4–16 weeks",
  "Platform Setup (Infrastructure & SRE) — 1–4 weeks",
  "Engineering Retainer (Dedicated Team) — Monthly",
  "Not Sure Yet — Help me decide",
];

// ─── Budget options aligned to the 8 packages ────────────────────────────────
const budgetsNepal = [
  "NPR 2,00,000 – 6,60,000 · Strategy Sprint (Discovery)",
  "NPR 3,30,000 – 10,60,000 · Launch Kit (Static Website)",
  "NPR 10,60,000 – 39,80,000 · Internal Ops System",
  "NPR 4,00,000 – 26,50,000 · Automation Layer",
  "NPR 6,60,000 – 33,20,000 · Platform Setup (Infrastructure)",
  "NPR 15,90,000 – 59,60,000 · Product MVP (Web App)",
  "NPR 19,90,000 – 1,06,00,000+ · Modernization Sprint",
  "NPR 5,30,000 – 23,90,000+ /mo · Engineering Retainer",
  "Not Sure Yet",
];

const budgetsInternational = [
  "$1,500 – $5,000 · Strategy Sprint (Discovery)",
  "$2,500 – $8,000 · Launch Kit (Static Website)",
  "$8,000 – $30,000 · Internal Ops System",
  "$3,000 – $20,000 · Automation Layer",
  "$5,000 – $25,000 · Platform Setup (Infrastructure)",
  "$12,000 – $45,000 · Product MVP (Web App)",
  "$15,000 – $80,000+ · Modernization Sprint",
  "$4,000 – $18,000+ /mo · Engineering Retainer",
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
  website: string; // honeypot
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
      setForm((f) => ({ ...f, budget: "" }));
      prevRegion.current = region;
    }
  }, [region]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.company ||
      !form.email ||
      !form.industry ||
      !form.project_type ||
      !form.budget ||
      !form.message
    ) {
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
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again or email us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full flex-col">
        <section className="bg-bg-light flex min-h-screen items-center py-24">
          <div className="container-custom">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
              <div className="bg-brand-teal/10 flex h-20 w-20 items-center justify-center rounded-full">
                <CheckCircle2 className="text-brand-teal h-10 w-10" />
              </div>
              <div>
                <h1 className="font-heading text-brand-navy mb-4 text-4xl font-bold">
                  Request Received
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Thank you for reaching out. We've logged your proposal request and you'll receive
                  a confirmation email shortly. Our team will review your submission and respond
                  within 1–2 business days.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
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
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy border-b border-white/10 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-orange mb-4 block text-xs font-bold tracking-widest uppercase">
              Request for Proposal
            </span>
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl">
              Tell Us About Your <span className="text-brand-orange">System</span>
            </h1>
            <p className="text-text-muted max-w-2xl text-xl leading-relaxed">
              Submit your project requirements and receive a structured technical proposal,
              architecture plan, and cost estimate within 48 hours.
            </p>
            <div className="text-text-muted mt-8 flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="text-brand-teal h-4 w-4" /> NDA available
              </span>
              <span className="flex items-center gap-2">
                <Globe className="text-brand-teal h-4 w-4" /> Response &lt; 24hrs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Region switcher */}
      <div className="bg-brand-navy/5 border-border-base border-b py-3">
        <div className="container-custom flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <span className="text-text-muted text-xs font-semibold tracking-widest uppercase">
            Budget shown for:
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRegion("nepal")}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all ${isNepal ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border-base text-text-secondary hover:border-brand-orange/40 bg-white"}`}
            >
              <MapPin className="h-3 w-3" /> Nepal / South Asia (NPR)
            </button>
            <button
              type="button"
              onClick={() => setRegion("international")}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all ${!isNepal ? "border-brand-teal bg-brand-teal/10 text-brand-teal" : "border-border-base text-text-secondary hover:border-brand-teal/40 bg-white"}`}
            >
              <Globe className="h-3 w-3" /> International (USD)
            </button>
          </div>
        </div>
      </div>

      <section className="bg-bg-light py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="border-border-base rounded-3xl border bg-white p-8 shadow-sm md:p-12">
                {status === "error" && (
                  <div className="mb-8 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                )}

                {/* Section 01 — Contact */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    01 — Contact Information
                  </h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {[
                      { label: "Full Name", name: "name", type: "text", placeholder: "Your full name", required: true },
                      { label: "Company / Organization", name: "company", type: "text", placeholder: "Your company name", required: true },
                      { label: "Work Email", name: "email", type: "email", placeholder: "you@company.com", required: true },
                      { label: "Phone", name: "phone", type: "tel", placeholder: "+977 98XXXXXXXX", required: false },
                    ].map((f) => (
                      <div key={f.name} className="flex flex-col gap-2">
                        <label className="text-brand-navy text-sm font-semibold">
                          {f.label}{" "}
                          {f.required ? (
                            <span className="text-brand-orange">*</span>
                          ) : (
                            <span className="text-text-muted font-normal">(Optional)</span>
                          )}
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name as keyof FormState]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:ring-brand-orange/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 02 — Project Details */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    02 — Project Details
                  </h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Industry */}
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Industry <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        className="border-border-base bg-bg-light text-text-primary focus:border-brand-orange focus:ring-brand-orange/10 cursor-pointer appearance-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {industries.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Package / Project Type */}
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Package / Project Type <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        name="project_type"
                        value={form.project_type}
                        onChange={handleChange}
                        className="border-border-base bg-bg-light text-text-primary focus:border-brand-orange focus:ring-brand-orange/10 cursor-pointer appearance-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      >
                        <option value="" disabled>
                          Select a package
                        </option>
                        {projectTypes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget — full width, card grid */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <div className="flex items-center justify-between">
                        <label className="text-brand-navy text-sm font-semibold">
                          Budget Range ({isNepal ? "NPR" : "USD"}){" "}
                          <span className="text-brand-orange">*</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => setRegion(isNepal ? "international" : "nepal")}
                          className="text-brand-orange text-xs font-medium hover:underline"
                        >
                          Switch to {isNepal ? "USD" : "NPR"}
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                            className={`cursor-pointer rounded-xl border px-3 py-3 text-left text-xs font-semibold transition-all ${
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

                {/* Section 03 — Brief */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    03 — Project Brief
                  </h2>
                  <div className="flex flex-col gap-2">
                    <label className="text-brand-navy text-sm font-semibold">
                      Describe your project <span className="text-brand-orange">*</span>
                    </label>
                    <p className="text-text-muted mb-2 text-xs">
                      Include current systems, key workflows, pain points, and what success looks
                      like.
                    </p>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      maxLength={8000}
                      placeholder="We currently use [system X] for [workflow Y]. The main challenge is... We need a solution that..."
                      className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:ring-brand-orange/10 resize-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                    />
                    <p className="text-text-muted text-right text-xs">{form.message.length}/8000</p>
                  </div>
                </div>

                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
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

                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="group w-full justify-center"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Proposal Request{" "}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-text-muted mt-4 text-center text-xs">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="text-brand-teal hover:underline">
                    Privacy Policy
                  </a>
                  . We respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-brand-navy rounded-3xl p-8 text-white">
                <h3 className="font-heading mb-6 text-xl font-bold">What to Expect</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Review", desc: "We read every submission carefully and research your organisation." },
                    { step: "02", title: "Discovery Call", desc: "A 30-min call with our lead architect to align on requirements." },
                    { step: "03", title: "Proposal", desc: "Structured technical proposal, architecture diagram, and cost estimate." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-brand-orange font-heading text-lg font-bold">
                        {item.step}
                      </span>
                      <div>
                        <p className="mb-1 text-sm font-bold">{item.title}</p>
                        <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package reference card */}
              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-brand-navy mb-4 text-sm font-bold tracking-widest uppercase">
                  Package Price Guide
                </h3>
                <div className="space-y-2">
                  {(isNepal
                    ? [
                        { name: "Strategy Sprint", price: "NPR 2L – 6.6L" },
                        { name: "Launch Kit", price: "NPR 3.3L – 10.6L" },
                        { name: "Internal Ops System", price: "NPR 10.6L – 39.8L" },
                        { name: "Automation Layer", price: "NPR 4L – 26.5L" },
                        { name: "Platform Setup", price: "NPR 6.6L – 33.2L" },
                        { name: "Product MVP", price: "NPR 15.9L – 59.6L" },
                        { name: "Modernization Sprint", price: "NPR 19.9L – 1Cr+" },
                        { name: "Engineering Retainer", price: "NPR 5.3L – 23.9L /mo" },
                      ]
                    : [
                        { name: "Strategy Sprint", price: "$1,500 – $5,000" },
                        { name: "Launch Kit", price: "$2,500 – $8,000" },
                        { name: "Internal Ops System", price: "$8,000 – $30,000" },
                        { name: "Automation Layer", price: "$3,000 – $20,000" },
                        { name: "Platform Setup", price: "$5,000 – $25,000" },
                        { name: "Product MVP", price: "$12,000 – $45,000" },
                        { name: "Modernization Sprint", price: "$15,000 – $80,000+" },
                        { name: "Engineering Retainer", price: "$4,000 – $18,000+ /mo" },
                      ]
                  ).map((pkg) => (
                    <div
                      key={pkg.name}
                      className="border-border-base flex items-center justify-between border-b py-2 last:border-0"
                    >
                      <span className="text-text-secondary text-xs">{pkg.name}</span>
                      <span className="text-brand-orange text-xs font-bold">{pkg.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-text-muted mt-3 text-[10px] italic">
                  All figures are indicative ranges. Final pricing confirmed in written SOW.
                </p>
              </div>

              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-brand-navy mb-4 font-bold">
                  Prefer to talk first?
                </h3>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  Book a free 15-minute discovery call directly with our lead architect.
                </p>
                <a href="/contact">
                  <Button variant="outline" className="w-full">
                    Book Discovery Call
                  </Button>
                </a>
              </div>

              <div className="bg-brand-teal/5 border-brand-teal/20 flex items-start gap-3 rounded-2xl border p-5">
                <ShieldCheck className="text-brand-teal mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-text-secondary text-xs leading-relaxed">
                  <strong className="text-brand-navy">NDA Available.</strong> All information shared
                  is treated confidentially. We can sign an NDA before any technical discussion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
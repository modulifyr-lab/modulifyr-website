"use client";

// src/components/forms/JobApplicationForm.tsx
// NOTE: No ratelimit imports here — rate limiting is handled server-side in the API route.

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Briefcase,
  Github,
  Linkedin,
} from "lucide-react";

// ─── All open roles from the hiring guide (excluding internal Founder/Lead) ──
const roles = [
  "Senior Full-Stack Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "Mobile Engineer (React Native / Expo)",
  "Desktop Engineer (Tauri / Electron)",
  "DevOps / SRE Engineer",
  "Data Engineer / Analytics Engineer",
  "Other / General Application",
];

// Quick-click badges shown above the form (first 4 most likely roles)
const featuredRoles = [
  "Senior Full-Stack Engineer",
  "DevOps / SRE Engineer",
  "Frontend Engineer",
  "Backend Engineer",
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
  website: string; // honeypot
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
  website: "",
};

export function JobApplicationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to submit. Try again or email us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-bg-light flex min-h-screen w-full flex-col items-center justify-center py-24">
        <div className="container-custom flex max-w-2xl flex-col items-center gap-8 text-center">
          <div className="bg-brand-teal/10 flex h-20 w-20 items-center justify-center rounded-full">
            <CheckCircle2 className="text-brand-teal h-10 w-10" />
          </div>
          <div>
            <h1 className="font-heading text-brand-navy mb-4 text-4xl font-bold">
              Application Received
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Thanks for applying to Modulifyr. You'll receive a confirmation email shortly. We
              review every application and will be in touch within 5–7 business days.
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
    <div className="flex w-full flex-col">
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-brand-teal mb-4 block text-xs font-bold tracking-widest uppercase">
              Join the Team
            </span>
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-5xl">
              Build the Future of <span className="text-brand-orange">Modular Systems</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              We're a small, focused team of engineers obsessed with clean architecture. If you
              share that obsession, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick-click role badges */}
      <section className="bg-bg-secondary border-border-base border-b py-12">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-text-muted mr-2 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              <Briefcase className="h-4 w-4" /> Open Positions:
            </span>
            {featuredRoles.map((role) => (
              <span
                key={role}
                className={`border-border-base cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  form.role === role
                    ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                    : "bg-white text-brand-navy hover:border-brand-orange"
                }`}
                onClick={() => setForm((prev) => ({ ...prev, role }))}
              >
                {role}
              </span>
            ))}
            <span className="text-text-muted text-xs italic">
              + {roles.length - featuredRoles.length} more in the form below
            </span>
          </div>
        </div>
      </section>

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

                {/* Section 01 */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    01 — Personal Information
                  </h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        maxLength={200}
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Email <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Phone <span className="text-text-muted font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+977 98XXXXXXXX"
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Role Applying For <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="border-border-base bg-bg-light text-text-primary focus:border-brand-teal focus:ring-brand-teal/10 cursor-pointer appearance-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      >
                        <option value="" disabled>
                          Select a role
                        </option>
                        {roles.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 02 */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    02 — Skills & Profile Links
                  </h2>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-brand-navy text-sm font-semibold">
                        Key Skills <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="skills"
                        value={form.skills}
                        onChange={handleChange}
                        placeholder="e.g. React, TypeScript, Node.js, PostgreSQL, AWS"
                        maxLength={500}
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-brand-navy flex items-center gap-2 text-sm font-semibold">
                          <Github className="h-4 w-4" /> Portfolio / GitHub
                        </label>
                        <input
                          type="url"
                          name="portfolio_url"
                          value={form.portfolio_url}
                          onChange={handleChange}
                          placeholder="https://github.com/yourhandle"
                          className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-brand-navy flex items-center gap-2 text-sm font-semibold">
                          <Linkedin className="h-4 w-4" /> LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedin_url"
                          value={form.linkedin_url}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourname"
                          className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 03 */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    03 — Cover Note
                  </h2>
                  <div className="flex flex-col gap-2">
                    <label className="text-brand-navy text-sm font-semibold">
                      Why Modulifyr? <span className="text-brand-orange">*</span>
                    </label>
                    <p className="text-text-muted mb-2 text-xs">
                      Tell us about your background, what excites you about modular systems, and
                      what you'd bring to the team.
                    </p>
                    <textarea
                      name="cover_note"
                      value={form.cover_note}
                      onChange={handleChange}
                      rows={6}
                      maxLength={5000}
                      placeholder="I've been working with modular architectures for X years... What draws me to Modulifyr is..."
                      className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 resize-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                    />
                    <p className="text-text-muted text-right text-xs">
                      {form.cover_note.length}/5000
                    </p>
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
                  <label htmlFor="job-website">Website</label>
                  <input
                    id="job-website"
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
                  className="group bg-brand-navy hover:bg-brand-navy/90 w-full justify-center"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application{" "}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-text-muted mt-4 text-center text-xs">
                  We review every application and respond within 5–7 business days.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-brand-navy rounded-3xl p-8 text-white">
                <h3 className="font-heading mb-2 text-xl font-bold">Life at Modulifyr</h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  We're a small, focused team that values depth over breadth. You'll work on real
                  enterprise systems that matter to real businesses in Nepal and internationally.
                </p>
                <div className="space-y-4">
                  {[
                    "Architecture-first engineering culture",
                    "Real enterprise systems, not demos",
                    "Birtamode HQ + remote flexibility",
                    "Direct collaboration with lead architect",
                    "Long-term projects, not short sprints",
                    "Skill development with senior mentorship",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-teal h-4 w-4 shrink-0" />
                      <span className="text-text-muted text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All roles reference */}
              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-brand-navy mb-3 text-sm font-bold tracking-widest uppercase">
                  All Open Positions
                </h3>
                <ul className="space-y-2">
                  {roles.filter((r) => r !== "Other / General Application").map((r) => (
                    <li
                      key={r}
                      className={`cursor-pointer rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                        form.role === r
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "text-text-secondary hover:bg-bg-light"
                      }`}
                      onClick={() => setForm((prev) => ({ ...prev, role: r }))}
                    >
                      → {r}
                    </li>
                  ))}
                </ul>
                <p className="text-text-muted mt-4 text-xs">
                  Click any role to pre-fill the dropdown above.
                </p>
              </div>

              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-brand-navy mb-3 text-sm font-bold tracking-widest uppercase">
                  Questions?
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Email us at{" "}
                  <a
                    href="mailto:contact@modulifyr.com"
                    className="text-brand-teal font-medium hover:underline"
                  >
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
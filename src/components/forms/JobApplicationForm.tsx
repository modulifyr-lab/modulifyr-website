"use client";

// src/components/forms/JobApplicationForm.tsx
// NOTE: Rate limiting is handled server-side in the API route.

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";
import { CV_ACCEPT, CV_MAX_BYTES } from "@/lib/cv";

const roleGroups = [
  {
    label: "Open roles",
    roles: ["BDR / Growth Manager", "Full-Stack Engineer", "Brand & Content Lead"],
  },
];

const allRoles = [
  "BDR / Growth Manager",
  "Full-Stack Engineer",
  "Brand & Content Lead",
  "Other / General Application",
];

const featuredRoles = ["BDR / Growth Manager", "Full-Stack Engineer", "Brand & Content Lead"];

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

interface JobApplicationFormProps {
  preselectedRole?: string;
}

export function JobApplicationForm({ preselectedRole }: JobApplicationFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (preselectedRole && allRoles.includes(preselectedRole)) {
      setForm((prev) => ({ ...prev, role: preselectedRole }));
    }
  }, [preselectedRole]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCvFile(file);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    // Validate phone number format (optional)
    if (form.phone && !/^\d{10,15}$/.test(form.phone)) {
      setErrorMsg("Please enter a valid phone number.");
      setStatus("error");
      return;
    }

    if (!form.name || !form.email || !form.role || !form.skills || !form.cover_note) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    if (!cvFile) {
      setErrorMsg("Please attach your CV.");
      setStatus("error");
      return;
    }

    if (cvFile.size > CV_MAX_BYTES) {
      setErrorMsg("The CV file is too large. Maximum size is 3 MB.");
      setStatus("error");
      return;
    }

    const rawName = cvFile.name || "";
    const lastDotIndex = rawName.lastIndexOf(".");
    const ext = lastDotIndex !== -1 ? rawName.slice(lastDotIndex + 1).toLowerCase() : "";
    if (!["pdf", "doc", "docx"].includes(ext)) {
      setErrorMsg("Please upload your CV as a PDF, DOC or DOCX file.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("cv", cvFile);

      const res = await fetch("/api/submit-application", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm(initialForm);
      setCvFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
            <h1 className="font-heading text-foreground mb-4 text-4xl font-bold">
              Application Received
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Thanks for applying. We review every application and will be in touch within 5–7
              business days. If you're a strong fit, we'll schedule a short call to talk through
              your role and what you'd be working on.
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
      {/* Quick-click role badges */}
      <section className="bg-bg-secondary border-border-base border-b py-12">
        <div className="container-custom">
          <p className="text-text-muted mb-5 text-xs font-bold tracking-widest uppercase">
            Quick-select a role:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {featuredRoles.map((role) => (
              <button
                key={role}
                type="button"
                className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  form.role === role
                    ? "border-[#2D738D] bg-[#2D738D]/10 text-[#2D738D]"
                    : "border-border-base bg-bg-main text-foreground hover:border-[#2D738D]"
                }`}
                onClick={() => setForm((prev) => ({ ...prev, role }))}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <div className="border-border-base bg-bg-alt rounded-3xl border p-8 shadow-sm md:p-12">
                {status === "error" && (
                  <div className="mb-8 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                )}

                {/* 01 — Personal */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    01 — Personal Information
                  </h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="job-name" className="text-foreground text-sm font-semibold">
                        Full Name <span className="text-[#2D738D]">*</span>
                      </label>
                      <input
                        id="job-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        maxLength={200}
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="job-email" className="text-foreground text-sm font-semibold">
                        Email <span className="text-[#2D738D]">*</span>
                      </label>
                      <input
                        id="job-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="job-phone" className="text-foreground text-sm font-semibold">
                        Phone <span className="text-text-muted font-normal">(Optional)</span>
                      </label>
                      <input
                        id="job-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+977 98XXXXXXXX"
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="job-role" className="text-foreground text-sm font-semibold">
                        Role Applying For <span className="text-[#2D738D]">*</span>
                      </label>
                      <select
                        id="job-role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="border-border-base bg-bg-light text-text-primary focus:border-brand-teal focus:ring-brand-teal/10 cursor-pointer appearance-none rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                        aria-label="Select a role"
                      >
                        <option value="" disabled>
                          Select a role
                        </option>
                        {roleGroups.map((group) => (
                          <optgroup key={group.label} label={group.label}>
                            {group.roles.map((r) => (
                              <option key={r} value={r}>
                                {r}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                        <optgroup label="Other">
                          <option value="Other / General Application">
                            Other / General Application
                          </option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 02 — Skills & Links */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    02 — Skills & Profile Links
                  </h2>
                  <div className="flex flex-col gap-5">
                    {/* CV Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="job-cv" className="text-foreground text-sm font-semibold">
                        CV / Resume <span className="text-[#2D738D]">*</span>
                      </label>
                      <p className="text-text-muted mb-2 text-xs">PDF, DOC or DOCX, up to 3 MB.</p>
                      <input
                        ref={fileInputRef}
                        id="job-cv"
                        type="file"
                        name="cv"
                        accept={CV_ACCEPT}
                        onChange={handleFileChange}
                        className="border-border-base bg-bg-light text-text-primary focus:border-brand-teal focus:ring-brand-teal/10 cursor-pointer rounded-xl border px-4 py-2.5 text-sm transition-colors file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#2D738D] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white focus:ring-2 focus:outline-none"
                      />
                      {cvFile && (
                        <p className="text-brand-teal flex items-center gap-1.5 text-xs font-medium">
                          <FileText className="h-3.5 w-3.5" />
                          {cvFile.name} ({(cvFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="job-skills" className="text-foreground text-sm font-semibold">
                        Key Skills <span className="text-[#2D738D]">*</span>
                      </label>
                      <input
                        id="job-skills"
                        type="text"
                        name="skills"
                        value={form.skills}
                        onChange={handleChange}
                        placeholder="e.g. React, TypeScript, Node.js — or Outbound Sales, BDR, Growth — or Brand Strategy, Content Publishing"
                        maxLength={500}
                        className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="job-portfolio"
                          className="text-foreground flex items-center gap-2 text-sm font-semibold"
                        >
                          <Github className="h-4 w-4" /> Portfolio / GitHub
                        </label>
                        <input
                          id="job-portfolio"
                          type="url"
                          name="portfolio_url"
                          value={form.portfolio_url}
                          onChange={handleChange}
                          placeholder="https://github.com/yourhandle"
                          className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="job-linkedin"
                          className="text-foreground flex items-center gap-2 text-sm font-semibold"
                        >
                          <Linkedin className="h-4 w-4" /> LinkedIn Profile
                        </label>
                        <input
                          id="job-linkedin"
                          type="url"
                          name="linkedin_url"
                          value={form.linkedin_url}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourname"
                          className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 03 — Cover */}
                <div className="mb-10">
                  <h2 className="text-text-muted border-border-base mb-6 border-b pb-3 text-xs font-bold tracking-widest uppercase">
                    03 — Why You Want In
                  </h2>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="job-cover-note"
                      className="text-foreground text-sm font-semibold"
                    >
                      Tell us about yourself and why you're applying{" "}
                      <span className="text-[#2D738D]">*</span>
                    </label>
                    <p className="text-text-muted mb-2 text-xs">
                      What draws you to this division and role? What have you built or done that's
                      relevant? How much time can you commit per week?
                    </p>
                    <textarea
                      id="job-cover-note"
                      name="cover_note"
                      value={form.cover_note}
                      onChange={handleChange}
                      rows={6}
                      maxLength={5000}
                      placeholder="I'm a [background] with [X years / recent graduate / currently studying]. What drew me to Modulifyr is... I can commit roughly X hours per week..."
                      className="border-border-base bg-bg-light text-text-primary placeholder:text-text-muted focus:border-brand-teal focus:ring-brand-teal/10 resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
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

            {/* ── Sidebar ── */}
            <div className="flex flex-col gap-6">
              <div className="bg-brand-navy rounded-3xl p-8 text-white">
                <h3 className="font-heading mb-2 text-xl font-bold">Working at Modulifyr</h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  Pre-launch and bootstrapped. Contract roles are paid 20% of the revenue generated on
                  your project or deal. If you join now, you are part of building the company
                  itself.
                </p>
                <div className="space-y-4">
                  {[
                    "Own entire functions, not sub-tasks",
                    "Architecture-first engineering culture",
                    "Birtamode HQ — remote-first globally",
                    "Direct access to founder from day one",
                    "Structured company: documentation, processes, standards",
                    "Be here before it's obvious",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-teal h-4 w-4 shrink-0" />
                      <span className="text-text-muted text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open roles card */}
              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-foreground mb-4 text-sm font-bold tracking-widest uppercase">
                  Open Roles
                </h3>
                <div className="space-y-2">
                  {featuredRoles.map((r) => (
                    <div key={r} className="text-foreground font-semibold text-xs leading-snug">
                      {r}
                    </div>
                  ))}
                </div>
                <p className="text-text-muted mt-4 text-xs">
                  All roles are contract work paid 20% of the revenue generated.
                </p>
              </div>

              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-foreground mb-3 text-sm font-bold tracking-widest uppercase">
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

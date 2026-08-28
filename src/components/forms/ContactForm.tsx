"use client";

// src/components/forms/ContactForm.tsx
// NOTE: No ratelimit imports here — rate limiting is handled server-side in the API route.

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
} from "lucide-react";
import * as React from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

const initialForm: FormState = { name: "", email: "", subject: "", message: "", website: "" };

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [submitted, setSubmitted] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSubmitted(true);
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to send. Please email us directly at contact@modulifyr.com"
      );
    } finally {
      setStatus("idle");
    }
  };

  if (submitted) {
    return (
      <div className="container-custom flex min-h-[60vh] items-center justify-center py-24">
        <Card className="animate-in fade-in zoom-in w-full max-w-xl p-16 text-center duration-500">
          <div className="bg-brand-orange/10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full">
            <CheckCircle2 className="text-brand-orange h-10 w-10" />
          </div>
          <CardTitle className="mb-4 text-3xl">Message Sent</CardTitle>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Thanks for reaching out. Someone from our team will get back to you within one business
            day.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-bg-light flex w-full flex-col">
      <section className="border-border-base border-b bg-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-up">
              <h1 className="font-heading text-foreground text-foreground mb-6 text-4xl font-bold md:text-6xl">
                Let's Talk About <span className="text-brand-orange">Your Project</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary text-xl leading-relaxed">
                Whether you have a clear spec or just a problem you're trying to solve, reach out.
                We'll tell you honestly whether we can help and what it would take.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Contact Info */}
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Reveal variant="fade-scale" delay={100}>
                  <div className="flex flex-col gap-4">
                    <div className="bg-brand-navy/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <Mail className="text-foreground h-5 w-5" />
                    </div>
                    <h4 className="font-heading text-foreground text-lg font-bold">Email Us</h4>
                    <p className="text-text-secondary text-sm">Direct engineering inquiries:</p>
                    <a
                      href="mailto:contact@modulifyr.com"
                      className="text-brand-orange text-lg font-bold hover:underline"
                    >
                      contact@modulifyr.com
                    </a>
                  </div>
                </Reveal>
                <Reveal variant="fade-scale" delay={150}>
                  <div className="flex flex-col gap-4">
                    <div className="bg-brand-navy/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <Phone className="text-foreground h-5 w-5" />
                    </div>
                    <h4 className="font-heading text-foreground text-lg font-bold">Call Us</h4>
                    <p className="text-text-secondary text-sm">Mon – Fri, 9am – 6pm NPT:</p>
                    <a
                      href="tel:+9779764478571"
                      className="text-brand-orange text-lg font-bold hover:underline"
                    >
                      +977 9764478571
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Cal.com booking card */}
              <Reveal variant="fade-scale" delay={200}>
                <div className="border-brand-teal/30 bg-brand-teal/5 flex h-full items-start gap-6 rounded-3xl border p-8">
                  <div className="bg-brand-teal/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <Calendar className="text-brand-teal h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-heading text-foreground text-xl font-bold">
                      Prefer a Call First?
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Book a free discovery call directly in our calendar. Pick a time that works
                      for you — no back-and-forth needed.
                    </p>
                    <a
                      href="https://cal.eu/modulifyr/booking"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-fit" size="sm">
                        Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="fade-scale" delay={250}>
                <div className="border-border-base flex items-start gap-6 rounded-3xl border bg-white p-8 shadow-sm">
                  <div className="bg-brand-orange/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <MapPin className="text-brand-orange h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-heading text-foreground text-xl font-bold">Our Office</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Modulifyr Enterprise Pvt. Ltd.
                      <br />
                      Birtamode, Ward 1, Gauri Tol
                      <br />
                      Jhapa, Nepal
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Modulifyr+Enterprise+Pvt.+Ltd."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-orange mt-2 flex items-center gap-1 text-sm font-bold hover:underline"
                    >
                      Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-col gap-6">
                <Reveal variant="fade-up">
                  <h4 className="font-heading text-foreground font-bold">Follow Our Work</h4>
                </Reveal>
                <div className="flex gap-4">
                  <Reveal variant="fade-scale" delay={100}>
                    <Link
                      href="https://www.linkedin.com/company/modulifyr/"
                      className="border-border-base hover:bg-brand-navy flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:text-white"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Reveal>
                  <Reveal variant="fade-scale" delay={150}>
                    <Link
                      href="https://x.com/modulifyr"
                      className="border-border-base hover:bg-brand-navy flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:text-white"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Reveal>
                  <Reveal variant="fade-scale" delay={200}>
                    <Link
                      href="https://github.com/Modulifyr"
                      className="border-border-base hover:bg-brand-navy flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:text-white"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </Reveal>
                </div>
              </div>

              <Reveal variant="fade-scale" delay={300}>
                <div className="bg-brand-navy flex flex-col gap-4 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3">
                    <Clock className="text-brand-gold h-5 w-5" />
                    <span className="font-bold">NPT (UTC+5:45) — Works in Your Timezone</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Nepal Standard Time gives us natural working hour overlap with both European
                    mornings and Asian business hours.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Form */}
            <div className="flex flex-col gap-8">
              <Reveal variant="fade-scale" delay={150}>
                <Card className="border-t-brand-teal h-full border-t-8 p-8 shadow-xl md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="font-heading text-foreground mb-4 text-2xl font-bold">
                      Send a Message
                    </h2>

                    {status === "error" && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                        <p className="text-sm text-red-700">{errorMsg}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="text-foreground font-heading text-sm font-bold"
                        >
                          Your Name <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                          maxLength={200}
                          className="border-border-base bg-background placeholder:text-text-dim focus-visible:ring-brand-orange text-foreground flex h-12 w-full rounded-lg border px-4 py-2 text-base transition-all focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="text-foreground font-heading text-sm font-bold"
                        >
                          Your Email <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="email@company.com"
                          required
                          className="border-border-base bg-background placeholder:text-text-dim focus-visible:ring-brand-orange text-foreground flex h-12 w-full rounded-lg border px-4 py-2 text-base transition-all focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-subject"
                        className="text-foreground font-heading text-sm font-bold"
                      >
                        Subject <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        maxLength={300}
                        className="border-border-base bg-background placeholder:text-text-dim focus-visible:ring-brand-orange text-foreground flex h-12 w-full rounded-lg border px-4 py-2 text-base transition-all focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="text-foreground font-heading text-sm font-bold"
                      >
                        Message <span className="text-brand-orange">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        required
                        maxLength={5000}
                        className="border-border-base bg-background placeholder:text-text-dim focus-visible:ring-brand-orange text-foreground flex min-h-[150px] w-full resize-none rounded-lg border px-4 py-3 text-base transition-all focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                      />
                      <p className="text-text-muted text-right text-xs">
                        {form.message.length}/5000
                      </p>
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
                      <label htmlFor="contact-website">Website</label>
                      <input
                        id="contact-website"
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="bg-bg-secondary flex items-center gap-3 rounded-lg p-4">
                      <ShieldCheck className="text-brand-teal h-5 w-5 shrink-0" />
                      <span className="text-text-secondary text-[10px] leading-tight italic">
                        All communication is treated as confidential. We can sign an NDA before any
                        technical discussion.
                      </span>
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="animate-in h-14 w-full text-lg"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </Reveal>
              <div className="px-4 text-center">
                <p className="text-text-secondary text-sm">
                  Have a detailed project brief? Use our structured{" "}
                  <Link
                    href="/request-proposal"
                    className="text-brand-orange font-bold hover:underline"
                  >
                    Proposal Request Form
                  </Link>{" "}
                  instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-0">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="relative h-100 w-full overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.577180171271!2d87.9888125!3d26.6478125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5baf5bbac5971%3A0x86a3d3bd5197a0f0!2sJXXQ%2B4G%2C%20Birtamod!5e1!3m2!1sen!2snp!4v1787901012956!5m2!1sen!2snp"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Modulifyr Location - Birtamod"
              />
            </div>
          </Reveal>
          <p className="text-text-muted mt-3 text-center text-xs">
            Modulifyr Enterprise Pvt. Ltd. · Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal
          </p>
        </div>
      </section>
    </div>
  );
}

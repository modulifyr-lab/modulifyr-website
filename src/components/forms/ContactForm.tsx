"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Clock,
  DollarSign,
  MapPin,
  Globe,
  Phone,
  MessageSquare,
  Mail,
} from "lucide-react";
import { ProcessSection } from "@/components/ui/ProcessSection";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
  termsAgreed: boolean;
  website: string; // honeypot
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interestedIn: "",
  message: "",
  termsAgreed: false,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Discovery Call Inquiry - ${form.interestedIn || "General"}`,
          message: `Phone: ${form.phone}\nInterested In: ${form.interestedIn}\n\nDetails: ${form.message}`,
          website: form.website,
        }),
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

  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO & BOOKING FORM SECTION ─────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-b py-20 transition-colors duration-300 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Hero Details */}
            <div className="space-y-6 lg:col-span-6">
              <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
                GET IN TOUCH
              </span>
              <h1 className="text-h1 text-foreground leading-[1.1] font-bold">
                Let&apos;s Talk About <span className="text-[#6FA8B8]">Your Project</span>.
              </h1>
              <p className="text-body1 text-text-alt leading-relaxed">
                Whether you have a clear spec or just a problem you&apos;re trying to solve, reach
                out. We&apos;ll tell you honestly whether we can help and what it would take.
              </p>

              {/* Trust signals */}
              <div className="text-caption1 text-text-alt flex flex-wrap items-center gap-6 pt-2 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#2D738D]" /> Response within 24 hours
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-[#2D738D]" /> Transparent pricing
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#2D738D]" /> No hidden cost
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#booking-form">
                  <button
                    type="button"
                    className="cursor-pointer rounded-lg bg-[#2D738D] px-6 py-3 text-sm font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
                  >
                    Book a free Consultation Today
                  </button>
                </a>
                <Link href="/services">
                  <button
                    type="button"
                    className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt cursor-pointer rounded-lg border px-6 py-3 text-sm font-semibold transition-colors duration-100 ease-in"
                  >
                    Explore Packages
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Booking Card Form */}
            <div
              id="booking-form"
              className="bg-bg-alt border-border-main space-y-6 rounded-2xl border p-8 shadow-lg lg:col-span-6"
            >
              <div className="space-y-2">
                <h2 className="text-h4 text-foreground font-bold">Book a Free Discovery Call</h2>
                <p className="text-body2 text-text-alt">
                  Let&apos;s map the right approach for your project.
                </p>
              </div>

              {submitted ? (
                <div className="bg-bg-main border-border-main space-y-4 rounded-xl border p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2D738D]/10 text-[#2D738D]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-h5 text-foreground font-bold">Discovery Call Requested</h3>
                  <p className="text-body2 text-text-alt">
                    Thank you! We have received your inquiry and will reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-caption1 font-bold text-[#2D738D] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-caption1 text-foreground font-semibold"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-bg-main border-border-main w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:border-[#2D738D] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-caption1 text-foreground font-semibold"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required
                      className="bg-bg-main border-border-main w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:border-[#2D738D] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="text-caption1 text-foreground font-semibold"
                    >
                      Phone number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="9841222335"
                      required
                      className="bg-bg-main border-border-main w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:border-[#2D738D] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-interested"
                      className="text-caption1 text-foreground font-semibold"
                    >
                      Interested In *
                    </label>
                    <select
                      id="contact-interested"
                      name="interestedIn"
                      value={form.interestedIn}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, interestedIn: e.target.value }))
                      }
                      required
                      className="bg-bg-main border-border-main w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:border-[#2D738D] focus:outline-none"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Strategy Sprint">Strategy Sprint</option>
                      <option value="Launch Kit">Launch Kit</option>
                      <option value="Automation Layer">Automation Layer</option>
                      <option value="Custom ERP / Software">Custom ERP / Software</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="termsAgreed"
                      name="termsAgreed"
                      checked={form.termsAgreed}
                      onChange={handleChange}
                      required
                      className="border-border-main rounded text-[#2D738D] focus:ring-[#2D738D]"
                    />
                    <label htmlFor="termsAgreed" className="text-caption2 text-text-alt">
                      By continuing, you agree to our Terms &amp; Policy
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#2D738D] py-3 text-sm font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        Get a Free Consultation <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHERE WE WORK ──────────────────────────────────────────────── */}
      <section className="bg-bg-alt/40 border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              LOCATION &amp; COLLABORATION
            </span>
            <h2 className="text-h2 text-foreground font-bold">Our office &amp; global presence</h2>
            <p className="text-body1 text-text-alt">
              One engineering hub in eastern Nepal. One connected team for businesses building
              anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-h4 text-foreground font-bold">Birtamode HQ</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Modulifyr+Enterprise+Pvt.+Ltd."
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption1 inline-flex items-center gap-1.5 pt-2 font-bold text-[#2D738D] hover:underline"
              >
                Get directions <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-h4 text-foreground font-bold">Working globally</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                We collaborate remotely with ambitious teams across Nepal, Asia, Europe, &amp;
                beyond.
              </p>
              <div className="text-caption1 text-text-dim font-semibold">
                NPT (UTC+5:45) collaboration hours
              </div>
              <a
                href="#booking-form"
                className="text-caption1 inline-flex items-center gap-1.5 font-bold text-[#2D738D] hover:underline"
              >
                Book a discovery call <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Live Google Map Container with Overlay */}
          <div className="border-border-main relative min-h-[400px] overflow-hidden rounded-2xl border shadow-lg">
            <iframe
              title="Modulifyr Birtamode HQ Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.578379506428!2d87.9888162!3d26.6477721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb6e9575c8bd%3A0x3085ef2c41d9196b!2sModulifyr!5e1!3m2!1sen!2snp!4v1790745932247!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[450px] w-full"
            ></iframe>

            {/* Overlay Card */}
            {/* <div className="bg-bg-main/95 border-border-main absolute right-6 bottom-6 left-6 space-y-3 rounded-xl border p-6 shadow-xl backdrop-blur-md md:right-auto md:max-w-md">
              <span className="text-caption2 block font-bold tracking-wider text-[#2D738D] uppercase">
                Modulifyr — Engineering systems that scale
              </span>
              <h3 className="text-body1 text-foreground font-bold">
                Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal
              </h3>
              <p className="text-caption1 text-text-alt">Mon–Fri, 9:00 AM–6:00 PM NPT</p>
              <p className="text-caption2 text-text-dim">
                NPT (UTC+5:45) — natural overlap with both European mornings &amp; Asian business
                hours.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Birtamode+Ward+1+Gauri+Tol+Jhapa+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption1 inline-flex items-center gap-1.5 pt-1 font-bold text-[#2D738D] hover:underline"
              >
                View map &amp; directions <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* ── 3. 5-PHASE PROCESS RECAP ───────────────────────────────────────── */}
      <ProcessSection />

      {/* ── 4. NEED HELP RIGHT NOW BANNER ───────────────────────────────────── */}
      <section className="bg-bg-main py-20 transition-colors duration-300">
        <div className="container-custom max-w-3xl space-y-8 text-center">
          <h2 className="text-h2 text-foreground font-bold">Need help right now?</h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Talk directly with our team — no sales layer in between.
          </p>

          <div className="text-body2 text-text-alt flex flex-wrap justify-center gap-6 font-semibold">
            <a
              href="tel:+9779764478571"
              className="flex items-center gap-2 transition-colors hover:text-[#2D738D]"
            >
              <Phone className="h-4 w-4 text-[#2D738D]" /> Call our team
            </a>
            <span>•</span>
            <a
              href="https://wa.me/9779764478571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-[#2D738D]"
            >
              <MessageSquare className="h-4 w-4 text-[#2D738D]" /> WhatsApp
            </a>
            <span>•</span>
            <a
              href="mailto:contact@modulifyr.com"
              className="flex items-center gap-2 transition-colors hover:text-[#2D738D]"
            >
              <Mail className="h-4 w-4 text-[#2D738D]" /> Email us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#booking-form">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#2D738D] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
              >
                Free consultation
              </button>
            </a>
            <a href="#booking-form">
              <button
                type="button"
                className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt cursor-pointer rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in"
              >
                Talk to experts
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

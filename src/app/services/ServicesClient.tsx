"use client";

import { ServicesSection } from "@/components/ui/ServicesSection";
import { ArrowRight, Code2, CheckCircle2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/links";
import { Button } from "@/components/Button";

export default function ServicesClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. SERVICES SECTION ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 2. CUSTOM WEB APPS & MVPS ──────────────────────────────────────── */}
      <section className="bg-bg-alt/50 border-border-base border-t py-14 transition-colors duration-300 sm:py-20">
        <div className="container-custom">
          <div className="border-border-base bg-bg-main grid grid-cols-1 items-center gap-10 rounded-3xl border p-8 shadow-sm lg:grid-cols-12 lg:p-12">
            <div className="space-y-4 lg:col-span-7">
              <span className="text-caption1 inline-flex items-center gap-2 font-bold tracking-wider text-[#2D738D] uppercase">
                <Code2 className="h-4 w-4" />
                Bespoke Engineering Track
              </span>
              <h2 className="text-h2 text-foreground font-bold">
                Focused Custom Web Apps &amp; MVPs
              </h2>
              <p className="text-body2 sm:text-body1 text-text-alt leading-relaxed">
                Need a customer portal, internal operations tool, or SaaS MVP beyond a static Launch
                Kit site? We build lean, production-ready web applications on our core stack:
                <strong className="text-foreground font-semibold">
                  {" "}
                  TypeScript, Next.js, Hono, and PostgreSQL
                </strong>
                .
              </p>
              <ul className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
                {[
                  "Scoped first via a 3–10 day Strategy Sprint",
                  "100% of sprint fee credited toward build",
                  "Milestone-based billing with weekly demos",
                  "100% client GitHub & IP ownership",
                ].map((item) => (
                  <li key={item} className="text-text-secondary flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2D738D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-alt border-border-base space-y-4 rounded-2xl border p-6 lg:col-span-5">
              <p className="text-caption2 text-text-dim font-bold tracking-wider uppercase">
                How We Start Custom Builds
              </p>
              <p className="text-body2 text-text-alt leading-relaxed">
                We never guess a multi-month quote from a 10-minute chat. Start with a Strategy
                Sprint to lock down database models, API endpoints, and milestone pricing—then build
                with clarity.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:flex-col">
                <Button href="/services/strategy-sprint" variant="primary" className="max-w-none!">
                  Scope with a Strategy Sprint
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/request-proposal?pkg=strategy-sprint"
                  variant="outline"
                  className="max-w-none!"
                >
                  Request Custom MVP Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-t py-16 transition-colors duration-300 sm:py-24">
        <div className="container-custom max-w-3xl space-y-5 text-center sm:space-y-6">
          <h2 className="text-h2 text-foreground font-bold">
            Need Help Choosing the Right <span className="text-[#E8A33D]">Package</span>?
          </h2>
          <p className="text-body2 sm:text-body1 text-text-alt leading-relaxed">
            Want a fast website? Start directly with a Launch Kit. Need tools connected? Choose an
            Automation Layer. Building a custom web app or MVP? Start with a Strategy Sprint—and
            credit the fee toward your build.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 sm:gap-4 sm:pt-4">
            <Button href="/request-proposal">
              Request a Proposal
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={BOOKING_URL} external variant="outline">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

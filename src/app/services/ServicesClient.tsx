"use client";

import { ServicesSection } from "@/components/ui/ServicesSection";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { RegionSelector } from "@/components/RegionSelector";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/links";

export default function ServicesClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main py-20 md:py-28 border-b border-border-main transition-colors duration-300">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            SERVICES
          </span>
          <h1 className="text-h1 font-bold text-foreground leading-[1.1]">
            Solutions Built Around <span className="text-[#6FA8B8]">Your Operations</span>
          </h1>
          <p className="text-body1 text-text-alt max-w-2xl mx-auto leading-relaxed">
            Purpose-built solutions with clear expectations, transparent processes, and measurable
            value for your business.
          </p>

          {/* 3 Highlight Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="inline-flex items-center gap-2 bg-[#2D738D]/10 text-[#2D738D] border border-[#2D738D]/20 rounded-full px-4 py-1.5 text-caption1 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-[#2D738D]" />
              Guaranteed Outcome
            </span>
            <span className="inline-flex items-center gap-2 bg-[#2D738D]/10 text-[#2D738D] border border-[#2D738D]/20 rounded-full px-4 py-1.5 text-caption1 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-[#2D738D]" />
              Dedicated Sprints
            </span>
            <span className="inline-flex items-center gap-2 bg-[#2D738D]/10 text-[#2D738D] border border-[#2D738D]/20 rounded-full px-4 py-1.5 text-caption1 font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#2D738D]" />
              Risk-Free Scoping
            </span>
          </div>

          {/* Currency Selector Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="text-caption2 font-semibold text-text-dim uppercase tracking-wider">
              Display currency:
            </span>
            <RegionSelector compact={false} />
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES SECTION ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-main border-t border-border-main transition-colors duration-300">
        <div className="container-custom max-w-3xl text-center space-y-6">
          <h2 className="text-h2 font-bold text-foreground">
            Need Help Choosing the Right <span className="text-[#E8A33D]">Package</span>?
          </h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Most engineering leaders start with our 2-week Strategy Sprint. We map your exact
            state architecture, benchmark bottlenecks, and specify whether a fixed Launch Kit or
            continuous Retainer maximizes your ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              href="/request-proposal"
              className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
            >
              Request a Proposal
            </Button>
            <Button
              href={BOOKING_URL}
              external
              className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

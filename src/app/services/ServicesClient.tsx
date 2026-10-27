"use client";

import { ServicesSection } from "@/components/ui/ServicesSection";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { RegionSelector } from "@/components/RegionSelector";
import { BOOKING_URL } from "@/lib/links";
import { Button } from "@/components/Button";

export default function ServicesClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      {/* <section className="bg-bg-main py-20 md:py-28 border-b border-border-main transition-colors duration-300">
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

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="text-caption2 font-semibold text-text-dim uppercase tracking-wider">
              Display currency:
            </span>
            <RegionSelector compact={false} />
          </div>
        </div>
      </section> */}

      {/* ── 2. SERVICES SECTION ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-t py-16 transition-colors duration-300 sm:py-24">
        <div className="container-custom max-w-3xl space-y-5 text-center sm:space-y-6">
          <h2 className="text-h2 text-foreground font-bold">
            Need Help Choosing the Right <span className="text-[#E8A33D]">Package</span>?
          </h2>
          <p className="text-body2 sm:text-body1 text-text-alt leading-relaxed">
            Most engineering leaders start with our 2-week Strategy Sprint. We map your exact state
            architecture, benchmark bottlenecks, and specify whether a fixed Launch Kit or
            continuous Retainer maximizes your ROI.
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

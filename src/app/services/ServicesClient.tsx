"use client";

import { ServicesSection } from "@/components/ui/ServicesSection";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/links";
import { Button } from "@/components/Button";

export default function ServicesClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. SERVICES SECTION ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 2. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt/50 border-border-main border-t py-16 transition-colors duration-300 sm:py-24">
        <div className="container-custom max-w-3xl space-y-5 text-center sm:space-y-6">
          <h2 className="text-h2 text-foreground font-bold">
            Not Sure Where to <span className="text-[#E8A33D]">Start</span>?
          </h2>
          <p className="text-body2 sm:text-body1 text-text-alt leading-relaxed">
            Every project starts with a Free 20-Minute Checkup call. Need a fast website? Start with
            Launch Kit. Losing inquiries in forms or sheets? Choose Automation Layer. Need deep
            multi-tool research first? Book a Strategy Sprint—with 100% of the fee credited toward
            your build within 30 days.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 sm:gap-4 sm:pt-4">
            <Button
              href={BOOKING_URL}
              external
              className="w-auto! max-w-none! px-7 whitespace-nowrap"
            >
              Book a Free 20-Min Checkup
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
            <Button
              href="/request-proposal"
              variant="outline"
              className="w-auto! max-w-none! px-7 whitespace-nowrap"
            >
              Request a Proposal
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

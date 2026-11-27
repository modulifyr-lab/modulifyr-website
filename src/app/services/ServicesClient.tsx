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
            Need Help Choosing the Right <span className="text-[#E8A33D]">Package</span>?
          </h2>
          <p className="text-body2 sm:text-body1 text-text-alt leading-relaxed">
            Want a fast, SEO-ready business website? Start directly with a Launch Kit. Need forms,
            WhatsApp, CRMs, or payment gateways synced? Choose an Automation Layer. Planning a
            complex multi-system rollout? Start with a Strategy Sprint—and credit 100% of the fee
            toward your build.
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

"use client";

import Link from "next/link";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

const PACKAGE_MAPPING = [
  { internal: "Discovery Sprint", clientFacing: "Strategy Sprint" },
  { internal: "Static Website Package", clientFacing: "Launch Kit" },
  { internal: "Integrations & Automation Package", clientFacing: "Automation Layer" },
  { internal: "Web App MVP Package", clientFacing: "Product MVP" },
  { internal: "Web App MVP Package", clientFacing: "Internal Ops System" },
  { internal: "Modernization / Refactoring Package", clientFacing: "Modernization Sprint" },
  { internal: "Infrastructure & SRE Setup", clientFacing: "Platform Setup" },
  { internal: "Dedicated Product Team Retainer", clientFacing: "Engineering Retainer" },
];

export default function ServicesClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main py-20 md:py-28 border-b border-border-main transition-colors duration-300">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            Solutions
          </span>
          <h1 className="text-h1 font-bold text-foreground leading-[1.1]">
            Solution Build Around <span className="text-[#6FA8B8]">Your Operations</span>
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
        </div>
      </section>

      {/* ── 2. SERVICES SECTION ────────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 3. PACKAGES MAPPING TABLE ──────────────────────────────────────── */}
      <section className="py-24 bg-bg-alt/50 border-t border-border-main transition-colors duration-300">
        <div className="container-custom max-w-4xl space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              OUR PACKAGES
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Clear Packages, Simple Choices
            </h2>
            <p className="text-body1 text-text-alt">
              We use straightforward, client-facing package names to make proposals and quotes easy
              to understand, while keeping each package clearly aligned with its scope and deliverables.
            </p>
          </div>

          {/* 2-Column Table */}
          <div className="bg-bg-main border-border-main overflow-hidden rounded-2xl border shadow-sm">
            <div className="bg-bg-alt border-b border-border-main grid grid-cols-2 px-6 py-4 text-caption1 font-bold text-foreground uppercase tracking-wider">
              <span>Internal package</span>
              <span>Client-Facing Name</span>
            </div>
            <div className="divide-y divide-border-main/60">
              {PACKAGE_MAPPING.map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 items-center px-6 py-4 text-body2 hover:bg-bg-alt/30 transition-colors">
                  <span className="text-text-alt font-medium">{item.internal}</span>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#2D738D]" />
                    <span className="text-foreground font-bold">{item.clientFacing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA BANNER ─────────────────────────────────────────────────── */}
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
            <Link href="/request-proposal">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Request a Proposal
              </button>
            </Link>
            <Link href="/contact">
              <button
                type="button"
                className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Request Capability Desk
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import {
  Code2,
  Paintbrush,
  Briefcase,
  Megaphone,
  Users,
  BarChart2,
  Building2,
  AlertCircle,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const ROLE_GROUPS = [
  {
    icon: Code2,
    category: "Engineering",
    roles: [
      "Full-Stack Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "DevOps Engineer",
      "QA Engineer",
      "Solutions Architect",
    ],
    description: "Build clean, modular systems using React, Next.js, TypeScript, NestJS, and PostgreSQL.",
  },
  {
    icon: Paintbrush,
    category: "Art & Design",
    roles: ["UI UX Designer", "Product Designer", "UX Researcher"],
    description: "Figma design systems and component libraries across our core products and client platforms.",
  },
  {
    icon: Briefcase,
    category: "Product Management",
    roles: ["Product Manager", "Technical Project Manager"],
    description: "Coordinate cross-functional delivery, map roadmap milestones, and refine product backlogs.",
  },
  {
    icon: Megaphone,
    category: "Marketing & Growth",
    roles: ["Growth Marketer", "Content Strategist", "SEO Specialist"],
    description: "Build marketing operations and publishing channels from the ground up.",
  },
  {
    icon: Users,
    category: "Sales & Client Success",
    roles: ["Business Development Manager", "Client Success Specialist"],
    description: "Support client onboarding, RFP proposals, and long-term partnership success.",
  },
  {
    icon: BarChart2,
    category: "Data & Analytics",
    roles: ["Data Analyst", "Revenue Analyst"],
    description: "Build key reporting infrastructure and client performance benchmarks.",
  },
  {
    icon: Building2,
    category: "Operations & HR",
    roles: ["Operations Manager", "HR Specialist", "Recruiter"],
    description: "Help build company documentation, contributor onboarding, and internal ops.",
  },
];

interface Role {
  title: string;
  isOpen: boolean;
}

interface RoleCategory {
  icon: typeof Code2;
  category: string;
  subLabel: string;
  roles: Role[];
}

const CATEGORIES_DATA: RoleCategory[] = [
  {
    icon: Code2,
    category: "Engineering",
    subLabel: "Core Platform, Architecture & DevEx",
    roles: [
      { title: "Full-Stack Engineer", isOpen: true },
      { title: "Frontend Engineer", isOpen: true },
      { title: "Backend Engineer", isOpen: true },
      { title: "DevOps Engineer", isOpen: true },
      { title: "QA Engineer", isOpen: true },
      { title: "Solutions Architect", isOpen: true },
      { title: "Platform Engineer", isOpen: true },
      { title: "Security Specialist", isOpen: true },
      { title: "Mobile Systems Engineer", isOpen: true },
      { title: "Cloud Infrastructure Architect", isOpen: true },
    ],
  },
  {
    icon: Paintbrush,
    category: "Design",
    subLabel: "Design Systems, Product UX & Design Tech",
    roles: [
      { title: "UI UX Designer", isOpen: true },
      { title: "Product Designer", isOpen: true },
      { title: "UX Researcher", isOpen: true },
      { title: "Design Systems Lead", isOpen: true },
    ],
  },
  {
    icon: Briefcase,
    category: "Product Management",
    subLabel: "Enterprise Modular Engine & Ecosystem",
    roles: [
      { title: "Product Manager", isOpen: true },
      { title: "Technical Project Manager", isOpen: true },
    ],
  },
  {
    icon: Megaphone,
    category: "Marketing and Growth",
    subLabel: "Demand Gen, Content Engineering & Brand",
    roles: [
      { title: "Growth Marketer", isOpen: true },
      { title: "Content Strategist", isOpen: true },
      { title: "SEO Specialist", isOpen: true },
      { title: "Brand & Content Lead", isOpen: true },
    ],
  },
  {
    icon: BarChart2,
    category: "Data & Analytics",
    subLabel: "Pipelines, BI Warehouses & Modeling",
    roles: [
      { title: "Data Analyst", isOpen: true },
      { title: "Revenue Analyst", isOpen: true },
      { title: "Data Pipeline Engineer", isOpen: true },
      { title: "BI Dashboard Specialist", isOpen: true },
    ],
  },
];

export default function CareersClient() {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (idx: number) => {
    setExpandedCategories((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const totalOpenCount = CATEGORIES_DATA.reduce(
    (acc, cat) => acc + cat.roles.filter((r) => r.isOpen).length,
    0
  );

  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main py-20 md:py-28 border-b border-border-main transition-colors duration-300">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            CAREERS
          </span>
          <h1 className="text-h1 font-bold text-foreground leading-[1.1]">
            Join us as we build <span className="text-[#6FA8B8]">Modulifyr</span>.
          </h1>
          <p className="text-body1 text-text-alt max-w-2xl mx-auto leading-relaxed">
            We&apos;re building Modulifyr from the ground up and looking for people who want to learn,
            contribute, and help shape what comes next.
          </p>
          <div className="pt-2">
            <a href="#open-positions">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                View open positions
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BEFORE YOU APPLY ────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-alt/40 border-b border-border-main transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              BEFORE YOU APPLY
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Know what you&apos;re signing up for
            </h2>
            <p className="text-body1 text-text-alt">
              Here&apos;s what the role, commitment, and experience actually involve.
            </p>
          </div>

          {/* 3 Card Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">What this actually is</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                This is a volunteer opportunity to work on real projects while Modulifyr is being
                built. It is not a traditional paid position.
              </p>
            </div>

            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">Who This Is For</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                For people who want hands-on experience, meaningful ownership, and the chance to build
                alongside a growing software company.
              </p>
            </div>

            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-h5 font-bold text-foreground">Your Role</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                You&apos;ll work on real responsibilities within your function, not practice
                assignments, with room to contribute ideas and take ownership of your work.
              </p>
            </div>
          </div>

          {/* 2 Wider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#2D738D]">
                <Clock className="h-5 w-5" />
                <h3 className="text-h5 font-bold text-foreground">Time Commitment</h3>
              </div>
              <p className="text-body2 text-text-alt leading-relaxed">
                Flexible and part-time. The exact commitment depends on the role and what you can
                realistically take on.
              </p>
            </div>

            <div className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#2D738D]">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-h5 font-bold text-foreground">What to Expect</h3>
              </div>
              <p className="text-body2 text-text-alt leading-relaxed">
                Modulifyr is still early-stage, so things move quickly and evolve as we build.
                Expect real responsibility, direct collaboration, and a lot of learning along the
                way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OPEN POSITIONS ────────────────────────────────────────────── */}
      <section id="open-positions" className="py-24 bg-bg-main transition-colors duration-300">
        <div className="container-custom max-w-4xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              CAREERS
            </span>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-h2 font-bold text-foreground">
                Open Positions
              </h2>
              <span className="bg-[#2D738D]/10 text-[#2D738D] border border-[#2D738D]/20 rounded-full px-3 py-1 text-sm font-bold">
                {totalOpenCount} jobs open
              </span>
            </div>
            <p className="text-body1 text-text-alt">
              Join us in building Modulifyr, contribute to real projects, and grow through hands-on
              experience.
            </p>

            {/* Note Flag */}
            <div className="inline-flex items-center gap-2 bg-[#2D738D]/10 text-[#2D738D] border border-[#2D738D]/20 rounded-full px-4 py-2 text-caption1 font-semibold mt-2">
              <AlertCircle className="h-4 w-4" />
              All positions are currently unpaid
            </div>
          </div>

          {/* Expandable Category Rows */}
          <div className="flex flex-col gap-4">
            {CATEGORIES_DATA.map((group, idx) => {
              const Icon = group.icon;
              const isExpanded = expandedCategories.includes(idx);
              const openCount = group.roles.filter((r) => r.isOpen).length;

              return (
                <div
                  key={idx}
                  className="bg-bg-alt border-border-main rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(idx)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D738D]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-h5 font-bold text-foreground">
                            {group.category}
                          </h3>
                          <span className="bg-bg-main border border-border-main rounded-full px-2.5 py-0.5 text-xs font-semibold text-[#2D738D]">
                            {openCount} open positions
                          </span>
                        </div>
                        <p className="text-caption1 text-text-alt mt-0.5">
                          {group.subLabel}
                        </p>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-bg-main border border-border-main flex items-center justify-center shrink-0">
                      <span className={`text-[#2D738D] font-extrabold transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        ↓
                      </span>
                    </div>
                  </button>

                  {/* Expanded Roles List */}
                  {isExpanded && (
                    <div className="p-6 pt-2 border-t border-border-main/60 bg-bg-main/50 space-y-3">
                      {group.roles.map((role, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center justify-between p-3.5 rounded-xl border border-border-main/60 bg-bg-main hover:border-[#2D738D]/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                role.isOpen ? "bg-[#6FA8B8]" : "bg-[#0F1724]"
                              }`}
                              title={role.isOpen ? "Open position" : "Closed position"}
                            />
                            <span className="text-body2 font-semibold text-foreground">
                              {role.title}
                            </span>
                          </div>
                          {role.isOpen ? (
                            <a
                              href="#application-form"
                              className="text-xs font-bold text-[#2D738D] hover:underline"
                            >
                              Apply Now →
                            </a>
                          ) : (
                            <span className="text-xs font-semibold text-text-dim">
                              Closed
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-bg-alt border-t border-border-main text-center transition-colors duration-300">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="text-h2 font-bold text-foreground">
            Don&apos;t see the right role?
          </h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Send us your resume anyway. If your skills match a future opportunity at Modulifyr,
            we&apos;ll reach out.
          </p>
          <div className="pt-2">
            <a href="#application-form">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Drop Your Resume
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. EMBEDDED JOB APPLICATION FORM ──────────────────────────────── */}
      <section id="application-form" className="py-20 bg-bg-main border-t border-border-main">
        <JobApplicationForm />
      </section>
    </div>
  );
}

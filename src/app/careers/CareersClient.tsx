"use client";

import { useState } from "react";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import {
  Code2,
  Megaphone,
  Users,
  AlertCircle,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Building2,
  Layout,
  Headphones,
  Gamepad2,
  Palette,
  FlaskConical,
  Radio,
  BarChart3,
  UserCheck,
  Scale,
  ShieldCheck,
  Building,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { type DepartmentId, getOpenRolesByDepartment, formatSeats } from "@/lib/careers";

const DEPARTMENT_ICONS: Record<DepartmentId, LucideIcon> = {
  "executive-office": Building2,
  engineering: Code2,
  product: Layout,
  "client-services": Headphones,
  "sales-partnerships": Users,
  "customer-success": Headphones,
  "game-development": Gamepad2,
  "game-design": Palette,
  "art-creative": Palette,
  "qa-playtesting": FlaskConical,
  "publishing-community": Radio,
  "growth-marketing": Megaphone,
  "revenue-analytics": BarChart3,
  "hr-people-ops": UserCheck,
  "finance-legal": Scale,
  "it-security": ShieldCheck,
  "brand-communications": Building,
  operations: Wrench,
};

export default function CareersClient() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const openDepartments = getOpenRolesByDepartment();
  const totalOpenCount = openDepartments.reduce((acc, group) => acc + group.roles.length, 0);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-b py-20 transition-colors duration-300 md:py-28">
        <div className="container-custom max-w-4xl space-y-6 text-center">
          <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
            CAREERS
          </span>
          <h1 className="text-h1 text-foreground leading-[1.1] font-bold">
            Join us as we build <span className="text-[#6FA8B8]">Modulifyr</span>.
          </h1>
          <p className="text-body1 text-text-alt mx-auto max-w-2xl leading-relaxed">
            We&apos;re building Modulifyr from the ground up and looking for people who want to
            learn, contribute, and help shape what comes next.
          </p>
          {totalOpenCount > 0 && (
            <div className="pt-2">
              <a href="#open-positions">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg bg-[#2D738D] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
                >
                  View open positions
                </button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── 2. BEFORE YOU APPLY ────────────────────────────────────────────── */}
      <section className="bg-bg-alt/40 border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              BEFORE YOU APPLY
            </span>
            <h2 className="text-h2 text-foreground font-bold">
              Know what you&apos;re signing up for
            </h2>
            <p className="text-body1 text-text-alt">
              Here&apos;s what the role, commitment, and experience actually involve.
            </p>
          </div>

          {/* 3 Card Row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">What this actually is</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                These are contract roles on real client projects. You are paid 20% of the revenue
                generated on the project or deal you work on, while Modulifyr is still early-stage.
              </p>
            </div>

            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">Who This Is For</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                For people who want hands-on experience, meaningful ownership, and the chance to
                build alongside a growing software company.
              </p>
            </div>

            <div className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-h5 text-foreground font-bold">Your Role</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                You&apos;ll work on real responsibilities within your function, not practice
                assignments, with room to contribute ideas and take ownership of your work.
              </p>
            </div>
          </div>

          {/* 2 Wider Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-bg-main border-border-main space-y-3 rounded-2xl border p-8 shadow-sm">
              <div className="flex items-center gap-2 text-[#2D738D]">
                <Clock className="h-5 w-5" />
                <h3 className="text-h5 text-foreground font-bold">Time Commitment</h3>
              </div>
              <p className="text-body2 text-text-alt leading-relaxed">
                Flexible and part-time. The exact commitment depends on the role and what you can
                realistically take on.
              </p>
            </div>

            <div className="bg-bg-main border-border-main space-y-3 rounded-2xl border p-8 shadow-sm">
              <div className="flex items-center gap-2 text-[#2D738D]">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-h5 text-foreground font-bold">What to Expect</h3>
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
      <section id="open-positions" className="bg-bg-main py-24 transition-colors duration-300">
        <div className="container-custom max-w-4xl space-y-10">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              CAREERS
            </span>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-h2 text-foreground font-bold">Open Positions</h2>
              <span className="rounded-full border border-[#2D738D]/20 bg-[#2D738D]/10 px-3 py-1 text-sm font-bold text-[#2D738D]">
                {totalOpenCount} {totalOpenCount === 1 ? "job open" : "jobs open"}
              </span>
            </div>
            <p className="text-body1 text-text-alt">
              Join us in building Modulifyr, contribute to real projects, and grow through hands-on
              experience.
            </p>

            {/* Note Flag */}
            <div className="text-caption1 mt-2 inline-flex items-center gap-2 rounded-full border border-[#2D738D]/20 bg-[#2D738D]/10 px-4 py-2 font-semibold text-[#2D738D]">
              <AlertCircle className="h-4 w-4" />
              Contract roles paid 20% of the revenue generated
            </div>
          </div>

          {totalOpenCount === 0 ? (
            <div className="bg-bg-alt border-border-main rounded-2xl border p-12 text-center shadow-sm">
              <p className="text-body1 text-text-alt mx-auto mb-6 max-w-xl">
                No open positions right now. Send us your resume and we will reach out when
                something fits.
              </p>
              <a href="#application-form">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg bg-[#2D738D] px-8 py-3 text-sm font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
                >
                  Drop Your Resume
                </button>
              </a>
            </div>
          ) : (
            /* Expandable Department Rows */
            <div className="flex flex-col gap-4">
              {openDepartments.map((group) => {
                const Icon = DEPARTMENT_ICONS[group.department.id] ?? Briefcase;
                const isExpanded = expandedCategories.includes(group.department.id);
                const openCount = group.roles.length;

                return (
                  <div
                    key={group.department.id}
                    className="bg-bg-alt border-border-main overflow-hidden rounded-2xl border shadow-sm transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCategory(group.department.id)}
                      aria-expanded={isExpanded}
                      className="flex w-full cursor-pointer items-center justify-between p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D738D]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-h5 text-foreground font-bold">
                              {group.department.label}
                            </h3>
                            <span className="bg-bg-main border-border-main rounded-full border px-2.5 py-0.5 text-xs font-semibold text-[#2D738D]">
                              {openCount} {openCount === 1 ? "open position" : "open positions"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-bg-main border-border-main flex h-8 w-8 shrink-0 items-center justify-center rounded-full border">
                        <span
                          className={`font-extrabold text-[#2D738D] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        >
                          ↓
                        </span>
                      </div>
                    </button>

                    {/* Expanded Roles List */}
                    {isExpanded && (
                      <div className="bg-bg-main/50 border-border-main/60 space-y-3 border-t p-6 pt-2">
                        {group.roles.map((role) => (
                          <div
                            key={role.title}
                            className="bg-bg-main border-border-main/60 flex items-center justify-between rounded-xl border p-3.5 transition-colors hover:border-[#2D738D]/50"
                          >
                            <div className="flex flex-col gap-0.5">
                              <span className="text-text-muted text-xs">
                                {formatSeats(role.seats)}
                              </span>
                              <div className="flex items-center gap-3">
                                <span
                                  className="h-2.5 w-2.5 rounded-full bg-[#6FA8B8]"
                                  title="Open position"
                                />
                                <span className="text-body2 text-foreground font-semibold">
                                  {role.title}
                                </span>
                              </div>
                            </div>
                            <a
                              href="#application-form"
                              onClick={() => setSelectedRole(role.title)}
                              className="text-xs font-bold text-[#2D738D] hover:underline"
                            >
                              Apply Now →
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── 4. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-border-main border-t py-20 text-center transition-colors duration-300">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="text-h2 text-foreground font-bold">Don&apos;t see the right role?</h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Send us your resume anyway. If your skills match a future opportunity at Modulifyr,
            we&apos;ll reach out.
          </p>
          <div className="pt-2">
            <a href="#application-form">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#2D738D] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
              >
                Drop Your Resume
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. EMBEDDED JOB APPLICATION FORM ──────────────────────────────── */}
      <section id="application-form" className="bg-bg-main border-border-main border-t py-20">
        <JobApplicationForm preselectedRole={selectedRole} />
      </section>
    </div>
  );
}

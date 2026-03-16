import { Metadata } from "next";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Rocket, Coffee, Wrench, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Openings | Modulifyr",
  description:
    "Join the Modulifyr engineering team. Open equity-only positions for senior engineers, SRE specialists, and system design interns. We're building from zero — Birtamode, Nepal.",
};

const openRoles = [
  {
    title: "Senior Full-stack Engineer",
    subtitle: "React / React Server Components",
    type: "Equity / Volunteer",
    remote: true,
  },
  {
    title: "Cloud Infrastructure Engineer",
    subtitle: "SRE Focus",
    type: "Equity / Volunteer",
    remote: true,
  },
  {
    title: "System Design Intern",
    subtitle: "Birtamode Office",
    type: "Equity / Volunteer",
    remote: false,
  },
];

export default function CareersPage() {
  return (
    <div className="flex w-full flex-col">
      {/* ── Origin Story Hero ── */}
      <section className="bg-brand-navy relative overflow-hidden py-24 text-white">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Live hiring badge */}
            <div className="bg-brand-orange/10 border-brand-orange/30 mb-6 flex w-fit items-center gap-2 rounded-full border px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                Actively seeking collaborators
              </span>
            </div>

            <h1 className="font-heading mb-8 text-4xl leading-tight font-bold md:text-6xl">
              Build Modulifyr <span className="text-brand-orange">From Zero</span>
            </h1>

            <div className="text-text-muted mb-10 space-y-4 text-lg leading-relaxed">
              <p>
                Modulifyr was registered one week ago. There is currently one person here — the
                founder — building everything from Birtamode, Jhapa on free tools.
              </p>
              <p>
                The entire stack you're looking at right now: the website, the CRM, the automation
                pipelines, the proposal system — all built in under a week, by one person, with zero
                budget.
              </p>
              <p>
                If you want to be part of building a real software company from the ground up — not
                a demo, not a side project, a company — and you're willing to work for equity or as
                a volunteer while we establish revenue, read on.
              </p>
            </div>

            {/* Zero-budget proof points */}
            <div className="grid max-w-sm grid-cols-3 gap-4">
              {[
                { icon: Wrench, label: "Free tools" },
                { icon: Coffee, label: "Late nights" },
                { icon: Globe, label: "Live in 4 days" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <item.icon className="text-brand-teal mx-auto mb-2 h-5 w-5" />
                  <p className="text-text-muted text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* bg glow */}
        <div className="bg-brand-orange/5 absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </section>

      {/* ── Open Roles ── */}
      <section className="bg-bg-secondary border-border-base border-b py-20">
        <div className="container-custom">
          <div className="mb-10">
            <p className="text-text-muted mb-2 text-xs font-bold tracking-widest uppercase">
              Open Positions
            </p>
            <h2 className="font-heading text-brand-navy text-3xl font-bold">
              What We're Looking For
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {openRoles.map((role, i) => (
              <div
                key={i}
                className="border-border-base hover:border-brand-orange group flex flex-col gap-4 rounded-2xl border bg-white p-7 transition-colors"
              >
                <div>
                  <p className="font-heading text-brand-navy group-hover:text-brand-orange text-lg font-bold transition-colors">
                    {role.title}
                  </p>
                  <p className="text-text-muted mt-1 text-xs">{role.subtitle}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="bg-brand-orange/10 text-brand-orange rounded-full px-3 py-1 text-xs font-bold">
                    {role.type}
                  </span>
                  <span className="bg-brand-teal/10 text-brand-teal rounded-full px-3 py-1 text-xs font-bold">
                    {role.remote ? "Remote OK" : "Birtamode Office"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-muted mt-6 text-sm italic">
            Don't see a fit? Apply as a general collaborator — if you're a builder who cares about
            clean architecture, we'll find a place for you.
          </p>
        </div>
      </section>

      {/* ── Application Form ── */}
      <JobApplicationForm />
    </div>
  );
}

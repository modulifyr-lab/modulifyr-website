"use client";

import * as React from "react";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import {
  CheckCircle2,
  XCircle,
  Code2,
  Globe2,
  Briefcase,
  Paintbrush,
  Megaphone,
  Users,
  BarChart2,
  Building2,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const divisions = [
  {
    id: "modulifyr",
    icon: Globe2,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/30",
    name: "Modulifyr",
    tagline: "B2B Custom Software Consultancy",
    desc: "We design and build modular software systems for businesses in Nepal and internationally — ERPs, dashboards, portals, APIs, and infrastructure. TypeScript-first, architecture-forward, and built to last.",
  },
];

const roleGroups = [
  {
    icon: Code2,
    category: "Engineering",
    divisions: ["Modulifyr"],
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    roles: [
      "Full-Stack Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "DevOps Engineer",
      "Cloud Infrastructure Engineer",
      "Security Engineer",
      "QA Engineer",
      "Solutions Architect",
      "Technical Lead",
      "Engineering Manager",
    ],
    what: "React / Next.js, TypeScript, NestJS, PostgreSQL, Prisma. You'll own complete modules — not tickets.",
  },
  {
    icon: Paintbrush,
    category: "Art & Design",
    divisions: ["Modulifyr"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    roles: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "UX Researcher",
      "Design Lead",
      "User Researcher",
    ],
    what: "Figma for product design and design systems across client projects.",
  },
  {
    icon: Briefcase,
    category: "Product Management",
    divisions: ["Modulifyr"],
    color: "text-green-600",
    bg: "bg-green-600/10",
    roles: [
      "Product Manager",
      "Senior Product Manager",
      "Technical Project Manager",
      "Project Manager",
    ],
    what: "Define what we build and why. Own the roadmap, coordinate cross-functional work, keep delivery clean.",
  },
  {
    icon: Megaphone,
    category: "Marketing & Growth",
    divisions: ["Modulifyr"],
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    roles: [
      "Growth Marketer",
      "Digital Marketing Manager",
      "Content Strategist",
      "SEO Specialist",
      "Paid Acquisition Specialist",
      "Brand Manager",
      "Community Manager",
      "Publishing Manager",
    ],
    what: "We have zero marketing operations. This is a blank slate. Own the entire function from scratch.",
  },
  {
    icon: Users,
    category: "Sales & Client Success",
    divisions: ["Modulifyr"],
    color: "text-yellow-600",
    bg: "bg-yellow-600/10",
    roles: [
      "Business Development Manager",
      "Sales Executive",
      "Pre-Sales Engineer",
      "Account Manager",
      "Client Onboarding Specialist",
      "Customer Success Manager",
      "Technical Support Engineer",
      "Customer Support Specialist",
    ],
    what: "Help us land our first clients and keep them. Own the full client relationship from first contact to success.",
  },
  {
    icon: BarChart2,
    category: "Data & Analytics",
    divisions: ["Modulifyr"],
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    roles: ["Data Analyst", "Revenue Analyst"],
    what: "Build the analytics foundation from zero. No existing dashboards, no existing data pipelines. You start it.",
  },
  {
    icon: Building2,
    category: "Operations, Finance & HR",
    divisions: ["Shared / Corporate"],
    color: "text-stone-500",
    bg: "bg-stone-500/10",
    roles: [
      "Operations Manager",
      "HR Manager",
      "HR Specialist",
      "Recruiter",
      "Finance Manager",
      "Accountant",
      "Financial Analyst",
      "Chief of Staff",
      "Executive Assistant",
      "Legal Counsel",
      "IT Administrator",
    ],
    what: "Build the company's backbone: people operations, financial tracking, legal hygiene, and internal systems.",
  },
];

const honest = [
  {
    good: true,
    text: "Real work on real systems that will go live",
  },
  {
    good: true,
    text: "Direct access to the founder from day one",
  },
  {
    good: true,
    text: "Full module and function ownership — not sub-tasks",
  },
  {
    good: true,
    text: "A structured company with actual documentation and processes",
  },
  {
    good: true,
    text: "Portfolio-worthy work across three different product types",
  },
  {
    good: true,
    text: "Remote-first — apply from anywhere in Nepal or internationally",
  },
  {
    good: false,
    text: "No salary right now. Everyone is volunteering, including the founder.",
  },
  {
    good: false,
    text: "No funding. We run entirely on free tiers and open source.",
  },
  {
    good: false,
    text: "Pre-launch. No live clients yet. We're building the foundation.",
  },
];

// Custom 3D Tilt Card for Careers Open Roles / Divisions
function TiltCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      "ontouchstart" in window
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 4; // max ~4deg
    const rotateY = ((x - centerX) / centerX) * 4; // max ~4deg
    el.style.transition = "none";
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.25s ease-out";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  );
}

export default function CareersClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy relative overflow-hidden py-24 text-white">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Volunteer badge */}
            <Reveal variant="fade-scale">
              <div className="bg-brand-orange/15 border-brand-orange/40 mb-8 flex w-fit items-center gap-3 rounded-full border px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
                </span>
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                  Volunteer & Collaborator Openings
                </span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
                Build Modulifyr. <span className="text-brand-orange">From Zero.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted mb-6 max-w-3xl text-xl leading-relaxed">
                Modulifyr is a software consultancy built to deliver high-quality,
                architecture-first systems. Everyone here is a volunteer, including the founder. No
                salaries yet. Real work, real systems, real ownership.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={300}>
              <p className="text-text-muted text-lg leading-relaxed">
                If you want to be part of building something from the ground floor — own entire
                functions, not just tickets — and you can commit real time and effort: we want to
                hear from you.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-brand-teal/5 absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl" />
      </section>

      {/* ── What We're Building ───────────────────────────────────────────── */}
      <section className="bg-bg-secondary border-border-base border-b py-20">
        <div className="container-custom">
          <div className="mb-8">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                What We're Building
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
                Modulifyr is focused on delivering custom B2B software engineering and
                infrastructure solutions.
              </p>
            </Reveal>
          </div>

          <div className="max-w-3xl">
            {divisions.map((div) => (
              <Reveal key={div.id} variant="fade-up" delay={100}>
                <div
                  className={`border-border-base rounded-3xl border bg-white p-8 transition-shadow hover:shadow-lg ${div.border} border-t-4`}
                >
                  <div
                    className={`h-14 w-14 ${div.bg} mb-5 flex items-center justify-center rounded-2xl`}
                  >
                    <div.icon className={`h-7 w-7 ${div.color}`} />
                  </div>
                  <h3 className="font-heading text-foreground mb-1 text-xl font-bold">
                    {div.name}
                  </h3>
                  <p className={`mb-4 text-xs font-bold tracking-widest uppercase ${div.color}`}>
                    {div.tagline}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">{div.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Honest Section ────────────────────────────────────────────────── */}
      <section className="bg-bg-light py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Reveal variant="fade-up">
                <h2 className="font-heading text-foreground mb-3 text-3xl font-bold">
                  What This Actually Is
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  We're not going to dress this up. Here's exactly what working at Modulifyr looks
                  like right now — the good and the not-yet-good.
                </p>
              </Reveal>
              <div className="space-y-3">
                {honest.map((item, i) => (
                  <Reveal key={i} variant="fade-up" delay={150 + i * 50}>
                    <div className="flex items-start gap-3">
                      {item.good ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                      )}
                      <span
                        className={`text-sm leading-relaxed ${
                          item.good ? "text-text-secondary" : "text-text-muted"
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal variant="fade-scale" delay={150}>
                <div className="bg-brand-navy rounded-3xl p-8 text-white">
                  <h3 className="font-heading mb-4 text-xl font-bold text-white">
                    Who This Is For
                  </h3>
                  <div className="space-y-4 text-sm leading-relaxed text-white/80">
                    <p>
                      Students and recent graduates who want real work to put in their portfolio —
                      not mock projects.
                    </p>
                    <p>
                      Experienced people in full-time roles who have evenings or weekends and want
                      to build something serious outside of their job.
                    </p>
                    <p>
                      People between roles who want to stay sharp, contribute to a real company, and
                      be present for the moment it becomes something.
                    </p>
                    <p>
                      Anyone who cares more about the quality of the work than immediate
                      compensation — and who understands that pre-launch companies are built by
                      people who show up before it's obvious.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="fade-scale" delay={250}>
                <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                  <h3 className="font-heading text-foreground mb-3 text-sm font-bold tracking-widest uppercase">
                    Time Commitment
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We don't require full-time hours. We ask for consistency. Whether that's 10
                    hours a week or 40, tell us what you can commit to and we'll structure your role
                    accordingly. Part-time contributors are as welcome as those going all in.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Roles ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-12">
            <Reveal variant="fade-scale">
              <p className="text-brand-orange mb-2 text-xs font-bold tracking-widest uppercase">
                Open Positions
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                Every Role We Need
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
                These aren't aspirational org-chart titles. These are the actual functions we need
                people in. If you see your role here — apply.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            {roleGroups.map((group, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 80}>
                <TiltCard className="h-full">
                  <div className="border-border-base h-full rounded-3xl border bg-white p-8 transition-shadow hover:shadow-md">
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-12 w-12 ${group.bg} flex shrink-0 items-center justify-center rounded-2xl`}
                        >
                          <group.icon className={`h-6 w-6 ${group.color}`} />
                        </div>
                        <div>
                          <h3 className="font-heading text-foreground text-xl font-bold">
                            {group.category}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            {group.divisions.map((div) => (
                              <span
                                key={div}
                                className="bg-bg-secondary text-text-muted rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase"
                              >
                                {div}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-text-muted max-w-sm text-sm leading-relaxed italic md:text-right">
                        {group.what}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.roles.map((role) => (
                        <span
                          key={role}
                          className={`${group.bg} ${group.color} rounded-full px-3.5 py-1.5 text-xs font-semibold`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <p className="text-text-muted mt-8 text-sm italic">
            Don't see your exact title? Apply under "Other / General Application" and tell us what
            you do. If it fits, we'll find the right place for you.
          </p>
        </div>
      </section>

      {/* ── What We Evaluate ─────────────────────────────────────────────── */}
      <section className="bg-bg-secondary border-border-base border-y py-16">
        <div className="container-custom">
          <div className="mb-8">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground text-2xl font-bold">
                What We Look For in Every Role
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Ownership mindset",
              "Clear communication",
              "Genuine craft",
              "Follows through",
              "Documents decisions",
              "Thinks in systems",
            ].map((item, i) => (
              <Reveal key={i} variant="fade-scale" delay={i * 80}>
                <div className="border-border-base flex h-full items-center justify-center rounded-xl border bg-white p-5 text-center">
                  <p className="text-foreground text-sm font-bold">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 max-w-2xl">
            <Reveal variant="fade-up">
              <p className="text-text-secondary text-sm leading-relaxed">
                We don't care where you studied or how many years of experience you have. We care
                whether you take your work seriously, communicate when something is unclear, and
                actually deliver what you commit to. Everything else is learnable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────────────────────── */}
      <Reveal variant="fade-scale">
        <JobApplicationForm />
      </Reveal>
    </div>
  );
}

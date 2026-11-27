"use client";

import * as React from "react";
import {
  Search,
  PenTool,
  Code2,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Clock,
  FileText,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { BOOKING_URL } from "@/lib/links";

const steps = [
  {
    icon: Search,
    title: "Discovery & Scoping",
    duration: "3–10 Days (Strategy Sprint)",
    desc: "Mapping business operations, bottlenecks, and clear scope before writing code.",
    deliverables: ["Requirements Document", "Prioritized Roadmap", "Cost & Timeline Clarity"],
    details:
      "We start by learning how your team works today, where time or leads are lost, and what scope actually solves the problem without wasted spend.",
  },
  {
    icon: PenTool,
    title: "Blueprint & Component Plan",
    duration: "Included in Sprint / Launch Kit",
    desc: "Mapping system boundaries, modular Next.js & Tailwind page sections, or webhook logic.",
    deliverables: [
      "Architecture Blueprint",
      "Modular Layouts (Tier 3 Figma Optional)",
      "Integration Map",
    ],
    details:
      "Before engineering begins, you review and approve the structure—whether that is modular page flows for a Launch Kit, TypeScript/Hono endpoints for a custom app, or webhook logic for an Automation Layer.",
  },
  {
    icon: Code2,
    title: "Focused Build",
    duration: "3 Days – 6 Weeks by Scope",
    desc: "Building fast Launch Kit sites, scoped Strategy Sprint architectures, and retry-safe n8n workflows.",
    deliverables: ["Production Code / Workflows", "Structured Revisions", "Clear Documentation"],
    details:
      "We build in fixed-scope sprints with predictable pricing and milestone updates so your team sees tangible progress every week.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    duration: "Before Go-Live",
    desc: "Verifying mobile responsiveness, security checks, and workflow error alerts.",
    deliverables: ["Responsive & Speed Checks", "Error Alert Validation", "Security Review"],
    details:
      "Every site is tested across mobile and desktop viewports, and every automation flow is tested against failure states before going live.",
  },
  {
    icon: Globe,
    title: "Launch & Handoff",
    duration: "Clean Ownership",
    desc: "Deployment-ready handoff to your domain and accounts with zero vendor lock-in.",
    deliverables: ["Live Deployment", "Runbook & Docs", "Full Code & Account Ownership"],
    details:
      "You own your domain, hosting accounts, and code from day one. We provide straightforward handoff documentation so any developer can maintain it.",
  },
  {
    icon: Clock,
    title: "Optional Maintenance",
    duration: "When Needed",
    desc: "Optional managed hosting for Launch Kit sites or ongoing workflow checks.",
    deliverables: ["Uptime Alerting", "Itemized Third-Party Costs", "Future Scope Additions"],
    details:
      "Need hands-off upkeep after launch? Choose optional managed hosting for websites or add new automation flows as your business grows.",
  },
];

export default function ProcessClient() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-up">
              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-6xl">
                Transparency Through <span className="text-[#2D738D]">Process</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary text-xl leading-relaxed">
                We remove buyer risk by following a repeatable, engineering-first delivery model.
                From initial discovery to long-term support, your project is managed with surgical
                precision.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex flex-col gap-12 lg:flex-row">
                <div className="flex flex-col gap-4 lg:w-1/3">
                  <Reveal variant="fade-up" delay={idx * 100}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D738D] text-xl font-bold text-white">
                        {idx + 1}
                      </div>
                      <h2 className="font-heading text-foreground text-2xl font-bold md:text-3xl">
                        {step.title}
                      </h2>
                    </div>
                  </Reveal>
                  <Reveal variant="fade-up" delay={idx * 100 + 50}>
                    <div className="text-brand-teal mt-2 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
                      <Clock className="h-4 w-4" /> {step.duration}
                    </div>
                  </Reveal>
                  <Reveal variant="fade-up" delay={idx * 100 + 100}>
                    <p className="text-text-secondary mt-2 leading-relaxed">{step.desc}</p>
                  </Reveal>
                </div>

                <div className="lg:w-2/3">
                  <Reveal variant="fade-scale" delay={idx * 100 + 120}>
                    <div className="border-border-base bg-bg-alt h-full rounded-3xl border p-8 shadow-sm transition-shadow group-hover:shadow-md">
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="flex flex-col gap-4">
                          <h3 className="font-heading text-foreground border-border-base border-b pb-2 text-lg font-bold">
                            Technical Detail
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {step.details}
                          </p>
                          <div className="text-text-muted mt-auto flex items-center gap-2 pt-4 text-xs italic">
                            <ShieldCheck className="h-4 w-4" /> Professional NDA & Agreement Covered
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="font-heading text-foreground border-border-base border-b pb-2 text-lg font-bold">
                            Core Deliverables
                          </h3>
                          <ul className="space-y-3">
                            {step.deliverables.map((item, i) => (
                              <li
                                key={i}
                                className="text-text-secondary flex items-center gap-3 text-sm"
                              >
                                <FileText className="h-4 w-4 text-[#2D738D]" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Section */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <Reveal variant="fade-scale">
                <span className="w-fit rounded bg-[#2D738D]/20 px-3 py-1 text-xs font-bold tracking-widest text-[#2D738D] uppercase">
                  Recommended Entry Point
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-4xl font-bold md:text-5xl">
                  Start With a <span className="text-[#2D738D]">Strategy Sprint</span>
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={200}>
                <p className="text-text-muted text-lg leading-relaxed">
                  Planning a multi-page digital rollout or cross-system automation? Start with a
                  fixed-fee Strategy Sprint to lock down exact architecture, scope, and milestones
                  before writing production code—and credit the sprint fee toward your build. (For
                  simple Launch Kit websites, you can skip the sprint and start directly.)
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Reveal variant="fade-scale" delay={300}>
                  <div className="flex flex-col gap-2">
                    <div className="text-brand-gold text-xl font-bold">3 Days – 2 Weeks</div>
                    <p className="text-text-muted text-sm">Fast clarity before committing</p>
                  </div>
                </Reveal>
                <Reveal variant="fade-scale" delay={400}>
                  <div className="flex flex-col gap-2">
                    <div className="text-brand-gold text-xl font-bold">Fixed-Fee</div>
                    <p className="text-text-muted text-sm">Published NPR &amp; USD pricing</p>
                  </div>
                </Reveal>
              </div>
              <Reveal variant="fade-up" delay={500}>
                <Button href="/services/strategy-sprint" size="lg" className="w-fit">
                  Explore Strategy Sprint Tiers
                </Button>
              </Reveal>
            </div>

            <Reveal variant="fade-scale" delay={250}>
              <Card className="translate-y-0 border-white/10 bg-white/5 p-8 hover:shadow-none sm:p-12">
                <CardTitle className="mb-8 text-2xl text-white">What You Walk Away With</CardTitle>
                <div className="space-y-6">
                  {[
                    "Written requirements document covering goals and edge cases",
                    "Clear tech stack recommendation with plain-English trade-offs",
                    "Architecture blueprint & integration mapping (Tier 2+)",
                    "Phased roadmap with realistic cost & time estimates",
                    "100% ownership—build with Modulifyr or any engineering team",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="text-brand-teal h-5 w-5 shrink-0" />
                      <span className="text-text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24">
        <div className="container-custom text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground text-4xl font-bold">
                Ready to start discovery?
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary text-lg leading-relaxed">
                Book a call with our lead architect to discuss your project requirements. We offer
                timezone-aware scheduling for organizations worldwide.
              </p>
            </Reveal>
            <Reveal variant="fade-scale" delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={BOOKING_URL} external size="lg" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Schedule Discovery Call
                </Button>
                <Button href="/request-proposal" variant="outline" size="lg">
                  Send Project RFP
                </Button>
              </div>
            </Reveal>
            <p className="text-text-muted text-xs">Response within 1 business day</p>
          </div>
        </div>
      </section>
    </div>
  );
}

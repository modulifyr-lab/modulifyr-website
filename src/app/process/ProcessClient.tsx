'use client'

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
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    duration: "2-4 Weeks",
    desc: "Understanding business operations, workflows, and technical requirements.",
    deliverables: ["Discovery Report", "Product Backlog", "High-level Roadmap"],
    details:
      "We start by embedding with your team to understand the 'why' behind the project. We map out current bottlenecks and define success metrics.",
  },
  {
    icon: PenTool,
    title: "Architecture",
    duration: "3-6 Weeks",
    desc: "Designing system structure, modules, integrations, and scalability roadmap.",
    deliverables: ["System Architecture Diagram", "Data Schema", "Integration Specs"],
    details:
      "Engineering is about trade-offs. We design a modular structure that optimizes for your specific scale, security, and performance constraints.",
  },
  {
    icon: Code2,
    title: "Development",
    duration: "Iterative",
    desc: "Building secure, maintainable systems tailored to your organization.",
    deliverables: ["Modular Source Code", "Environment Setup", "Documentation"],
    details:
      "We build in focused sprints with regular demos. Our code is clean, modular, and designed to be maintained by any professional team.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    duration: "Parallel",
    desc: "Rigorous testing of modular integrity, security, and performance benchmarks.",
    deliverables: ["Test Reports", "Security Audit", "Performance Logs"],
    details:
      "Automated testing and manual QA ensure that the new system is reliable and secure before it touches production data.",
  },
  {
    icon: Globe,
    title: "Deployment",
    duration: "1-2 Weeks",
    desc: "Cloud deployment, infrastructure configuration, and testing.",
    deliverables: ["Production Environment", "CI/CD Pipeline", "Backup Systems"],
    details:
      "We handle the complexity of cloud infrastructure, ensuring a smooth transition with zero disruption to your existing operations.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    duration: "Contractual",
    desc: "Maintenance, upgrades, and continuous improvements.",
    deliverables: ["SLA Monitoring", "Security Patches", "Feature Iterations"],
    details:
      "A custom system is an investment. We provide ongoing support and updates to ensure it continues to serve your organization as it grows.",
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
                Transparency Through <span className="text-brand-orange">Process</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary text-xl leading-relaxed">
                We remove buyer risk by following a repeatable, engineering-first delivery model. From
                initial discovery to long-term support, your project is managed with surgical
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
                      <div className="bg-brand-orange flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white">
                        {idx + 1}
                      </div>
                      <h2 className="font-heading text-foreground text-2xl font-bold md:text-3xl">
                        {step.title}
                      </h2>
                    </div>
                  </Reveal>
                  <Reveal variant="fade-up" delay={idx * 100 + 50}>
                    <div className="text-brand-teal flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mt-2">
                      <Clock className="h-4 w-4" /> {step.duration}
                    </div>
                  </Reveal>
                  <Reveal variant="fade-up" delay={idx * 100 + 100}>
                    <p className="text-text-secondary leading-relaxed mt-2">{step.desc}</p>
                  </Reveal>
                </div>

                <div className="lg:w-2/3">
                  <Reveal variant="fade-scale" delay={idx * 100 + 120}>
                    <div className="border-border-base rounded-3xl border bg-white p-8 shadow-sm transition-shadow group-hover:shadow-md h-full">
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="flex flex-col gap-4">
                          <h3 className="font-heading text-foreground border-border-base border-b pb-2 text-lg font-bold">
                            Technical Detail
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed">{step.details}</p>
                          <div className="text-text-muted mt-auto flex items-center gap-2 text-xs italic pt-4">
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
                                <FileText className="text-brand-orange h-4 w-4" /> {item}
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
                <span className="bg-brand-orange/20 text-brand-orange w-fit rounded px-3 py-1 text-xs font-bold tracking-widest uppercase">
                  Recommended Entry Point
                </span>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <h2 className="font-heading text-4xl font-bold md:text-5xl">
                  The Low-Risk <span className="text-brand-orange">Pilot Offering</span>
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={200}>
                <p className="text-text-muted text-lg leading-relaxed">
                  Not ready for a full-scale build? Start with a fixed-fee, time-boxed pilot. Prove
                  the core functionality and technical feasibility before committing to a larger
                  roadmap.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Reveal variant="fade-scale" delay={300}>
                  <div className="flex flex-col gap-2">
                    <div className="text-brand-gold text-xl font-bold">4-8 Weeks</div>
                    <p className="text-text-muted text-sm">Accelerated prototype delivery</p>
                  </div>
                </Reveal>
                <Reveal variant="fade-scale" delay={400}>
                  <div className="flex flex-col gap-2">
                    <div className="text-brand-gold text-xl font-bold">Fixed-Fee</div>
                    <p className="text-text-muted text-sm">Predictable costs, zero surprises</p>
                  </div>
                </Reveal>
              </div>
              <Reveal variant="fade-up" delay={500}>
                <Link href="/request-proposal">
                  <Button size="lg" className="w-fit">
                    Book a 15-Minute Pilot Briefing
                  </Button>
                </Link>
              </Reveal>
            </div>

            <Reveal variant="fade-scale" delay={250}>
              <Card className="translate-y-0 border-white/10 bg-white/5 p-12 hover:shadow-none">
                <CardTitle className="mb-8 text-2xl text-white">Engagement Outcome</CardTitle>
                <div className="space-y-6">
                  {[
                    "Working prototype for core critical flow",
                    "Simulated test data & user journey",
                    "Modular technical architecture blueprint",
                    "Accurate timeline & estimate for Full Build",
                    "Signed code ownership & IP handoff",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="text-brand-teal h-5 w-5" />
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
                <a href="https://cal.eu/modulifyr/booking" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" /> Schedule Discovery Call
                  </Button>
                </a>
                <Link href="/request-proposal">
                  <Button variant="outline" size="lg">
                    Send Project RFP
                  </Button>
                </Link>
              </div>
            </Reveal>
            <p className="text-text-muted text-xs">Average response time: &lt; 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
}

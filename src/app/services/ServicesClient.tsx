"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  Search,
  Globe,
  Layers,
  Settings,
  RefreshCw,
  Cloud,
  Users,
  Zap,
  Download,
  LayoutGrid,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

const services = [
  {
    icon: Search,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    internalName: "Discovery Sprint",
    clientName: "Strategy Sprint",
    desc: "For new clients, unclear scope, architecture decisions, and system rescues. We run workshops, define requirements, produce an architecture blueprint, and deliver a prioritised roadmap before any build begins.",
    deliverables: [
      "Workshops & requirement breakdown",
      "Architecture blueprint",
      "Scope & tech stack recommendation",
      "Delivery roadmap",
    ],
    timeline: "1–2 weeks",
    size: "New projects / unclear scope",
    badge: null,
    comingSoon: false,
    link: "/services/strategy-sprint",
  },
  {
    icon: Globe,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    internalName: "Static Website Package",
    clientName: "Launch Kit",
    desc: "Landing pages, marketing sites, brochure sites, and docs. Responsive design, SEO basics, analytics, and a content editing flow — deployed to the global edge.",
    deliverables: [
      "4–8 responsive pages",
      "SEO basics & analytics",
      "Content editing flow",
      "Global CDN deployment",
    ],
    timeline: "1–3 weeks",
    size: "Marketing & content sites",
    badge: null,
    comingSoon: false,
    link: "/services/launch-kit",
  },
  {
    icon: Settings,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    internalName: "Integrations & Automation Package",
    clientName: "Automation Layer",
    desc: "API development, workflow automation, data sync, and system-to-system connections. Includes webhooks, sync jobs, retry logic, monitoring, and error handling.",
    deliverables: [
      "API implementation & webhooks",
      "Sync jobs & retry logic",
      "Monitoring & error handling",
      "System-to-system connections",
    ],
    timeline: "1–6 weeks",
    size: "Integration-focused",
    badge: null,
    comingSoon: false,
    link: "/services/automation-layer",
  },
  {
    icon: Layers,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    internalName: "Web App MVP Package",
    clientName: "Product MVP",
    desc: "SaaS MVPs, portals, dashboards, and client-facing systems.",
    deliverables: [],
    timeline: "",
    size: "SaaS & product teams",
    badge: null,
    comingSoon: true,
  },
  {
    icon: LayoutGrid,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    internalName: "Internal Tool Package",
    clientName: "Internal Ops System",
    desc: "Operations systems, approval flows, HR tools, and CRM-like internal apps.",
    deliverables: [],
    timeline: "",
    size: "Operational teams",
    badge: null,
    comingSoon: true,
  },
  {
    icon: RefreshCw,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    internalName: "Modernization / Refactoring Package",
    clientName: "Modernization Sprint",
    desc: "Legacy systems, performance issues, cloud migration, and modular cleanup.",
    deliverables: [],
    timeline: "",
    size: "Orgs with legacy debt",
    badge: null,
    comingSoon: true,
  },
  {
    icon: Cloud,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    internalName: "Infrastructure & SRE Setup",
    clientName: "Platform Setup",
    desc: "Cloud setup, CI/CD, security hardening, and release automation.",
    deliverables: [],
    timeline: "",
    size: "Cloud-native teams",
    badge: null,
    comingSoon: true,
  },
  {
    icon: Users,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    internalName: "Dedicated Product Team Retainer",
    clientName: "Engineering Retainer",
    desc: "For clients that want ongoing engineering capacity.",
    deliverables: [],
    timeline: "",
    size: "Startups & scale-ups",
    badge: null,
    comingSoon: true,
  },
];

// Custom 3D Tilt Component for Services Cards
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

export default function ServicesClient() {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Reveal variant="fade-up">
              <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-6xl">
                Services Built Around <span className="text-brand-orange">Your Operations</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-muted text-xl leading-relaxed">
                We sell outcomes, not hours. Every engagement maps to a defined package with clear
                scope, timeline, and price — so you know exactly what you're buying before you sign.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing philosophy banner */}
      <section className="bg-bg-secondary border-border-base border-b py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Wrench className="text-brand-orange h-4 w-4" />
              <span className="text-text-secondary">
                <span className="text-foreground font-bold">Fixed fee</span> when scope is clear
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="text-brand-teal h-4 w-4" />
              <span className="text-text-secondary">
                <span className="text-foreground font-bold">Retainer</span> when work is ongoing
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="text-brand-orange h-4 w-4" />
              <span className="text-text-secondary">
                <span className="text-foreground font-bold">Discovery first</span> when scope is
                uncertain
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const cardContent = (
                <Card
                  className={`hover:border-t-brand-orange relative flex h-full flex-col border-t-4 border-t-transparent ${service.badge ? "ring-brand-orange/30 ring-2" : ""}`}
                >
                  {/* Coming Soon overlay */}
                  {service.comingSoon && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/85 backdrop-blur-[2px]">
                      <span className="bg-brand-navy rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase">
                        Coming Soon
                      </span>
                      <p className="text-text-muted max-w-[160px] text-center text-xs leading-relaxed">
                        On our roadmap. Reach out to be notified when it launches.
                      </p>
                    </div>
                  )}

                  {service.badge && !service.comingSoon && (
                    <div className="bg-brand-orange absolute top-0 left-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                      {service.badge}
                    </div>
                  )}

                  <div
                    className={`h-14 w-14 ${service.bg} mb-4 flex items-center justify-center rounded-xl`}
                  >
                    <service.icon className={`${service.color} h-7 w-7`} />
                  </div>

                  {/* Internal / client name */}
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <CardTitle className="mb-0">{service.clientName}</CardTitle>
                  </div>
                  <p className="text-text-muted mb-3 text-[10px] font-bold tracking-widest uppercase">
                    {service.internalName}
                  </p>

                  <CardDescription className="mb-6 flex-grow">{service.desc}</CardDescription>

                  {!service.comingSoon && (
                    <div className="border-border-base mt-auto space-y-5 border-t pt-6">
                      <div>
                        <span className="text-text-muted mb-2 block text-xs font-bold tracking-wider uppercase">
                          Key Deliverables
                        </span>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {service.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="text-text-secondary flex items-start gap-2 text-sm"
                            >
                              <Zap className="text-brand-gold mt-0.5 h-3 w-3 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <span className="bg-bg-secondary text-foreground rounded px-2 py-1 text-xs font-semibold">
                          {service.size}
                        </span>
                        <p className="text-text-muted mt-1 text-xs">{service.timeline}</p>
                      </div>

                      {service.link && (
                        <div className="pt-2">
                          <Link href={service.link}>
                            <Button size="sm" className="w-full text-xs">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              );

              return (
                <Reveal key={idx} variant="fade-up" delay={idx * 100}>
                  {service.comingSoon ? (
                    <div className="h-full">{cardContent}</div>
                  ) : (
                    <TiltCard className="h-full">{cardContent}</TiltCard>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client name reference table */}
      <section className="bg-bg-secondary py-16">
        <div className="container-custom">
          <div className="mb-8 max-w-2xl">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-2 text-2xl font-bold">
                How We Name Our Packages
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary text-sm leading-relaxed">
                We use plain client-facing names in proposals and quotes. Below is the full
                reference so your team always knows which package maps to which deliverable set.
              </p>
            </Reveal>
          </div>
          <Reveal variant="fade-scale" delay={150}>
            <div className="border-border-base overflow-hidden rounded-2xl border bg-white">
              <div className="bg-brand-navy grid grid-cols-2 px-6 py-3 text-xs font-bold tracking-widest text-white uppercase">
                <span>Internal Package</span>
                <span>Client-Facing Name</span>
              </div>
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`border-border-base grid grid-cols-2 border-b px-6 py-4 last:border-0 ${i % 2 === 1 ? "bg-bg-light" : ""}`}
                >
                  <span className="text-text-secondary text-sm">{s.internalName}</span>
                  <span className="text-foreground text-sm font-semibold">{s.clientName}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="border-border-base flex flex-col items-center justify-between gap-12 rounded-3xl border bg-white p-8 shadow-xl md:flex-row md:p-16">
              <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
                <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
                  Not sure which package fits?
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Start with a{" "}
                  <span className="text-brand-orange font-bold">Strategy Sprint (Discovery)</span>.
                  In 1–2 weeks we'll map your requirements, recommend the right package, and give
                  you a fixed-fee estimate — before you commit to anything larger.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <Link href="/request-proposal">
                    <Magnetic radius={10}>
                      <Button className="group">
                        Request Capability Deck{" "}
                        <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                      </Button>
                    </Magnetic>
                  </Link>
                  <Link href="/request-proposal">
                    <Button variant="outline">Request Proposal</Button>
                  </Link>
                </div>
              </div>
              <div className="grid w-full shrink-0 grid-cols-2 gap-4 md:w-auto">
                {[
                  { label: "Uptime SLA", val: "99.9%" },
                  { label: "Cloud-Native", val: "Focused" },
                  { label: "Security", val: "Audited" },
                  { label: "Scale", val: "Ready" },
                ].map((stat, i) => (
                  <div key={i} className="bg-bg-secondary rounded-2xl p-6 text-center">
                    <div className="text-brand-orange font-heading mb-1 text-xl font-bold">
                      {stat.val}
                    </div>
                    <div className="text-text-muted text-xs font-bold tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom text-center">
          <Reveal variant="fade-scale">
            <div className="bg-brand-navy/5 border-border-base mx-auto max-w-3xl rounded-3xl border p-12">
              <p className="text-foreground font-heading mb-4 text-xl leading-relaxed">
                "We're building our foundation, not buying fake praise. Be one of Modulifyr's first
                5 founding clients and lock in our bootstrapper pricing while we scale our early
                portfolio."
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

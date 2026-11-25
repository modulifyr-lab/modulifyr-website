"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  ShoppingCart,
  Heart,
  Cpu,
  Store,
  Briefcase,
  ArrowRight,
  Zap,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const industries = [
  {
    icon: GraduationCap,
    name: "Education",
    color: "text-[#2D738D]",
    bg: "bg-[#2D738D]/10",
    tagline: "Schools, colleges, and training institutes",
    desc: "Replace slow brochure sites and scattered admission spreadsheets with a fast Launch Kit web presence and automated inquiry routing straight to your admissions team.",
    useCases: [
      "Fast admissions & course info websites (Launch Kit)",
      "Inquiry form → spreadsheet & staff alert sync (Automation Layer)",
      "Online fee/prospectus request routing",
      "Scoping digital initiatives before spending (Strategy Sprint)",
    ],
    clients: "Schools, colleges, consultancies, training centers",
  },
  {
    icon: ShoppingCart,
    name: "Commerce & Wholesale",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    tagline: "Distributors, suppliers, and B2B sellers",
    desc: "Turn wholesale inquiries into tracked orders faster. Pair a credible catalog website with automated lead capture and sheet/CRM updates so your sales team never misses a follow-up.",
    useCases: [
      "Product catalog & wholesale inquiry sites (Launch Kit)",
      "Order/quote request → sheet & team chat alerts (Automation Layer)",
      "CRM and accounting tool sync without manual re-entry",
      "Clear technical roadmap before custom integrations (Strategy Sprint)",
    ],
    clients: "Distributors, wholesalers, trading businesses",
  },
  {
    icon: Heart,
    name: "Healthcare & Clinics",
    color: "text-[#2D738D]",
    bg: "bg-[#2D738D]/10",
    tagline: "Clinics, dental practices, and diagnostic centers",
    desc: "Make it effortless for patients in Nepal to find your services, check timings, and request appointments online while keeping front-desk follow-ups automated.",
    useCases: [
      "Mobile-first clinic & doctor profile websites (Launch Kit)",
      "Appointment request embeds & confirmation alerts (Automation Layer)",
      "Patient inquiry routing to reception sheets & email",
      "Workflow scoping before multi-branch upgrades (Strategy Sprint)",
    ],
    clients: "Clinics, diagnostic labs, specialty practices",
  },
  {
    icon: Cpu,
    name: "IT & Startups",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    tagline: "Product teams, SaaS builders, and tech agencies",
    desc: "Validate ideas with clear architecture before writing production code, launch sharp marketing sites quickly, and automate internal ops webhooks across your stack.",
    useCases: [
      "Technical scoping, architecture & risk plans (Strategy Sprint)",
      "High-speed product launch & waitlist pages (Launch Kit)",
      "Webhook, API & n8n operational pipelines (Automation Layer)",
      "Third-party tool sync with retry logic & error alerts",
    ],
    clients: "Startups, SaaS teams, digital agencies",
  },
  {
    icon: Store,
    name: "Retail & Hospitality",
    color: "text-[#2D738D]",
    bg: "bg-[#2D738D]/10",
    tagline: "Local stores, cafes, hotels, and multi-outlet brands",
    desc: "Stand out on local search and social links with a fast site built to drive visits, bookings, and direct inquiries—backed by automated order and booking notifications.",
    useCases: [
      "Fast local storefront & menu/room showcase sites (Launch Kit)",
      "Booking & bulk-order alerts to staff channels (Automation Layer)",
      "Multi-step quote or catering request forms",
      "Clear digital upgrade planning (Strategy Sprint)",
    ],
    clients: "Retailers, hotels, restaurants, local brands",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    tagline: "Law firms, accounting practices, and consultancies",
    desc: "Win high-trust clients with a clean, authoritative website and automate consultation booking, intake forms, and client record creation without admin bottlenecks.",
    useCases: [
      "Credibility-focused firm websites & SEO structure (Launch Kit)",
      "Consultation booking + intake → CRM/sheet sync (Automation Layer)",
      "Automated follow-up & team assignment notifications",
      "Process & integration blueprints (Strategy Sprint)",
    ],
    clients: "Consultancies, CA firms, law practices, agencies",
  },
];

// Custom 3D Tilt Component for Industry Cards
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

export default function IndustriesClient() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Reveal variant="fade-scale">
              <span className="text-[#2D738D] mb-4 block text-xs font-bold tracking-widest uppercase">
                Sector Coverage
              </span>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <h1 className="font-heading mb-8 text-4xl font-bold text-white md:text-6xl">
                Practical Digital Upgrades <span className="text-[#2D738D]">Across Sectors</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-muted max-w-2xl text-xl leading-relaxed">
                We help Nepal SMBs and international teams apply our three fixed-scope packages—Strategy
                Sprint, Launch Kit, and Automation Layer—to eliminate manual busywork and win more
                customer inquiries in their sector.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-bg-light py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {industries.map((industry, idx) => (
              <Reveal key={industry.name} variant="fade-up" delay={idx * 100}>
                <TiltCard className="h-full">
                  <Card className="h-full overflow-hidden p-0">
                    <div className="flex h-full flex-col p-8 md:p-10">
                      <div className="mb-6 flex items-start gap-5">
                        <div
                          className={`h-14 w-14 ${industry.bg} flex shrink-0 items-center justify-center rounded-2xl`}
                        >
                          <industry.icon className={`h-7 w-7 ${industry.color}`} />
                        </div>
                        <div>
                          <h2 className="font-heading text-foreground text-2xl font-bold">
                            {industry.name}
                          </h2>
                          <p className="text-text-muted mt-1 text-xs font-semibold tracking-widest uppercase">
                            {industry.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                        {industry.desc}
                      </p>
                      <div className="mb-6">
                        <p className="text-text-muted mb-3 text-xs font-bold tracking-widest uppercase">
                          Common Use Cases
                        </p>
                        <ul className="space-y-2">
                          {industry.useCases.map((uc) => (
                            <li
                              key={uc}
                              className="text-text-secondary flex items-center gap-2 text-sm"
                            >
                              <Zap className="text-brand-gold h-3 w-3 shrink-0" /> {uc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-border-base mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4">
                        <span className="text-text-muted text-xs italic">{industry.clients}</span>
                        <Link href="/request-proposal">
                          <Button size="sm" variant="outline" className="group text-xs whitespace-nowrap">
                            Request Proposal{" "}
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="fade-up">
              <h2 className="font-heading text-foreground mb-6 text-3xl font-bold">
                Don't see your industry?
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Whether you need clear scoping before investing, a fast website to convert local
                traffic, or automated workflows connecting your daily tools, our three packages
                adapt to any industry.
              </p>
            </Reveal>
            <Reveal variant="fade-scale" delay={150}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/request-proposal">
                  <Button size="lg">Request a Proposal</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Speak with an Engineer
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

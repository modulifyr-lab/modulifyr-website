"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layout, Workflow } from "lucide-react";

export interface ServiceCardData {
  id: string;
  title: string;
  subLabel: string;
  description: string;
  checklist: string[];
  link: string;
  icon: typeof Compass;
}

export const SERVICES_DATA: ServiceCardData[] = [
  {
    id: "strategy-sprint",
    title: "Strategy Sprint",
    subLabel: "Discovery Sprint",
    description:
      "We bring clarity to new projects, complex requirements, and systems that need a fresh direction. Through focused workshops, we define requirements, establish the right architecture, and create a prioritized roadmap before development begins.",
    checklist: [
      "Workshops & requirement breakdown",
      "Architecture blueprint",
      "Scope & tech stack recommendation",
      "Delivery roadmap",
    ],
    link: "/services/strategy-sprint",
    icon: Compass,
  },
  {
    id: "launch-kit",
    title: "Launch Kit",
    subLabel: "Marketing & Web Systems",
    description:
      "Fast, production-grade web platforms and marketing sites built with modern static architecture, zero bloat, and maximum conversion performance.",
    checklist: [
      "Custom responsive design",
      "Next.js & Tailwind architecture",
      "SEO & canonical configuration",
      "Global edge network deployment",
    ],
    link: "/services/launch-kit",
    icon: Layout,
  },
  {
    id: "automation-layer",
    title: "Automation Layer",
    subLabel: "Workflow & Sync Layer",
    description:
      "Connect your existing software, legacy databases, third-party APIs, and webhooks into a unified, reliable operational pipeline with automated monitoring.",
    checklist: [
      "API & Webhook integrations",
      "Data schema mapping",
      "Automated retries & error alerts",
      "Multi-system workflow sync",
    ],
    link: "/services/automation-layer",
    icon: Workflow,
  },
];

export function ServicesSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const dwellTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePointerEnter = (idx: number) => {
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
    // 0.8s dwell requirement to auto-advance to category
    dwellTimerRef.current = setTimeout(() => {
      setActiveCardIndex(idx);
    }, 800);
  };

  const handlePointerLeave = () => {
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
  };

  return (
    <section className="py-20 bg-bg-main transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-h2 font-bold text-foreground">
            Built for Every Stage
          </h2>
          <p className="text-body1 text-text-alt">
            From strategy and websites to automation, our services are designed around your business needs.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            const isActive = activeCardIndex === idx;

            return (
              <div
                key={service.id}
                onPointerEnter={() => handlePointerEnter(idx)}
                onPointerLeave={handlePointerLeave}
                onClick={() => setActiveCardIndex(idx)}
                className={`bg-bg-alt border-border-main rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 ease-out ${
                  isActive ? "ring-2 ring-[#2D738D] shadow-lg scale-[1.01]" : "hover:border-[#2D738D]/50"
                }`}
              >
                <div className="space-y-6">
                  {/* Icon & Badges */}
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-caption1 font-semibold text-text-dim bg-bg-main border border-border-main rounded-full px-3 py-1">
                      {service.subLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-h4 font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-body2 text-text-alt leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-border-main/60">
                    {service.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-body2 text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-[#2D738D] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-8">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-body2 font-bold text-[#2D738D] hover:underline"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

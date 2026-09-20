"use client";

import { useState, useRef } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by embedding with your team to understand the 'why' behind the project. We map out current bottlenecks and define success metrics.",
    deliverables: ["Discovery Report", "Product Backlog", "High-level Roadmap"],
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Engineering is about trade-offs. We design a modular structure that optimizes for your specific scale, security, and performance constraints.",
    deliverables: ["System Architecture Design", "Data Schema", "Integration Specs"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build in focused sprints with regular demos. Our code is clean, modular, and designed to be maintained by any professional team.",
    deliverables: ["Sprint Delivery", "Code Repository", "QA Test Reports"],
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "We handle the complexity of cloud infrastructure, ensuring a smooth transition with zero disruption to your existing operations.",
    deliverables: ["Product Environment", "CI/CD Pipeline", "Backup Systems"],
  },
  {
    number: "05",
    title: "Support",
    description:
      "We provide ongoing SLA monitoring, security patches, system maintenance, and feature iterations as your business scales.",
    deliverables: ["SLA Monitoring", "Security Patches", "Feature Iterations"],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const dwellTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePointerEnter = (idx: number) => {
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
    dwellTimerRef.current = setTimeout(() => {
      setActiveStep(idx);
    }, 800); // 0.8s dwell requirement
  };

  const handlePointerLeave = () => {
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
  };

  const handleClick = (idx: number) => {
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
    setActiveStep(idx);
  };

  return (
    <section className="py-20 bg-bg-alt/50 border-y border-border-main transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            THE PROCESS
          </span>
          <h2 className="text-h2 font-bold text-foreground">
            Five-phase engineering approach, built to scale
          </h2>
          <p className="text-body1 text-text-alt">
            A structured process that brings clarity from discovery to deployment and beyond.
          </p>
        </div>

        {/* 5 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => {
            const isExpanded = activeStep === idx;
            return (
              <div
                key={step.number}
                onPointerEnter={() => handlePointerEnter(idx)}
                onPointerLeave={handlePointerLeave}
                onClick={() => handleClick(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(idx);
                  }
                }}
                className={`bg-bg-main border-border-main rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-in select-none ${
                  isExpanded
                    ? "ring-2 ring-[#2D738D] shadow-lg md:col-span-2 scale-[1.02]"
                    : "hover:border-[#2D738D]/60 md:col-span-1"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-h4 font-extrabold text-[#2D738D]">
                      {step.number}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-text-dim transition-transform duration-300 ${
                        isExpanded ? "rotate-90 text-[#2D738D]" : ""
                      }`}
                    />
                  </div>

                  <h3 className="text-h5 font-bold text-foreground">
                    {step.title}
                  </h3>

                  <p
                    className={`text-body2 text-text-alt transition-all duration-500 ease-in ${
                      isExpanded ? "opacity-100 max-h-40" : "opacity-80 max-h-20 overflow-hidden"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Tags */}
                <div className="mt-6 pt-4 border-t border-border-main/60 space-y-2">
                  <span className="text-caption2 font-bold text-text-dim uppercase tracking-wider block">
                    Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 bg-bg-alt text-foreground border border-border-main rounded-md px-2 py-1 text-caption2 font-medium"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#2D738D]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

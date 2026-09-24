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
    deliverables: ["Sprint Demos", "Code Reviews", "QA Reports"],
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
      "Ongoing monitoring and support after launch — details coming soon",
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

        {/* Left-list + Right-detail layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Vertical List (01-05) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onPointerEnter={() => handlePointerEnter(idx)}
                  onPointerLeave={handlePointerLeave}
                  onClick={() => handleClick(idx)}
                  className={`flex items-center justify-between w-full p-4 rounded-xl border text-left transition-all duration-500 ease-in cursor-pointer ${
                    isActive
                      ? "bg-bg-main border-[#2D738D] text-foreground shadow-md"
                      : "bg-bg-alt/40 border-border-main text-text-alt hover:border-[#2D738D]/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-h6 font-extrabold transition-colors duration-300 ${
                        isActive ? "text-[#2D738D]" : "text-text-dim"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-body1 font-bold">{step.title}</span>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isActive ? "text-[#2D738D] translate-x-1" : "text-text-dim/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detail Panel */}
          <div className="lg:col-span-7 bg-bg-main border border-border-main rounded-2xl p-8 shadow-lg min-h-[320px] flex flex-col justify-between transition-all duration-500 ease-in">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-border-main pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-h3 font-extrabold text-[#2D738D]">
                    {PROCESS_STEPS[activeStep].number}
                  </span>
                  <h3 className="text-h3 font-bold text-foreground">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center font-bold text-sm">
                  Phase
                </div>
              </div>

              <p className="text-body1 text-text-alt leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="mt-8 pt-6 border-t border-border-main space-y-3">
              <span className="text-caption1 font-bold text-text-dim uppercase tracking-wider block">
                Key Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 bg-bg-alt border border-border-main/60 rounded-lg p-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#2D738D] shrink-0" />
                    <span className="text-body2 font-semibold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

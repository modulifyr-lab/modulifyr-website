"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Compass,
  LifeBuoy,
  PackageSearch,
  Rocket,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We start by embedding with your team to understand the 'why' behind the project. We map out current bottlenecks and define success metrics.",
    deliverables: ["Discovery Report", "Product Backlog", "High-level Roadmap"],
    icon: PackageSearch,
  },
  {
    id: "02",
    title: "Architecture",
    description:
      "Engineering is about trade-offs. We design a modular structure that optimizes for your specific scale, security, and performance constraints.",
    deliverables: ["System Architecture", "Data Schema", "Integration Specs"],
    icon: Compass,
  },
  {
    id: "03",
    title: "Development",
    description:
      "We build in focused sprints with regular demos. Our code is clean, modular, and designed to be maintained by any professional team.",
    deliverables: ["Sytem Architecture Design", "Data Schema", "Integration Specs"],
    icon: TerminalSquare,
  },
  {
    id: "04",
    title: "Deployment",
    description:
      "We handle the complexity of cloud infrastructure, ensuring a smooth transition with zero disruption to your existing operations.",
    deliverables: ["Production Environment", "CI/CD Pipeline", "Backup Systems"],
    icon: Rocket,
  },
  {
    id: "05",
    title: "Support",
    description:
      "We handle the complexity of cloud infrastructure, ensuring a smooth transition with zero disruption to your existing operations.",
    deliverables: ["SLA Monitoring", "Security Patches", "Feature Iterations"],
    icon: LifeBuoy,
  },
];

const AUTO_ADVANCE_MS = 6000;

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Auto-advance unless hovered, focused, or the user prefers reduced motion
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, AUTO_ADVANCE_MS);

    return () => clearTimeout(timer);
  }, [activeStep, isPaused, reduceMotion]);

  const current = PROCESS_STEPS[activeStep];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
    }
  };

  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 max-w-full">
          <span className="font-sans text-[20px] leading-[110%] font-normal text-[#FFC24B]">
            THE PROCESS
          </span>
          <h2 className="text-on-background mt-2 text-4xl leading-[1.1] font-bold">
            Five-phase engineering approach, built to scale
          </h2>
          <p className="text-on-surface-variant mt-3 text-base leading-[1.3]">
            A structured process that brings clarity from discovery to deployment and beyond.
          </p>
        </div>

        <div
          className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* LEFT: step tabs */}
          <div
            role="tablist"
            aria-label="Process phases"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
          >
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={step.id}
                  id={`process-tab-${step.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls="process-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStep(index)}
                  className="group relative flex shrink-0 cursor-pointer items-baseline gap-3 rounded-lg px-4 py-3 text-left transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#4FB6C6] focus-visible:outline-none lg:py-3.5 lg:pr-8"
                >
                  <span
                    className={`text-sm font-medium tabular-nums transition-colors duration-300 ${
                      isActive ? "text-[#4FB6C6]" : "text-on-surface-variant/60"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span
                    className={`text-2xl font-bold transition-colors duration-300 md:text-[28px] ${
                      isActive
                        ? "text-on-background"
                        : "text-on-surface-variant/50 group-hover:text-on-surface-variant"
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Active marker: vertical bar on desktop, underline on mobile */}
                  <span
                    aria-hidden="true"
                    className={`absolute rounded-full bg-[#4FB6C6] transition-all duration-300 max-lg:right-4 max-lg:bottom-0 max-lg:left-4 max-lg:h-[2px] lg:top-1/2 lg:right-0 lg:h-10 lg:w-[2px] lg:-translate-y-1/2 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: detail card */}
          <div
            id="process-panel"
            role="tabpanel"
            aria-labelledby={`process-tab-${current.id}`}
            className="border-outline/20 bg-surface relative min-h-[300px] overflow-hidden rounded-2xl border p-8 shadow-xl md:p-10"
          >
            {/* Soft glow behind the icon */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-[#4FB6C6]/10 blur-3xl"
            />

            {/* Content re-mounts per step so the fade replays on change */}
            <div key={current.id} className="animate-process-in relative">
              <p className="text-on-surface-variant/70 text-sm">{current.title}</p>

              <p className="text-on-background mt-8 max-w-xl text-lg leading-relaxed">
                {current.description}
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {current.deliverables.map((item) => (
                  <li key={item} className="text-on-background flex items-center gap-3 text-base">
                    <Check className="h-4 w-4 shrink-0 text-[#4FB6C6]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes process-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-process-in {
          animation: process-in 350ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-process-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

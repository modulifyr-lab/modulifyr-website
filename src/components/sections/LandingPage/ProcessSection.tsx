"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, FileCode2, GitBranch, Rocket } from "lucide-react";
import { Button } from "@/components/Button";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery & Architecture",
    description:
      "We map out your technical requirements and system architecture to establish a blueprint built for long-term scalability.",
    icon: Boxes,
    image: "/services/service-one.png",
  },
  {
    id: "02",
    title: "Agile Development",
    description:
      "Our team builds clean, maintainable, and well-documented custom code, iterating rapidly based on key feedback loops.",
    icon: FileCode2,
    image: "/services/service-two.png",
  },
  {
    id: "03",
    title: "Seamless Integration",
    description:
      "We integrate custom solutions directly into your legacy systems and third-party tools to ensure zero operational disruption.",
    icon: GitBranch,
    image: "/services/service-three.png",
  },
  {
    id: "04",
    title: "Deployment & Scaling",
    description:
      "Rigorous testing, automated CI/CD deployment pipelines, and continuous monitoring keep your infrastructure bulletproof.",
    icon: Rocket,
    image: "/services/service-four.png",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance through steps unless hovered
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="font-sans text-[20px] leading-[110%] font-normal text-[#FFC24B]">
            HOW WE WORK
          </span>
          <h2 className="text-on-background mt-2 text-4xl leading-[1.1] font-bold">
            Engineered Step-by-Step for Maximum Impact
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT: Interactive Step List */}
          <div
            className="flex flex-col gap-4 lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`group relative flex items-start gap-5 rounded-2xl p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-surface border-outline/20 border shadow-lg"
                      : "hover:bg-surface/50 border border-transparent"
                  }`}
                >
                  {/* Step Number/Icon Badge */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "border-[#FFC24B] bg-[#FFC24B]/10 text-[#FFC24B]"
                        : "border-outline/30 bg-surface-container text-on-surface-variant group-hover:border-outline"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Step Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-wider text-[#FFC24B]">
                        STEP {step.id}
                      </span>
                      <h3 className="text-on-background text-xl font-bold">{step.title}</h3>
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-all duration-300 ${
                        isActive
                          ? "text-on-surface-variant max-h-24 opacity-100"
                          : "text-on-surface-variant/70 max-h-12 opacity-80 lg:max-h-0 lg:overflow-hidden lg:opacity-0"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Indicator Bar */}
                  {isActive && (
                    <div className="absolute right-6 bottom-0 left-6 h-[2px] animate-pulse rounded-full bg-[#FFC24B]" />
                  )}
                </button>
              );
            })}

            {/* CTA Link */}
            <div className="mt-6 pl-2">
              <Link href="/process" className="group inline-block">
                <Button variant="outline">
                  Explore Full Methodology{" "}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Dynamic Image Display */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px] lg:col-span-5">
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 rounded-full bg-[#FFC24B]/5 blur-3xl" />

            <div className="border-outline/20 bg-surface relative h-full w-full overflow-hidden rounded-3xl border shadow-2xl">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 p-8 transition-all duration-700 ease-in-out ${
                    activeStep === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-contain p-6"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

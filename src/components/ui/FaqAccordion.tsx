"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/links";

export interface FaqItem {
  question: string;
  answer?: string;
}

export const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does Modulifyr do differently from other software development companies?",
    answer:
      "We design modular software systems tailored to your exact operational workflows. Instead of forced off-the-shelf constraints or rigid legacy monoliths, our founder-led team builds clean, maintainable systems with pay-as-we-build milestones and zero hidden costs.",
  },
  {
    question: "How do I know Modulifyr is a fit for my business?",
    answer:
      "Modulifyr is ideal for growing SMBs and enterprises that have outgrown generic tools like spreadsheets or rigid SaaS platforms, and need tailored ERPs, automation, or custom integrations built to scale with their operations.",
  },
  {
    question: "Can you integrate our new system with existing tools we use?",
    answer:
      "Yes. We specialize in API integrations, webhooks, and legacy system modernization. We connect your existing databases, payment gateways, CRM, and accounting software into one unified data flow.",
  },
  {
    question: "How do I start a project with Modulifyr?",
    answer:
      "You can start by booking a discovery call or scheduling a 2-week Strategy Sprint. We map out your current bottlenecks, architecture requirements, and project roadmap before any development commitments.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We ensure smooth deployment with CI/CD pipelines, automated backups, and thorough documentation. Post-launch, we offer SLA monitoring, security patches, and retainer support for continuous feature development.",
  },
];

const FALLBACK_ANSWER =
  "Our engineering team handles every aspect of custom development, ensuring high reliability, clear milestones, and dedicated support.";

interface FaqAccordionProps {
  items?: FaqItem[];
  founderImage?: string;
  founderAlt?: string;
}

export function FaqAccordion({
  items = DEFAULT_FAQ_ITEMS,
  founderImage = "/founder.jpg",
  founderAlt = "Modulifyr founder",
}: FaqAccordionProps) {
  // Multiple rows can be open at the same time
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-bg-main py-12 transition-colors duration-300 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column: header + contact card */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-10">
            <div className="space-y-2">
              <span className="text-h5 block font-medium text-[#F5A524]">FAQ</span>
              <h2 className="text-foreground text-3xl leading-tight sm:text-4xl">
                Questions before you start
              </h2>
              <p className="text-body1 text-text-alt">
                Learn how we build, integrate, and scale solutions for your business.
              </p>
            </div>

            <div className="bg-bg-alt/60 border-border-main rounded-2xl border p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <img
                  src={founderImage}
                  alt={founderAlt}
                  width={96}
                  height={96}
                  className="h-20 w-20 shrink-0 self-center rounded-full object-cover sm:h-20 sm:w-20 sm:self-start lg:h-24 lg:w-24"
                />
                <div className="min-w-0 flex-1 space-y-4">
                  <div className="space-y-2 text-center sm:space-y-3 sm:text-left">
                    <h3 className="text-foreground text-2xl font-semibold sm:text-3xl">
                      Still have questions?
                    </h3>
                    <p className="text-body2 text-text-alt leading-snug">
                      Not sure where to start? Talk with our founder about the right approach for
                      your business.
                    </p>
                  </div>
                  <Button
                    href={BOOKING_URL}
                    external
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#2D738D] bg-transparent px-4 py-3 text-sm font-medium text-[#3A9BBF] transition-colors duration-150 ease-in hover:bg-[#2D738D]/10 sm:px-5"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    Book a free Discovery Call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: single container, divided rows */}
          <div className="bg-bg-alt/60 border-border-main divide-border-main divide-y overflow-hidden rounded-2xl border">
            {items.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;

              return (
                <div key={idx}>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleRow(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-start justify-between gap-3 px-4 py-4 text-left transition-colors duration-150 hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#2D738D] sm:gap-4 sm:px-5 sm:py-5"
                  >
                    <span className="flex min-w-0 items-start gap-3">
                      <span className="text-body2 text-text-alt/70 shrink-0 pt-0.5 tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-body1 text-foreground leading-snug font-normal break-words">
                        {item.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`text-foreground mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-body2 text-text-alt pr-4 pb-4 pl-12 leading-relaxed sm:pr-12 sm:pb-5 sm:pl-[3.25rem]">
                        {item.answer || FALLBACK_ANSWER}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

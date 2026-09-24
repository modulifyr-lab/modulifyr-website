"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import Link from "next/link";

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

export function FaqAccordion({ items = DEFAULT_FAQ_ITEMS }: { items?: FaqItem[] }) {
  // Support multiple open rows simultaneously per specification
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-bg-main transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-h2 font-bold text-foreground">
            Questions before you start
          </h2>
          <p className="text-body1 text-text-alt">
            Learn how we build, integrate, and scale solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: "Still have questions?" Card */}
          <div className="lg:col-span-4 bg-bg-alt border-border-main rounded-2xl border p-8 space-y-6 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-h5 font-bold text-foreground">Still have questions?</h3>
              <p className="text-body2 text-text-alt leading-relaxed">
                Not sure where to start? Talk with our founder about the right approach for your
                business.
              </p>
            </div>
            <Link href="/contact" className="block">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white w-full rounded-lg py-3 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Book a free Discovery Call
              </button>
            </Link>
          </div>

          {/* Right Column: Multi-Open Accordion Rows */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {items.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-bg-alt border-border-main rounded-xl border transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleRow(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D738D] rounded-xl"
                  >
                    <span className="text-body1 font-semibold text-foreground pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#2D738D] shrink-0 transition-transform duration-300 ease-in ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-body2 text-text-alt leading-relaxed border-t border-border-main/40 pt-4 animate-in fade-in duration-300 ease-in">
                      {item.answer ||
                        "Our engineering team handles every aspect of custom development, ensuring high reliability, clear milestones, and dedicated support."}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

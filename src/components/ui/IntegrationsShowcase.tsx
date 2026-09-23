"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Database, Cloud, ShieldCheck, Cpu, Zap } from "lucide-react";

const INTEGRATION_GROUPS = [
  {
    category: "Business Ops & Communication",
    apps: [
      { name: "Zoho", desc: "CRM & Business Suite", icon: Layers },
      { name: "AWS", desc: "Cloud & Infrastructure", icon: Cloud },
      { name: "3CX", desc: "Unified VoIP Communications", icon: Zap },
      { name: "Microsoft Teams", desc: "Team Collaboration & Calls", icon: Layers },
      { name: "Zoom", desc: "Video Meetings & Webinars", icon: Zap },
    ],
  },
  {
    category: "Productivity & Developer Tools",
    apps: [
      { name: "Figma", desc: "Interface & Experience Design", icon: Layers },
      { name: "GitHub", desc: "Code Repository & Actions CI", icon: Cpu },
      { name: "Slack", desc: "Messaging & Notifications", icon: Zap },
      { name: "Jira", desc: "Issue Tracking & Agile Sprints", icon: Database },
    ],
  },
];

export function IntegrationsShowcase() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  useEffect(() => {
    // Cycle group every 10 seconds linear transition
    const interval = setInterval(() => {
      setActiveGroupIndex((prev) => (prev + 1) % INTEGRATION_GROUPS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentGroup = INTEGRATION_GROUPS[activeGroupIndex];

  return (
    <section className="py-20 bg-bg-main border-y border-border-main transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              CONNECT & STREAMLINE YOUR TOOLS EFFORTLESSLY
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Effortless Integration with Your Favourite Apps
            </h2>
            <p className="text-body1 text-text-alt leading-relaxed">
              Seamlessly connect your preferred tools and platforms. Modulifyr integrates
              effortlessly with leading applications, creating an integrated ecosystem that
              maximizes productivity and simplifies daily tasks.
            </p>
            <div className="pt-2">
              <Link href="/services/automation-layer">
                <button
                  type="button"
                  className="bg-[#2D738D] hover:bg-[#235b70] text-white inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer"
                >
                  Explore Integration Solutions
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Auto-Cycling Stack of Logo Cards (10s cycle) */}
          <div className="lg:col-span-6 bg-bg-alt border-border-main relative overflow-hidden rounded-2xl border p-8 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-main">
              <span className="text-caption1 font-bold text-[#2D738D] uppercase tracking-wider">
                Ecosystem Category
              </span>
              <span className="text-caption2 font-semibold text-text-dim">
                Auto-cycling every 10s
              </span>
            </div>

            <div className="space-y-4 transition-all duration-1000 ease-in-out">
              <h3 className="text-h5 font-bold text-foreground">
                {currentGroup.category}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {currentGroup.apps.map((app, idx) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-bg-main border-border-main flex items-center gap-4 rounded-xl border p-4 shadow-sm"
                    >
                      <div className="h-10 w-10 rounded-lg bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-body2 font-bold text-foreground">
                          {app.name}
                        </span>
                        <span className="text-caption2 text-text-alt">
                          {app.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2 justify-center mt-6">
              {INTEGRATION_GROUPS.map((_, gIdx) => (
                <button
                  key={gIdx}
                  onClick={() => setActiveGroupIndex(gIdx)}
                  aria-label={`Go to group ${gIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeGroupIndex === gIdx ? "w-8 bg-[#2D738D]" : "w-2 bg-text-dim/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

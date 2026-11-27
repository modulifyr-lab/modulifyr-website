"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

type Integration = {
  name: string;
  category: string;
  accent: string;
  code: string;
};

const INTEGRATION_ROWS: { direction: "left" | "right"; duration: number; apps: Integration[] }[] = [
  {
    direction: "left",
    duration: 38,
    apps: [
      { name: "eSewa", category: "Nepal Payments", accent: "#16A34A", code: "eS" },
      { name: "Khalti", category: "Digital Wallet", accent: "#7C3AED", code: "KH" },
      { name: "Fonepay", category: "QR & Bank Pay", accent: "#DC2626", code: "FP" },
      { name: "Google Workspace", category: "Docs & Mail", accent: "#2563EB", code: "GW" },
      { name: "Zoho CRM", category: "Sales & Ops", accent: "#EA580C", code: "ZO" },
      { name: "Click-to-WhatsApp", category: "Email, Telegram & SMS Alerts", accent: "#059669", code: "WA" },
    ],
  },
  {
    direction: "right",
    duration: 44,
    apps: [
      { name: "AWS", category: "Cloud Infra", accent: "#D97706", code: "AW" },
      { name: "PostgreSQL", category: "Relational Data", accent: "#0284C7", code: "PG" },
      { name: "GitHub", category: "CI/CD & Code", accent: "#0F172A", code: "GH" },
      { name: "Slack", category: "Team Ops", accent: "#9333EA", code: "SL" },
      { name: "Jira", category: "Sprint Tracking", accent: "#2563EB", code: "JR" },
      { name: "Figma", category: "UI Systems", accent: "#E11D48", code: "FG" },
    ],
  },
  {
    direction: "left",
    duration: 48,
    apps: [
      { name: "n8n", category: "Workflows", accent: "#EA580C", code: "n8" },
      { name: "Notion", category: "Docs & CMS", accent: "#334155", code: "NO" },
      { name: "Stripe", category: "Global Billing", accent: "#4F46E5", code: "ST" },
      { name: "Resend", category: "Email Alerts", accent: "#0F172A", code: "RS" },
      { name: "Sparrow / Aakash SMS", category: "Nepali SMS Alerts", accent: "#0284C7", code: "SM" },
      { name: "Telegram", category: "Instant Team Alerts", accent: "#2563EB", code: "TG" },
    ],
  },
];

function IntegrationBadge({ app }: { app: Integration }) {
  return (
    <div className="border-border-base bg-surface flex shrink-0 items-center gap-3 rounded-xl border px-5 py-3 shadow-sm">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
        style={{ backgroundColor: app.accent }}
        aria-hidden="true"
      >
        {app.code}
      </span>
      <div className="leading-tight">
        <p className="text-on-background text-sm font-semibold whitespace-nowrap">{app.name}</p>
        <p className="text-on-surface-variant text-[11px] whitespace-nowrap">{app.category}</p>
      </div>
    </div>
  );
}

function MarqueeRow({
  apps,
  direction,
  duration,
}: {
  apps: Integration[];
  direction: "left" | "right";
  duration: number;
}) {
  return (
    <div className="marquee-row group/row flex overflow-hidden">
      <div
        className={`marquee-track flex shrink-0 gap-5 pr-5 ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {apps.map((app, i) => (
          <IntegrationBadge key={`a-${app.name}-${i}`} app={app} />
        ))}
        {apps.map((app, i) => (
          <div key={`b-${app.name}-${i}`} aria-hidden="true" className="contents">
            <IntegrationBadge app={app} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsShowcase() {
  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: copy */}
          <div className="lg:col-span-5">
            <span className="font-sans text-sm font-semibold tracking-wider text-[#FFC24B] uppercase">
              Nepal &amp; Global Ecosystem
            </span>
            <h2 className="text-on-background mt-3 text-3xl leading-[1.15] font-bold sm:text-4xl">
              Seamless Integration with Local &amp; Modern Tools
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-xl text-base leading-relaxed">
              Whether your team runs on eSewa, Khalti, and Fonepay in Nepal or Google Workspace,
              Zoho, Slack, and AWS globally, we wire reliable APIs and webhooks so every record stays
              in sync.
            </p>
            <div className="mt-8">
              <Link href="/services/automation-layer" className="group inline-block">
                <Button variant="outline" className="w-auto! max-w-none! px-6 whitespace-nowrap">
                  Explore Automation Layer
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: scrolling integration rows */}
          <div
            className="integration-rows flex flex-col gap-5 lg:col-span-7"
            role="group"
            aria-label="Supported integrations including eSewa, Khalti, Fonepay, Google Workspace, Zoho CRM, Click-to-WhatsApp, Sparrow SMS, Telegram, AWS, PostgreSQL, GitHub, Slack"
          >
            {INTEGRATION_ROWS.map((row, i) => (
              <MarqueeRow key={i} {...row} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .integration-rows {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 10%,
            #000 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 10%,
            #000 90%,
            transparent 100%
          );
        }
        .marquee-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-left {
          animation-name: marquee-left;
        }
        .marquee-right {
          animation-name: marquee-right;
        }
        .integration-rows:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

import type { PackagePricingKey } from "@/lib/pricing";

export interface Service {
  slug: "strategy-sprint" | "launch-kit" | "automation-layer";
  pkgKey: PackagePricingKey;
  title: string;
  summary: string;
  bestFor: string;
}

export const SERVICES: readonly Service[] = [
  {
    slug: "strategy-sprint",
    pkgKey: "strategySprint",
    title: "Strategy Sprint",
    summary:
      "Avoid costly rework and blown budgets before writing a line of code. We turn messy ideas and operational bottlenecks into a clear, phased plan so your business knows exact costs, timelines, and priorities upfront.",
    bestFor: "Businesses avoiding wasted spend, unclear scope, or risky system rebuilds.",
  },
  {
    slug: "launch-kit",
    pkgKey: "launchKit",
    title: "Launch Kit",
    summary:
      "Win customer trust online and turn local searches into real inquiries—fast. A mobile-ready, high-speed business website with zero server headaches, built to rank well and route leads straight to your team.",
    bestFor: "Growing Nepal SMBs needing instant credibility, faster leads, and zero maintenance bloat.",
  },
  {
    slug: "automation-layer",
    pkgKey: "automationLayer",
    title: "Automation Layer",
    summary:
      "Stop losing hours to manual copy-pasting between forms, spreadsheets, and team chats. We connect the tools you already use into reliable workflows that capture leads, trigger follow-ups, and prevent dropped orders.",
    bestFor: "Teams losing staff hours or customer leads to manual data entry and disconnected tools.",
  },
];

export const NOT_SURE_PROJECT_TYPE = "Not sure yet — help me decide";

/** Options for any form that asks which service the visitor wants (excluding "Other" style choices). */
export const PROJECT_TYPE_OPTIONS: readonly string[] = [
  ...SERVICES.map((s) => s.title),
  NOT_SURE_PROJECT_TYPE,
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getServiceByTitle = (title: string) => SERVICES.find((s) => s.title === title);
export const serviceDetailHref = (s: Service) => `/services/${s.slug}`;
export const serviceRequestHref = (s: Service) => `/request-proposal?pkg=${s.slug}`;

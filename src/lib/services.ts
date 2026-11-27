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
      "Scope complex websites, software systems, and multi-tool automations before writing production code. We lock down architecture, database design, and milestones upfront—and credit 100% of the sprint fee toward your Launch Kit or Automation Layer build.",
    bestFor: "Founders and teams scoping multi-page platforms or cross-system integrations.",
  },
  {
    slug: "launch-kit",
    pkgKey: "launchKit",
    title: "Launch Kit",
    summary:
      "Win customer trust online and convert local & international searches into real inquiries in 3–7 days. Built on our modular Next.js & Tailwind component system—mobile-first, SEO-ready, and wired to booking, WhatsApp, or payment forms.",
    bestFor: "SMBs in Nepal and global teams needing a fast, high-trust website without agency bloat.",
  },
  {
    slug: "automation-layer",
    pkgKey: "automationLayer",
    title: "Automation Layer",
    summary:
      "Stop losing hours to manual copy-pasting between forms, spreadsheets, CRMs, and team chats. We connect your tools via n8n, Zapier, Make, and eSewa/Khalti/Fonepay/Stripe webhooks with retry logic and error alerts.",
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

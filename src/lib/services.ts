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
      "A discovery sprint that turns an unclear idea into a requirements document, architecture blueprint and phased roadmap before any code is written.",
    bestFor: "Unclear requirements, architecture decisions and complex scoping.",
  },
  {
    slug: "launch-kit",
    pkgKey: "launchKit",
    title: "Launch Kit",
    summary:
      "Static websites and landing pages with no backend: fast, secure and built to rank. Priced by page count, animation level and revision rounds.",
    bestFor: "Landing pages, marketing sites and brochure sites.",
  },
  {
    slug: "automation-layer",
    pkgKey: "automationLayer",
    title: "Automation Layer",
    summary:
      "Connect your existing systems and APIs, remove manual data entry and build reliable workflows between platforms. Priced by number of systems and logic complexity.",
    bestFor: "Connecting existing systems, APIs and workflows.",
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

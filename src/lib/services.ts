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
    slug: "launch-kit",
    pkgKey: "launchKit",
    title: "Launch Kit",
    summary:
      "Your customers check Google and WhatsApp before they ever call. We build fast, mobile-first business websites in 3–7 days—wired to WhatsApp, online booking, and payment links so local searches turn into real leads. You own 100% of your code and domain.",
    bestFor: "Businesses in Nepal and global teams needing a fast, high-trust website without delays.",
  },
  {
    slug: "automation-layer",
    pkgKey: "automationLayer",
    title: "Automation Layer",
    summary:
      "Stop losing leads to slow replies or manual copy-pasting. We connect website forms, Facebook/Google lead ads, CRMs, Google Sheets, and eSewa/Khalti/Fonepay/Stripe webhooks via REST APIs, webhooks & scheduled sync—with instant Email, Telegram & Nepali SMS (Sparrow/Aakash) alerts.",
    bestFor: "Teams losing staff hours or customer leads to manual data entry and disconnected tools.",
  },
  {
    slug: "strategy-sprint",
    pkgKey: "strategySprint",
    title: "Strategy Sprint",
    summary:
      "IT & digitalization consulting before you commit to a big build. Start with a Free 20-Minute Checkup; if your team needs deep multi-tool research, we audit your workflow and compare off-the-shelf software vs custom builds—100% credited toward your build if you start within 30 days.",
    bestFor: "Founders and teams deciding between off-the-shelf tools and custom software systems.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Layer | Lead, CRM & eSewa/Khalti/Fonepay Automation | Modulifyr",
  description:
    "Connect website and Facebook/Google lead forms, CRMs, Google Sheets, and eSewa/Khalti/Fonepay/Stripe webhooks via REST APIs & webhooks with Email, Telegram & Nepali SMS alerts.",
  alternates: {
    canonical: "/services/automation-layer",
  },
  openGraph: {
    title: "Automation Layer | Lead, CRM & eSewa/Khalti/Fonepay Automation | Modulifyr",
    description:
      "Eliminate dropped leads and manual copy-pasting with REST APIs, webhooks & scheduled sync plus Email, Telegram & Nepali SMS alerts.",
    url: "/services/automation-layer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Layer | Modulifyr",
    description:
      "Sync lead forms, Email/Telegram/SMS alerts, CRMs, and local or global payment webhooks automatically.",
  },
};

export default function AutomationLayerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

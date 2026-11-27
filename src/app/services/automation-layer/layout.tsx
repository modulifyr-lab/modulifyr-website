import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Layer | CRM, WhatsApp & eSewa/Khalti/Fonepay Automation | Modulifyr",
  description:
    "Connect website forms, WhatsApp Business, CRMs, Google Sheets, and eSewa/Khalti/Fonepay/Stripe webhooks via retry-safe n8n automation.",
  alternates: {
    canonical: "/services/automation-layer",
  },
  openGraph: {
    title: "Automation Layer | CRM, WhatsApp & eSewa/Khalti/Fonepay Automation | Modulifyr",
    description:
      "Eliminate manual copy-pasting with retry-safe n8n, Zapier, Make, and custom webhook workflows.",
    url: "/services/automation-layer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Layer | Modulifyr",
    description:
      "Sync forms, WhatsApp alerts, CRMs, and local or global payment webhooks automatically.",
  },
};

export default function AutomationLayerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

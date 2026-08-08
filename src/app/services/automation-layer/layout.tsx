import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Layer — Integrations & Workflow Automation | Modulifyr",
  description:
    "Connect your systems, eliminate manual data entry, and build reliable flows between platforms. Three tiers based on complexity.",
  alternates: {
    canonical: "/services/automation-layer",
  },
};

export default function AutomationLayerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

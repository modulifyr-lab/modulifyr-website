import { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Technical Capabilities & Architecture | Modulifyr",
  description:
    "The TypeScript, Next.js, Tailwind CSS, Hono, PostgreSQL, and n8n architecture behind Modulifyr's Strategy Sprint, Launch Kit, and Automation Layer packages.",
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    title: "Technical Capabilities & Architecture | Modulifyr",
    description:
      "TypeScript-first architecture powering Launch Kit websites, Strategy Sprint blueprints, and n8n Automation Layers.",
    url: "/capabilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Capabilities & Architecture | Modulifyr",
    description:
      "Explore Modulifyr's standardized TypeScript, Next.js, PostgreSQL, and n8n stack.",
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}

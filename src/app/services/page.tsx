import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services & Pricing | Strategy Sprint, Launch Kit & Automation Layer | Modulifyr",
  description:
    "Transparent fixed-scope pricing for Strategy Sprints, fast Launch Kit websites, and CRM/eSewa/Khalti/Fonepay Automation Layers for Nepal SMBs and global teams.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Pricing | Strategy Sprint, Launch Kit & Automation Layer | Modulifyr",
    description:
      "Compare fixed-scope pricing for Strategy Sprint, Launch Kit websites, and Automation Layer workflows in NPR and USD.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Pricing | Modulifyr",
    description:
      "Transparent packages for technical scoping, mobile-first Next.js websites, and business workflow automation.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

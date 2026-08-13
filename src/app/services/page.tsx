import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Modulifyr Nepal",
  description:
    "Modulifyr offers Discovery Sprints, Web App MVPs, Internal Tools, Integrations, Modernization, Infrastructure Setup, and dedicated Engineering Retainers for businesses in Nepal and globally.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

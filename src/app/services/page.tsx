import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services & Pricing | Launch Kit, Automation Layer & Custom MVPs | Modulifyr",
  description:
    "Three transparent packages—Launch Kit websites, Automation Layer workflows, and Strategy Sprints—plus focused custom web apps & MVPs (TypeScript, Next.js, Hono, PostgreSQL).",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

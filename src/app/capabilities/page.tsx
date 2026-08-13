import { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Technical Capabilities & Architecture | Modulifyr",
  description:
    "Modulifyr's company-wide technical standard: TypeScript-first, React/Next.js frontend, NestJS backend, PostgreSQL, Prisma, and cloud-native infrastructure.",
  alternates: {
    canonical: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}

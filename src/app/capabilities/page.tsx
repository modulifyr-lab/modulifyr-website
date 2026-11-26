import { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Technical Capabilities & Architecture | Modulifyr",
  description:
    "Modulifyr's technical stack: TypeScript-first Next.js and Tailwind CSS frontends, Hono APIs, PostgreSQL databases, and n8n workflow automation.",
  alternates: {
    canonical: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}

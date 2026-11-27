import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Case Studies & Technical Builds | Modulifyr",
  description:
    "Explore Modulifyr's technical builds and live automation demos—including Educom and retry-safe n8n, WhatsApp Business, and eSewa/Khalti workflows.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies & Technical Builds | Modulifyr",
    description:
      "Working Next.js builds and n8n, WhatsApp, and eSewa/Khalti automation demos engineered by Modulifyr.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Technical Builds | Modulifyr",
    description:
      "Explore Launch Kit websites, Educom architecture, and live Nepal SMB automation pipelines.",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}

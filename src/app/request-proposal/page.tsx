import { Metadata } from "next";
import { RFPForm } from "@/components/forms/RFPForm";

export const metadata: Metadata = {
  title: "Request a Proposal | Strategy Sprint, Launch Kit & Automation | Modulifyr",
  description:
    "Submit your project scope to receive a fixed-fee proposal, delivery timeline, and NPR/USD estimate from Modulifyr within 1 business day.",
  alternates: {
    canonical: "/request-proposal",
  },
  openGraph: {
    title: "Request a Proposal | Strategy Sprint, Launch Kit & Automation | Modulifyr",
    description:
      "Request a structured proposal and NPR/USD estimate for Strategy Sprint, Launch Kit, or Automation Layer.",
    url: "/request-proposal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Proposal | Modulifyr",
    description:
      "Get a fixed-scope proposal for your Strategy Sprint, Launch Kit website, or Automation Layer.",
  },
};

// RegionProvider is NOT needed here — layout.tsx already wraps the full app.
// Adding it again created a nested context, meaning the form read from a fresh
// (empty) provider instead of the user's saved choice from the modal.
export default function RFPPage() {
  return <RFPForm />;
}

import { Metadata } from "next";
import { RFPForm } from "@/components/forms/RFPForm";

export const metadata: Metadata = {
    title: "Request a Technical Proposal",
    description: "Submit your project requirements to receive a structured technical proposal, architecture plan, and cost estimate from Modulifyr.",
};

// RegionProvider is NOT needed here — layout.tsx already wraps the full app.
// Adding it again created a nested context, meaning the form read from a fresh
// (empty) provider instead of the user's saved choice from the modal.
export default function RFPPage() {
    return <RFPForm />;
}
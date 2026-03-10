import { Metadata } from "next";
import { RegionProvider } from "@/components/RegionProvider";
import { RFPForm } from "@/components/forms/RFPForm";

export const metadata: Metadata = {
    title: "Request a Technical Proposal",
    description: "Submit your project requirements to receive a structured technical proposal, architecture plan, and cost estimate from Modulifyr.",
};

export default function RFPPage() {
    return (
        <RegionProvider>
            <RFPForm />
        </RegionProvider>
    );
}

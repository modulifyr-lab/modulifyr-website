import { Metadata } from "next";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

export const metadata: Metadata = {
    title: "Career Openings | Modulifyr",
    description: "Join the Modulifyr engineering team. Open positions for senior engineers, SRE specialists, and system design interns.",
};

export default function CareersPage() {
    return <JobApplicationForm />;
}
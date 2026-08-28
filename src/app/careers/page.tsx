import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Modulifyr — Volunteer & Collaborator Openings",
  description:
    "Join Modulifyr as a volunteer or collaborator. We're building a B2B software consultancy from the ground up. No salaries yet — real work, real ownership.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}

import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Modulifyr — Volunteer & Collaborator Openings",
  description:
    "Join Modulifyr as a volunteer or collaborator. We are building three divisions from the ground up: a B2B software consultancy, a Unity game studio (Onyxlabs), and a B2C software storefront (Modullex). No salaries yet — real work, real ownership.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}

import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Selected Case Studies & Portfolio | Modulifyr",
  description:
    "Case studies from Modulifyr's engineering work — modular ERP systems, custom platforms, and legacy modernisation projects.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}

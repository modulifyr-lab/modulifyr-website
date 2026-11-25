import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Selected Case Studies & Portfolio | Modulifyr",
  description:
    "Selected internal builds and engineering standards from Modulifyr — modular architecture, Launch Kit delivery, and workflow automation.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}

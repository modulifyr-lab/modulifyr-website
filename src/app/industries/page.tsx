import { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | Modulifyr",
  description:
    "Modulifyr builds modular software systems for Education, Commerce, Healthcare, IT, Retail, and Professional Services.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}

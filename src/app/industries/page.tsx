import { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | Business Websites & Automation | Modulifyr",
  description:
    "How Nepal SMBs and international teams in Education, Commerce, Healthcare, IT, Retail, and Professional Services apply Strategy Sprint, Launch Kit, and Automation Layer packages.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Business Websites & Automation | Modulifyr",
    description:
      "Industry-specific Strategy Sprint, Launch Kit website, and Automation Layer workflows for teams in Nepal and worldwide.",
    url: "/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Modulifyr",
    description:
      "Websites, technical scoping, and workflow automation across Education, Healthcare, Commerce, Retail, IT, and Services.",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}

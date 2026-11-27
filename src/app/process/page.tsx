import { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Engineering Process & Engagement | Modulifyr",
  description:
    "How Modulifyr delivers Strategy Sprints, Launch Kit websites, and Automation Layers—transparent sprints, QA checks, and 100% client ownership.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Engineering Process & Engagement | Modulifyr",
    description:
      "Transparent discovery-to-launch delivery process for Strategy Sprint, Launch Kit, and Automation Layer builds.",
    url: "/process",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Process & Engagement | Modulifyr",
    description:
      "Explore Modulifyr's systematic engineering workflow from Strategy Sprint to production handoff.",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}

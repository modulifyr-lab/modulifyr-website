import { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Engineering Process & Engagement",
  description:
    "Learn about our systematic, engineering-first approach to delivering modular systems, from discovery to long-term support.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Sprint | Technical Scoping & Software Architecture | Modulifyr",
  description:
    "A fixed-fee discovery sprint to map your requirements, database architecture, and delivery roadmap before writing code—100% credited toward your build.",
  alternates: {
    canonical: "/services/strategy-sprint",
  },
  openGraph: {
    title: "Strategy Sprint | Technical Scoping & Software Architecture | Modulifyr",
    description:
      "Lock down scope, system architecture, and delivery milestones in 3–10 days before committing to full engineering.",
    url: "/services/strategy-sprint",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy Sprint | Modulifyr",
    description:
      "Fixed-scope software discovery and architecture blueprint—100% credited toward your build.",
  },
};

export default function StrategySprintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

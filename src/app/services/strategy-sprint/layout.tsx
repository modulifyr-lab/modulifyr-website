import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Sprint — Custom Software Discovery & Scoping | Modulifyr",
  description:
    "A discovery sprint to define your software requirements, architecture blueprint, and phased roadmap before you write any code.",
  alternates: {
    canonical: "/services/strategy-sprint",
  },
};

export default function StrategySprintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

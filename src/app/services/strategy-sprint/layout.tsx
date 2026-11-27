import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Sprint | IT & Digitalization Consulting & Tool Audit | Modulifyr",
  description:
    "Start with a Free 20-Min Checkup. Deep IT & digitalization consulting and tool audits from NPR 20,000–1,20,000 ($160–$1,120)—100% credited if you build within 30 days.",
  alternates: {
    canonical: "/services/strategy-sprint",
  },
  openGraph: {
    title: "Strategy Sprint | IT & Digitalization Consulting & Tool Audit | Modulifyr",
    description:
      "Compare off-the-shelf software vs custom systems with a clear rollout plan—100% credited toward your build within 30 days.",
    url: "/services/strategy-sprint",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy Sprint | Digitalization Consulting | Modulifyr",
    description:
      "Start with a Free 20-Min Checkup. Deep consulting & tool audits 100% credited within 30 days.",
  },
};

export default function StrategySprintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

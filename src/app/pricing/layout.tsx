import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Packages, Transparent Prices | Modulifyr Pricing",
  description:
    "Explore our eight clearly defined packages covering everything from discovery sprints to full engineering retainers. Localized pricing and transparent terms.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

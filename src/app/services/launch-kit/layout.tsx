import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Kit — Modular Next.js Websites & Landing Pages | Modulifyr",
  description:
    "Fast, SEO-ready websites built on our modular Next.js and Tailwind component system. Clear fixed fees across three delivery tiers.",
  alternates: {
    canonical: "/services/launch-kit",
  },
};

export default function LaunchKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

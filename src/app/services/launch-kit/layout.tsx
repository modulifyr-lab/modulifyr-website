import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Kit — Custom Static Websites & Landing Pages | Modulifyr",
  description:
    "Static websites with no backend — fast, secure, and built to rank. Priced by scope with clear, fixed fees and multiple tiers.",
  alternates: {
    canonical: "/services/launch-kit",
  },
};

export default function LaunchKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

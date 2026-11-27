import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Kit | Fast Mobile-First Business Websites & Local SEO | Modulifyr",
  description:
    "Launch a fast, mobile-first Next.js business website in 3–7 days with local SEO, WhatsApp/booking integration, and transparent fixed-fee pricing.",
  alternates: {
    canonical: "/services/launch-kit",
  },
  openGraph: {
    title: "Launch Kit | Fast Mobile-First Business Websites & Local SEO | Modulifyr",
    description:
      "Convert searches into inquiries with fast Next.js & Tailwind business websites built in 3–7 days.",
    url: "/services/launch-kit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Kit Websites | Modulifyr",
    description:
      "Mobile-first, SEO-ready Next.js websites with booking, WhatsApp, and payment links.",
  },
};

export default function LaunchKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

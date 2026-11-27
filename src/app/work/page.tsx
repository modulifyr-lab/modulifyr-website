import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Working Demos & Internal Builds | Modulifyr",
  description:
    "Explore Modulifyr's internal working demos—including Educom and retry-safe REST API, eSewa/Khalti webhook, Email, Telegram & Nepali SMS workflows.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Working Demos & Internal Builds | Modulifyr",
    description:
      "Internal working Next.js builds and eSewa/Khalti lead automation demos engineered by Modulifyr.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Working Demos & Internal Builds | Modulifyr",
    description:
      "Explore Launch Kit websites, Educom architecture, and working Nepal SMB lead automation pipelines.",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}

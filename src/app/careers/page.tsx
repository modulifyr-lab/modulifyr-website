import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Engineering & Growth Contract Roles | Modulifyr",
  description:
    "Join Modulifyr on contract. Browse open engineering and growth roles and apply—contract roles earn 20% of revenue generated on your project or deal.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Engineering & Growth Contract Roles | Modulifyr",
    description:
      "Explore contract engineering and business development roles at Modulifyr in Nepal and remotely.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Modulifyr",
    description:
      "Join Modulifyr's contract team building websites, automation layers, and software blueprints.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}

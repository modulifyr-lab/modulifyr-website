import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Modulifyr | Software & Automation Studio in Birtamode, Nepal",
  description:
    "Modulifyr Enterprise Pvt. Ltd. is a founder-led engineering studio in Gauri Tole, Birtamode-1, Jhapa, Nepal delivering Strategy Sprints, Launch Kits, and Automation Layers worldwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Modulifyr | Software & Automation Studio in Birtamode, Nepal",
    description:
      "Founded by Rijan Mainali in Birtamode, Jhapa, Nepal—delivering Strategy Sprint, Launch Kit, and Automation Layer packages.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Modulifyr | Birtamode, Nepal",
    description:
      "Meet the founder-led engineering team delivering Strategy Sprints, Launch Kits, and Automation Layers.",
  },
};

// ─── Schema.org — Person page-level override ──────────────────────────────────
const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://modulifyr.com/#founder",
  name: "Rijan Mainali",
  jobTitle: "Founder, Architecture & Engineering",
  image: "https://modulifyr.com/rijan-mainali.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Modulifyr",
    url: "https://modulifyr.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gauri Tole, Birtamode-1",
    addressLocality: "Birtamode",
    addressRegion: "Jhapa",
    addressCountry: "NP",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page-level founder schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema).replace(/</g, "\\u003c") }}
      />
      <AboutClient />
    </>
  );
}

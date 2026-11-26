import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Modulifyr | Rijan Mainali — Founder, Birtamode Nepal",
  description:
    "Modulifyr is a founder-led engineering and growth studio based in Gauri Tole, Birtamode-1, Jhapa, Nepal, delivering Launch Kits, Automation Layers, and Custom Web Apps.",
  alternates: {
    canonical: "/about",
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

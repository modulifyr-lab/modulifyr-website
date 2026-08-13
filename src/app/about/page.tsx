import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Modulifyr | Rijan Mainali — Founder, Birtamode Nepal",
  description:
    "Modulifyr is a software development company founded by Rijan Mainali in Birtamode, Nepal. We build modular, scalable systems for SMBs in education, healthcare, retail, and commerce.",
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
  jobTitle: "Founder & CEO",
  image: "https://modulifyr.com/rijan-mainali.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Modulifyr",
    url: "https://modulifyr.com",
  },
  address: {
    "@type": "PostalAddress",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <AboutClient />
    </>
  );
}

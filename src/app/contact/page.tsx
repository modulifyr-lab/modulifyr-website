import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Modulifyr | Software & Automation Inquiries — Birtamode, Nepal",
  description:
    "Contact Modulifyr Enterprise Pvt. Ltd. at Gauri Tole, Birtamode-1, Jhapa, Nepal (+977 9764478571, contact@modulifyr.com) for Strategy Sprints, Launch Kits, and Automation Layers.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Modulifyr | Software & Automation Inquiries — Birtamode, Nepal",
    description:
      "Speak directly with Modulifyr in Birtamode, Jhapa, Nepal or collaborate globally. Response within 1 business day.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Modulifyr | Birtamode, Nepal",
    description:
      "Reach Modulifyr at +977 9764478571 or contact@modulifyr.com. Response within 1 business day.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

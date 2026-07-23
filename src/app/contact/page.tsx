import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Modulifyr | Engineering Inquiries & Project Discussions",
  description:
    "Reach out to Modulifyr for engineering inquiries, project discussions, or to visit our office at JXXQ+4G, Birtamode, Jhapa, Nepal. We respond within 1 business day.",
};

export default function ContactPage() {
  return <ContactForm />;
}

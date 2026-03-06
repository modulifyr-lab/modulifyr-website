import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contact & Engineering Support",
    description: "Reach out to Modulifyr for engineering inquiries, technical support, or to visit our Kathmandu Engineering Center.",
};

export default function ContactPage() {
    return <ContactForm />;
}

import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Custom Software Services & Pricing | Modulifyr Nepal",
  description:
    "Three fixed-scope packages with published price ranges: Strategy Sprint, Launch Kit and Automation Layer. Built from Birtamode, Nepal for clients in Nepal and worldwide.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Modulifyr: Contract Roles",
  description:
    "Join Modulifyr on contract. Open roles: BDR / Growth Manager, Full-Stack Engineer and Brand & Content Lead. Paid 20% of the revenue generated on your project or deal.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}

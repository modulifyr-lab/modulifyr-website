import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  ShoppingCart,
  Heart,
  Cpu,
  Store,
  Briefcase,
  ArrowRight,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Modulifyr",
  description:
    "Modulifyr builds modular software systems for Education, Commerce, Healthcare, IT, Retail, and Professional Services.",
  alternates: {
    canonical: "/industries",
  },
};

const industries = [
  {
    icon: GraduationCap,
    name: "Education",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    tagline: "Scalable platforms for learning institutions",
    desc: "From student information systems to e-learning platforms, we build modular infrastructure that adapts as institutions grow. Our systems support enrollment management, curriculum delivery, assessment, and reporting.",
    useCases: [
      "Student Information Systems (SIS)",
      "Learning Management Systems (LMS)",
      "Admissions & enrollment portals",
      "Assessment & grading platforms",
      "Library and resource management",
    ],
    clients: "Universities, schools, training organizations",
  },
  {
    icon: ShoppingCart,
    name: "Commerce",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    tagline: "End-to-end commerce infrastructure",
    desc: "We build commerce platforms that go beyond basic storefronts — from B2B ordering systems to custom marketplace architectures with integrated logistics, pricing engines, and analytics.",
    useCases: [
      "Custom B2B & B2C platforms",
      "Multi-vendor marketplace systems",
      "Order management & fulfillment",
      "Dynamic pricing engines",
      "Customer data platforms",
    ],
    clients: "Distributors, wholesalers, online retailers",
  },
  {
    icon: Heart,
    name: "Healthcare",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    tagline: "Secure systems for clinical operations",
    desc: "We design healthcare software with security and compliance at the foundation. Patient management, scheduling, billing, and clinical workflow systems built to handle sensitive data with the utmost care.",
    useCases: [
      "Patient Management Systems",
      "Appointment & scheduling platforms",
      "Medical billing & claims",
      "Clinical workflow tools",
      "Telemedicine infrastructure",
    ],
    clients: "Clinics, hospitals, health startups",
  },
  {
    icon: Cpu,
    name: "IT & Technology",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    tagline: "Internal tooling and developer platforms",
    desc: "For technology companies that need custom internal infrastructure — developer portals, internal dashboards, SaaS module systems, and DevOps tooling built to engineering-grade standards.",
    useCases: [
      "Internal developer portals",
      "SaaS feature module systems",
      "Admin & operations dashboards",
      "API gateway & orchestration",
      "Data pipeline tooling",
    ],
    clients: "SaaS companies, tech teams, MSPs",
  },
  {
    icon: Store,
    name: "Retail",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    tagline: "Modern retail operations platforms",
    desc: "Replace outdated POS and inventory systems with modular retail infrastructure. We build point-of-sale, stock management, customer loyalty, and supplier integration systems for modern retail environments.",
    useCases: [
      "Point-of-Sale (POS) systems",
      "Inventory & stock management",
      "Customer loyalty platforms",
      "Supplier integration portals",
      "Omnichannel order routing",
    ],
    clients: "Retailers, franchise networks, supermarkets",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    tagline: "Operational platforms for service businesses",
    desc: "Law firms, consulting agencies, accounting practices, and other professional service organizations benefit from custom CRM, project tracking, billing, and client portal systems tailored to their workflows.",
    useCases: [
      "Client relationship management (CRM)",
      "Project & matter management",
      "Time tracking & billing",
      "Client portals & document sharing",
      "Compliance & audit tools",
    ],
    clients: "Law firms, agencies, consultancies",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-orange mb-4 block text-xs font-bold tracking-widest uppercase">
              Sector Coverage
            </span>
            <h1 className="font-heading mb-8 text-4xl font-bold md:text-6xl">
              Modular Architecture <span className="text-brand-orange">Across Industries</span>
            </h1>
            <p className="text-text-muted max-w-2xl text-xl leading-relaxed">
              Our modular approach adapts to the specific operational requirements of each sector.
              The architecture patterns are the same — the implementation is entirely tailored to
              your industry's workflows, compliance needs, and data structures.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-bg-light py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {industries.map((industry, idx) => (
              <Card key={idx} className="overflow-hidden p-0">
                <div className="p-8 md:p-10">
                  <div className="mb-6 flex items-start gap-5">
                    <div
                      className={`h-14 w-14 ${industry.bg} flex shrink-0 items-center justify-center rounded-2xl`}
                    >
                      <industry.icon className={`h-7 w-7 ${industry.color}`} />
                    </div>
                    <div>
                      <h2 className="font-heading text-brand-navy text-2xl font-bold">
                        {industry.name}
                      </h2>
                      <p className="text-text-muted mt-1 text-xs font-semibold tracking-widest uppercase">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                    {industry.desc}
                  </p>
                  <div className="mb-6">
                    <p className="text-text-muted mb-3 text-xs font-bold tracking-widest uppercase">
                      Common Use Cases
                    </p>
                    <ul className="space-y-2">
                      {industry.useCases.map((uc, i) => (
                        <li key={i} className="text-text-secondary flex items-center gap-2 text-sm">
                          <Zap className="text-brand-gold h-3 w-3 shrink-0" /> {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-border-base flex items-center justify-between border-t pt-4">
                    <span className="text-text-muted text-xs italic">{industry.clients}</span>
                    <Link href="/request-proposal">
                      <Button size="sm" variant="outline" className="group text-xs">
                        Start a Project{" "}
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-brand-navy mb-6 text-3xl font-bold">
              Don't see your industry?
            </h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Our modular architecture approach is industry-agnostic. If your organization has
              operational workflows that need a custom system, we can build it — regardless of
              sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request-proposal">
                <Button size="lg">Request a Proposal</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Speak with an Engineer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

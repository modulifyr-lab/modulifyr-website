import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Modulifyr Nepal",
  description:
    "Modulifyr offers custom software development, system architecture, integrations, legacy modernization, cloud infrastructure, data engineering, and dedicated product teams for businesses in Nepal and globally.",
};
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  Code2,
  Layers,
  Settings,
  RefreshCw,
  Cloud,
  Database,
  Users,
  Zap,
  Download,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Custom Software Development",
    desc: "We design and build tailored platforms from the ground up, ensuring every feature is aligned with your operational workflows and business logic.",
    deliverables: [
      "Full-stack web applications",
      "Enterprise dashboards",
      "Internal operational tools",
    ],
    time: "3-9 months",
    size: "Mid to Enterprise",
  },
  {
    icon: Layers,
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
    title: "System Architecture & Consulting",
    desc: "Expert guidance on designing modular, scalable, and resilient systems that can evolve without the need for complete rebuilds.",
    deliverables: ["Architecture Blueprints", "Scalability Roadmap", "Tech Stack Audit"],
    time: "4-8 weeks",
    size: "Scale-ups & Enterprise",
  },
  {
    icon: Settings,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Integrations & Automation",
    desc: "Unifying your digital ecosystem by connecting APIs, legacy systems, and third-party platforms into seamless, automated workflows.",
    deliverables: ["API development", "Workflow automation", "Data synchronization"],
    time: "2-5 months",
    size: "Operational Teams",
  },
  {
    icon: RefreshCw,
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    title: "Modernization & Refactoring",
    desc: "Phased replacement of rigid legacy systems with modern, modular infrastructure while maintaining operational continuity.",
    deliverables: ["Legacy-to-Cloud migration", "Modular refactoring", "Performance optimization"],
    time: "6-12 months",
    size: "Organizations with Legacy Debt",
  },
  {
    icon: Cloud,
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
    title: "Infrastructure & SRE",
    desc: "Designing and managing secure, high-availability cloud environments optimized for performance and cost-efficiency.",
    deliverables: ["Cloud setup (AWS/Azure/GCP)", "CI/CD pipelines", "Security hardening"],
    time: "Ongoing / Project-based",
    size: "Cloud-native Businesses",
  },
  {
    icon: Database,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Data Architecture & Analytics",
    desc: "Structuring complex data sets into scalable stores and building the pipelines to turn data into actionable business intelligence.",
    deliverables: ["Database design", "ETL pipelines", "Business Intelligence dashboards"],
    time: "3-6 months",
    size: "Data-driven Organizations",
  },
  {
    // New: Dedicated Product Team — named offering based on market gap analysis
    icon: Users,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Dedicated Product Team",
    desc: "2–3 engineers embedded in your product long-term on a monthly retainer. Your team's engineering capacity, without the overhead of local hiring. No re-scoping, no handoffs, no ramp-up cost.",
    deliverables: [
      "Fixed monthly engineering capacity",
      "Codebase ownership continuity",
      "Monthly retainer — no SOW per feature",
    ],
    time: "Monthly retainer · 3-month min",
    size: "Startups & Scale-ups",
    badge: "Market Gap Offering",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl">
              Services Built Around <span className="text-brand-orange">Your Operations</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              We don't sell off-the-shelf packages. We partner with you to understand exactly how
              your organization works, then architect and build the custom systems you need to
              scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className={`hover:border-t-brand-orange relative flex h-full flex-col border-t-4 border-t-transparent ${(service as { badge?: string }).badge ? "ring-brand-orange/30 ring-2" : ""}`}
              >
                {(service as { badge?: string }).badge && (
                  <div className="bg-brand-orange absolute top-0 left-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    {(service as { badge?: string }).badge}
                  </div>
                )}
                <div
                  className={`h-14 w-14 ${service.bg} mb-6 flex items-center justify-center rounded-xl`}
                >
                  <service.icon className={`${service.color} h-7 w-7`} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mb-6 flex-grow">{service.desc}</CardDescription>
                <div className="border-border-base space-y-4 border-t pt-6">
                  <div>
                    <span className="text-text-muted mb-2 block text-xs font-bold tracking-wider uppercase">
                      Key Deliverables
                    </span>
                    <ul className="grid grid-cols-1 gap-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-2 text-sm">
                          <Zap className="text-brand-gold mt-1 h-3 w-3 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-text-muted">Timeline: {service.time}</span>
                    <span className="bg-bg-secondary text-brand-navy rounded px-2 py-1">
                      {service.size}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="border-border-base flex flex-col items-center justify-between gap-12 rounded-3xl border bg-white p-8 shadow-xl md:flex-row md:p-16">
            <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
              <h2 className="font-heading text-brand-navy text-3xl font-bold md:text-4xl">
                Deep technical expertise tailored to your operational needs.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Download our detailed capability deck to learn more about our engineering standards,
                tech stack, and how we handle complex requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <a href="/contact?doc=capability-deck">
                  <Button className="group">
                    Request Capability Deck{" "}
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </a>
                <Link href="/request-proposal">
                  <Button variant="outline">Request Proposal</Button>
                </Link>
              </div>
            </div>
            <div className="grid w-full shrink-0 grid-cols-2 gap-4 md:w-auto">
              {[
                { label: "Uptime SLA", val: "99.9%" },
                { label: "Cloud-Native", val: "Focused" },
                { label: "Security", val: "Audited" },
                { label: "Scale", val: "Ready" },
              ].map((stat, i) => (
                <div key={i} className="bg-bg-secondary rounded-2xl p-6 text-center">
                  <div className="text-brand-orange font-heading mb-1 text-xl font-bold">
                    {stat.val}
                  </div>
                  <div className="text-text-muted text-xs font-bold tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container-custom text-center">
          <blockquote className="text-brand-navy font-heading mx-auto max-w-4xl text-2xl leading-relaxed md:text-3xl">
            "We were six months into a healthcare platform build when our compliance requirements
            shifted completely. Because the system was modular from day one, we swapped out the
            affected modules without touching anything else. No rebuild, no deadline crisis, no
            emergency budget."
          </blockquote>
          <p className="text-text-secondary mt-8 text-sm font-bold tracking-widest uppercase">
            — CTO, Kathmandu-based Health Startup (identity withheld under NDA)
          </p>
          <p className="text-text-muted mt-2 text-xs italic">
            Reference available on request after NDA signing
          </p>
        </div>
      </section>
    </div>
  );
}

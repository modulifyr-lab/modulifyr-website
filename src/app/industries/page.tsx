import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GraduationCap, ShoppingCart, Heart, Cpu, Store, Briefcase, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Industries We Serve | Modulifyr",
    description: "Modulifyr builds modular software systems for Education, Commerce, Healthcare, IT, Retail, and Professional Services.",
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
        <div className="flex flex-col w-full">
            {/* Hero */}
            <section className="bg-brand-navy text-white py-24">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Sector Coverage</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                            Modular Architecture <span className="text-brand-orange">Across Industries</span>
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                            Our modular approach adapts to the specific operational requirements of each sector. The architecture patterns are the same — the implementation is entirely tailored to your industry's workflows, compliance needs, and data structures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {industries.map((industry, idx) => (
                            <Card key={idx} className="p-0 overflow-hidden">
                                <div className="p-8 md:p-10">
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className={`w-14 h-14 ${industry.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                                            <industry.icon className={`w-7 h-7 ${industry.color}`} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-heading font-bold text-brand-navy">{industry.name}</h2>
                                            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mt-1">{industry.tagline}</p>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mb-6 text-sm">{industry.desc}</p>
                                    <div className="mb-6">
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Common Use Cases</p>
                                        <ul className="space-y-2">
                                            {industry.useCases.map((uc, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                                    <Zap className="w-3 h-3 text-brand-gold shrink-0" /> {uc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-border-base">
                                        <span className="text-xs text-text-muted italic">{industry.clients}</span>
                                        <Link href="/request-proposal">
                                            <Button size="sm" variant="outline" className="text-xs group">
                                                Start a Project <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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
            <section className="py-20 bg-bg-secondary">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Don't see your industry?</h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Our modular architecture approach is industry-agnostic. If your organization has operational workflows that need a custom system, we can build it — regardless of sector.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/request-proposal">
                                <Button size="lg">Request a Proposal</Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline">Speak with an Engineer</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
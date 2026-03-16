import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Capabilities & Architecture",
  description:
    "A deep dive into our engineering standards, tech stack, and modular architecture patterns used for building scalable software systems.",
};
import { Button } from "@/components/ui/Button";
import {
  Layers,
  ShieldCheck,
  Cloud,
  Database,
  Server,
  Code2,
  Lock,
  FileCode,
  Download,
  Layout,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend Architecture",
    items: ["React", "Next.js", "SvelteKit", "TailwindCSS", "Framer Motion", "TypeScript"],
    icon: Layout,
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Python (FastAPI)", "Go", "BFF Patterns", "Microservices", "REST/GraphQL"],
    icon: Server,
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma", "Vector Databases"],
    icon: Database,
  },
  {
    category: "Infrastructure & DevOps",
    items: ["Vercel", "AWS / GCP", "Docker", "GitHub Actions", "Terraform", "Cloudflare"],
    icon: Cloud,
  },
];

const architecturePatterns = [
  {
    title: "Modular Monolith",
    desc: "A single application structured as independent, pluggable modules for simplified maintenance and deployment.",
  },
  {
    title: "Serverless Edge",
    desc: "Leveraging global edge networks for low-latency delivery and auto-scaling infrastructure.",
  },
  {
    title: "Event-Driven System",
    desc: "Asynchronous communication for robust, non-blocking operational workflows.",
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl">
              Engineering <span className="text-brand-orange">Depth</span> Over Marketing
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              We build systems that are architected for the long term. Our technical decisions are
              driven by performance, maintainability, and security — never by hype.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="mb-16 flex flex-col gap-4">
            <h2 className="font-heading text-brand-navy text-3xl font-bold md:text-4xl">
              The Modulifyr Tech Stack
            </h2>
            <p className="text-text-secondary text-lg">
              A curated selection of modern, battle-tested technologies used to build modular
              systems.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary border-border-base flex flex-col gap-6 rounded-3xl border p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <tech.icon className="text-brand-orange h-6 w-6" />
                </div>
                <h3 className="font-heading text-brand-navy text-xl font-bold">{tech.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="border-border-base text-text-secondary rounded-full border bg-white px-3 py-1 text-xs font-semibold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-brand-navy text-3xl font-bold md:text-5xl">
                Modular Architecture <span className="text-brand-orange">Patterns</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                We specialize in designing software that evolves. Our architectures ensure that
                different parts of your system can be updated or replaced independently.
              </p>
              <div className="space-y-6">
                {architecturePatterns.map((pattern, idx) => (
                  <div
                    key={idx}
                    className="border-border-base flex items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm"
                  >
                    <div className="bg-brand-teal/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <Layers className="text-brand-teal h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-brand-navy mb-1 font-bold">{pattern.title}</h4>
                      <p className="text-text-secondary text-sm">{pattern.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              <div className="bg-brand-navy absolute inset-0 flex flex-col gap-8 overflow-hidden rounded-[3rem] p-12">
                <div className="mb-4 flex items-center justify-between">
                  <div className="border-brand-orange h-8 w-8 rounded-full border-2" />
                  <div className="h-1 w-24 rounded-full bg-white/20" />
                  <div className="bg-brand-gold h-8 w-8 rounded-lg" />
                </div>
                <div className="grid flex-grow grid-cols-2 gap-4">
                  <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Code2 className="text-brand-orange h-8 w-8" />
                  </div>
                  <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Database className="text-brand-teal h-8 w-8" />
                  </div>
                  <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="space-y-2">
                      <div className="h-2 w-full rounded-full bg-white/10" />
                      <div className="h-2 w-3/4 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="bg-brand-orange/10 absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <ShieldCheck className="text-brand-teal h-12 w-12" />
              <h3 className="font-heading text-brand-navy text-2xl font-bold">
                Security-First Culture
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We implement security at every layer — from encrypted data storage and secure API
                gateways to regular dependency audits and vulnerability scanning.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <Lock className="text-brand-orange h-12 w-12" />
              <h3 className="font-heading text-brand-navy text-2xl font-bold">Data Privacy</h3>
              <p className="text-text-secondary leading-relaxed">
                GDPR-aligned data processing. We design systems that handle PII with the highest
                standards of confidentiality and compliance.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <FileCode className="text-brand-gold h-12 w-12" />
              <h3 className="font-heading text-brand-navy text-2xl font-bold">SLA & Reliability</h3>
              <p className="text-text-secondary leading-relaxed">
                We offer tiered support agreements and uptime SLAs (up to 99.9%) for critical
                systems, ensuring your infrastructure is always operational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FIXED: "Download Technical PDF" → actual PDF download */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="container-custom flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-3xl font-bold">Request our Technical Briefing</h2>
            <p className="text-text-muted">
              A deep dive into our engineering standards and internal SOPs.
            </p>
          </div>
          <a href="/downloads/modulifyr-technical-briefing.pdf" download>
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 group text-white">
              Download Technical PDF{" "}
              <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

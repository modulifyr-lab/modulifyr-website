import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileBox, BookOpen, Terminal, Layers, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Resources & Whitepapers",
  description:
    "Explore Modulifyr's collection of engineering guides, modular architecture whitepapers, and technical case studies.",
  alternates: {
    canonical: "/resources",
  },
};

export const resources = [
  {
    slug: "modular-architecture",
    title: "Modular Architecture Deep Dive",
    description:
      "A comprehensive guide on designing scalable systems using strategic modularism and domain-driven design.",
    type: "Whitepaper",
    icon: "layers",
    stats: "24 Pages · PDF",
    isPdf: true,
    pdfPath: "/downloads/modulifyr-capability-deck.pdf",
    category: "Architecture",
  },
  {
    slug: "micro-frontend-orchestration",
    title: "Micro-Frontend Orchestration",
    description:
      "Technical implementation patterns for managing large-scale frontend applications with independent modules.",
    type: "Technical Guide",
    icon: "terminal",
    stats: "15 min read",
    isPdf: false,
    category: "Frontend",
  },
  {
    slug: "modernization-roadmap",
    title: "System Modernization Roadmap",
    description:
      "Strategic framework for migrating legacy monolithic systems to modern modular architectures without downtime.",
    type: "Playbook",
    icon: "book",
    stats: "12 Pages · PDF",
    isPdf: true,
    pdfPath: "/downloads/modulifyr-technical-briefing.pdf",
    category: "Strategy",
  },
  {
    slug: "sre-best-practices",
    title: "SRE Best Practices for Startups",
    description:
      "How we implement site reliability engineering for early-to-mid stage companies to ensure 99.9% uptime.",
    type: "Case Study",
    icon: "filebox",
    stats: "8 min read",
    isPdf: false,
    category: "DevOps",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers className="text-[#2D738D] h-6 w-6" />,
  terminal: <Terminal className="text-brand-teal h-6 w-6" />,
  book: <BookOpen className="text-brand-gold h-6 w-6" />,
  filebox: <FileBox className="text-foreground dark:text-brand-teal h-6 w-6" />,
};

export default function ResourcesPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-bg-secondary border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-6xl">
              Engineering <span className="text-[#2D738D]">Knowledge</span> Base
            </h1>
            <p className="text-text-alt text-xl leading-relaxed">
              Open-source guides, technical whitepapers, and strategic frameworks developed by
              Modulifyr's engineering team to help organizations build better software.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {resources.map((res, index) => (
              <Card
                key={index}
                className="group border-border-base bg-background p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="bg-bg-secondary border-border-base group-hover:bg-[#2D738D]/10 group-hover:border-[#2D738D]/20 rounded-xl border p-3 transition-colors">
                    {iconMap[res.icon]}
                  </div>
                  <span className="text-text-dim bg-bg-secondary rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    {res.type}
                  </span>
                </div>
                <CardTitle className="text-foreground group-hover:text-[#2D738D] mb-4 text-2xl transition-colors">
                  {res.title}
                </CardTitle>
                <p className="text-text-alt mb-8 leading-relaxed">{res.description}</p>
                <div className="border-border-base mt-auto flex items-center justify-between border-t pt-6">
                  <span className="text-text-dim text-xs font-medium">{res.stats}</span>
                  {res.isPdf ? (
                    <a href={res.pdfPath} download>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#2D738D] hover:text-[#2D738D]/80 flex h-auto items-center gap-2 p-0 hover:bg-transparent hover:underline"
                      >
                        Download <Download className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={`/resources/${res.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#2D738D] hover:text-[#2D738D]/80 h-auto p-0 hover:bg-transparent hover:underline"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — replaces newsletter */}
      <section className="bg-brand-navy relative overflow-hidden py-24 text-white">
        <div className="container-custom relative z-10 max-w-2xl text-center">
          <h2 className="font-heading mb-6 text-3xl font-bold md:text-4xl">
            Want These Applied to Your System?
          </h2>
          <p className="text-text-dim mb-10 text-lg leading-relaxed">
            The patterns in these guides are what we apply to every project we build. If you're
            evaluating a custom system, start with our technical standards or request a proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/technical-standards">
              <Button size="lg">View Technical Standards</Button>
            </Link>
            <Link href="/request-proposal">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Request Proposal
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-brand-teal/10 absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 rounded-full blur-[120px]" />
      </section>
    </div>
  );
}

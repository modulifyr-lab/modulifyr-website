import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import Reveal from "@/components/ui/Reveal";

const POSTS = [
  {
    tag: "Technical Builds",
    title: "Educom & Automated Lead Pipelines: Modular Execution",
    description:
      "How we combine fast Next.js frontends, PostgreSQL backends, and retry-safe n8n + WhatsApp workflows for SMBs.",
    image: "/blog/blog-one.jpg",
    alt: "Modular system screens and layout components",
    href: "/work",
  },
  {
    tag: "Engineering Standards",
    title: "Six Pillars of Production Software Quality",
    description:
      "Our baseline standards for TypeScript, OWASP security checks, automated CI/CD, and uptime monitoring.",
    image: "/blog/blog-two.jpg",
    alt: "Software architecture diagram and engineering review",
    href: "/about/technical-standards",
  },
  {
    tag: "Discovery Guide",
    title: "What to Prepare Before Your Discovery Call",
    description:
      "A practical checklist for Nepal SMBs and product teams to scope workflows, budgets, and timelines clearly.",
    image: "/blog/blog-three.jpg",
    alt: "Engineering planning desk with dual monitors",
    href: "/resources",
  },
];

export function BlogAndCaseStudiesSection() {
  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="font-sans text-sm font-semibold tracking-wider text-[#FFC24B] uppercase">
              Insights &amp; Proof
            </span>
            <h2 className="text-on-background mt-2 text-3xl leading-[1.1] font-bold sm:text-4xl">
              Stories Behind the Systems We Build
            </h2>
            <p className="text-on-surface-variant mt-3 max-w-xl text-base leading-relaxed">
              Explore our internal builds, published engineering standards, and practical resources
              for business leaders and developers.
            </p>
          </div>

          <Link href="/blog" className="group inline-block shrink-0 self-start md:self-center">
            <Button variant="outline" className="w-auto! max-w-none! px-6 whitespace-nowrap">
              View All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post, index) => (
            <Reveal key={post.title} variant="fade-up" delay={index * 100}>
              <Link
                href={post.href}
                className="group border-border-base bg-surface flex h-full flex-col overflow-hidden rounded-3xl border transition-colors duration-200 hover:border-[#4FB6C6]/60 focus-visible:ring-2 focus-visible:ring-[#4FB6C6] focus-visible:outline-none"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>

                <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                  <p className="text-cta text-xs font-semibold tracking-wider uppercase">
                    {post.tag}
                  </p>
                  <h3 className="text-on-background mt-2 text-lg leading-snug font-bold transition-colors duration-200 group-hover:text-[#4FB6C6]">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant mt-2.5 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

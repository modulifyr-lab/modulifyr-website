import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { RESOURCES } from "@/lib/resources";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

// Fixed: Next.js 15 requires params as Promise<>
type Props = { params: Promise<{ slug: string }> };

const articleContent: Record<string, string> = {
  "sre-best-practices": `
**Reliability Is a Habit, Not a Big Team**

You do not need a dedicated reliability department to run dependable software. For lean businesses running Next.js web apps, Hono APIs, PostgreSQL databases, and n8n automations, reliability comes down to catching silent failures early and keeping recovery boring.

**Define Clear Reliability Targets**

Instead of vague goals, define what actually matters to customers: pages load quickly on mobile networks, inquiry forms and WhatsApp webhooks deliver without silent drops, and database writes stay consistent.

Measure user-facing outcomes—such as whether a checkout or admission inquiry completed—rather than staring at raw CPU graphs.

**Prevent Silent Automation Failures**

The most common failure mode in small-business software is an automation webhook breaking quietly while no one checks logs for days. Every n8n, Zapier, or Hono webhook flow should include automatic retries with backoff, a dead-letter log, and an instant email or Discord/WhatsApp alert when a step fails repeatedly.

**Automated Backups & Clean Deploys**

Every production PostgreSQL database needs automated daily backups and tested restore steps before launch. Deployments should run through automated CI checks (type-checking, linting, unit tests, and build verification) so broken code never reaches users.

**A Lightweight Incident Checklist**

Even a small studio benefits from a simple protocol: triage severity quickly (customer-blocking vs. minor visual issue), roll back or hotfix cleanly, notify the affected stakeholder honestly, and write down one concrete preventive fix so the same bug cannot repeat.

**Pragmatic Monitoring Stack**

A lean, affordable setup: uptime checks (Better Stack or UptimeRobot) on critical URLs and health endpoints, structured JSON error logs on API routes, and automated dependency alerts via Dependabot. Set this up before go-live, not after the first outage.
    `,
};

export async function generateStaticParams() {
  return RESOURCES.filter((r) => !r.isPdf).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) return { title: "Resource Not Found | Modulifyr" };
  return {
    title: `${resource.title} | Modulifyr Resources`,
    description: resource.description,
    alternates: {
      canonical: `/resources/${slug}`,
    },
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug && !r.isPdf);
  if (!resource) notFound();

  const content = articleContent[slug];
  if (!content) notFound();

  const sections = content
    .trim()
    .split("\n\n")
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return { type: "heading", text: block.replace(/\*\*/g, "") };
      }
      return { type: "paragraph", text: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") };
    });

  const otherArticles = RESOURCES.filter((r) => r.slug !== slug && !r.isPdf);

  return (
    <div className="flex w-full flex-col">
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-custom max-w-4xl">
          <Link
            href="/resources"
            className="text-text-muted hover:text-brand-teal mb-8 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>
          <span className="bg-brand-teal/20 text-brand-teal mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold">
            {resource.type}
          </span>
          <h1 className="font-heading mb-6 text-3xl leading-tight font-bold md:text-5xl">
            {resource.title}
          </h1>
          <div className="text-text-muted flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {resource.stats}
            </span>
            <span>·</span>
            <span>{resource.category}</span>
            <span>·</span>
            <span>Modulifyr Engineering</span>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-16">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-4">
            <article className="lg:col-span-3">
              <div className="border-border-base rounded-3xl border bg-bg-alt p-8 md:p-12">
                <p className="text-text-secondary border-border-base mb-8 border-b pb-8 text-xl leading-relaxed font-medium italic">
                  {resource.description}
                </p>
                <div className="space-y-5">
                  {sections.map((section, i) =>
                    section.type === "heading" ? (
                      <h2
                        key={i}
                        className="font-heading text-foreground mt-10 mb-3 text-2xl font-bold first:mt-0"
                      >
                        {section.text}
                      </h2>
                    ) : (
                      <p
                        key={i}
                        className="text-text-secondary leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.text }}
                      />
                    )
                  )}
                </div>
              </div>
            </article>

            <aside className="flex flex-col gap-6">
              <div className="bg-brand-navy sticky top-28 rounded-3xl p-7 text-white">
                <h3 className="font-heading mb-3 text-lg font-bold">Put This Into Practice</h3>
                <p className="text-text-muted mb-5 text-sm leading-relaxed">
                  Work with our engineers to apply these patterns in your organisation.
                </p>
                <Link href="/request-proposal">
                  <Button className="w-full" size="sm">
                    Request Proposal
                  </Button>
                </Link>
              </div>
              {otherArticles.length > 0 && (
                <div className="bg-bg-secondary border-border-base rounded-3xl border p-7">
                  <h3 className="font-heading text-foreground mb-3 text-sm font-bold">
                    More Resources
                  </h3>
                  <div className="space-y-3">
                    {otherArticles.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/resources/${r.slug}`}
                        className="text-text-secondary hover:text-[#2D738D] flex items-center gap-2 text-sm transition-colors"
                      >
                        <ArrowRight className="h-3 w-3 shrink-0" />
                        {r.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

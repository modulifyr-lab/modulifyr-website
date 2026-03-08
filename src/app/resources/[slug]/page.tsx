import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { resources } from "../page";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

type Props = { params: { slug: string } };

const articleContent: Record<string, string> = {
    "micro-frontend-orchestration": `
**What is a Micro-Frontend?**

A micro-frontend is an architectural approach that applies microservice principles to frontend development. Instead of a single monolithic frontend application, you decompose the UI into independent, deployable units — each owned by a separate team.

**Why It Matters for Enterprise Applications**

At a certain scale, a single frontend codebase becomes a bottleneck. Multiple teams modify the same files, merge conflicts are constant, and a bug in one module can break the entire application. Micro-frontends address this by giving each team true ownership of their UI slice.

**Orchestration Patterns**

The three primary orchestration patterns are: (1) Build-time integration, where micro-frontends are combined as npm packages at build time — simple but couples deployment; (2) Runtime integration via iframes — maximum isolation but poor UX; (3) Runtime integration via JavaScript — the most common modern approach, using Module Federation (Webpack 5) or import maps.

**Module Federation in Practice**

Module Federation allows one Next.js or Webpack application to dynamically load and execute code from another deployed application at runtime. Each micro-frontend exposes a remote entry point. The host application loads these at runtime, not at build time.

This enables truly independent deployments: Team A can ship a new version of their micro-frontend without the host application knowing, touching, or redeploying anything.

**The Hidden Costs**

Micro-frontends are not free. Cross-team communication becomes an engineering discipline. Shared design system components must be versioned and published as packages. Authentication state must be shared across independently deployed applications. Performance monitoring becomes more complex.

Our recommendation: adopt micro-frontends only when organizational boundaries (multiple teams, independent release cycles) genuinely demand it. For most applications under 5 teams, a well-structured modular monofrontend is simpler and equally maintainable.

**Shell Application Design**

The shell (host) application is responsible for: routing between micro-frontends, shared authentication state, global navigation, and error boundary management for failed remote loads. Keep the shell minimal. The less logic in the shell, the less risk of it becoming a bottleneck.

**Testing Strategy**

Each micro-frontend should have its own complete test suite: unit, integration, and component tests. Contract testing (using tools like Pact) ensures that changes to one micro-frontend's API don't silently break the integration with others.
    `,
    "sre-best-practices": `
**SRE Is a Mindset, Not a Role**

Site Reliability Engineering was formalized at Google, but the principles apply at any scale. At its core, SRE is about treating operations as a software engineering problem. Manual, repetitive operational work should be automated. Reliability should be measured, not assumed.

**Service Level Objectives: The Foundation**

Before writing any SRE tooling, define your SLOs. An SLO answers: what is the minimum level of reliability that users actually require? Not "as high as possible" — a specific, measurable number. 99.9% availability. P95 API response time under 500ms. Fewer than 0.5% error rate.

SLOs must be based on user experience, not infrastructure metrics. Server CPU at 80% is not an SLO. Users completing checkout successfully at 99.8% is an SLO.

**Error Budgets in Practice**

The error budget is 100% minus the SLO. If your availability SLO is 99.9%, your monthly error budget is ~43 minutes of downtime. The error budget is a shared resource between the product team and the reliability team.

When the budget is healthy, ship features. When it's depleted, freeze feature releases and focus on reliability improvements. This simple rule eliminates the perpetual tension between "ship fast" and "ship safely."

**Toil Identification and Elimination**

Toil is manual, repetitive, non-creative operational work that grows linearly with system size. Common sources: manually triggered deployments, manual database connection pool resets, manually verified backup jobs, manual certificate renewals.

The SRE mandate is to keep toil below 50% of engineering time. The mechanism is automation. For every recurring manual task, ask: can this be triggered automatically? Can it be verified automatically? Can failure be auto-remediated?

**Incident Management Protocol**

Even a 3-person team needs a lightweight incident protocol. At minimum: a severity classification (P1 = user-facing outage, P2 = degraded, P3 = minor, P4 = cosmetic), a designated incident commander during live incidents, a communication template for stakeholders, and a mandatory blameless postmortem within 24 hours of resolution.

The blameless postmortem is the most important artifact. It documents the timeline, root cause, contributing factors, and action items. Not: "engineer X made a mistake." Instead: "the system allowed X to happen — what change prevents this class of failure?"

**Monitoring Stack for Startups**

A pragmatic monitoring stack: Uptime monitoring (Better Uptime or similar) for availability checks, structured application logging (Axiom, Logtail, or Datadog) for error tracking, distributed tracing (OpenTelemetry + backend of choice) for performance analysis, and alerting to an on-call rotation via PagerDuty or similar.

Set up monitoring before your first production deployment. Not after the first incident.
    `,
};

export async function generateStaticParams() {
    return resources.filter(r => !r.isPdf).map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resource = resources.find(r => r.slug === params.slug);
    if (!resource) return { title: "Resource Not Found | Modulifyr" };
    return {
        title: `${resource.title} | Modulifyr Resources`,
        description: resource.description,
    };
}

export default function ResourceArticlePage({ params }: Props) {
    const resource = resources.find(r => r.slug === params.slug && !r.isPdf);
    if (!resource) notFound();

    const content = articleContent[params.slug];
    if (!content) notFound();

    const sections = content
        .trim()
        .split("\n\n")
        .filter(Boolean)
        .map(block => {
            if (block.startsWith("**") && block.endsWith("**")) {
                return { type: "heading", text: block.replace(/\*\*/g, "") };
            }
            return { type: "paragraph", text: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") };
        });

    const otherArticles = resources.filter(r => r.slug !== params.slug && !r.isPdf);

    return (
        <div className="flex flex-col w-full">
            <section className="bg-brand-navy text-white py-20">
                <div className="container-custom max-w-4xl">
                    <Link href="/resources" className="flex items-center gap-2 text-text-muted hover:text-brand-teal text-sm font-medium mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Resources
                    </Link>
                    <span className="px-3 py-1 rounded-full text-xs font-bold mb-6 inline-block bg-brand-teal/20 text-brand-teal">
                        {resource.type}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">{resource.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {resource.stats}</span>
                        <span>·</span>
                        <span>{resource.category}</span>
                        <span>·</span>
                        <span>Modulifyr Engineering</span>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
                        <article className="lg:col-span-3">
                            <div className="bg-white border border-border-base rounded-3xl p-8 md:p-12">
                                <p className="text-xl text-text-secondary leading-relaxed mb-8 pb-8 border-b border-border-base font-medium italic">
                                    {resource.description}
                                </p>
                                <div className="space-y-5">
                                    {sections.map((section, i) => (
                                        section.type === "heading" ? (
                                            <h2 key={i} className="text-2xl font-heading font-bold text-brand-navy mt-10 mb-3 first:mt-0">
                                                {section.text}
                                            </h2>
                                        ) : (
                                            <p key={i}
                                                className="text-text-secondary leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: section.text }}
                                            />
                                        )
                                    ))}
                                </div>
                            </div>
                        </article>

                        <aside className="flex flex-col gap-6">
                            <div className="bg-brand-navy text-white rounded-3xl p-7 sticky top-28">
                                <h3 className="font-heading font-bold text-lg mb-3">Put This Into Practice</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-5">
                                    Work with our engineers to apply these patterns in your organization.
                                </p>
                                <Link href="/request-proposal">
                                    <Button className="w-full" size="sm">Request Proposal</Button>
                                </Link>
                            </div>
                            {otherArticles.length > 0 && (
                                <div className="bg-bg-secondary border border-border-base rounded-3xl p-7">
                                    <h3 className="font-heading font-bold text-brand-navy mb-3 text-sm">More Resources</h3>
                                    <div className="space-y-3">
                                        {otherArticles.map(r => (
                                            <Link key={r.slug} href={`/resources/${r.slug}`} className="flex items-center gap-2 text-sm text-text-secondary hover:text-brand-orange transition-colors">
                                                <ArrowRight className="w-3 h-3 shrink-0" />{r.title}
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
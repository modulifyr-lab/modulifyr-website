import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Engineering Blog | Modulifyr",
    description: "Technical insights, architecture patterns, and engineering perspectives from the Modulifyr team.",
};

export const posts = [
    {
        slug: "modular-vs-monolith",
        title: "Modular Monolith vs. Microservices: Choosing the Right Architecture",
        excerpt: "A practical decision framework for organizations evaluating whether to adopt microservices or a well-structured modular monolith — and why the answer is almost never black and white.",
        category: "Architecture",
        readTime: "8 min read",
        date: "February 2026",
        featured: true,
        content: `
Most organizations approach the monolith vs. microservices question as a binary choice. It is not. The real question is: what level of modularity does your team's operational maturity actually support?

**The Case for Modular Monolith**

A modular monolith is a single deployable application structured into independently testable, loosely-coupled modules. Each module owns its data, its logic, and its interfaces. The modules communicate through well-defined internal APIs — not network calls.

This is not the "big ball of mud" monolith that gave monoliths a bad name. Done correctly, a modular monolith gives you 80% of the benefits of microservices — clear boundaries, independent development, testability — at 20% of the operational complexity.

**When Microservices Actually Make Sense**

Microservices earn their overhead when: (1) teams are large enough that the organizational boundaries justify the service boundaries, (2) services have radically different scaling profiles, or (3) you need polyglot persistence across truly independent domains.

If you have fewer than 15 engineers, the overhead of distributed tracing, service meshes, and inter-service latency will slow you down more than it helps.

**Our Recommendation**

Start modular. Structure your application correctly from day one with clean module boundaries and well-defined interfaces. When the need for independent deployment actually emerges — driven by real scaling pressure, not engineering preference — your modules extract cleanly into services.

This approach is what we call "architecture-forward development." Build for change, not for the hype of the week.
        `
    },
    {
        slug: "legacy-modernization-playbook",
        title: "The Legacy Modernization Playbook: Replacing Systems Without Downtime",
        excerpt: "How we approach phased system replacement — keeping the old system live while incrementally migrating to new modular infrastructure, module by module.",
        category: "Engineering",
        readTime: "12 min read",
        date: "January 2026",
        featured: false,
        content: `
Legacy modernization is one of the most technically and organizationally complex engineering challenges an organization can face. The stakes are high: a failed migration can bring down critical operations. The path forward requires discipline.

**The Strangler Fig Pattern**

Named after a species of vine that grows around a host tree, the Strangler Fig pattern is the foundation of safe legacy replacement. The idea is simple: you build new functionality around the edges of the legacy system, gradually routing traffic to the new modules while keeping the old system live as a fallback.

You never do a "big bang" rewrite. You never freeze feature development on the old system while the rewrite proceeds. You never have a fixed cutover date that becomes a crisis.

**Phase 1: Surface Mapping**

Before writing a single line of new code, we spend 2-4 weeks mapping every surface area of the legacy system. Every database table. Every API endpoint. Every batch job. Every integration.

This produces a dependency graph that tells us which modules are safe to extract first (lowest dependencies) and which are load-bearing walls that must be touched last.

**Phase 2: Strangling Begins**

We identify the highest-value, lowest-risk module to extract first — typically something like user authentication or a read-only reporting interface. We build the new module in parallel, run it in shadow mode comparing outputs, then flip the switch when confidence is high.

**Phase 3: Iterative Migration**

Each subsequent module follows the same pattern: build → shadow → validate → cut over → monitor → retire legacy code. With each successful migration, confidence grows and the team develops muscle memory for the process.

The legacy system shrinks from the outside in until nothing remains.
        `
    },
    {
        slug: "api-design-patterns",
        title: "API Design Patterns for Modular Systems",
        excerpt: "The patterns we use to design APIs that serve as clean contracts between modules — covering versioning strategies, error standardization, and hypermedia controls.",
        category: "Backend",
        readTime: "10 min read",
        date: "December 2025",
        featured: false,
        content: `
In a modular system, APIs are not just technical interfaces — they are contracts between teams and between system components. A poorly designed API creates coupling. A well-designed API enables independent evolution.

**Versioning Strategy**

We use URL-based versioning (/v1/, /v2/) for external APIs consumed by clients we don't control, and header-based versioning for internal service-to-service communication. URL versioning is explicit and cacheable. Header versioning is cleaner for internal consumers.

**Error Standardization**

Every API in a modular system must return errors in a consistent structure. We use RFC 7807 Problem Details as our standard. Every error response includes: type (a URI identifying the error class), title (human-readable), status (HTTP code), detail (specific message), and instance (the request that caused it).

Consistent error shapes mean frontend developers write one error handling function, not dozens.

**Pagination Patterns**

Cursor-based pagination for any collection that grows unboundedly. Offset-based pagination only for small, stable collections where jumping to a specific page is a user requirement. Cursor pagination prevents the "page drift" problem that makes offset pagination unreliable on live data.

**The BFF Pattern**

For each client type (web, mobile, third-party), we create a Backend for Frontend (BFF) — a thin API gateway that aggregates and shapes data from internal services into the exact shape each client needs. This eliminates over-fetching, under-fetching, and the proliferation of client-specific logic in shared services.
        `
    },
    {
        slug: "cost-of-technical-debt",
        title: "The True Cost of Technical Debt in Growing Organizations",
        excerpt: "A data-backed look at how unmanaged technical debt compounds over time, and the inflection points at which organizations should prioritize architectural investment.",
        category: "Strategy",
        readTime: "7 min read",
        date: "November 2025",
        featured: false,
        content: `
Technical debt is often framed as a technical problem. It is not. It is a business problem. And like financial debt, it compounds.

**The Compounding Effect**

In our experience auditing legacy systems, we consistently find the same pattern: the first 20% of technical debt costs almost nothing in productivity. Engineers work around it. It's friction, not a barrier.

But somewhere around the 40-60% mark — when shortcuts start depending on other shortcuts — the cost curve inflects sharply upward. New features that should take two weeks now take six. Bug fixes introduce new bugs. Engineers with institutional knowledge become single points of failure.

**The Hidden Costs**

Organizations typically measure technical debt by its direct cost: slower development velocity. They miss the hidden costs: increased cloud infrastructure spend (inefficient code runs longer on more instances), higher engineer turnover (good engineers leave systems they can't improve), and increased security exposure (old dependencies, inconsistent patterns).

**The Modernization Decision Point**

We use a simple metric to help clients decide when to modernize: if your "percentage of engineering time spent on maintenance and workarounds" exceeds 40%, the system is holding back the business, not enabling it.

At that point, the cost of modernization — even accounting for the disruption — is lower than the accumulated cost of continued technical debt over the following 18 months.
        `
    },
    {
        slug: "sre-for-startups",
        title: "SRE Principles for Early-Stage Companies",
        excerpt: "Site reliability engineering isn't just for Google-scale systems. Here's how we implement SRE fundamentals for startups and scale-ups without over-engineering.",
        category: "DevOps",
        readTime: "9 min read",
        date: "October 2025",
        featured: false,
        content: `
Site Reliability Engineering emerged from Google's need to operate systems at planetary scale. But the underlying principles — defining reliability as a product feature, basing operational decisions on data, and treating infrastructure as code — are valuable at any scale.

**Start with SLOs, Not SLAs**

Most startups jump straight to SLAs with customers. This is backwards. First define your Service Level Objectives internally: what is the minimum level of reliability that your users actually require? Then build your systems and operations to meet those objectives. Only then should you commit to customers via SLAs.

**Error Budgets**

An error budget is the inverse of your SLO. If your uptime SLO is 99.9%, your monthly error budget is ~43 minutes of downtime. Error budgets reframe the reliability conversation: reliability is not "as high as possible" — it is a resource to be spent on feature velocity. When the budget is healthy, ship fast. When it's depleted, freeze features and fix reliability.

**Toil Reduction**

Toil is manual, repetitive operational work that scales linearly with system size. SRE's mandate is to keep toil below 50% of engineering time by automating it away. For startups, the most common sources of toil are: manual deploys, manual database migrations, and manually-triggered backup verifications. Automate these first.

**Incident Management**

Even small teams need a lightweight incident management protocol: a clear severity classification system (P1-P4), a designated incident commander role, a communication template for stakeholders, and a mandatory 24-hour blameless postmortem. The postmortem is not about blame — it is about capturing the systemic failure that allowed the incident to occur.
        `
    },
    {
        slug: "react-server-components-enterprise",
        title: "React Server Components in Enterprise Applications",
        excerpt: "Our experience adopting React Server Components in production enterprise dashboards — performance wins, architectural shifts, and the tradeoffs nobody talks about.",
        category: "Frontend",
        readTime: "11 min read",
        date: "September 2025",
        featured: false,
        content: `
React Server Components represent the most significant architectural shift in React since hooks. After running RSC in production enterprise applications for over a year, here's what we've actually learned.

**The Real Performance Win**

The headline benefit of RSC is reduced JavaScript bundle size. But in enterprise applications, the more significant win is data fetching. With RSC, data fetching happens on the server, in parallel, before any HTML is sent to the client. The elimination of client-side waterfall fetching alone reduced our dashboard Time to Interactive by 40% in production.

**The Mental Model Shift**

The hardest part of RSC adoption is the mental model shift. Engineers accustomed to component-level useEffect fetching need to restructure their thinking: data flows down from the server, and interactivity is a client-side concern that gets added surgically via 'use client' boundaries.

The boundary between server and client components is the new fundamental unit of architectural thinking in React applications.

**The Tradeoffs Nobody Discusses**

RSC adds complexity to testing. Server components cannot be tested with the standard React Testing Library setup. You need MSW for API mocking, and a different testing strategy for server-only code.

RSC also makes caching explicit in ways that are unfamiliar. Next.js's layered caching model (full route cache, data cache, router cache) requires deliberate reasoning about cache invalidation — something that was largely implicit in client-side applications.

**Our Recommendation**

Adopt RSC for data-heavy pages: dashboards, listings, admin interfaces. Keep client components for interaction-heavy UI: forms, real-time updates, drag-and-drop interfaces. Use the boundary deliberately, not reactively.
        `
    }
];

const categoryColors: Record<string, string> = {
    "Architecture": "bg-brand-orange/10 text-brand-orange",
    "Engineering": "bg-brand-navy/10 text-brand-navy",
    "Backend": "bg-brand-teal/10 text-brand-teal",
    "Frontend": "bg-brand-gold/20 text-amber-700",
    "DevOps": "bg-brand-teal/10 text-brand-teal",
    "Strategy": "bg-brand-orange/10 text-brand-orange",
};

export default function BlogPage() {
    const featured = posts.find(p => p.featured);
    const rest = posts.filter(p => !p.featured);

    return (
        <div className="flex flex-col w-full">
            <section className="bg-bg-secondary py-24 border-b border-border-base">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Technical Log</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">
                            Engineering <span className="text-brand-orange">Insights</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            Architecture decisions, engineering patterns, and technical perspectives from the Modulifyr team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured */}
            {featured && (
                <section className="py-16 bg-bg-light border-b border-border-base">
                    <div className="container-custom">
                        <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6">Featured Post</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="aspect-video bg-brand-navy rounded-3xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-teal/30" />
                                <div className="relative z-10 text-center p-8">
                                    <p className="text-brand-teal font-bold text-sm uppercase tracking-widest">Architecture Series</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${categoryColors[featured.category]}`}>
                                    {featured.category}
                                </span>
                                <h2 className="text-3xl font-heading font-bold text-brand-navy leading-tight">{featured.title}</h2>
                                <p className="text-text-secondary leading-relaxed">{featured.excerpt}</p>
                                <div className="flex items-center gap-4 text-xs text-text-muted">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                                    <span>{featured.date}</span>
                                </div>
                                <Link href={`/blog/${featured.slug}`}>
                                    <Button className="w-fit group">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="py-20 bg-bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((post, idx) => (
                            <Link key={idx} href={`/blog/${post.slug}`} className="block group">
                                <Card className="flex flex-col h-full group-hover:-translate-y-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 ${categoryColors[post.category] || 'bg-bg-secondary text-text-muted'}`}>
                                        {post.category}
                                    </span>
                                    <CardTitle className="text-lg group-hover:text-brand-orange transition-colors leading-snug mb-3">
                                        {post.title}
                                    </CardTitle>
                                    <p className="text-sm text-text-secondary leading-relaxed flex-grow mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-border-base mt-auto">
                                        <div className="flex items-center gap-3 text-xs text-text-muted">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <span className="text-brand-orange text-xs font-bold flex items-center gap-1">
                                            Read <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-brand-navy text-white">
                <div className="container-custom text-center max-w-2xl">
                    <h2 className="text-3xl font-heading font-bold mb-4">Get New Articles in Your Inbox</h2>
                    <p className="text-text-muted mb-8">Engineering insights delivered monthly. No spam.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange text-sm"
                        />
                        <Button className="shrink-0">Subscribe</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
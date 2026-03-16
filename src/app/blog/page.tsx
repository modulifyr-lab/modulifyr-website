import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/notion-blog";

export const metadata: Metadata = {
  title: "Engineering Blog | Modulifyr — Software Insights for Nepal & Beyond",
  description:
    "Technical insights, architecture patterns, and practical engineering perspectives from the Modulifyr team in Birtamode, Nepal.",
};

// ─── ISR — revalidate every hour as safety net; Make webhook handles instant updates ──
export const revalidate = 3600;

export const staticPosts = [
  {
    slug: "custom-software-nepal-sme",
    title: "Why Nepali SMEs Are Replacing Off-the-Shelf Software With Custom Systems",
    excerpt:
      "Generic ERP and management software wasn't designed for how businesses in Nepal actually operate. Here's what we've learned building custom systems for schools, clinics, and retailers across the country.",
    category: "Strategy",
    readTime: "7 min read",
    date: "March 2026",
    dateISO: "2026-03-01",
    featured: true,
    content: `
Most small and medium businesses in Nepal reach the same point eventually. They start with a spreadsheet, graduate to Tally or some off-the-shelf management tool, and within two or three years they're running operations on five different disconnected systems — none of which talk to each other.

We've seen this in Jhapa-based retailers managing inventory in Excel while billing in one system and tracking staff in another. We've seen schools in Kathmandu using a student information system that can't generate the report format the government exam board requires. We've seen clinics in Pokhara where the appointment booking system doesn't connect to the billing module because they're from two different vendors.

**The Problem Isn't the Software Category. It's the Fit.**

Off-the-shelf software is built for a generic business. It's built for the average. And the average business in Nepal — in terms of workflow, language requirements, integration needs, and regulatory environment — is not the same as the average business in the US or India that these tools were originally designed for.

Custom software is not about prestige. It's about fit. A custom system built around exactly how your procurement team works, exactly what your finance department needs to report, and exactly which third-party services you're already using, will be used properly. Generic software gets worked around.

**The Cost Comparison Most People Get Wrong**

The immediate cost of custom software looks higher. A license for an off-the-shelf system might be NPR 50,000 per year. A custom build might start at NPR 500,000.

But that comparison misses the hidden costs of a bad-fit system: staff time spent on workarounds, manual data entry between disconnected tools, the cost of an ERP "consultant" who configures the system for six months and leaves, and — the most expensive one — the cost of eventually rebuilding on a proper foundation after two years of accumulating technical debt.

We've helped businesses calculate this honestly. In most cases where a company has been using an ill-fitting system for two or more years, the true accumulated cost already exceeds what a custom build would have cost.

**What Modular Architecture Changes**

The traditional argument against custom software is that it's expensive to change. You build it for your operations today, and in three years when your operations look different, you have to rebuild.

Modular architecture addresses this directly. When we build a system, each function — inventory management, billing, HR, reporting — is a discrete module with clean boundaries. When your billing requirements change (as they did for several of our clients when Nepal's VAT reporting requirements were updated), we update the billing module. The rest of the system doesn't move.

This is why we can build custom systems that are actually cost-competitive with off-the-shelf alternatives over a five-year horizon, even for SMBs with modest budgets.

**What to Look For in a Custom Development Partner in Nepal**

If you're evaluating custom software development in Nepal, the questions that matter: Do they use version control? (Surprising how many don't.) Do they write tests? Can they show you a system they built that's still running two years later? Do they provide source code ownership? Can they explain their architecture decisions in plain language?

The answers to those questions will tell you more than any portfolio showcase.
        `,
  },
  {
    slug: "erp-schools-colleges-nepal",
    title: "ERP Systems for Schools and Colleges in Nepal: What Most Vendors Won't Tell You",
    excerpt:
      "Having built student information and institutional management systems for educational institutions across Nepal, here's the honest guide to what works, what doesn't, and what questions to ask before signing any contract.",
    category: "Strategy",
    readTime: "9 min read",
    date: "February 2026",
    dateISO: "2026-02-15",
    featured: false,
    content: `
Education is one of the most common sectors where we see technology failing organizations in Nepal. Schools and colleges invest in management software and then spend the next three years managing the software instead of the other way around.

Having built custom student information systems, library management tools, and exam and result platforms for educational institutions across Nepal, we've developed a clear picture of where things go wrong — and how to avoid it.

**The Most Common Failure Mode: Buying the Demo**

Most ERP vendors targeting Nepal's education sector sell on demo impressions. The demo shows a beautiful dashboard, a clean student profile page, and a one-click result sheet generator. It looks exactly like what you need.

Then you go live. Your exam numbering system is slightly different from the vendor's assumptions. Your fee structure has five subcategories the system doesn't support. The result sheet format doesn't match what your board requires. And the vendor's support line takes four days to respond.

This happens because the demo was built for the average school. Your school isn't average — it has specific workflows, specific formats, and specific integrations that have developed over years of operation.

**The Integration Question Nobody Asks in the First Meeting**

Before any school signs a contract for management software, they should ask: what does this system connect to, and what does it not connect to?

In practice, a school's digital operations span: student records, fee collection (often connected to bank or eSewa), exam scheduling, result generation (which may need to interface with national board formats), attendance tracking, library management, and staff HR.

Most vendor systems handle two or three of these well and the rest partially or not at all. You end up paying for a system that handles 60% of your needs and still requires manual processes for the other 40%.

**What a Properly Modular System Looks Like for a School**

When we build institutional management systems, we structure them as independent modules that share a common data layer. The student profile module manages core student data. The fee module handles billing and payment tracking. The exam module manages schedules, marks entry, and result generation. The HR module handles staff records.

Because they share data, you don't re-enter a student's name in three places. Because they're modular, you can add a new module — say, a parent communication portal — without rebuilding the whole system. Because the data layer is yours, you can generate any report format you need, including custom formats for specific boards.

**The Government Compliance Factor**

This is the piece most vendors underestimate for Nepal specifically. Reporting requirements from the Education Ministry, SLC/SEE boards, and local municipality offices change regularly. A rigid system that can't adapt to new report formats becomes a serious operational problem every time a new directive comes in.

A modular system lets you update the reporting module without disrupting the rest of the platform. A good development partner will handle this as maintenance, not as a new project.

**Price Anchoring: What to Actually Budget**

For a school of 500-1500 students, a properly built custom management system covering core modules (student records, fee management, exam and results, attendance) typically runs NPR 400,000 – 900,000 as an initial build, with annual maintenance of 15-20% of that figure.

Cheaper options exist. Some will work fine for very small, simple institutions. But for any school handling exam boards, government reporting, or more than a thousand students, the cost of working around a bad-fit system will exceed the cost difference within 18 months.

**Questions to Ask Any ERP Vendor in Nepal**

Can you show us a school using this system that has been running it for three years or more? Can we speak with their admin staff directly? What happens when a reporting requirement changes — how do we get an update and what does it cost? Who owns the data and the database? If we ever move to a different system, can we export everything? Do you provide source code for the custom parts of our implementation?

If a vendor is reluctant to answer any of those questions clearly, treat that as important information.
        `,
  },
  {
    slug: "modular-vs-monolith",
    title: "Modular Monolith vs. Microservices: Choosing the Right Architecture",
    excerpt:
      "A practical decision framework for organizations evaluating whether to adopt microservices or a well-structured modular monolith — and why the answer is almost never black and white.",
    category: "Architecture",
    readTime: "8 min read",
    date: "January 2026",
    dateISO: "2026-01-20",
    featured: false,
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
        `,
  },
  {
    slug: "legacy-modernization-playbook",
    title: "The Legacy Modernization Playbook: Replacing Systems Without Downtime",
    excerpt:
      "How we approach phased system replacement — keeping the old system live while incrementally migrating to new modular infrastructure, module by module.",
    category: "Engineering",
    readTime: "12 min read",
    date: "December 2025",
    dateISO: "2025-12-10",
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
        `,
  },
  {
    slug: "api-design-patterns",
    title: "API Design Patterns for Modular Systems",
    excerpt:
      "The patterns we use to design APIs that serve as clean contracts between modules — covering versioning strategies, error standardization, and hypermedia controls.",
    category: "Backend",
    readTime: "10 min read",
    date: "November 2025",
    dateISO: "2025-11-05",
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
        `,
  },
  {
    slug: "cost-of-technical-debt",
    title: "The True Cost of Technical Debt in Growing Organizations",
    excerpt:
      "A data-backed look at how unmanaged technical debt compounds over time, and the inflection points at which organizations should prioritize architectural investment.",
    category: "Strategy",
    readTime: "7 min read",
    date: "October 2025",
    dateISO: "2025-10-15",
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
        `,
  },
  {
    slug: "sre-for-startups",
    title: "SRE Principles for Early-Stage Companies",
    excerpt:
      "Site reliability engineering isn't just for Google-scale systems. Here's how we implement SRE fundamentals for startups and scale-ups without over-engineering.",
    category: "DevOps",
    readTime: "9 min read",
    date: "September 2025",
    dateISO: "2025-09-08",
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
        `,
  },
  {
    slug: "react-server-components-enterprise",
    title: "React Server Components in Enterprise Applications",
    excerpt:
      "Our experience adopting React Server Components in production enterprise dashboards — performance wins, architectural shifts, and the tradeoffs nobody talks about.",
    category: "Frontend",
    readTime: "11 min read",
    date: "August 2025",
    dateISO: "2025-08-20",
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
        `,
  },
];

// Keep the old export name for backward compatibility with [slug]/page.tsx
export const posts = staticPosts;

const categoryColors: Record<string, string> = {
  Architecture: "bg-brand-orange/10 text-brand-orange",
  Engineering: "bg-brand-navy/10 text-brand-navy",
  Backend: "bg-brand-teal/10 text-brand-teal",
  Frontend: "bg-brand-gold/20 text-amber-700",
  DevOps: "bg-brand-teal/10 text-brand-teal",
  Strategy: "bg-brand-orange/10 text-brand-orange",
};

export default async function BlogPage() {
  // Fetch Notion posts — these are the live, managed posts
  const notionPosts = await getAllPosts();

  // Merge: Notion posts come first (newest), then static posts that don't
  // have a Notion equivalent (avoid duplicates by slug)
  const notionSlugs = new Set(notionPosts.map((p) => p.slug));
  const filteredStatic = staticPosts.filter((p) => !notionSlugs.has(p.slug));

  // All posts combined, sorted by date descending
  const allPosts = [...notionPosts, ...filteredStatic].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  // Featured: prefer Notion featured post, fall back to static
  const featured = allPosts.find((p) => p.featured) ?? allPosts[0];
  const rest = allPosts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="flex w-full flex-col">
      <section className="bg-bg-secondary border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-brand-orange mb-4 block text-xs font-bold tracking-widest uppercase">
              Technical Log
            </span>
            <h1 className="font-heading text-brand-navy mb-6 text-4xl font-bold md:text-6xl">
              Engineering <span className="text-brand-orange">Insights</span>
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Architecture decisions, engineering patterns, and practical perspectives from the
              Modulifyr team — including what we've learned building custom software for businesses
              in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-bg-light border-border-base border-b py-16">
          <div className="container-custom">
            <p className="text-brand-orange mb-6 text-xs font-bold tracking-widest uppercase">
              Featured Post
            </p>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="bg-brand-navy relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl">
                <div className="from-brand-navy via-brand-navy/90 to-brand-teal/30 absolute inset-0 bg-gradient-to-br" />
                <div className="relative z-10 p-8 text-center">
                  <p className="text-brand-teal text-sm font-bold tracking-widest uppercase">
                    Nepal Business Series
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${categoryColors[featured.category] ?? "bg-bg-secondary text-text-muted"}`}
                >
                  {featured.category}
                </span>
                <h2 className="font-heading text-brand-navy text-3xl leading-tight font-bold">
                  {featured.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">{featured.excerpt}</p>
                <div className="text-text-muted flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <Link href={`/blog/${featured.slug}`}>
                  <Button className="group w-fit">
                    Read Article{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-bg-light py-20">
        <div className="container-custom">
          {rest.length === 0 ? (
            <p className="text-text-muted py-12 text-center">No more posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, idx) => (
                <Link
                  key={`${post.slug}-${idx}`}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <Card className="flex h-full flex-col group-hover:-translate-y-2">
                    <span
                      className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-bold ${categoryColors[post.category] || "bg-bg-secondary text-text-muted"}`}
                    >
                      {post.category}
                    </span>
                    <CardTitle className="group-hover:text-brand-orange mb-3 text-lg leading-snug transition-colors">
                      {post.title}
                    </CardTitle>
                    <p className="text-text-secondary mb-4 flex-grow text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="border-border-base mt-auto flex items-center justify-between border-t pt-4">
                      <div className="text-text-muted flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <span className="text-brand-orange flex items-center gap-1 text-xs font-bold">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold">Get New Articles in Your Inbox</h2>
          <p className="text-text-muted mb-8">
            Engineering and business software insights, monthly. No spam.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="focus:border-brand-orange flex-grow rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <Button className="shrink-0">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

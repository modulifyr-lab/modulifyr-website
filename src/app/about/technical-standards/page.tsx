import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Code2,
  GitBranch,
  TestTube2,
  Server,
  FileText,
  Lock,
  CheckCircle2,
  ArrowRight,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Technical Standards | Modulifyr",
  description:
    "The engineering standards, code quality requirements, security practices, and delivery protocols Modulifyr applies to every project.",
};

const standards = [
  {
    icon: Code2,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Code Quality",
    items: [
      "All code reviewed by a senior engineer before merging",
      "TypeScript enforced across all JavaScript/Node.js projects",
      "ESLint + Prettier on every commit via pre-commit hooks",
      "Cyclomatic complexity limits enforced via static analysis",
      "80% unit test coverage minimum, 60% integration coverage",
      "No direct console.log in production — structured logging only",
    ],
  },
  {
    icon: GitBranch,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Version Control & CI/CD",
    items: [
      "Trunk-based development with feature flags for large changes",
      "All deployments via CI/CD — zero manual production deploys",
      "GitHub Actions: lint → test → build → deploy pipeline on every PR",
      "Environment parity enforced: dev / staging / production always in sync",
      "Automated dependency updates via Dependabot with weekly audits",
      "All production releases tagged with semantic versioning",
    ],
  },
  {
    icon: ShieldCheck,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Security Standards",
    items: [
      "OWASP Top 10 review conducted on every production system",
      "Secrets managed via environment variables — never hardcoded",
      "HTTPS enforced on all endpoints with HSTS headers enabled",
      "SQL injection prevention via parameterized queries and ORMs",
      "Regular dependency vulnerability scans (npm audit, pip audit)",
      "Rate limiting and input sanitization on all public-facing APIs",
    ],
  },
  {
    icon: FileText,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Documentation Standards",
    items: [
      "All public APIs documented with OpenAPI 3.0 specification",
      "Architecture Decision Records (ADRs) for all major technical decisions",
      "README files include local dev setup, env vars, and deploy instructions",
      "Data flow diagrams required for all systems handling PII",
      "Runbooks for all production incident and recovery scenarios",
      "Inline code comments required for all non-obvious logic",
    ],
  },
  {
    icon: TestTube2,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Testing Protocol",
    items: [
      "Unit tests for all business logic with mocked dependencies",
      "Integration tests for all API routes and database interactions",
      "End-to-end tests for all critical user flows before each release",
      "Performance testing on every major feature against SLA thresholds",
      "Security penetration testing before every production launch",
      "Regression suite run on every pull request via automated CI",
    ],
  },
  {
    icon: Server,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Infrastructure Standards",
    items: [
      "Infrastructure-as-code via Terraform for all cloud resources",
      "Containerized workloads with Docker for environment consistency",
      "Auto-scaling policies configured before production go-live",
      "Database backups automated at minimum every 24 hours",
      "Disaster recovery procedures documented and tested quarterly",
      "Uptime monitoring and alerting configured on day one of production",
    ],
  },
];

const performanceTargets = [
  { metric: "Core Web Vitals (LCP)", target: "< 2.5s", tool: "Lighthouse" },
  { metric: "API Response Time (p95)", target: "< 300ms", tool: "Production APM" },
  { metric: "Time to First Byte", target: "< 200ms", tool: "Server metrics" },
  { metric: "Database Query (p95)", target: "< 100ms", tool: "Query profiling" },
  { metric: "Production Uptime SLA", target: "99.9%", tool: "30-day rolling" },
  { metric: "Error Rate", target: "< 0.1%", tool: "Error tracking" },
];

export default function TechnicalStandardsPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-teal mb-4 block text-xs font-bold tracking-widest uppercase">
              Engineering Standards
            </span>
            <h1 className="font-heading mb-8 text-4xl leading-tight font-bold md:text-6xl">
              The Standard Every <span className="text-brand-orange">Project Must Meet</span>
            </h1>
            <p className="text-text-muted max-w-3xl text-xl leading-relaxed">
              These are not aspirational guidelines — they are minimum requirements applied to every
              codebase we ship. Every Modulifyr project is held to these standards from day one.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about/technical-standards#download">
                <Button size="lg" className="group">
                  Download Technical Briefing PDF{" "}
                  <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </Link>
              <Link href="/request-proposal">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="bg-bg-light py-24">
        <div className="container-custom">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
              Six Pillars of Engineering Quality
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our technical standards span six domains — from the first line of code to production
              monitoring. These are verified on every project during code review, QA, and pre-launch
              audits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {standards.map((std, i) => (
              <div
                key={i}
                className="border-border-base rounded-3xl border bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`h-12 w-12 ${std.bg} flex shrink-0 items-center justify-center rounded-2xl`}
                  >
                    <std.icon className={`h-6 w-6 ${std.color}`} />
                  </div>
                  <h3 className="font-heading text-brand-navy text-xl font-bold">{std.title}</h3>
                </div>
                <ul className="space-y-3">
                  {std.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-text-secondary flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="text-brand-teal mt-0.5 h-4 w-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Targets */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold">
              Performance Benchmarks
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Every system we ship is benchmarked against these targets before production go-live.
              SLA agreements reference these metrics explicitly.
            </p>
          </div>
          <div className="border-border-base overflow-hidden rounded-3xl border bg-white">
            <div className="bg-brand-navy grid grid-cols-3 px-8 py-4 text-xs font-bold tracking-widest text-white uppercase">
              <span>Metric</span>
              <span className="text-center">Target</span>
              <span className="text-right">Measurement</span>
            </div>
            {performanceTargets.map((row, i) => (
              <div
                key={i}
                className={`border-border-base grid grid-cols-3 items-center border-b px-8 py-5 ${i % 2 === 1 ? "bg-bg-light" : ""}`}
              >
                <span className="text-brand-navy text-sm font-medium">{row.metric}</span>
                <span className="text-brand-orange font-heading text-center font-bold">
                  {row.target}
                </span>
                <span className="text-text-muted text-right text-xs">{row.tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="bg-bg-light py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-brand-navy mb-6 text-3xl font-bold">
                Modular Architecture Principles
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Our systems are structured around four layers of responsibility, enforced at the
                dependency, data, and API boundary level — not just folder organization.
              </p>
              <div className="space-y-4">
                {[
                  {
                    layer: "Presentation",
                    desc: "UI components organized by domain. Server Components for data-fetching; Client Components only for interactivity.",
                  },
                  {
                    layer: "Application",
                    desc: "Use-case handlers, validation, and orchestration logic. No direct database access. Pure functions where possible.",
                  },
                  {
                    layer: "Domain",
                    desc: "Business entities, rules, and value objects. Zero external dependencies. 100% unit testable.",
                  },
                  {
                    layer: "Infrastructure",
                    desc: "Database adapters, API clients, email providers. Swappable implementations behind interface contracts.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-bg-secondary border-border-base flex gap-4 rounded-2xl border p-5"
                  >
                    <div className="bg-brand-orange/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                      <span className="text-brand-orange text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <span className="text-brand-navy text-sm font-bold">
                        {item.layer} Layer:{" "}
                      </span>
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-brand-navy rounded-3xl p-8 text-white">
                <h3 className="font-heading mb-2 text-xl font-bold text-white">
                  IP & Ownership Policy
                </h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  Upon full payment of agreed milestones, clients receive 100% ownership of all
                  custom code, designs, and deliverables produced for their project.
                </p>
                <div className="space-y-3">
                  {[
                    "Full source code handoff at each milestone",
                    "No Modulifyr branding in client deliverables",
                    "IP rights confirmed in signed SOW",
                    "Proprietary frameworks licensed separately if used",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Lock className="text-brand-gold h-4 w-4 shrink-0" />
                      <span className="text-text-muted text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-bg-secondary border-border-base rounded-3xl border p-8"
                id="download"
              >
                <h3 className="font-heading text-brand-navy mb-3 font-bold">
                  Technical Briefing PDF
                </h3>
                <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                  The full 10-page technical briefing covers our engineering standards, architecture
                  patterns, performance benchmarks, and delivery process in detail.
                </p>
                <a href="/downloads/modulifyr-technical-briefing.pdf" download>
                  <Button className="group w-full">
                    Download Technical Briefing
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-20 text-white">
        <div className="container-custom flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="font-heading mb-2 text-3xl font-bold">
              See These Standards in Practice
            </h2>
            <p className="text-white/80">
              Request an anonymized code sample or schedule an architecture walkthrough.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/request-proposal">
              <Button size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
                Request Proposal
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Speak with an Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

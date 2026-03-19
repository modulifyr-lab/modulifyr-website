import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Capabilities & Architecture | Modulifyr",
  description:
    "Modulifyr's company-wide technical standard: TypeScript-first, React/Next.js frontend, NestJS backend, PostgreSQL, Prisma, and cloud-native infrastructure.",
};
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Database,
  Server,
  Code2,
  Lock,
  FileCode,
  Download,
  Layout,
  Smartphone,
  Monitor,
  XCircle,
  CheckCircle2,
} from "lucide-react";

// ─── Stack by product type ───────────────────────────────────────────────────

const stackByType = [
  {
    type: "Static Website",
    icon: Layout,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    primary: "Astro",
    notes: "Preferred for content sites and low-JS delivery",
    stack: [
      {
        layer: "Framework",
        choice: "Astro",
        note: "Preferred; Next.js static export if it may later become a web app",
      },
      { layer: "Styling", choice: "TailwindCSS", note: "Shared style system across the company" },
      { layer: "Content", choice: "MDX / CMS / Notion-driven", note: "Keep editing simple" },
      { layer: "Deployment", choice: "Cloudflare Pages / Vercel", note: "Fast global delivery" },
      { layer: "Testing", choice: "Playwright / Vitest", note: "Visual and functional checks" },
    ],
    useCases: "Brochure sites, landing pages, marketing pages, docs, SEO-first pages.",
  },
  {
    type: "Web Application",
    icon: Code2,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    primary: "Next.js + NestJS",
    notes: "Full-stack React + structured backend",
    stack: [
      {
        layer: "Frontend",
        choice: "Next.js (App Router)",
        note: "Full-stack React application framework",
      },
      { layer: "UI", choice: "React + TypeScript", note: "Shared component model" },
      { layer: "Styling", choice: "TailwindCSS", note: "Uniform across products" },
      { layer: "API", choice: "NestJS", note: "Best fit for structured backend systems" },
      { layer: "ORM", choice: "Prisma", note: "Type-safe DB access and migrations" },
      { layer: "Database", choice: "PostgreSQL", note: "Default for all serious systems" },
      {
        layer: "Cache / Queue",
        choice: "Redis + BullMQ",
        note: "Caching, throttling, background jobs",
      },
      { layer: "State", choice: "Zustand + TanStack Query", note: "Local state vs server state" },
      { layer: "Auth", choice: "Auth.js / Better Auth", note: "Choose per project needs" },
      { layer: "Email", choice: "Resend + React Email", note: "Transactional and product emails" },
      { layer: "Deployment", choice: "Vercel / AWS", note: "Based on client control needs" },
      { layer: "Observability", choice: "Sentry", note: "Errors and performance" },
    ],
    useCases: "SaaS platforms, dashboards, ERPs, portals, internal systems, admin tools.",
  },
  {
    type: "Mobile App",
    icon: Smartphone,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    primary: "Expo (React Native)",
    notes: "Single codebase for iOS & Android",
    stack: [
      {
        layer: "Framework",
        choice: "React Native + Expo",
        note: "Single codebase for iOS and Android",
      },
      { layer: "Routing", choice: "Expo Router", note: "Simple file-based routing" },
      { layer: "Styling", choice: "NativeWind", note: "Tailwind-like style workflow" },
      { layer: "State", choice: "Zustand / React Query", note: "Reuse company patterns" },
      { layer: "Backend", choice: "NestJS API (shared)", note: "Same API as web products" },
    ],
    useCases: "iOS and Android companion apps, customer-facing apps, field apps, operations tools.",
  },
  {
    type: "Desktop App",
    icon: Monitor,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    primary: "Tauri (Electron fallback)",
    notes: "Tauri first for small fast binaries",
    stack: [
      { layer: "UI", choice: "React + TypeScript", note: "Reuse web components where possible" },
      { layer: "Primary shell", choice: "Tauri", note: "Preferred — small binary, secure, fast" },
      { layer: "Fallback shell", choice: "Electron", note: "When speed of delivery matters more" },
      { layer: "Local DB", choice: "SQLite", note: "Offline-first use cases" },
      {
        layer: "Packaging",
        choice: "Tauri bundler / Electron packager",
        note: "Cross-platform installers",
      },
    ],
    useCases:
      "Internal desktop tools, companion apps, offline-first utilities, secure local workflows.",
  },
  {
    type: "Backend / API / Automation",
    icon: Server,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    primary: "NestJS + TypeScript",
    notes: "Structured, scalable, maintainable",
    stack: [
      { layer: "Runtime", choice: "Node.js + TypeScript", note: "Shared language with frontend" },
      { layer: "Framework", choice: "NestJS", note: "Structured, scalable, maintainable" },
      { layer: "Validation", choice: "Zod", note: "Runtime safety + TS inference" },
      { layer: "Jobs", choice: "BullMQ + Redis", note: "Queues, retries, async tasks" },
      {
        layer: "Integration style",
        choice: "REST + Webhooks",
        note: "Default unless real reason to deviate",
      },
      { layer: "Logging", choice: "Structured JSON logging", note: "Production-friendly" },
      { layer: "Security", choice: "OWASP review + audits", note: "Baseline per project" },
    ],
    useCases: "APIs, integrations, workflows, scheduled jobs, business logic, internal services.",
  },
  {
    type: "Data & Analytics",
    icon: Database,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    primary: "PostgreSQL + Python",
    notes: "Keep logic close to the data",
    stack: [
      { layer: "Database", choice: "PostgreSQL", note: "Primary source and reporting source" },
      { layer: "ETL / batch", choice: "Python", note: "When data processing truly benefits" },
      {
        layer: "Analytics layer",
        choice: "SQL models / views",
        note: "Keep logic close to the data",
      },
      { layer: "BI", choice: "Dashboard tools", note: "Choose per client" },
      { layer: "Automation", choice: "Scheduled jobs", note: "Reusable and observable" },
    ],
    useCases: "Reporting, BI, dashboards, operational analytics, ETL, data cleanup, exports.",
  },
];

// ─── What to avoid ────────────────────────────────────────────────────────────

const avoidList = [
  { tech: "MongoDB", reason: "Poor fit for relational systems", useInstead: "PostgreSQL" },
  { tech: "Flutter", reason: "Separate ecosystem and language", useInstead: "Expo (React Native)" },
  {
    tech: "GraphQL by default",
    reason: "Added complexity without clear benefit",
    useInstead: "REST + Zod",
  },
  {
    tech: "Go (too early)",
    reason: "More backend language overhead at our scale",
    useInstead: "TypeScript / NestJS",
  },
  {
    tech: "console.log in production",
    reason: "Poor observability",
    useInstead: "Structured JSON logging",
  },
];

// ─── Infrastructure ───────────────────────────────────────────────────────────

const infra = [
  { layer: "Containers", choice: "Docker" },
  { layer: "CI/CD", choice: "GitHub Actions" },
  { layer: "IaC", choice: "Terraform" },
  { layer: "Monitoring", choice: "Sentry" },
  { layer: "Cloud", choice: "AWS / GCP / Azure / Vercel" },
  { layer: "Repo hygiene", choice: "Dependabot, linting, audits" },
];

export default function CapabilitiesPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl">
              TypeScript Is the <span className="text-brand-orange">Spine of the Company</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              Our tech stack is a company-wide standard — not a per-project decision. A consistent
              stack reduces hiring friction, shortens ramp-up time, and makes code reuse possible
              across every product type we build.
            </p>
          </div>
        </div>
      </section>

      {/* Core principles */}
      <section className="bg-bg-secondary border-border-base border-b py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Primary Language", val: "TypeScript" },
              { label: "Primary Database", val: "PostgreSQL" },
              { label: "Backend Style", val: "API-first, modular" },
              { label: "Frontend Pattern", val: "React-based, component-driven" },
              { label: "Deployment", val: "Cloud-native, observable" },
              { label: "Docs", val: "Notion-first, diagram-heavy" },
            ].map((item, i) => (
              <div
                key={i}
                className="border-border-base rounded-xl border bg-white p-4 text-center"
              >
                <p className="text-text-muted mb-1 text-[10px] font-bold tracking-widest uppercase">
                  {item.label}
                </p>
                <p className="text-brand-navy text-sm font-bold">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack by product type */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
              Recommended Stack by Product Type
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              We only deviate from these defaults when the architecture clearly benefits from
              another choice — and that deviation requires documentation.
            </p>
          </div>

          <div className="space-y-12">
            {stackByType.map((product, idx) => (
              <div key={idx} className="border-border-base rounded-3xl border bg-white p-8 md:p-10">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 ${product.bg} flex shrink-0 items-center justify-center rounded-xl`}
                    >
                      <product.icon className={`h-6 w-6 ${product.color}`} />
                    </div>
                    <div>
                      <h3 className="font-heading text-brand-navy text-xl font-bold">
                        {product.type}
                      </h3>
                      <p className="text-text-muted text-sm">{product.useCases}</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span
                      className={`${product.bg} ${product.color} rounded-full px-4 py-1.5 text-xs font-bold`}
                    >
                      Primary: {product.primary}
                    </span>
                  </div>
                </div>

                <div className="border-border-base overflow-hidden rounded-xl border">
                  <div className="bg-bg-secondary grid grid-cols-3 px-5 py-2.5 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    <span>Layer</span>
                    <span>Choice</span>
                    <span className="hidden md:block">Notes</span>
                  </div>
                  {product.stack.map((row, i) => (
                    <div
                      key={i}
                      className={`border-border-base grid grid-cols-3 border-t px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-bg-light"}`}
                    >
                      <span className="text-text-muted text-xs font-semibold">{row.layer}</span>
                      <span className="text-brand-navy text-xs font-bold">{row.choice}</span>
                      <span className="text-text-muted hidden text-xs md:block">{row.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-brand-navy mb-6 text-3xl font-bold">
                Infrastructure & Delivery
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Standard tooling across all projects. Every deployment goes through the same
                pipeline: lint → test → build → security checks → deploy.
              </p>
              <div className="border-border-base overflow-hidden rounded-2xl border bg-white">
                {infra.map((row, i) => (
                  <div
                    key={i}
                    className={`border-border-base flex items-center justify-between border-b px-6 py-4 last:border-0 ${i % 2 === 1 ? "bg-bg-light" : ""}`}
                  >
                    <span className="text-text-muted text-sm font-semibold">{row.layer}</span>
                    <span className="text-brand-navy text-sm font-bold">{row.choice}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="border-border-base rounded-2xl border bg-white p-7">
                <h3 className="font-heading text-brand-navy mb-2 font-bold">Delivery Pipeline</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Pull request", "Lint", "Test", "Build", "Security checks", "Deploy"].map(
                    (step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="bg-brand-orange/10 text-brand-orange rounded-full px-3 py-1 text-xs font-bold">
                          {step}
                        </span>
                        {i < 5 && <span className="text-text-muted text-xs">→</span>}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col gap-6">
                  <ShieldCheck className="text-brand-teal h-12 w-12" />
                  <h3 className="font-heading text-brand-navy text-lg font-bold">Security-First</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    OWASP review on every production system. Secrets via env vars. HTTPS + HSTS
                    enforced.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <Lock className="text-brand-orange h-12 w-12" />
                  <h3 className="font-heading text-brand-navy text-lg font-bold">Data Privacy</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    PII handled with highest standards of confidentiality. Data flow diagrams
                    required for all PII systems.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <FileCode className="text-brand-gold h-12 w-12" />
                  <h3 className="font-heading text-brand-navy text-lg font-bold">99.9% SLA</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Tiered support agreements and uptime SLAs for critical systems. Incident
                    runbooks required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to avoid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-heading text-brand-navy mb-3 text-3xl font-bold">
              What We Avoid by Default
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Exceptions require documentation and technical lead approval. A new choice that fits
              the stack is always preferred over a novel one.
            </p>
          </div>
          <div className="border-border-base overflow-hidden rounded-2xl border bg-white">
            <div className="bg-brand-navy grid grid-cols-3 px-6 py-3 text-xs font-bold tracking-widest text-white uppercase">
              <span>Technology</span>
              <span>Why We Avoid It</span>
              <span>Use Instead</span>
            </div>
            {avoidList.map((row, i) => (
              <div
                key={i}
                className={`border-border-base grid grid-cols-3 items-center border-b px-6 py-4 last:border-0 ${i % 2 === 1 ? "bg-bg-light" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span className="text-brand-navy text-sm font-semibold">{row.tech}</span>
                </div>
                <span className="text-text-secondary text-sm">{row.reason}</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-teal h-4 w-4 shrink-0" />
                  <span className="text-brand-teal text-sm font-semibold">{row.useInstead}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick decision matrix */}
      <section className="bg-bg-secondary py-16">
        <div className="container-custom">
          <h2 className="font-heading text-brand-navy mb-6 text-2xl font-bold">
            Quick Decision Matrix
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              { q: "Need content-first site", a: "Astro" },
              { q: "Need product app with backend", a: "Next.js + NestJS" },
              { q: "Need iOS and Android app", a: "Expo (React Native)" },
              { q: "Need desktop with small footprint", a: "Tauri" },
              { q: "Need desktop quickly", a: "Electron" },
              { q: "Need APIs / integrations", a: "NestJS" },
              { q: "Need reporting / ETL", a: "PostgreSQL + Python" },
            ].map((item, i) => (
              <div
                key={i}
                className="border-border-base flex items-center justify-between rounded-xl border bg-white px-5 py-4"
              >
                <span className="text-text-secondary text-sm">{item.q}</span>
                <span className="text-brand-orange ml-4 shrink-0 text-sm font-bold">
                  → {item.a}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

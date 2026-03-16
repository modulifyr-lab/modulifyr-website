import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Selected Case Studies & Portfolio | Modulifyr",
  description:
    "Case studies from Modulifyr's engineering work — modular ERP systems, custom platforms, and legacy modernisation projects for clients in Nepal and globally.",
};
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Target,
} from "lucide-react";

// ─── Case study data ──────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: "planning-bord",
    label: "Public Case Study",
    labelColor: "text-brand-orange",
    title: "The Planning Bord",
    subtitle: "Comprehensive ERP System",
    tags: ["React", "Vercel", "TailwindCSS", "Modular Architecture"],
    liveUrl: "https://the-planning-bord.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    problem:
      "The client was managing inventory, project tracking, HR, and finance across four separate tools with no shared data. Staff were manually reconciling records between systems every Friday — a process that took 3 hours and still produced mismatches. Each new team member needed to be onboarded to four separate tools.",
    architecture:
      "We built a single modular platform where each function (inventory, HR, projects, finance) operates as a discrete module with clean data boundaries. Modules share a common data layer so inventory changes immediately reflect in finance reporting. The modular design meant the client's specific workflow automations could be added without touching unrelated modules.",
    outcome:
      "Reduced the Friday reconciliation process from 3 hours to automated — zero manual effort. New staff onboarding dropped from multi-tool setup to one system. The client has since added two new modules (client portal, automated billing) without any rebuild of the existing platform.",
    metrics: [
      { label: "Manual reconciliation time", value: "3hrs → 0" },
      { label: "Systems staff must learn", value: "4 → 1" },
      { label: "Modules added post-launch", value: "2 without rebuild" },
    ],
  },
];

const nda = [
  {
    title: "Healthcare Platform — Compliance Module Swap",
    type: "Healthcare / Nepal",
    challenge:
      "Six months into a build, national compliance requirements changed. The entire billing and data-handling approach needed to change.",
    result:
      "Because the system was modular from day one, the compliance-affected modules were replaced without touching anything else. No rebuild, no deadline crisis.",
    quote: true,
  },
  {
    title: "School ERP — Government Board Integration",
    type: "Education / Nepal",
    challenge:
      "A school group needed their internal student records to generate reports in the exact format required by two different exam boards, which changed requirements annually.",
    result:
      "Built a reporting module that is maintained independently of student records. Board format changes are handled as module updates, not system changes.",
    quote: false,
  },
  {
    title: "Retail POS — Multi-branch Inventory",
    type: "Retail / Nepal",
    challenge:
      "A retailer with four branches was running separate POS systems with no shared inventory view. Staff were calling between branches to check stock.",
    result:
      "Unified inventory module connected to all four branch POS systems. Real-time stock view across all locations. Built in 8 weeks on a fixed-fee pilot.",
    quote: false,
  },
];

export default function WorkPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-bg-light border-border-base border-b py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-brand-navy mb-6 text-4xl font-bold md:text-6xl">
              Proven Technical <span className="text-brand-orange">Execution</span>
            </h1>
            <p className="text-text-secondary mb-8 text-xl leading-relaxed">
              Case studies documenting real problems, the architectural decisions we made, and what
              actually happened. Not portfolio screenshots — engineering outcomes.
            </p>
            <div className="text-brand-teal flex items-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <ShieldCheck className="h-5 w-5" /> Most Enterprise Work Available Under NDA Only
            </div>
          </div>
        </div>
      </section>

      {/* Public Case Study */}
      {caseStudies.map((cs) => (
        <section key={cs.id} className="py-24">
          <div className="container-custom">
            <div className="mb-10 flex flex-col gap-2">
              <span className={`text-xs font-bold tracking-widest uppercase ${cs.labelColor}`}>
                {cs.label}
              </span>
              <h2 className="font-heading text-brand-navy text-4xl font-bold">{cs.title}</h2>
              <p className="text-text-muted text-sm font-semibold tracking-widest uppercase">
                {cs.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              {/* Left: image + metrics */}
              <div className="flex flex-col gap-6">
                <div className="border-border-base group relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="from-brand-navy/70 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-8">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="bg-bg-secondary border-border-base rounded-2xl border p-5 text-center"
                    >
                      <p className="text-brand-orange font-heading mb-1 text-lg leading-tight font-bold">
                        {m.value}
                      </p>
                      <p className="text-text-muted text-xs leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                <Link href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="group flex w-full items-center justify-center gap-2">
                    View Live Project{" "}
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </div>

              {/* Right: problem → architecture → outcome */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                    <h3 className="font-heading text-brand-navy font-bold">The Problem</h3>
                  </div>
                  <p className="text-text-secondary pl-11 text-sm leading-relaxed">{cs.problem}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-teal/10 border-brand-teal/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
                      <Layers className="text-brand-teal h-4 w-4" />
                    </div>
                    <h3 className="font-heading text-brand-navy font-bold">
                      The Architecture Decision
                    </h3>
                  </div>
                  <p className="text-text-secondary pl-11 text-sm leading-relaxed">
                    {cs.architecture}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50">
                      <Target className="h-4 w-4 text-green-600" />
                    </div>
                    <h3 className="font-heading text-brand-navy font-bold">The Outcome</h3>
                  </div>
                  <p className="text-text-secondary pl-11 text-sm leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* NDA Case Studies */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="mb-12">
            <span className="text-text-muted mb-2 block text-xs font-bold tracking-widest uppercase">
              Under NDA
            </span>
            <h2 className="font-heading text-brand-navy mb-3 text-3xl font-bold">
              Additional Work
            </h2>
            <p className="text-text-secondary max-w-xl">
              Anonymised summaries of enterprise work. Full details available after NDA signing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {nda.map((item, i) => (
              <div
                key={i}
                className="border-border-base flex flex-col gap-5 rounded-2xl border bg-white p-8"
              >
                <div>
                  <p className="text-brand-orange mb-1 text-xs font-bold tracking-widest uppercase">
                    {item.type}
                  </p>
                  <h3 className="font-heading text-brand-navy text-lg font-bold">{item.title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <p className="text-text-secondary text-xs leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <p className="text-text-secondary text-xs leading-relaxed">{item.result}</p>
                  </div>
                </div>
                {item.quote && (
                  <p className="text-text-muted border-brand-orange border-l-2 pl-3 text-xs italic">
                    "We swapped out the affected modules without touching anything else. No rebuild,
                    no deadline crisis." — CTO
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/request-proposal">
              <Button variant="outline">Request Anonymised Architecture Samples</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dedicated Product Team — named offering, addresses market gap from research */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <span className="bg-brand-orange/20 text-brand-orange w-fit rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase">
                Available Engagement Model
              </span>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Dedicated <span className="text-brand-orange">Product Team</span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                Most Nepal IT firms sell project-based work. We also offer a dedicated team model:
                2–3 engineers embedded in your product long-term, operating as an extension of your
                own team. Monthly retainer, no re-scoping overhead, no handoff risk.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Best suited for startups and scale-ups that have a working product and need reliable
                ongoing engineering capacity without the cost and overhead of hiring locally.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Engagement type", val: "Monthly retainer" },
                  { label: "Minimum term", val: "3 months" },
                  { label: "Team size", val: "2–4 engineers" },
                  { label: "Onboarding", val: "2 weeks" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-text-muted text-xs">{item.label}</p>
                    <p className="mt-0.5 font-bold text-white">{item.val}</p>
                  </div>
                ))}
              </div>
              <Link href="/request-proposal" className="w-fit">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                  Discuss Dedicated Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10">
              <h3 className="font-heading text-xl font-bold text-white">
                How it's different from project work
              </h3>
              <div className="space-y-5">
                {[
                  {
                    label: "Scope changes",
                    project: "New SOW required",
                    team: "Handled in sprint",
                  },
                  {
                    label: "Context switching",
                    project: "Re-onboarding each phase",
                    team: "Team already knows your codebase",
                  },
                  {
                    label: "Delivery risk",
                    project: "Handoff at project end",
                    team: "Continuous ownership",
                  },
                  { label: "Budget", project: "Variable by milestone", team: "Fixed monthly cost" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 text-xs">
                    <span className="text-text-muted font-semibold">{row.label}</span>
                    <span className="rounded bg-red-500/10 px-2 py-1 text-center text-red-300/80">
                      {row.project}
                    </span>
                    <span className="rounded bg-green-500/10 px-2 py-1 text-center text-green-300/80">
                      {row.team}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="bg-bg-secondary py-20">
        <div className="container-custom text-center">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <h2 className="font-heading text-brand-navy text-3xl font-bold">
              Need to see the thinking behind our code?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              We can provide a live code walkthrough or detailed documentation for our public
              samples under NDA.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about/technical-standards">
                <Button size="lg">View Technical Standards</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Speak with an Engineer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

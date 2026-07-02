"use client";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Clock,
  Settings,
  ChevronRight,
  XCircle,
  AlertCircle,
  GitMerge,
  RefreshCw,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";

const tiers = [
  {
    name: "Tier 1 — Basic Connection",
    priceNepal: "NPR 40,000 – 80,000",
    priceInternational: "$300 – $600",
    duration: "1–2 weeks",
    bestFor: "Two systems that need to talk — simple trigger and action flows",
    description:
      "You have two platforms that currently require manual data entry between them. We build the connection, document it, and hand it over. No complex logic, no bidirectional sync.",
    included: [
      "2 systems connected",
      "Simple trigger → action flow — e.g. form submission creates a record elsewhere",
      "Basic error notification — you get alerted when something breaks",
      "Documentation of the flow so any developer can maintain it",
    ],
    notIncluded: [
      "Bidirectional sync",
      "Retry logic or advanced error handling",
      "Monitoring dashboard",
      "More than 2 systems",
      "Subscriptions to any connected platform",
    ],
    highlight: false,
  },
  {
    name: "Tier 2 — Multi-System Sync",
    priceNepal: "NPR 80,000 – 1,60,000",
    priceInternational: "$600 – $1,200",
    duration: "2–4 weeks",
    bestFor: "3 to 5 systems that need reliable data sync with error recovery",
    description:
      "Multiple systems that need to stay in sync, including cases where data flows in both directions. Built with retry logic so temporary failures self-recover without manual intervention.",
    included: [
      "3–5 systems connected",
      "Bidirectional sync where required",
      "Retry logic — failed operations automatically retry before alerting",
      "Basic monitoring — visibility into flow health",
      "Error alerting with context so you know what broke and why",
      "Full documentation of all flows",
    ],
    notIncluded: [
      "More than 5 systems",
      "Complex conditional branching logic",
      "Monitoring dashboard UI",
      "Subscriptions to any connected platform",
    ],
    highlight: true,
  },
  {
    name: "Tier 3 — Complex Pipeline",
    priceNepal: "NPR 1,60,000 – 2,65,000",
    priceInternational: "$1,200 – $2,000",
    duration: "4–6 weeks",
    bestFor: "6+ systems or flows with conditional logic and branching",
    description:
      "Large-scale integration work — multiple systems with complex conditional flows, branching logic, and strict reliability requirements. Built with full error handling and a monitoring setup.",
    included: [
      "6 or more systems connected, or highly complex logic in fewer systems",
      "Multi-directional flows with conditional branching",
      "Full error handling with alerting and context",
      "Monitoring setup — flow health visibility",
      "Comprehensive documentation covering all flows, error states, and recovery steps",
    ],
    notIncluded: [
      "Custom monitoring dashboard UI — monitoring is tool-based, not a built interface",
      "Subscriptions to any connected platform",
      "Ongoing maintenance beyond the build — handled separately",
    ],
    highlight: false,
  },
];

const whatWeConnect = [
  { icon: GitMerge, label: "APIs & webhooks", desc: "REST, GraphQL, or webhook-based connections" },
  { icon: RefreshCw, label: "Data sync jobs", desc: "Scheduled or event-driven sync between platforms" },
  { icon: Activity, label: "n8n workflows", desc: "Visual workflow automation — n8n subscription paid by client" },
];

export default function AutomationLayerPage() {
  const { region } = useRegion();
  const isNepal = region === "nepal";

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-brand-orange" />
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                Integrations & Automation
              </span>
            </div>
            <h1 className="font-heading mb-6 text-4xl font-bold md:text-6xl">
              Automation Layer
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              Connect your systems, eliminate manual data entry, and build reliable flows between
              platforms. Three tiers based on how many systems are involved and how complex the
              logic needs to be.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/request-proposal">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                  Request an Automation Layer
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Ask a Question First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we connect */}
      <section className="bg-bg-secondary border-border-base border-b py-10">
        <div className="container-custom">
          <p className="text-text-muted mb-6 text-xs font-bold tracking-widest uppercase">
            What we build
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatWeConnect.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-brand-orange/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <item.icon className="text-brand-orange h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-brand-navy mb-1 text-sm font-bold">{item.label}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-heading text-brand-navy mb-3 text-3xl font-bold">
              Three Tiers — Priced by System Count and Complexity
            </h2>
            <p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
              The main drivers of price are how many systems are connected and how complex the
              logic needs to be. Not sure where your project lands? Describe it and we will advise.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Card
                key={i}
                className={`relative flex flex-col gap-5 ${
                  tier.highlight
                    ? "border-brand-orange shadow-xl ring-1 ring-brand-orange/20"
                    : ""
                }`}
              >
                {tier.highlight && (
                  <div className="bg-brand-orange absolute top-0 left-8 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                    Most Common
                  </div>
                )}

                <div>
                  <h3 className="text-brand-navy mb-1 text-base font-bold">{tier.name}</h3>
                  <div className="font-heading text-brand-orange text-2xl font-bold">
                    {isNepal ? tier.priceNepal : tier.priceInternational}
                  </div>
                  <div className="text-brand-teal mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase">
                    <Clock className="h-3 w-3" /> {tier.duration}
                  </div>
                </div>

                <p className="text-text-muted border-border-base border-t pt-3 text-xs font-semibold uppercase tracking-wider">
                  Best for: {tier.bestFor}
                </p>

                <p className="text-text-secondary text-sm leading-relaxed">{tier.description}</p>

                <div>
                  <p className="text-brand-navy mb-3 text-xs font-bold uppercase tracking-widest">
                    Included
                  </p>
                  <ul className="space-y-2">
                    {tier.included.map((d, j) => (
                      <li key={j} className="text-text-secondary flex items-start gap-2 text-sm">
                        <CheckCircle2 className="text-brand-teal mt-0.5 h-4 w-4 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-text-muted mb-3 text-xs font-bold uppercase tracking-widest">
                    Not included
                  </p>
                  <ul className="space-y-2">
                    {tier.notIncluded.map((d, j) => (
                      <li key={j} className="text-text-muted flex items-start gap-2 text-xs">
                        <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-300" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-2">
                  <Link href="/request-proposal" className="w-full">
                    <Button
                      variant={tier.highlight ? "primary" : "outline"}
                      className="group w-full justify-between"
                    >
                      Request This Tier
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third-party disclaimer */}
      <section className="bg-bg-secondary py-12">
        <div className="container-custom">
          <div className="border-border-base max-w-3xl rounded-2xl border bg-white p-8">
            <div className="mb-4 flex items-start gap-3">
              <AlertCircle className="text-brand-orange mt-0.5 h-5 w-5 shrink-0" />
              <h3 className="text-brand-navy font-bold">What you are responsible for</h3>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                API credentials, access tokens, and admin access to all systems being connected —
                we cannot build integrations without this
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                Timely responses during the build window — blocked credentials or missing access
                stall the entire project
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                Any documentation on the APIs or systems involved if available
              </li>
            </ul>
            <p className="text-text-muted border-border-base mt-6 border-t pt-4 text-xs leading-relaxed">
              <strong className="text-brand-navy">
                Third-party tool costs are entirely your responsibility.
              </strong>{" "}
              Modulifyr does not cover, pay for, or manage subscriptions to any platform being
              integrated — including but not limited to n8n cloud, Make, Zapier, any SaaS
              subscription, API usage fees, or any other external service. These are direct client
              costs, billed to and owned by the client.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-brand-navy max-w-3xl rounded-3xl p-12 text-white">
            <h2 className="font-heading mb-3 text-2xl font-bold">
              Not sure which tier covers your setup?
            </h2>
            <p className="text-text-muted mb-8 text-sm leading-relaxed">
              List the systems you need connected and what data needs to move between them. We will
              tell you which tier fits and whether your setup has any scope complications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-brand-orange hover:bg-brand-orange/90">
                  Describe Your Setup
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Back to All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  MapPin,
  Target,
  ShieldCheck,
  Globe,
  Briefcase,
  ArrowRight,
  Heart,
  Wifi,
  Zap,
  TrendingUp,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Modulifyr | Rijan Mainali — Founder, Birtamode Nepal",
  description:
    "Modulifyr is a software development company founded by Rijan Mainali in Birtamode, Nepal. We build modular, scalable systems for SMBs in education, healthcare, retail, and commerce.",
};

// ─── Schema.org — Person page-level override ──────────────────────────────────
const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://modulifyr.vercel.app/#founder",
  name: "Rijan Mainali",
  jobTitle: "Founder & Lead Engineer",
  image: "https://modulifyr.vercel.app/rijan-mainali.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Modulifyr",
    url: "https://modulifyr.vercel.app",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Birtamode",
    addressRegion: "Jhapa",
    addressCountry: "NP",
  },
};

const values = [
  {
    icon: Target,
    title: "Engineering Over Promises",
    desc: "We don't sell vague roadmaps. Every project starts with a concrete architecture document and a fixed scope you can hold us to.",
  },
  {
    icon: ShieldCheck,
    title: "Security From Line One",
    desc: "Every module we write is reviewed against OWASP standards before it ships. Security is architecture, not an afterthought.",
  },
  {
    icon: Users,
    title: "Long-term Over Handoffs",
    desc: "We build for the team that comes after us — clean code, clear documentation, maintainable systems.",
  },
  {
    icon: Heart,
    title: "Systems for Real People",
    desc: "We build to eliminate hours of daily manual work that a well-designed system can handle in seconds.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Page-level founder schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-bg-light border-border-base relative overflow-hidden border-b py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="font-heading text-brand-navy mb-8 text-4xl leading-tight font-bold md:text-6xl">
              We Build the Systems That <span className="text-brand-orange">Keep Working</span>
            </h1>
            <p className="text-text-secondary mb-6 text-xl leading-relaxed">
              Modulifyr started because we kept seeing the same problem: businesses in Nepal and
              across the region outgrowing their software faster than vendors could keep up.
              Off-the-shelf systems that couldn't be customized. Custom builds that collapsed the
              moment requirements changed.
            </p>
            <p className="text-text-secondary mb-10 text-lg leading-relaxed">
              We're headquartered in{" "}
              <span className="text-brand-navy font-bold">Birtamode, Jhapa, Nepal</span> and work
              with organizations across Nepal and internationally — building software designed for
              how your business actually works.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about/technical-standards">
                <Button size="lg">Our Technical Standards</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
      </section>

      {/* ── Values ─────────────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
              What We Actually Believe
            </h2>
            <p className="text-text-secondary leading-relaxed italic">
              Not our marketing copy — the things that cause arguments in our team meetings.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="border-border-base flex flex-col items-center gap-4 rounded-2xl border bg-white p-8 text-center"
              >
                <div className="bg-bg-secondary flex h-12 w-12 items-center justify-center rounded-xl">
                  <val.icon className="text-brand-orange h-6 w-6" aria-hidden="true" />
                </div>
                <h4 className="font-heading text-brand-navy font-bold">{val.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder / Team ─────────────────────────────────────────────────── */}
      <section className="py-24" id="team">
        <div className="container-custom">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 className="font-heading text-brand-navy text-4xl font-bold">The Team</h2>
              <p className="text-text-secondary text-lg">
                Right now, Modulifyr is one person. One founder, one city, one conviction — that the
                businesses around us deserve software built specifically for how they work.
              </p>
            </div>
            {/* Active hiring badge */}
            <div className="bg-brand-orange/5 border-brand-orange/20 flex shrink-0 items-center gap-3 rounded-full border px-5 py-3">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                Actively seeking collaborators
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Founder card */}
            <article
              aria-label="Rijan Mainali — Founder & Lead Engineer"
              className="bg-brand-navy flex flex-col gap-6 rounded-3xl p-8"
            >
              <div className="flex items-center gap-5">
                {/* ── FOUNDER PHOTO ── */}
                <div className="ring-brand-orange/40 relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2">
                  <Image
                    src="/rijan-mainali.jpg"
                    alt="Rijan Mainali, Founder of Modulifyr"
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Rijan Mainali</h3>
                  <p className="text-brand-orange text-sm font-semibold">
                    Founder &amp; Lead Engineer
                  </p>
                  <p className="text-text-muted mt-1 flex items-center gap-1 text-xs">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    Birtamode, Jhapa, Nepal
                  </p>
                </div>
              </div>

              <p className="text-text-muted text-sm leading-relaxed">
                Built Modulifyr from scratch — no funding, no team, just conviction and code. Every
                system we ship is designed, architected, and delivered from Birtamode. The goal is
                simple: give businesses in Nepal and beyond software that actually works the way
                they work.
              </p>

              <div className="mt-2 grid grid-cols-3 gap-3">
                {[
                  { icon: Coffee, label: "Late nights" },
                  { icon: Globe, label: "Global reach" },
                  { icon: Zap, label: "Ships fast" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                  >
                    <item.icon
                      className="text-brand-teal mx-auto mb-1.5 h-4 w-4"
                      aria-hidden="true"
                    />
                    <p className="text-text-muted text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Open positions */}
            <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
              <p className="text-text-muted mb-5 text-xs font-bold tracking-widest uppercase">
                Open Positions (Equity / Volunteer)
              </p>
              <div className="space-y-3">
                {[
                  "Senior Full-stack Engineer (React / RSC)",
                  "Cloud Infrastructure Engineer (SRE Focus)",
                  "System Design Intern (Birtamode Office)",
                ].map((role, i) => (
                  <div
                    key={i}
                    className="border-border-base flex items-center justify-between gap-4 rounded-xl border bg-white px-4 py-3"
                  >
                    <span className="text-brand-navy text-sm font-medium">{role}</span>
                    <Link
                      href="/careers"
                      aria-label={`Apply for ${role}`}
                      className="text-brand-orange flex shrink-0 items-center gap-1 text-xs font-bold hover:underline"
                    >
                      Apply <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join the team ──────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-4xl font-bold md:text-5xl">
                Join the <span className="text-brand-orange">Team</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                We're building something real from the ground up. If you want to own entire modules
                — not just tickets — and you care about clean architecture, we want to hear from
                you.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: TrendingUp, text: "Defined skill progression tracks" },
                  { icon: Briefcase, text: "Own entire modules, not just tickets" },
                  { icon: Globe, text: "Work on real systems used by real businesses" },
                  { icon: Users, text: "Direct access to founder from day one" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                    <item.icon
                      className="text-brand-gold mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-text-muted text-sm leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/careers" className="w-fit">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 group">
                  View Career Openings{" "}
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
            <div className="group relative aspect-video overflow-hidden rounded-3xl shadow-2xl grayscale">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940"
                alt="Team collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Location ───────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-bg-light border-border-base flex flex-col items-start gap-12 rounded-[3rem] border p-12 md:flex-row md:p-16">
            <div className="flex flex-grow flex-col gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-orange h-8 w-8" aria-hidden="true" />
                <h3 className="font-heading text-brand-navy text-3xl font-bold tracking-tight">
                  Birtamode, Jhapa
                </h3>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                We're based in Birtamode, one of the fastest-growing business hubs in eastern Nepal.
                We serve clients across Nepal and work remotely with organizations internationally.
                Our timezone (NPT, UTC+5:45) gives us natural overlap with European morning hours
                and Asian business hours.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border-border-base flex items-start gap-3 rounded-xl border bg-white p-4">
                  <Wifi className="text-brand-teal mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-brand-navy mb-0.5 text-xs font-bold">
                      Redundant Connectivity
                    </p>
                    <p className="text-text-muted text-xs leading-snug">
                      Primary fibre + 4G failover.
                    </p>
                  </div>
                </div>
                <div className="border-border-base flex items-start gap-3 rounded-xl border bg-white p-4">
                  <Zap className="text-brand-teal mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-brand-navy mb-0.5 text-xs font-bold">Backup Power</p>
                    <p className="text-text-muted text-xs leading-snug">
                      UPS and inverter backup. Zero missed deadlines.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="outline" className="w-fit">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="relative h-80 w-full shrink-0 overflow-hidden rounded-3xl border-4 border-white shadow-2xl md:w-80">
              <Image
                src="https://images.unsplash.com/photo-1544806342-99999bc0420b?auto=format&fit=crop&q=80&w=2670"
                alt="Nepal landscape"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

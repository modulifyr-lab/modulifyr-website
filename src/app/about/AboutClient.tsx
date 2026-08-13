'use client'

import * as React from "react";
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
  Gamepad2,
  ShoppingBag,
  ExternalLink,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import GradientMesh from "@/components/ui/GradientMesh";

interface ValueItem {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

interface TeamMember {
  name: string;
  fullName: string;
  title: string;
  linkedin: string | null;
  portfolio: string | null;
  isFounder: boolean;
  subtext?: string;
  quote?: string;
}

interface DivisionRole {
  icon: React.ComponentType<any>;
  division: string;
  tagline: string;
  color: string;
  bg: string;
  examples: string;
}

const values: ValueItem[] = [
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

const teamMembers: TeamMember[] = [
  {
    name: "Rijan M",
    fullName: "Rijan Mainali",
    title: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/rijan-mainali/",
    portfolio: "https://rijanmainali.vercel.app",
    isFounder: true,
  },
  {
    name: "Rojeena M",
    fullName: "Rojeena Maharjan",
    title: "Marketing Manager",
    quote: "Believe in yourself, stay true to who you are, and keep growing every day.",
    linkedin: "https://www.linkedin.com/in/rojeena-maharjan-a73b6b265/",
    portfolio: null,
    isFounder: false,
  },
  {
    name: "Aadesh L",
    fullName: "Aadesh Limbu",
    title: "Backend Engineer",
    subtext: "Specializes in high-performance REST APIs & database optimization.",
    linkedin: "https://www.linkedin.com/in/aadesh-limbu-b637a8414",
    portfolio: null,
    isFounder: false,
  },
  {
    name: "Mallika R",
    fullName: "Mallika Razbanshi",
    title: "Backend Engineer",
    subtext: "Specializes in secure data structures & scalable cloud integrations.",
    linkedin: "https://www.linkedin.com/in/mallika-razbanshi-78b506414",
    portfolio: null,
    isFounder: false,
  },
  {
    name: "Ishak L",
    fullName: "Ishak Limbu",
    title: "Narrative Designer",
    linkedin: "https://www.linkedin.com/in/ishak-limbu-b3b48b414/",
    portfolio: null,
    isFounder: false,
  },
  {
    name: "Roshan K",
    fullName: "Roshan Khanal",
    title: "Engine Programmer",
    linkedin: "https://www.linkedin.com/in/roshan-khanal-a8a619414",
    portfolio: null,
    isFounder: false,
  },
  {
    name: "Sumina L",
    fullName: "Sumina Laksam",
    title: "UI/UX Artist",
    linkedin: "https://www.linkedin.com/in/sumina-laksam29",
    portfolio: null,
    isFounder: false,
  },
];

const divisionRoles: DivisionRole[] = [
  {
    icon: Globe,
    division: "Modulifyr",
    tagline: "B2B Custom Software Consultancy",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    examples: "Engineers, Designers, Product, Sales, Marketing",
  },
  {
    icon: Gamepad2,
    division: "Onyxlabs",
    tagline: "Desktop Game Studio (Unity / C#) — a division of Modulifyr Enterprise Pvt. Ltd.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    examples: "Programmers, Artists, Game Designers, Audio",
  },
  {
    icon: ShoppingBag,
    division: "Modullex",
    tagline: "B2C Software Storefront",
    color: "text-brand-gold",
    bg: "bg-brand-gold/20",
    examples: "Engineers, Growth, Product, Customer Success",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(" ");
  const letters = parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  return (
    <div className="bg-brand-navy flex h-full w-full items-center justify-center">
      <span className="font-heading text-2xl font-bold text-white">{letters}</span>
    </div>
  );
}

// Custom 3D tilt article wrapper for team cards
function TiltArticle({
  children,
  className,
  style,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = React.useRef<HTMLElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      "ontouchstart" in window
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 6; // max ~6deg
    const rotateY = ((x - centerX) / centerX) * 6; // max ~6deg
    el.style.transition = "none";
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.2s ease-out, shadow 0.2s ease-out";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <article
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", ...style }}
      {...props}
    >
      {children}
    </article>
  );
}

export default function AboutClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-bg-light border-border-base relative overflow-hidden border-b py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Reveal variant="fade-up">
              <h1 className="font-heading text-brand-navy mb-8 text-4xl leading-tight font-bold md:text-6xl">
                We Build the Systems That <span className="text-brand-orange">Keep Working</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <p className="text-text-secondary mb-6 text-xl leading-relaxed">
                Modulifyr started because we kept seeing the same problem: businesses in Nepal and
                across the region outgrowing their software faster than vendors could keep up.
                Off-the-shelf systems that couldn't be customized. Custom builds that collapsed the
                moment requirements changed.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <p className="text-text-secondary mb-10 text-lg leading-relaxed">
                We're headquartered in{" "}
                <span className="text-brand-navy font-bold">Birtamode, Jhapa, Nepal</span> and work
                with organizations across Nepal and internationally — building software designed for
                how your business actually works.
              </p>
            </Reveal>
            <Reveal variant="fade-up" delay={300}>
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
            </Reveal>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
      </section>

      {/* ── Values ─────────────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary py-24">
        <div className="container-custom">
          <Reveal variant="fade-scale">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
                What We Actually Believe
              </h2>
              <p className="text-text-secondary leading-relaxed italic">
                Not our marketing copy — the things that cause arguments in our team meetings.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <Reveal key={idx} variant="fade-scale" delay={idx * 100}>
                <div
                  className="border-border-base flex h-full flex-col items-center gap-4 rounded-2xl border bg-white p-8 text-center"
                >
                  <div className="bg-bg-secondary flex h-12 w-12 items-center justify-center rounded-xl">
                    <val.icon className="text-brand-orange h-6 w-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-brand-navy font-bold">{val.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────────────────────── */}
      <section className="py-24" id="team">
        <div className="container-custom">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal variant="fade-up">
              <div className="flex max-w-2xl flex-col gap-4">
                <h2 className="font-heading text-brand-navy text-4xl font-bold">The Team</h2>
                <p className="text-text-secondary text-lg">
                  Six people building three divisions from the ground up — consultancy, game studio,
                  and consumer software. Early stage, expanding across all three.
                </p>
              </div>
            </Reveal>
            {/* Active hiring badge */}
            <Reveal variant="fade-scale" delay={150}>
              <div className="bg-brand-orange/5 border-brand-orange/20 flex shrink-0 items-center gap-3 rounded-full border px-5 py-3">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
                </span>
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                  Actively seeking collaborators
                </span>
              </div>
            </Reveal>
          </div>

          {/* ── Team grid ── */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <Reveal key={idx} variant="fade-up" delay={idx * 80}>
                <TiltArticle
                  aria-label={`${member.fullName} — ${member.title}`}
                  className={`border-border-base group relative flex h-full flex-col gap-5 rounded-3xl border bg-white p-7 transition-shadow hover:shadow-md ${member.isFounder ? "border-t-brand-orange border-t-4" : ""}`}
                >
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-4">
                    <div className="ring-border-base relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-1">
                      {member.isFounder ? (
                        <Image
                          src="/rijan-mainali.jpg"
                          alt={`${member.fullName}, ${member.title} at Modulifyr`}
                          fill
                          sizes="56px"
                          className="object-cover object-top"
                          priority
                        />
                      ) : (
                        <Initials name={member.name} />
                      )}
                    </div>
                    <div>
                      {/* Name — clickable if portfolio exists, plain otherwise */}
                      {member.portfolio ? (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading text-brand-navy group/link inline-flex items-center gap-1.5 font-bold transition-colors hover:text-brand-orange"
                        >
                          {member.fullName}
                          <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" aria-hidden="true" />
                        </a>
                      ) : (
                        <p className="font-heading text-brand-navy font-bold">{member.fullName}</p>
                      )}
                      <p className="text-brand-orange mt-0.5 text-xs font-semibold">
                        {member.title}
                      </p>
                      {"subtext" in member && member.subtext && (
                        <p className="text-text-muted mt-1 text-xs leading-relaxed">
                          {member.subtext}
                        </p>
                      )}
                      {"quote" in member && member.quote && (
                        <p className="text-text-muted mt-1 text-xs leading-relaxed italic">
                          "{member.quote}"
                        </p>
                      )}
                      {member.isFounder && (
                        <p className="text-text-muted mt-0.5 flex items-center gap-1 text-xs">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          Birtamode, Jhapa, Nepal
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Founder blurb */}
                  {member.isFounder && (
                    <p className="text-text-muted text-xs leading-relaxed">
                      Built Modulifyr from scratch — no funding, no team, just conviction and code.
                      Every system we ship is designed, architected, and delivered from Birtamode.
                    </p>
                  )}

                  {/* Action links */}
                  <div className="mt-auto flex items-center gap-3">
                    {/* LinkedIn */}
                    {member.linkedin ? (
                      <Magnetic radius={8}>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.fullName} on LinkedIn`}
                          className="border-border-base text-text-muted hover:border-brand-teal hover:text-brand-teal flex h-8 w-8 items-center justify-center rounded-lg border transition-colors"
                        >
                          <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </Magnetic>
                    ) : (
                      <span
                        aria-label="No LinkedIn profile"
                        title="No LinkedIn profile"
                        className="border-border-base text-text-muted flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border opacity-30"
                      >
                        <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    )}

                    {/* Portfolio */}
                    {member.portfolio ? (
                      <Magnetic radius={8}>
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.fullName}'s portfolio`}
                          className="border-border-base text-text-muted hover:border-brand-orange hover:text-brand-orange flex h-8 w-8 items-center justify-center rounded-lg border transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </Magnetic>
                    ) : (
                      <span
                        aria-label="No portfolio"
                        title="No portfolio"
                        className="border-border-base text-text-muted flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border opacity-30"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    )}

                    {/* Founder extras */}
                    {member.isFounder && (
                      <div className="ml-auto grid grid-cols-3 gap-2">
                        {[
                          { icon: Coffee, label: "Late nights" },
                          { icon: Globe, label: "Global reach" },
                          { icon: Zap, label: "Ships fast" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="border-border-base rounded-lg border bg-white/60 p-2 text-center"
                          >
                            <item.icon
                              className="text-brand-teal mx-auto mb-0.5 h-3 w-3"
                              aria-hidden="true"
                            />
                            <p className="text-text-muted text-[9px] leading-tight">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltArticle>
              </Reveal>
            ))}
          </div>

          {/* ── Open positions card ── */}
          <Reveal variant="fade-scale" delay={100}>
            <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
              <p className="text-text-muted mb-5 text-xs font-bold tracking-widest uppercase">
                Open Positions — Volunteer / Collaborator
              </p>
              <div className="space-y-3">
                {divisionRoles.map((div, i) => (
                  <div
                    key={i}
                    className="border-border-base flex items-start justify-between gap-4 rounded-xl border bg-white px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${div.bg}`}>
                        <div.icon className={`h-4 w-4 ${div.color}`} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-brand-navy text-sm font-bold">{div.division}</p>
                        <p className="text-text-muted text-[10px] font-semibold tracking-wide uppercase">
                          {div.tagline}
                        </p>
                        <p className="text-text-muted mt-1 text-xs">{div.examples}</p>
                      </div>
                    </div>
                    <Link
                      href="/careers"
                      aria-label={`View openings in ${div.division}`}
                      className="text-brand-orange flex shrink-0 items-center gap-1 text-xs font-bold hover:underline"
                    >
                      Apply <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
              <p className="text-text-muted mt-4 text-xs leading-relaxed">
                All positions are unpaid volunteer roles at this stage. Full role list and
                application on the{" "}
                <Link href="/careers" className="text-brand-orange font-semibold hover:underline">
                  careers page
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Join the team ──────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-24 text-white relative">
        <GradientMesh />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <Reveal variant="fade-up">
                <h2 className="font-heading text-4xl font-bold md:text-5xl">
                  Join the <span className="text-brand-orange">Team</span>
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={100}>
                <p className="text-text-muted text-lg leading-relaxed">
                  We're building three real products from scratch. A B2B software consultancy, a
                  Unity game studio, and a consumer software storefront. If you want to own entire
                  functions — not just tickets — and you care about doing the work properly, we want
                  to hear from you.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: TrendingUp, text: "Own entire functions, not sub-tasks" },
                  { icon: Briefcase, text: "Three divisions, one team" },
                  { icon: Globe, text: "Remote-first — apply from anywhere" },
                  { icon: Users, text: "Direct access to founder from day one" },
                ].map((item, i) => (
                  <Reveal key={i} variant="rotate-in" delay={i * 100}>
                    <div className="flex h-full items-start gap-3 rounded-xl bg-white/5 p-4">
                      <item.icon
                        className="text-brand-gold mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-text-muted text-sm leading-snug">{item.text}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal variant="fade-scale" delay={200}>
                <Link href="/careers" className="w-fit">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 group">
                    View All Openings{" "}
                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
              </Reveal>
            </div>
            <Reveal variant="fade-scale" delay={150}>
              <div className="group relative aspect-video overflow-hidden rounded-3xl shadow-2xl grayscale">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940"
                  alt="Team collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Location ───────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal variant="fade-up">
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
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=2670"
                  alt="Nepal landscape"
                  fill
                  sizes="320px"
                  className="object-cover parallax-subtle-up scale-110"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

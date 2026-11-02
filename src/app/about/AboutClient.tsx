"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Users,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Linkedin,
  ExternalLink,
  Code2,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import { BOOKING_URL } from "@/lib/links";
import { Button } from "@/components/Button";

const PRINCIPLES = [
  {
    title: "Engineering Over Promises",
    desc: "Start with clear architecture and defined scope. Build what was agreed, and make the work accountable.",
    icon: Target,
  },
  {
    title: "Security From Line One",
    desc: "Security belongs in the architecture from the beginning—not added after the system is built.",
    icon: ShieldCheck,
  },
  {
    title: "Long-term Over Handoffs",
    desc: "Clean code, clear documentation, and maintainable systems built for the people who come after us.",
    icon: Users,
  },
  {
    title: "Systems for Real People",
    desc: "Technology should remove unnecessary work and make everyday operations simpler.",
    icon: Heart,
  },
];

const APPROACH_STEPS = [
  {
    number: "01",
    title: "Understand First",
    desc: "We learn the workflows, constraints, and problems before deciding what to build.",
  },
  {
    number: "02",
    title: "Shape",
    desc: "Turn what we learn into a practical system designed around the way your team works.",
  },
  {
    number: "03",
    title: "Evolve",
    desc: "Build a foundation that can adapt as your needs change.",
  },
];

interface TeamMember {
  name: string;
  fullName: string;
  title: string;
  department: string;
  quote?: string;
  linkedin?: string;
  portfolio?: string;
  isFounder?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rijan M",
    fullName: "Rijan Mainali",
    title: "CEO & Founder",
    department: "CEO",
    quote: "Building software systems that scale seamlessly and stand the test of time.",
    linkedin: "https://www.linkedin.com/in/rijan-mainali/",
    portfolio: "https://rijanmainali.vercel.app",
    isFounder: true,
  },
  {
    name: "Dikshya B",
    fullName: "Dikshya Bhattarai",
    title: "UI UX Designer",
    department: "Design Team",
    quote:
      "My approach to design is centered on understanding users, solving problems, and creating simple, effective digital experiences.",
    linkedin: "https://www.linkedin.com/in/dikshya-bhattarai-528107308/",
  },
  {
    name: "Shreesha S",
    fullName: "Shreesha Shrestha",
    title: "UI UX Designer",
    department: "Design Team",
    quote:
      "I design for clarity in complexity. Every screen I design earns trust — usable today, scalable tomorrow, consistent always.",
    linkedin: "http://www.linkedin.com/in/shreesha-shrestha-939385219",
  },
  {
    name: "Lijala T",
    fullName: "Lijala Tuladhar",
    title: "UI UX Designer",
    department: "Design Team",
    quote: "Good design makes things feel effortless.",
    linkedin: "https://www.linkedin.com/in/lijala-tuladhar/",
  },
  {
    name: "Sumina L",
    fullName: "Sumina Lakshyam",
    title: "UI UX Designer",
    department: "Design Team",
    quote: "Designing intentional interfaces with focus on user empathy and accessibility.",
    linkedin: "https://www.linkedin.com/company/modulifyr/",
  },
  {
    name: "Saurab S",
    fullName: "Saurab Shrestha",
    title: "Full-Stack Engineer",
    department: "Engineering",
    quote: "Crafting scalable backend architectures and robust full-stack applications.",
    linkedin: "https://www.linkedin.com/in/saurab-shrestha-30b705259/",
    portfolio: "https://merofolio.netlify.app/",
  },
  {
    name: "Aadesh L",
    fullName: "Aadesh Loktam",
    title: "Software Engineer",
    department: "Engineering",
    quote: "Building resilient systems through clean code and modern engineering standards.",
    linkedin: "https://www.linkedin.com/company/modulifyr/",
  },
  {
    name: "Karana D",
    fullName: "Karana Dhungana",
    title: "Business Development Specialist",
    department: "Business Development",
    quote: "Connecting business challenges with tailored digital engineering solutions.",
    linkedin: "https://www.linkedin.com/company/modulifyr/",
  },
  {
    name: "Karan K",
    fullName: "Karan Khadka",
    title: "Business Development Specialist",
    department: "Business Development",
    quote: "Fostering long-term client trust through transparent communication and value.",
    linkedin: "https://www.linkedin.com/company/modulifyr/",
  },
  {
    name: "Sunish S",
    fullName: "Sunish Shrestha",
    title: "Business Development",
    department: "Business Development",
    quote: "Building genuine client partnerships through trust and transparency.",
    linkedin: "http://www.linkedin.com/in/sunish-shrestha",
  },
  {
    name: "Samikshya K",
    fullName: "Samikshya Khatri",
    title: "Business Development Specialist",
    department: "Business Development",
    quote: "Helping organizations navigate digital transformation and system upgrades.",
    linkedin: "https://www.linkedin.com/company/modulifyr/",
  },
];

const TECH_STACK = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", label: "UI Library" },
      { name: "Next.js", label: "Full-stack SSR" },
      { name: "Tailwind CSS", label: "Design Engine" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Hono", label: "Typesafe, edge-compatible API framework" },
      { name: "Next.js", label: "API Routes / full-stack backend for React-based sites" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", label: "Relational DB" },
      { name: "MySQL", label: "Relational DB" },
      { name: "SQLite", label: "Embedded DB" },
      { name: "MariaDB", label: "Relational DB" },
      { name: "MongoDB", label: "Document Store" },
      { name: "Redis", label: "In-Memory Cache" },
    ],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    items: [
      { name: "Vercel", label: "Edge Network" },
      { name: "AWS", label: "Cloud Primitive" },
      { name: "Render", label: "Cloud Platform" },
      { name: "Docker", label: "Containerization" },
    ],
  },
];

export default function AboutClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-b py-20 transition-colors duration-300 md:py-28">
        <div className="container-custom max-w-4xl space-y-6 text-center">
          <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
            ABOUT MODULIFYR
          </span>
          <h1 className="text-h1 text-foreground leading-[1.1] font-bold">
            We Build the Systems That <span className="text-[#6FA8B8]">Keep Working</span>.
          </h1>
          <p className="text-body1 text-text-alt mx-auto max-w-2xl leading-relaxed">
            We started Modulifyr after seeing businesses outgrow software faster than vendors could
            keep up. Off-the-shelf systems were too rigid, while custom builds often became
            difficult to change and maintain.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button href={BOOKING_URL} external>
              Book a free Consultation Today
            </Button>
            <Button href="/services" variant="outline">
              Explore Packages
            </Button>
          </div>
        </div>
      </section>

      {/* ── 2. OUR PRINCIPLES ──────────────────────────────────────────────── */}
      <section className="bg-bg-alt/40 border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              OUR PRINCIPLES
            </span>
            <h2 className="text-h2 text-foreground font-bold">The way we build matters.</h2>
            <p className="text-body1 text-text-alt">
              A few principles guide every system we design, build, and maintain
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="bg-bg-main border-border-main space-y-4 rounded-2xl border p-8 shadow-sm transition-colors hover:border-[#2D738D]/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D738D]/10 text-[#2D738D]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-h5 text-foreground font-bold">{principle.title}</h3>
                  <p className="text-body2 text-text-alt leading-relaxed">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. OUR APPROACH ────────────────────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              OUR APPROACH
            </span>
            <h2 className="text-h2 text-foreground font-bold">
              Start with the problem, not the software.
            </h2>
            <p className="text-body1 text-text-alt">
              We understand how your business works before deciding what needs to be built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-bg-alt border-border-main space-y-4 rounded-2xl border p-8 shadow-sm"
              >
                <span className="text-h3 block font-extrabold text-[#2D738D]">{step.number}</span>
                <h3 className="text-h4 text-foreground font-bold">{step.title}</h3>
                <p className="text-body2 text-text-alt leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MEET THE TEAM ───────────────────────────────────────────────── */}
      <section className="bg-bg-alt/40 border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              MEET THE TEAM
            </span>
            <h2 className="text-h2 text-foreground font-bold">
              Built by people who care about the work
            </h2>
            <p className="text-body1 text-text-alt">
              Modulifyr is a growing team across engineering, design, and business development,
              building the company from the ground up.
            </p>
          </div>

          {/* Roster grouped by department */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-bg-main border-border-main flex flex-col justify-between space-y-4 rounded-2xl border p-8 shadow-sm transition-colors hover:border-[#2D738D]/50"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#2D738D]/10 text-lg font-bold text-[#2D738D]">
                      {member.isFounder ? (
                        <Image
                          src="/rijan-mainali.jpg"
                          alt={member.fullName}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span>{member.name.slice(0, 2).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-h5 text-foreground font-bold">{member.fullName}</h3>
                      <p className="text-caption1 font-semibold text-[#2D738D]">{member.title}</p>
                      <p className="text-caption2 text-text-dim">{member.department}</p>
                    </div>
                  </div>

                  {member.quote && (
                    <p className="text-body2 text-text-alt leading-relaxed italic">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  )}
                </div>

                <div className="border-border-main/60 flex items-center gap-3 border-t pt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-alt p-1 transition-colors hover:text-[#2D738D]"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-alt p-1 transition-colors hover:text-[#2D738D]"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TECH STACK SHOWCASE ─────────────────────────────────────────── */}
      <section className="bg-bg-main border-border-main border-b py-24 transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
              TECH STACK
            </span>
            <h2 className="text-h2 text-foreground font-bold">
              Modern Primitives &amp; Frameworks
            </h2>
            <p className="text-body1 text-text-alt">
              We choose tools that maximize developer velocity, type safety, and system resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-bg-alt border-border-main space-y-4 rounded-2xl border p-6 shadow-sm"
                >
                  <div className="border-border-main flex items-center gap-3 border-b pb-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2D738D]/10 text-[#2D738D]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-h5 text-foreground font-bold">{cat.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex flex-col">
                        <span className="text-body2 text-foreground font-bold">{item.name}</span>
                        <span className="text-caption2 text-text-dim">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt py-24 transition-colors duration-300">
        <div className="container-custom max-w-3xl space-y-8 text-center">
          <h2 className="text-h2 text-foreground font-bold">Have a system worth building?</h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Tell us what you&apos;re trying to solve. We&apos;ll help you figure out what comes
            next.
          </p>

          <div className="text-body2 text-text-alt flex flex-wrap justify-center gap-6 font-semibold">
            <a
              href="tel:+9779764478571"
              className="flex items-center gap-2 transition-colors hover:text-[#2D738D]"
            >
              <Phone className="h-4 w-4 text-[#2D738D]" /> Call our team
            </a>
            <span>•</span>
            <a
              href="https://wa.me/9779764478571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-[#2D738D]"
            >
              <MessageSquare className="h-4 w-4 text-[#2D738D]" /> WhatsApp
            </a>
            <span>•</span>
            <a
              href="mailto:contact@modulifyr.com"
              className="flex items-center gap-2 transition-colors hover:text-[#2D738D]"
            >
              <Mail className="h-4 w-4 text-[#2D738D]" /> Email us
            </a>
          </div>

          <div className="pt-2">
            <Link href="/contact">
              <Button className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 bg-gradient-to-r from-[#4BA3C3] to-[#8CCBDB] px-8 py-3.5 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(75,163,195,0.6)] transition-all duration-150 ease-in hover:brightness-110 sm:w-auto">
                Talk to experts
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

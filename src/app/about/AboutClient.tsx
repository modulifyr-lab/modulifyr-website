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
    title: "Discovery",
    desc: "Understand your workflows and requirements before writing any code.",
  },
  {
    number: "02",
    title: "Shape",
    desc: "Turn what we learn into a practical system designed around the way your team works.",
  },
  {
    number: "03",
    title: "Evolve",
    desc: "Build a foundation that can adapt as your needs change over time.",
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
    title: "CEO & Lead Engineer",
    department: "CEO & Leadership",
    quote: "Building software systems that scale seamlessly and stand the test of time.",
    linkedin: "https://www.linkedin.com/in/rijan-mainali/",
    portfolio: "https://rijanmainali.vercel.app",
    isFounder: true,
  },
  {
    name: "Dikshya B",
    fullName: "Dikshya Bhattarai",
    title: "UI/UX Designer",
    department: "Design Team",
    quote: "Creating simple, effective digital experiences for complex problems.",
    linkedin: "https://www.linkedin.com/in/dikshya-bhattarai-528107308/",
  },
  {
    name: "Lijala T",
    fullName: "Lijala Tuladhar",
    title: "UI/UX Designer",
    department: "Design Team",
    quote: "Good design makes things feel effortless.",
    linkedin: "https://www.linkedin.com/in/lijala-tuladhar/",
  },
  {
    name: "Shreesha S",
    fullName: "Shreesha Shrestha",
    title: "UI/UX Designer",
    department: "Design Team",
    quote: "Design for clarity in complexity.",
    linkedin: "http://www.linkedin.com/in/shreesha-shrestha-939385219",
  },
  {
    name: "Saurab S",
    fullName: "Saurab Shrestha",
    title: "Full-Stack Engineer",
    department: "Engineering",
    quote: "Growing through every project and architectural challenge.",
    linkedin: "https://www.linkedin.com/in/saurab-shrestha-30b705259/",
    portfolio: "https://merofolio.netlify.app/",
  },
  {
    name: "Sunish S",
    fullName: "Sunish Shrestha",
    title: "Business Development",
    department: "Business Development",
    quote: "Building genuine client partnerships through trust and transparency.",
    linkedin: "http://www.linkedin.com/in/sunish-shrestha",
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
      { name: "NestJS", label: "Enterprise Microservices" },
      { name: "Prisma", label: "Type-Safe ORM" },
    ],
  },
  {
    category: "Database & Mobile",
    icon: Database,
    items: [
      { name: "PostgreSQL", label: "Relational & JSONB" },
      { name: "Expo", label: "Cross-Platform Native" },
    ],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    items: [
      { name: "AWS", label: "Cloud Primitive" },
      { name: "Vercel", label: "Edge-Network" },
      { name: "Docker", label: "Container Fabric" },
    ],
  },
];

export default function AboutClient() {
  return (
    <div className="flex w-full flex-col">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="bg-bg-main py-20 md:py-28 border-b border-border-main transition-colors duration-300">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
            ABOUT MODULIFYR
          </span>
          <h1 className="text-h1 font-bold text-foreground leading-[1.1]">
            We Build the Systems That Keep Working.
          </h1>
          <p className="text-body1 text-text-alt max-w-2xl mx-auto leading-relaxed">
            We started Modulifyr after seeing businesses outgrow software faster than vendors could
            keep up. Off-the-shelf systems were too rigid, while custom builds often became difficult
            to change and maintain.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Talk to Experts
              </button>
            </Link>
            <Link href="/about/technical-standards">
              <button
                type="button"
                className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Our Technical Standards
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. OUR PRINCIPLES ──────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-alt/40 border-b border-border-main transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              OUR PRINCIPLES
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              The way we build matters.
            </h2>
            <p className="text-body1 text-text-alt">
              A few principles guide every system we design, build, and maintain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm hover:border-[#2D738D]/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-h5 font-bold text-foreground">{principle.title}</h3>
                  <p className="text-body2 text-text-alt leading-relaxed">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. OUR APPROACH ────────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-main border-b border-border-main transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              OUR APPROACH
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Start with the problem, not the software.
            </h2>
            <p className="text-body1 text-text-alt">
              We understand how your business works before deciding what needs to be built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-bg-alt border-border-main rounded-2xl border p-8 space-y-4 shadow-sm"
              >
                <span className="text-h3 font-extrabold text-[#2D738D] block">
                  {step.number}
                </span>
                <h3 className="text-h4 font-bold text-foreground">{step.title}</h3>
                <p className="text-body2 text-text-alt leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MEET THE TEAM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-bg-alt/40 border-b border-border-main transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              MEET THE TEAM
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Built by people who care about the work
            </h2>
            <p className="text-body1 text-text-alt">
              Modulifyr is a growing team across engineering, design, and business development,
              building the company from the ground up.
            </p>
          </div>

          {/* Roster grouped by department */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-bg-main border-border-main rounded-2xl border p-8 space-y-4 shadow-sm hover:border-[#2D738D]/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-[#2D738D]/10 text-[#2D738D] font-bold text-lg flex items-center justify-center shrink-0 overflow-hidden relative">
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
                      <h3 className="text-h5 font-bold text-foreground">{member.fullName}</h3>
                      <p className="text-caption1 font-semibold text-[#2D738D]">{member.title}</p>
                      <p className="text-caption2 text-text-dim">{member.department}</p>
                    </div>
                  </div>

                  {member.quote && (
                    <p className="text-body2 text-text-alt italic leading-relaxed">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-border-main/60 flex items-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-alt hover:text-[#2D738D] transition-colors p-1"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-alt hover:text-[#2D738D] transition-colors p-1"
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
      <section className="py-24 bg-bg-main border-b border-border-main transition-colors duration-300">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-caption1 font-bold text-[#2D738D] tracking-wider uppercase">
              TECH STACK
            </span>
            <h2 className="text-h2 font-bold text-foreground">
              Modern Primitives &amp; Frameworks
            </h2>
            <p className="text-body1 text-text-alt">
              We choose tools that maximize developer velocity, type safety, and system resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_STACK.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-bg-alt border-border-main rounded-2xl border p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-3 pb-3 border-b border-border-main">
                    <div className="h-9 w-9 rounded-lg bg-[#2D738D]/10 text-[#2D738D] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-h5 font-bold text-foreground">{cat.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex flex-col">
                        <span className="text-body2 font-bold text-foreground">{item.name}</span>
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
      <section className="py-24 bg-bg-alt transition-colors duration-300">
        <div className="container-custom max-w-3xl text-center space-y-8">
          <h2 className="text-h2 font-bold text-foreground">
            Have a system worth building?
          </h2>
          <p className="text-body1 text-text-alt leading-relaxed">
            Tell us what you&apos;re trying to solve. We&apos;ll help you figure out what comes next.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-body2 font-semibold text-text-alt">
            <a href="tel:+9779764478571" className="flex items-center gap-2 hover:text-[#2D738D] transition-colors">
              <Phone className="h-4 w-4 text-[#2D738D]" /> Call our team
            </a>
            <span>•</span>
            <a href="https://wa.me/9779764478571" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2D738D] transition-colors">
              <MessageSquare className="h-4 w-4 text-[#2D738D]" /> WhatsApp
            </a>
            <span>•</span>
            <a href="mailto:contact@modulifyr.com" className="flex items-center gap-2 hover:text-[#2D738D] transition-colors">
              <Mail className="h-4 w-4 text-[#2D738D]" /> Email us
            </a>
          </div>

          <div className="pt-2">
            <Link href="/contact">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in cursor-pointer"
              >
                Talk to experts
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import {
  CheckCircle2,
  XCircle,
  Code2,
  Gamepad2,
  ShoppingBag,
  Globe2,
  Briefcase,
  Paintbrush,
  Megaphone,
  Users,
  BarChart2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Modulifyr — Volunteer & Collaborator Openings",
  description:
    "Join Modulifyr as a volunteer or collaborator. We are building three divisions from the ground up: a B2B software consultancy, a Unity game studio (Speedline), and a B2C software storefront (Virtual). No salaries yet — real work, real ownership.",
};

// ─── Division definitions ─────────────────────────────────────────────────────

const divisions = [
  {
    id: "modulifyr",
    icon: Globe2,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/30",
    name: "Modulifyr",
    tagline: "B2B Custom Software Consultancy",
    desc: "The core division. We design and build modular software systems for businesses in Nepal and internationally — ERPs, dashboards, portals, APIs, and infrastructure. TypeScript-first, architecture-forward, and built to last.",
  },
  {
    id: "speedline",
    icon: Gamepad2,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/30",
    name: "Modulifyr Speedline",
    tagline: "Desktop Game Studio (Unity / C#)",
    desc: "Our game studio division. We build and ship desktop games via Steam and Paddle. If you've ever wanted to work on a real game project from the ground floor — design, art, code, audio, publishing — this is where you do it.",
  },
  {
    id: "virtual",
    icon: ShoppingBag,
    color: "text-brand-gold",
    bg: "bg-brand-gold/20",
    border: "border-brand-gold/30",
    name: "Modulifyr Virtual",
    tagline: "B2C Consumer Software Storefront",
    desc: "Our consumer-facing storefront at virtual.modulifyr.com. We publish and sell consumer software products directly to individuals. Needs marketing, growth, product, and engineering talent.",
  },
];

// ─── Role groups by category ──────────────────────────────────────────────────

const roleGroups = [
  {
    icon: Code2,
    category: "Engineering",
    divisions: ["Modulifyr", "Modulifyr Virtual"],
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    roles: [
      "Full-Stack Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "DevOps Engineer",
      "Cloud Infrastructure Engineer",
      "Security Engineer",
      "QA Engineer",
      "Solutions Architect",
      "Technical Lead",
      "Engineering Manager",
    ],
    what:
      "React / Next.js, TypeScript, NestJS, PostgreSQL, Prisma. You'll own complete modules — not tickets.",
  },
  {
    icon: Gamepad2,
    category: "Game Development",
    divisions: ["Modulifyr Speedline"],
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    roles: [
      "Gameplay Programmer (Unity / C#)",
      "Engine Programmer",
      "AI Programmer",
      "Tools Programmer",
      "Graphics Programmer",
    ],
    what:
      "Unity + C# primary stack. Steam and Paddle distribution. You'll help design and ship actual games.",
  },
  {
    icon: Paintbrush,
    category: "Art & Design",
    divisions: ["Modulifyr Speedline", "Modulifyr", "Modulifyr Virtual"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    roles: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "UX Researcher",
      "Design Lead",
      "Concept Artist",
      "3D Artist",
      "Animator",
      "Technical Artist",
      "VFX Artist",
      "User Researcher",
    ],
    what:
      "Figma for product design. For Speedline: full creative pipeline from concept to in-engine assets.",
  },
  {
    icon: Building2,
    category: "Game Design",
    divisions: ["Modulifyr Speedline"],
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    roles: [
      "Game Designer",
      "Level Designer",
      "Narrative Designer",
      "Systems Designer",
    ],
    what:
      "Own game feel, progression, world, and story. Real creative authority on titles we're shipping.",
  },
  {
    icon: Users,
    category: "Audio",
    divisions: ["Modulifyr Speedline"],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    roles: ["Audio Designer", "Composer"],
    what:
      "Sound design and original music for desktop games. Full creative freedom on the audio direction.",
  },
  {
    icon: Briefcase,
    category: "Product Management",
    divisions: ["Modulifyr", "Modulifyr Virtual", "Modulifyr Speedline"],
    color: "text-green-600",
    bg: "bg-green-600/10",
    roles: ["Product Manager", "Senior Product Manager", "Technical Project Manager", "Project Manager"],
    what:
      "Define what we build and why. Own the roadmap, coordinate cross-functional work, keep delivery clean.",
  },
  {
    icon: Megaphone,
    category: "Marketing & Growth",
    divisions: ["Modulifyr", "Modulifyr Virtual", "Modulifyr Speedline"],
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    roles: [
      "Growth Marketer",
      "Digital Marketing Manager",
      "Content Strategist",
      "SEO Specialist",
      "Paid Acquisition Specialist",
      "Brand Manager",
      "Community Manager",
      "Publishing Manager",
    ],
    what:
      "We have zero marketing operations. This is a blank slate. Own the entire function from scratch.",
  },
  {
    icon: Users,
    category: "Sales & Client Success",
    divisions: ["Modulifyr"],
    color: "text-yellow-600",
    bg: "bg-yellow-600/10",
    roles: [
      "Business Development Manager",
      "Sales Executive",
      "Pre-Sales Engineer",
      "Account Manager",
      "Client Onboarding Specialist",
      "Customer Success Manager",
      "Technical Support Engineer",
      "Customer Support Specialist",
    ],
    what:
      "Help us land our first clients and keep them. Own the full client relationship from first contact to success.",
  },
  {
    icon: BarChart2,
    category: "Data & Analytics",
    divisions: ["Modulifyr", "Modulifyr Virtual"],
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    roles: ["Data Analyst", "Revenue Analyst"],
    what:
      "Build the analytics foundation from zero. No existing dashboards, no existing data pipelines. You start it.",
  },
  {
    icon: Building2,
    category: "Operations, Finance & HR",
    divisions: ["Shared / Corporate"],
    color: "text-stone-500",
    bg: "bg-stone-500/10",
    roles: [
      "Operations Manager",
      "HR Manager",
      "HR Specialist",
      "Recruiter",
      "Finance Manager",
      "Accountant",
      "Financial Analyst",
      "Chief of Staff",
      "Executive Assistant",
      "Legal Counsel",
      "IT Administrator",
    ],
    what:
      "Build the company's backbone: people operations, financial tracking, legal hygiene, and internal systems.",
  },
];

// ─── What we're honest about ──────────────────────────────────────────────────

const honest = [
  {
    good: true,
    text: "Real work on real systems that will go live",
  },
  {
    good: true,
    text: "Direct access to the founder from day one",
  },
  {
    good: true,
    text: "Full module and function ownership — not sub-tasks",
  },
  {
    good: true,
    text: "A structured company with actual documentation and processes",
  },
  {
    good: true,
    text: "Portfolio-worthy work across three different product types",
  },
  {
    good: true,
    text: "Remote-first — apply from anywhere in Nepal or internationally",
  },
  {
    good: false,
    text: "No salary right now. Everyone is volunteering, including the founder.",
  },
  {
    good: false,
    text: "No funding. We run entirely on free tiers and open source.",
  },
  {
    good: false,
    text: "Pre-launch. No live clients yet. We're building the foundation.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex w-full flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy relative overflow-hidden py-24 text-white">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Volunteer badge */}
            <div className="bg-brand-orange/15 border-brand-orange/40 mb-8 flex w-fit items-center gap-3 rounded-full border px-5 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                Volunteer & Collaborator Openings
              </span>
            </div>

            <h1 className="font-heading mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Build Three Companies.{" "}
              <span className="text-brand-orange">From Zero.</span>
            </h1>

            <p className="text-text-muted mb-6 max-w-3xl text-xl leading-relaxed">
              Modulifyr is a pre-launch software company operating across three divisions. We're
              building the consultancy, the game studio, and the software storefront simultaneously
              — and we're hiring across all three. Everyone here is a volunteer, including the
              founder. No salaries yet. Real work, real systems, real ownership.
            </p>

            <p className="text-text-muted text-lg leading-relaxed">
              If you want to be part of building something from the ground floor — own entire
              functions, not just tickets — and you can commit real time and effort: we want to
              hear from you.
            </p>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-brand-teal/5 absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl" />
      </section>

      {/* ── Three Divisions ───────────────────────────────────────────────── */}
      <section className="bg-bg-secondary border-border-base border-b py-20">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-heading text-brand-navy mb-3 text-3xl font-bold">
              Three Divisions, One Team
            </h2>
            <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
              When you apply, tell us which division interests you most. You can work across
              multiple if your skills span them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {divisions.map((div) => (
              <div
                key={div.id}
                className={`border-border-base rounded-3xl border bg-white p-8 transition-shadow hover:shadow-lg ${div.border} border-t-4`}
              >
                <div className={`h-14 w-14 ${div.bg} mb-5 flex items-center justify-center rounded-2xl`}>
                  <div.icon className={`h-7 w-7 ${div.color}`} />
                </div>
                <h3 className="font-heading text-brand-navy mb-1 text-xl font-bold">{div.name}</h3>
                <p className={`mb-4 text-xs font-bold tracking-widest uppercase ${div.color}`}>
                  {div.tagline}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Honest Section ────────────────────────────────────────────────── */}
      <section className="bg-bg-light py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-brand-navy mb-3 text-3xl font-bold">
                What This Actually Is
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                We're not going to dress this up. Here's exactly what working at Modulifyr looks like
                right now — the good and the not-yet-good.
              </p>
              <div className="space-y-3">
                {honest.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {item.good ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    )}
                    <span
                      className={`text-sm leading-relaxed ${
                        item.good ? "text-text-secondary" : "text-text-muted"
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-brand-navy rounded-3xl p-8 text-white">
                <h3 className="font-heading mb-4 text-xl font-bold">Who This Is For</h3>
                <div className="space-y-4 text-sm leading-relaxed text-white/80">
                  <p>
                    Students and recent graduates who want real work to put in their portfolio — not
                    mock projects.
                  </p>
                  <p>
                    Experienced people in full-time roles who have evenings or weekends and want to
                    build something serious outside of their job.
                  </p>
                  <p>
                    People between roles who want to stay sharp, contribute to a real company, and
                    be present for the moment it becomes something.
                  </p>
                  <p>
                    Anyone who cares more about the quality of the work than immediate compensation
                    — and who understands that pre-launch companies are built by people who show up
                    before it's obvious.
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary border-border-base rounded-3xl border p-8">
                <h3 className="font-heading text-brand-navy mb-3 text-sm font-bold tracking-widest uppercase">
                  Time Commitment
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We don't require full-time hours. We ask for consistency. Whether that's 10 hours
                  a week or 40, tell us what you can commit to and we'll structure your role
                  accordingly. Part-time contributors are as welcome as those going all in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Roles ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-12">
            <p className="text-brand-orange mb-2 text-xs font-bold tracking-widest uppercase">
              Open Positions
            </p>
            <h2 className="font-heading text-brand-navy mb-4 text-3xl font-bold md:text-4xl">
              Every Role We Need
            </h2>
            <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
              These aren't aspirational org-chart titles. These are the actual functions we need
              people in. If you see your role here — apply.
            </p>
          </div>

          <div className="space-y-6">
            {roleGroups.map((group, i) => (
              <div
                key={i}
                className="border-border-base rounded-3xl border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 ${group.bg} flex shrink-0 items-center justify-center rounded-2xl`}>
                      <group.icon className={`h-6 w-6 ${group.color}`} />
                    </div>
                    <div>
                      <h3 className="font-heading text-brand-navy text-xl font-bold">
                        {group.category}
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {group.divisions.map((div) => (
                          <span
                            key={div}
                            className="bg-bg-secondary text-text-muted rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase"
                          >
                            {div}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-text-muted max-w-sm text-sm leading-relaxed italic md:text-right">
                    {group.what}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.roles.map((role) => (
                    <span
                      key={role}
                      className={`${group.bg} ${group.color} rounded-full px-3.5 py-1.5 text-xs font-semibold`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-muted mt-8 text-sm italic">
            Don't see your exact title? Apply under "Other / General Application" and tell us what
            you do. If it fits, we'll find the right place for you.
          </p>
        </div>
      </section>

      {/* ── What We Evaluate ─────────────────────────────────────────────── */}
      <section className="bg-bg-secondary border-border-base border-y py-16">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="font-heading text-brand-navy text-2xl font-bold">
              What We Look For in Every Role
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Ownership mindset",
              "Clear communication",
              "Genuine craft",
              "Follows through",
              "Documents decisions",
              "Thinks in systems",
            ].map((item, i) => (
              <div
                key={i}
                className="border-border-base rounded-xl border bg-white p-5 text-center"
              >
                <p className="text-brand-navy text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 max-w-2xl">
            <p className="text-text-secondary text-sm leading-relaxed">
              We don't care where you studied or how many years of experience you have. We care
              whether you take your work seriously, communicate when something is unclear, and
              actually deliver what you commit to. Everything else is learnable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────────────────────── */}
      <JobApplicationForm />
    </div>
  );
}
import { Metadata } from "next";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { Coffee, Wrench, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Openings | Modulifyr",
  description:
    "Join the Modulifyr engineering team. We hire for ownership, clarity, and delivery across eight roles — Full-Stack, Frontend, Backend, Mobile, Desktop, DevOps/SRE, and Data Engineering. Based in Birtamode, Nepal.",
};

// ─── All 8 roles from the hiring guide ───────────────────────────────────────

const roles = [
  {
    title: "Founder / Technical Lead",
    mission: "Own architecture, quality, and technical direction.",
    responsibilities: [
      "Define technical standards",
      "Approve stack exceptions",
      "Review critical architecture decisions",
      "Lead discovery and client technical calls",
      "Protect the codebase from fragmentation",
    ],
    skills: [
      "System design",
      "Strong TypeScript understanding",
      "Product thinking",
      "Communication",
      "Documentation",
    ],
    success: "The team has one clear way of building. Exceptions are rare and justified.",
    type: "Leadership",
    remote: false,
    internal: true,
  },
  {
    title: "Senior Full-Stack Engineer",
    mission: "Ship end-to-end features across frontend, backend, and data.",
    responsibilities: [
      "Build product features",
      "Design APIs & model databases",
      "Own modules from design to deployment",
      "Mentor junior engineers",
    ],
    skills: [
      "React / Next.js",
      "NestJS",
      "PostgreSQL / Prisma",
      "Testing and debugging",
      "Strong ownership",
    ],
    success: "Features ship with low rework. Architecture stays clean. Team velocity improves.",
    type: "Colabrator / Volunteer", 
    remote: true,
    internal: false,
  },
  {
    title: "Frontend Engineer",
    mission: "Build polished, fast, accessible user interfaces.",
    responsibilities: [
      "Implement dashboards and interactive UI",
      "Maintain reusable component systems",
      "Optimise performance",
      "Collaborate with product and design",
    ],
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "UX awareness"],
    success:
      "Interfaces feel clean and consistent. Components are reusable. UI regressions are low.",
    type: "Colabrator / Volunteer",
    remote: true,
    internal: false,
  },
  {
    title: "Backend Engineer",
    mission: "Build reliable APIs, workflows, and business logic.",
    responsibilities: [
      "Create APIs and services",
      "Write validation and business rules",
      "Build integrations",
      "Support queues and scheduled tasks",
    ],
    skills: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis / BullMQ"],
    success:
      "APIs are stable and documented. Integrations are reliable. Systems can be maintained by others.",
    type: "Colabrator / Volunteer",
    remote: true,
    internal: false,
  },
  {
    title: "Mobile Engineer",
    mission: "Deliver Android and iOS applications with one shared codebase.",
    responsibilities: [
      "Build Expo apps",
      "Handle navigation and state",
      "Support mobile build and release flows",
      "Integrate APIs cleanly",
    ],
    skills: ["React Native", "Expo", "TypeScript", "Release management"],
    success:
      "Apps are easy to release. Mobile UI matches product quality. Shared code reuse is high.",
    type: "Colabrator / Volunteer",
    remote: true,
    internal: false,
  },
  {
    title: "Desktop Engineer",
    mission: "Build cross-platform desktop products for macOS, Windows, and Linux.",
    responsibilities: [
      "Build with Tauri first",
      "Use Electron when speed is the priority",
      "Package installers",
      "Integrate local OS features",
    ],
    skills: [
      "React + TypeScript",
      "Tauri or Electron",
      "Packaging / release workflows",
      "Local storage / OS integration",
    ],
    success: "Desktop apps launch reliably. Binaries are stable and maintainable.",
    type: "Colabrator / Volunteer",
    remote: true,
    internal: false,
  },
  {
    title: "DevOps / SRE Engineer",
    mission: "Keep deployments secure, observable, and recoverable.",
    responsibilities: [
      "Set up CI/CD",
      "Manage cloud infrastructure",
      "Add monitoring and alerting",
      "Harden environments",
    ],
    skills: [
      "Docker",
      "GitHub Actions",
      "Terraform",
      "Cloud infrastructure",
      "Observability tools",
    ],
    success: "Deployments are repeatable. Incidents are detectable. Infrastructure is documented.",
    type: "Colabrator / Volunteer",
    remote: true,
    internal: false,
  },
  {
    title: "Data Engineer / Analytics Engineer",
    mission: "Turn operational data into analytics and reporting value.",
    responsibilities: [
      "Build ETL pipelines",
      "Clean and model data",
      "Create BI-friendly tables and views",
      "Automate reporting workflows",
    ],
    skills: ["SQL", "Python", "Data modelling", "Reporting systems"],
    success: "Reporting is accurate. Data pipelines are maintainable. Operational data is useful.",
    type: "Colabrator / Volunteer",
    remote: true,
    internal: false,
  },
];

// ─── Hiring philosophy ────────────────────────────────────────────────────────

const weValue = [
  "Thinking in systems",
  "Communicating clearly",
  "Shipping reliable work",
  "Writing maintainable code",
  "Collaborating without chaos",
  "Documenting decisions",
];

const weAvoid = [
  "Hype-driven choices",
  "Framework obsession",
  "Pure speed with no structure",
  "Narrow specialisation that blocks team flexibility",
];

// ─── Hiring order ─────────────────────────────────────────────────────────────

const hiringOrder = [
  { step: "1", role: "Founder / Lead", status: "Filled" },
  { step: "2", role: "Senior Full-Stack", status: "Open" },
  { step: "3", role: "Frontend or Backend", status: "Open" },
  { step: "4", role: "DevOps / SRE", status: "Open" },
  { step: "5", role: "Specialist roles", status: "Later" },
];

export default function CareersPage() {
  const openRoles = roles.filter((r) => !r.internal);

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden py-24 text-white">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="bg-brand-orange/10 border-brand-orange/30 mb-6 flex w-fit items-center gap-2 rounded-full border px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                Actively seeking collaborators
              </span>
            </div>

            <h1 className="font-heading mb-8 text-4xl leading-tight font-bold md:text-6xl">
              Hire for <span className="text-brand-orange">Ownership, Clarity,</span> and Delivery
            </h1>

            <div className="text-text-muted mb-10 space-y-4 text-lg leading-relaxed">
              <p>
                Modulifyr was registered recently. We're bootstrapped on free tools and built by one
                founder from Birtamode, Jhapa. Every system you see here was designed and shipped in
                under a week.
              </p>
              <p>
                If you want to own entire modules — not just tickets — and you care about clean
                architecture, we want you on this team.
              </p>
            </div>

            <div className="grid max-w-sm grid-cols-3 gap-4">
              {[
                { icon: Wrench, label: "Free tools" },
                { icon: Coffee, label: "Late nights" },
                { icon: Globe, label: "Live in 4 days" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <item.icon className="text-brand-teal mx-auto mb-2 h-5 w-5" />
                  <p className="text-text-muted text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-brand-orange/5 absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </section>

      {/* Hiring philosophy */}
      <section className="bg-bg-secondary border-border-base border-b py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-brand-navy mb-5 text-2xl font-bold">
                We value people who can:
              </h2>
              <ul className="space-y-3">
                {weValue.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-brand-teal h-4 w-4 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-brand-navy mb-5 text-2xl font-bold">
                We avoid hiring for:
              </h2>
              <ul className="space-y-3">
                {weAvoid.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="h-4 w-4 shrink-0 rounded-full border-2 border-red-300" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring priority order */}
      <section className="bg-bg-light border-border-base border-b py-12">
        <div className="container-custom">
          <p className="text-text-muted mb-6 text-xs font-bold tracking-widest uppercase">
            Hiring Priority Order (Small Team)
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {hiringOrder.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-semibold ${
                    item.status === "Filled"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : item.status === "Open"
                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                        : "border-border-base text-text-muted bg-white"
                  }`}
                >
                  <span className="text-xs font-bold">{item.step}.</span> {item.role}
                  <span
                    className={`text-[10px] font-bold ${item.status === "Filled" ? "text-green-600" : item.status === "Open" ? "text-brand-orange" : "text-text-muted"}`}
                  >
                    [{item.status}]
                  </span>
                </div>
                {i < hiringOrder.length - 1 && <span className="text-text-muted text-sm">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role scorecards */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-10">
            <p className="text-text-muted mb-2 text-xs font-bold tracking-widest uppercase">
              Open Positions (Colabrator / Volunteer)
            </p>
            <h2 className="font-heading text-brand-navy text-3xl font-bold">Role Scorecards</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {openRoles.map((role, i) => (
              <div
                key={i}
                className="border-border-base hover:border-brand-orange group rounded-2xl border bg-white p-8 transition-colors"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-brand-navy group-hover:text-brand-orange text-lg font-bold transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-text-muted mt-0.5 text-xs italic">{role.mission}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-orange/10 text-brand-orange rounded-full px-3 py-1 text-xs font-bold">
                      {role.type}
                    </span>
                    <span className="bg-brand-teal/10 text-brand-teal rounded-full px-3 py-1 text-xs font-bold">
                      {role.remote ? "Remote OK" : "Birtamode Office"}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-text-muted mb-2 text-[10px] font-bold tracking-widest uppercase">
                    Must-Have Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="border-border-base text-text-secondary rounded-full border bg-white px-3 py-1 text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-text-muted mb-2 text-[10px] font-bold tracking-widest uppercase">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-1">
                    {role.responsibilities.map((r, j) => (
                      <li key={j} className="text-text-secondary flex items-start gap-2 text-xs">
                        <CheckCircle2 className="text-brand-teal mt-0.5 h-3 w-3 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-border-base border-t pt-4">
                  <p className="text-text-muted mb-1 text-[10px] font-bold tracking-widest uppercase">
                    Success Looks Like
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed italic">
                    "{role.success}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-muted mt-6 text-sm italic">
            Don't see a fit above? Apply as a general collaborator. If you build things and care
            about clean architecture, we'll find a place for you.
          </p>
        </div>
      </section>

      {/* Interview themes */}
      <section className="bg-bg-secondary border-border-base border-b py-16">
        <div className="container-custom">
          <h2 className="font-heading text-brand-navy mb-6 text-2xl font-bold">
            What We Evaluate in Every Interview
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {[
              "Technical depth",
              "Ownership",
              "Communication",
              "Practical judgment",
              "Documentation habits",
            ].map((theme, i) => (
              <div
                key={i}
                className="border-border-base rounded-xl border bg-white p-5 text-center"
              >
                <p className="text-brand-navy text-sm font-bold">{theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <JobApplicationForm />
    </div>
  );
}

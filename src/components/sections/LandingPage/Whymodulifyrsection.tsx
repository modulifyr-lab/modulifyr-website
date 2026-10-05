import type { ReactNode } from "react";

const CYAN = "#3FA9C4";
const AMBER = "#C8943A";

/* ---------- Icons (64x64 line art, cyan + amber accents) ---------- */

function ModularIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" stroke={CYAN} strokeWidth="1.5" />
      <rect x="18" y="18" width="16" height="16" stroke={CYAN} strokeWidth="1.5" />
      <rect x="34" y="34" width="16" height="16" stroke={CYAN} strokeWidth="1.5" />
      <path d="M18 10h14M2 26v10h14" stroke={AMBER} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

function PayAsYouBuildIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14" fill="none" aria-hidden="true">
      <path d="M4 50h10V40h10V30h10V20h10V10" stroke={AMBER} strokeWidth="1" />
      <path d="M4 50L46 8" stroke={CYAN} strokeWidth="1.5" />
      <circle cx="4" cy="50" r="2.5" fill={CYAN} />
      <circle cx="24" cy="30" r="1.5" fill={CYAN} />
      <circle cx="34" cy="20" r="1.5" fill={CYAN} />
      <circle cx="48" cy="6" r="3.5" stroke={CYAN} strokeWidth="1.5" />
    </svg>
  );
}

function FounderIcon() {
  return (
    <svg viewBox="0 0 64 56" className="h-14 w-16" fill="none" aria-hidden="true">
      <circle cx="32" cy="12" r="6.5" stroke={CYAN} strokeWidth="1.5" />
      <path d="M20 32c0-7 5-11 12-11s12 4 12 11" stroke={CYAN} strokeWidth="1.5" />
      <path d="M2 32h18M44 32h18" stroke={AMBER} strokeWidth="1" />
      <path
        d="M12 42l4 5M32 40v8M52 42l-4 5"
        stroke={AMBER}
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function TransparentIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="50" height="50" stroke={AMBER} strokeWidth="1.5" />
      <rect x="14" y="14" width="26" height="26" stroke={CYAN} strokeWidth="1.5" />
      <path d="M2 2l12 12M52 2L40 14M2 52l12-12M52 52L40 40" stroke={AMBER} strokeWidth="1" />
    </svg>
  );
}

/* ---------- Content ---------- */

interface Reason {
  title: ReactNode;
  description: string;
  icon: ReactNode;
}

const REASONS: Reason[] = [
  {
    title: "Modular by Design",
    description:
      "Start with what you need today and add capabilities as your business grows, without rebuilding from scratch.",
    icon: <ModularIcon />,
  },
  {
    title: "Pay as we Build",
    description:
      "Pay as work is delivered, so you can see progress, manage costs, and avoid large upfront commitments.",
    icon: <PayAsYouBuildIcon />,
  },
  {
    title: "Founder-led engineering",
    description:
      "Work directly with the founder leading your project, with secure, maintainable code tailored to your needs.",
    icon: <FounderIcon />,
  },
  {
    title: "Transparent Process",
    description:
      "Know what\u2019s being built, when it\u2019s happening, and what it costs at every stage, with no surprises along the way.",
    icon: <TransparentIcon />,
  },
];

/* ---------- Section ---------- */

export function WhyModulifyrSection() {
  return (
    <section className="bg-background text-on-background relative overflow-hidden py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-6xl">
          <span className="font-sans text-[20px] leading-[110%] font-normal text-[#FFC24B]">
            WHY MODULIFYR
          </span>

          <h2 className="text-on-background mt-2 text-3xl leading-[1.15] font-bold md:text-4xl">
            Because your business shouldn&apos;t have to adapt to a software.
          </h2>

          <p className="text-on-surface-variant mt-3 text-base leading-[1.3]">
            Flexible systems, clear costs, and a transparent process.
          </p>
        </div>

        {/* Columns */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {REASONS.map((reason, index) => (
            <article
              key={index}
              className="flex min-h-[320px] flex-col border-r border-l-0 border-[#5B8A99]/60 pr-6 pl-8 last:border-r-0 lg:pr-8"
            >
              <div className="h-14 text-left">{reason.icon}</div>

              <h3 className="text-on-background mt-10 min-h-[56px] text-xl leading-[1.2] font-medium md:text-[22px]">
                {reason.title}
              </h3>

              {/* Description pinned to the bottom so all columns align */}
              <p className="text-on-surface-variant mt-12 max-w-[280px] text-base leading-[1.4]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

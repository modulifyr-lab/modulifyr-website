import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, Users } from "lucide-react";
import { getOpenRolesByDepartment, formatSeats } from "@/lib/careers";

export function TalentCalloutSection() {
  const openDepartments = getOpenRolesByDepartment();
  const openRoles = openDepartments.flatMap((group) =>
    group.roles.map((role) => ({
      department: group.department.label,
      title: role.title,
      seats: role.seats,
    }))
  );

  const totalSeats = openRoles.reduce((acc, r) => acc + r.seats, 0);

  return (
    <section className="bg-bg-alt/60 border-border-base border-y py-20 transition-colors duration-300 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: Talent Value Proposition */}
          <div className="flex flex-col justify-center space-y-5 lg:col-span-7">
            <span className="font-sans text-sm font-semibold tracking-wider text-[#FFC24B] uppercase">
              Build With Modulifyr
            </span>

            <h2 className="text-on-background text-3xl leading-[1.12] font-bold sm:text-4xl [text-wrap:balance]">
              Contract Roles for Builders Who Want Real Production Ownership
            </h2>

            <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed">
              We collaborate with engineers, designers, and growth partners across Nepal and
              remotely on active client systems. Instead of practice tasks, you ship production
              modules and earn{" "}
              <strong className="text-on-background font-semibold">
                20% of the revenue generated
              </strong>{" "}
              on your project or deal.
            </p>

            <div className="text-on-surface-variant flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs font-medium sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Code2 className="text-cta h-4 w-4 shrink-0" />
                TypeScript, Next.js &amp; modular systems
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Users className="text-cta h-4 w-4 shrink-0" />
                Flexible part-time &amp; remote-friendly
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="text-cta h-4 w-4 shrink-0" />
                20% project revenue share
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/careers"
                className="bg-cta text-on-cta inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90"
              >
                Explore Open Positions
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link
                href="/about/technical-standards"
                className="border-border-base text-on-background hover:border-cta inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold whitespace-nowrap transition-colors"
              >
                Read Our Code Standards
              </Link>
            </div>
          </div>

          {/* RIGHT: Live Open Roles Snapshot */}
          <div className="border-border-base bg-surface flex flex-col justify-between rounded-3xl border p-6 shadow-sm sm:p-8 lg:col-span-5">
            <div>
              <div className="border-border-base flex items-center justify-between gap-4 border-b pb-4">
                <div>
                  <p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                    Active Openings
                  </p>
                  <p className="text-on-background mt-1 text-lg font-bold">
                    {openRoles.length > 0
                      ? `${openRoles.length} open ${openRoles.length === 1 ? "role" : "roles"} (${totalSeats} seats)`
                      : "General Talent Pool Open"}
                  </p>
                </div>
                <span className="text-cta text-xs font-bold tabular-nums">Birtamode / Remote</span>
              </div>

              {openRoles.length > 0 ? (
                <ul className="divide-border-base mt-4 divide-y">
                  {openRoles.slice(0, 4).map((role) => (
                    <li
                      key={`${role.department}-${role.title}`}
                      className="flex items-center justify-between gap-4 py-3.5"
                    >
                      <div>
                        <p className="text-on-background text-sm font-bold">{role.title}</p>
                        <p className="text-on-surface-variant text-xs">{role.department}</p>
                      </div>
                      <span className="text-cta text-xs font-semibold whitespace-nowrap tabular-nums">
                        {formatSeats(role.seats)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-on-surface-variant mt-5 text-sm leading-relaxed">
                  Submit a general application with your portfolio or GitHub to be matched with
                  upcoming client builds.
                </p>
              )}
            </div>

            <Link
              href="/careers#application-form"
              className="border-border-base text-cta mt-6 inline-flex items-center justify-between border-t pt-4 text-sm font-semibold hover:underline"
            >
              <span>Apply directly in 2 minutes</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

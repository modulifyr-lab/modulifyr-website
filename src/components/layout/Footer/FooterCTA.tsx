import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#131d31] p-8 shadow-2xl md:p-10">
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Free Strategic Session
          </span>

          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Book a Free Consultation with Our Experts
          </h3>

          <p className="text-sm leading-relaxed text-slate-400">
            Unlock scalable systems and lasting digital infrastructure. Let's build your next
            chapter together.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:w-auto">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-cyan-900/20 transition-all duration-200 hover:bg-cyan-500 sm:w-auto"
          >
            <span>Book Free Session</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:bg-slate-800 sm:w-auto"
          >
            Request Call Back
          </Link>
        </div>
      </div>
    </div>
  );
}

import { CheckCircle, Clock, DollarSign, FilePenLine, Calculator } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

const PERSPECTIVE_GRID_SRC = "/Perspective-Grid.png";

export function HeroSection() {
  return (
    <section className="bg-background text-on-background relative isolate overflow-hidden py-16 transition-colors duration-300 md:py-24 lg:py-28">
      {/* Perspective Grid Backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-full"
          style={{
            maskImage: `
              radial-gradient(
                ellipse 70% 90% at 50% 100%,
                black 0%,
                black 45%,
                transparent 80%
              )
            `,
            WebkitMaskImage: `
              radial-gradient(
                ellipse 70% 90% at 50% 100%,
                black 0%,
                black 45%,
                transparent 80%
              )
            `,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PERSPECTIVE_GRID_SRC}
            alt=""
            className="h-full w-full object-cover opacity-25 dark:opacity-15"
          />
        </div>
      </div>

      {/* Centered Hero Content */}
      <div className="container-custom relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center">
          {/* Regional & Domain Kicker */}
          <p className="text-primary text-xs font-semibold tracking-widest uppercase sm:text-sm">
            Birtamode, Nepal · Serving Local SMBs &amp; Global Teams
          </p>

          {/* Single Balanced Display Heading */}
          <h1 className="font-heading text-on-background text-4xl leading-[1.08] font-bold tracking-tight [text-wrap:balance] sm:text-5xl lg:text-[60px]">
            Modular Software Built Around{" "}
            <span className="bg-[radial-gradient(50%_0%_at_0%_50%,var(--color-cta-container)_25.48%,var(--color-cta)_100%)] bg-clip-text text-transparent">
              Your Business
            </span>
            . Built to Scale.
          </h1>

          {/* Description */}
          <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed sm:text-lg">
            We deliver fast Launch Kit websites, reliable Automation Layers, and focused Custom
            Web Apps &amp; MVPs for growing businesses across Nepal and worldwide—clear pricing,
            founder-led engineering, and zero bloat.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="/request-proposal"
              className="bg-cta text-on-cta w-auto! max-w-none! shrink-0 px-7 whitespace-nowrap transition-colors duration-150 hover:opacity-90"
            >
              Request a Proposal
              <FilePenLine className="h-4 w-4 shrink-0" />
            </Button>

            <Link
              href="#scope-estimator"
              className="border-cta text-cta hover:bg-cta/10 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[28px] border px-6 text-sm font-semibold whitespace-nowrap transition-colors duration-150"
            >
              <Calculator className="h-4 w-4 shrink-0" />
              Estimate Project Scope
            </Link>
          </div>

          {/* Clean Unboxed Trust Metadata */}
          <div className="border-border-base text-on-surface-variant flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t pt-6 text-xs font-medium sm:text-sm">
            <span className="flex items-center gap-1.5">
              <DollarSign className="text-cta h-4 w-4 shrink-0" />
              Transparent NPR &amp; USD pricing
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="text-cta h-4 w-4 shrink-0" />
              1-business-day response
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="text-cta h-4 w-4 shrink-0" />
              100% client IP ownership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

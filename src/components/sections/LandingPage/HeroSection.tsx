import Link from "next/link";
import { CheckCircle, Clock, DollarSign, FilePenLine, Globe } from "lucide-react";
import { Button } from "@/components/Button";

const PERSPECTIVE_GRID_SRC = "/Perspective-Grid.png";

export function HeroSection() {
  return (
    <section className="bg-background text-on-background relative isolate overflow-hidden py-14 transition-colors duration-300 md:py-24">
      {/* Perspective Grid */}
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
            className="h-full w-full object-cover opacity-30 dark:opacity-20"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 flex max-w-4xl flex-col items-center space-y-7 text-center">
        {/* Eyebrow */}
        <span className="text-primary px-4 font-medium tracking-widest uppercase">
          Custom Software System
        </span>

        {/* Heading */}
        <div className="font-heading font-bold">
          <h1 className="text-center text-[60px] leading-[110%] tracking-[0%]">
            Built Around Your{" "}
            <span className="bg-[radial-gradient(50%_0%_at_0%_50%,var(--color-cta-container)_25.48%,var(--color-cta)_100%)] bg-clip-text text-transparent">
              Business
            </span>
            .
          </h1>

          <h1 className="text-center text-[60px] leading-[110%] tracking-[0%]">
            Built to{" "}
            <span className="bg-[radial-gradient(50%_0%_at_0%_50%,var(--color-cta-container)_25.48%,var(--color-cta)_100%)] bg-clip-text text-transparent">
              Scale
            </span>
            .
          </h1>
        </div>

        {/* Description */}
        <p className="text-on-surface-variant w-214 text-lg leading-relaxed">
          We build custom ERP platforms, workflow automation, integrations, and digital
          infrastructure for growing organizations, designed around how your business actually
          works.
        </p>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
          <span className="text-on-background flex items-center justify-center gap-1.5 text-sm">
            <Clock className="text-cta h-4 w-4" />
            Response within 24 hours
          </span>

          <span className="text-on-surface-variant hidden sm:inline">•</span>

          <span className="text-on-background flex items-center justify-center gap-1.5 text-sm">
            <DollarSign className="text-cta h-4 w-4" />
            Transparent pricing
          </span>

          <span className="text-on-surface-variant hidden sm:inline">•</span>

          <span className="text-on-background flex items-center justify-center gap-1.5 text-sm">
            <CheckCircle className="text-cta h-4 w-4" />
            No hidden cost
          </span>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link href="/contact">
            <Button className="bg-cta text-on-cta px-6 transition-colors duration-300 hover:opacity-90">
              Request a Proposal
              <FilePenLine className="ml-1 h-6 w-6" />
            </Button>
          </Link>
        </div>

        {/* Bottom Information */}
        <div className="text-caption1 text-on-surface-variant flex items-center gap-6 pt-2">
          <span className="flex items-center gap-1.5">
            <FilePenLine className="text-cta h-4 w-4" />
            NDA Available
          </span>

          <span>•</span>

          <span className="flex items-center gap-1.5">
            <Globe className="text-cta h-4 w-4" />
            Global Collaboration
          </span>
        </div>
      </div>
    </section>
  );
}

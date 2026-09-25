import Link from "next/link";
import { CheckCircle, Clock, DollarSign, FilePenLine, Globe } from "lucide-react";
import { Button } from "@/components/Button";

const PERSPECTIVE_GRID_SRC = "/Perspective-Grid.png";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden py-14 transition-colors duration-300 md:py-24">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 z-0 h-86 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-2xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      {/* Perspective Path Grid (PNG, inlined as an img) */}
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
          <img src={PERSPECTIVE_GRID_SRC} alt="" className="h-full w-full" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 flex max-w-4xl flex-col items-center space-y-7 text-center">
        {/* Eyebrow */}
        <span className="px-4 font-medium tracking-widest text-[#2D738D] uppercase">
          Custom Software System
        </span>

        {/* Heading */}
        <div className="font-['DM_Sans'] font-bold">
          <h1 className="text-center text-[60px] leading-[110%] tracking-[0%]">
            Built Around Your{" "}
            <span className="bg-[radial-gradient(50%_50%_at_50%_50%,#B8E0E9_25.48%,#2D738D_100%)] bg-clip-text text-transparent">
              Business
            </span>
            .
          </h1>

          <h1 className="text-center text-[60px] leading-[110%] tracking-[0%]">
            Built to{" "}
            <span className="bg-[radial-gradient(50%_50%_at_50%_50%,#B8E0E9_25.48%,#2D738D_100%)] bg-clip-text text-transparent">
              Scale
            </span>
            .
          </h1>
        </div>

        {/* Description */}
        <p className="w-214 text-lg leading-relaxed">
          We build custom ERP platforms, workflow automation, integrations, and digital
          infrastructure for growing organizations, designed around how your business actually
          works.
        </p>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
          <span className="flex items-center justify-center gap-1.5 text-sm">
            <Clock className="h-4 w-4 text-[#2D738D]" />
            Response within 24 hours
          </span>

          <span className="text-text-dim hidden sm:inline">•</span>

          <span className="flex items-center justify-center gap-1.5 text-sm">
            <DollarSign className="h-4 w-4 text-[#2D738D]" />
            Transparent pricing
          </span>

          <span className="text-text-dim hidden sm:inline">•</span>

          <span className="flex items-center justify-center gap-1.5 text-sm">
            <CheckCircle className="h-4 w-4 text-[#2D738D]" />
            No hidden cost
          </span>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link href="/contact">
            <Button className="px-6 text-white">
              Request a Proposal
              <FilePenLine className="ml-1 h-6 w-6" />
            </Button>
          </Link>
        </div>

        {/* Bottom Information */}
        <div className="text-caption1 text-text-dim flex items-center gap-6 pt-2">
          <span className="flex items-center gap-1.5">
            <FilePenLine className="h-4 w-4 text-[#2D738D]" />
            NDA Available
          </span>

          <span>•</span>

          <span className="flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-[#2D738D]" />
            Global Collaboration
          </span>
        </div>
      </div>
    </section>
  );
}

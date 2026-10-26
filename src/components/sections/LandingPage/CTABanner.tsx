import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/links";

export function CtaSection() {
  return (
    <section className="bg-bg-main py-12 transition-colors duration-300 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="bg-bg-alt relative overflow-hidden rounded-[2rem] px-6 py-16 sm:px-10 sm:py-20 lg:rounded-[2.5rem] lg:py-24">
          {/* Glow: top right (neutral) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl sm:h-96 sm:w-96"
          />
          {/* Glow: bottom left (teal) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#4BA3C3]/25 blur-3xl sm:h-80 sm:w-80"
          />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-foreground text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Ready To Build Together?
            </h2>
            <p className="text-body1 text-foreground mt-4 sm:mt-5 sm:text-lg">
              Better technology starts here.
            </p>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row">
              <Button
                href="/request-proposal"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 bg-gradient-to-r from-[#4BA3C3] to-[#8CCBDB] px-8 py-3.5 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(75,163,195,0.6)] transition-all duration-150 ease-in hover:brightness-110 sm:w-auto"
              >
                Request a Proposal
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
              <Button
                href={BOOKING_URL}
                external
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-[#2D738D] bg-transparent px-10 py-3.5 text-base font-normal text-[#3A9BBF] transition-colors duration-150 ease-in hover:bg-[#2D738D]/10 sm:w-auto"
              >
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

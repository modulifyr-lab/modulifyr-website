"use client";

interface CapabilityTag {
  name: string;
}

const DEFAULT_CAPABILITY_TAGS: CapabilityTag[] = [
  { name: "CUSTOM SOFTWARE" },
  { name: "ERP SYSTEMS" },
  { name: "WORKFLOW AUTOMATION" },
  { name: "LEGACY REBUILDS" },
  { name: "API INTEGRATION" },
];

interface LogoMarqueeProps {
  tags?: CapabilityTag[];
}

export function LogoMarquee({ tags = DEFAULT_CAPABILITY_TAGS }: LogoMarqueeProps) {
  const duplicatedLogos = [...tags, ...tags, ...tags, ...tags];

  return (
    <div className="w-full overflow-hidden border-y border-[#334F90]/40 bg-[#334F9066] py-6 transition-colors duration-300">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logo-scroll {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .animate-logo-marquee {
              animation: logo-scroll 25s linear infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .animate-logo-marquee {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <div className="animate-logo-marquee flex w-max items-center gap-6 select-none">
        {duplicatedLogos.map((logo, idx) => (
          <div key={idx} className="flex shrink-0 items-center gap-3">
            <span className="text-md font-light tracking-widest text-white uppercase">
              {logo.name}
            </span>

            <span className="text-accent-amber text-2xl font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

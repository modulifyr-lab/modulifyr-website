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
  const duplicatedLogos = [...tags, ...tags, ...tags];

  return (
    <div className="w-full overflow-hidden bg-bg-alt border-y border-border-main py-6 transition-colors duration-300">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logo-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333%); }
            }
            .animate-logo-marquee {
              animation: logo-scroll 18s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-logo-marquee {
                animation: none !important;
              }
            }
          `,
        }}
      />
      <div className="flex w-max items-center gap-12 animate-logo-marquee select-none">
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-bg-main border border-border-main/80 rounded-full px-5 py-2 shadow-sm shrink-0"
          >
            <div className="h-2 w-2 rounded-full bg-[#2D738D]" />
            <span className="text-caption1 font-bold tracking-wider text-foreground uppercase">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

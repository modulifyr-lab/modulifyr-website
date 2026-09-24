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
    <div className="w-full overflow-hidden bg-bg-alt border-y border-border-main py-6 transition-colors duration-300">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logo-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
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
      <div className="flex w-max items-center gap-6 animate-logo-marquee select-none">
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-bg-main border border-border-main rounded-full px-5 py-2 shadow-sm shrink-0"
          >
            <span className="text-sm font-bold tracking-wider text-foreground uppercase">
              {logo.name}
            </span>
            <span className="text-[#E8A33D] font-bold text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

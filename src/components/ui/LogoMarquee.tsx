"use client";

import Image from "next/image";

const CLIENT_PARTNER_LOGOS = [
  { name: "Global Operations", label: "Enterprise Software" },
  { name: "Apex Logistics", label: "Supply Chain" },
  { name: "MedTech Systems", label: "Healthcare Solutions" },
  { name: "EduCloud Nepal", label: "Education Systems" },
  { name: "RetailFlow POS", label: "Commerce & Retail" },
  { name: "Horizon Finance", label: "Fintech & Billing" },
];

export function LogoMarquee() {
  const duplicatedLogos = [...CLIENT_PARTNER_LOGOS, ...CLIENT_PARTNER_LOGOS, ...CLIENT_PARTNER_LOGOS];

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
            className="flex items-center gap-3 bg-bg-main border border-border-main/80 rounded-xl px-5 py-2.5 shadow-sm shrink-0"
          >
            <div className="h-3 w-3 rounded-full bg-[#2D738D]" />
            <div className="flex flex-col">
              <span className="text-body2 font-bold text-foreground">
                {logo.name}
              </span>
              <span className="text-caption2 font-semibold text-text-dim">
                {logo.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

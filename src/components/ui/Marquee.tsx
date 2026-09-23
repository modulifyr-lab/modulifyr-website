"use client";

import * as React from "react";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds
}

export default function Marquee({ items, direction = "left", speed = 25 }: MarqueeProps) {
  // To ensure it is completely filled and seamless, we duplicate items
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="bg-bg-secondary border-border-base pointer-events-auto relative w-full overflow-hidden border-y py-5"
      aria-hidden="true"
    >
      {/* Local styles for smooth rendering and clean fallback */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-ltr {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          gap: 3rem;
          user-select: none;
        }
        .marquee-inner:hover {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner {
            animation: none !important;
            flex-wrap: wrap;
            justify-content: center;
            width: 100% !important;
            gap: 1.5rem !important;
          }
        }
      `,
        }}
      />

      <div
        className="marquee-inner"
        style={{
          animation: `${direction === "left" ? "marquee-rtl" : "marquee-ltr"} ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="text-foreground font-heading flex shrink-0 items-center gap-3 text-sm font-bold tracking-wider whitespace-nowrap uppercase opacity-75 transition-opacity hover:opacity-100 md:text-base"
          >
            <span>{item}</span>
            <span className="text-[#2D738D] text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

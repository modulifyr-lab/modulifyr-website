"use client";

import * as React from "react";

interface MagneticProps {
  children: React.ReactElement;
  radius?: number; // max pull radius in pixels, default 8px
}

export default function Magnetic({ children, radius = 8 }: MagneticProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        "ontouchstart" in window
      ) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      el.style.transition = "none";

      const pullX = (distanceX / (rect.width / 2)) * radius;
      const pullY = (distanceY / (rect.height / 2)) * radius;

      const finalX = Math.max(-radius, Math.min(radius, pullX));
      const finalY = Math.max(-radius, Math.min(radius, pullY));

      el.style.transform = `translate(${finalX}px, ${finalY}px)`;
    };

    const handlePointerLeave = () => {
      el.style.transition = "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)";
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [radius]);

  return (
    <div ref={containerRef} className="inline-block">
      {children}
    </div>
  );
}

"use client";

import * as React from "react";

interface MagneticProps {
  children: React.ReactElement;
  radius?: number; // max pull radius in pixels
  scale?: number; // hover scale factor
  className?: string;
}

export default function Magnetic({
  children,
  radius = 6,
  scale = 1.05,
  className = "",
}: MagneticProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isReducedOrTouch = () =>
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      "ontouchstart" in window;

    const handlePointerMove = (e: PointerEvent) => {
      if (isReducedOrTouch()) {
        return;
      }

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const pullX = (distanceX / (rect.width / 2)) * radius;
      const pullY = (distanceY / (rect.height / 2)) * radius;

      const finalX = Math.max(-radius, Math.min(radius, pullX));
      const finalY = Math.max(-radius, Math.min(radius, pullY));

      el.style.transition = "transform 110ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = `translate3d(${finalX.toFixed(2)}px, ${finalY.toFixed(2)}px, 0) scale(${scale})`;
    };

    const handlePointerLeave = () => {
      el.style.transition = "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "translate3d(0px, 0px, 0) scale(1)";
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [radius, scale]);

  return (
    <div ref={containerRef} className={`inline-flex items-center ${className}`.trim()}>
      {children}
    </div>
  );
}

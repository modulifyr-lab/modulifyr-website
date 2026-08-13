'use client'

import * as React from "react";

interface MagneticProps {
  children: React.ReactElement;
  radius?: number; // max pull radius in pixels, default 8px
}

export default function Magnetic({ children, radius = 8 }: MagneticProps) {
  const ref = React.useRef<HTMLElement>(null);

  const handlePointerMove = (e: PointerEvent) => {
    const el = ref.current;
    if (!el) return;

    // Check touch device / prefers-reduced-motion
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

    // Direct style update for follow
    el.style.transition = "none";

    // We restrict pull to max radius
    const pullX = (distanceX / (rect.width / 2)) * radius;
    const pullY = (distanceY / (rect.height / 2)) * radius;

    // Clamp to radius
    const finalX = Math.max(-radius, Math.min(radius, pullX));
    const finalY = Math.max(-radius, Math.min(radius, pullY));

    el.style.transform = `translate(${finalX}px, ${finalY}px)`;
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transition = "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)";
    el.style.transform = "translate(0px, 0px)";
  };

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [radius]);

  // We clone the child to attach the ref
  return React.cloneElement(children as any, {
    ref: (node: HTMLElement | null) => {
      // Keep support for existing ref if child has one
      const { ref: childRef } = children as any;
      if (childRef) {
        if (typeof childRef === "function") {
          childRef(node);
        } else {
          childRef.current = node;
        }
      }
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    },
  } as any);
}

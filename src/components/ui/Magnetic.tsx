'use client'

import * as React from "react";

interface MagneticProps {
  children: React.ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  radius?: number; // max pull radius in pixels, default 8px
}

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (!ref) return;
  if (typeof ref === "function") {
    ref(value);
  } else if (ref && "current" in ref) {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
}

export default function Magnetic({ children, radius = 8 }: MagneticProps) {
  const ref = React.useRef<HTMLElement>(null);

  const handlePointerMove = React.useCallback((e: PointerEvent) => {
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
  }, [radius]);

  const handlePointerLeave = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transition = "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)";
    el.style.transform = "translate(0px, 0px)";
  }, []);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerLeave]);

  // We clone the child to attach the ref
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    ref: (node: HTMLElement | null) => {
      // Keep support for existing ref if child has one
      setRef(child.props.ref, node);
      setRef(ref, node);
    },
  });
}

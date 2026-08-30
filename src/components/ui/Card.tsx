"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  magnetic?: boolean;
  tilt?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, magnetic = false, tilt = false, ...props }, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null);

    // Merge forwarded ref with our internal ref
    const handleRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        if (internalRef) {
          (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }
      },
      [ref]
    );

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      const card = internalRef.current;
      if (!card) return;

      // Disable on touch devices and prefers-reduced-motion
      if (
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        "ontouchstart" in window
      ) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.transition = "none";

      if (tilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((centerY - y) / centerY) * 6; // max ~6deg
        const rotateY = ((x - centerX) / centerX) * 6; // max ~6deg
        card.style.setProperty("--tilt-rx", `${rotateX}deg`);
        card.style.setProperty("--tilt-ry", `${rotateY}deg`);
      }

      if (magnetic) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const pullX = ((x - centerX) / centerX) * 12; // max ~12px
        const pullY = ((y - centerY) / centerY) * 12; // max ~12px
        card.style.setProperty("--magnetic-tx", `${pullX}px`);
        card.style.setProperty("--magnetic-ty", `${pullY}px`);
      }
    };

    const handlePointerLeave = () => {
      const card = internalRef.current;
      if (!card) return;

      card.style.transition =
        "transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out";
      card.style.setProperty("--tilt-rx", "0deg");
      card.style.setProperty("--tilt-ry", "0deg");
      card.style.setProperty("--magnetic-tx", "0px");
      card.style.setProperty("--magnetic-ty", "0px");
    };

    const hasTiltOrMagnetic = tilt || magnetic;

    return (
      <div
        ref={handleRef}
        onPointerMove={hasTiltOrMagnetic ? handlePointerMove : undefined}
        onPointerLeave={hasTiltOrMagnetic ? handlePointerLeave : undefined}
        className={cn(
          "bg-background border-border-base duration-base ease-base rounded-2xl border p-8 transition-all",
          hover && !hasTiltOrMagnetic && "hover:-translate-y-1 hover:shadow-lg",
          className
        )}
        style={{
          transform: hasTiltOrMagnetic
            ? "perspective(1000px) rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg)) translate(var(--magnetic-tx, 0px), var(--magnetic-ty, 0px))"
            : undefined,
          ...props.style,
        }}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-heading text-foreground mb-4 text-xl font-bold", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-text-secondary text-base leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export { Card, CardTitle, CardDescription };

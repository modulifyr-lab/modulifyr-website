"use client";

import * as React from "react";
import { computeReadingProgress, getProgressColor } from "@/lib/reading-progress";

interface ReadingProgressBarProps {
  targetSelector?: string;
}

export function ReadingProgressBar({ targetSelector = "article" }: ReadingProgressBarProps) {
  const barRef = React.useRef<HTMLDivElement>(null);
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;

      const articleEl = document.querySelector(targetSelector);
      const rect = articleEl?.getBoundingClientRect();
      const articleTop = rect ? window.scrollY + rect.top : undefined;
      const articleHeight = rect ? rect.height : undefined;

      const progress = computeReadingProgress({
        scrollY: window.scrollY,
        viewportHeight: window.innerHeight,
        documentScrollHeight: document.documentElement.scrollHeight,
        articleTop,
        articleHeight,
      });

      if (barRef.current) {
        const endColor = getProgressColor(progress);
        barRef.current.style.transform = `scaleX(${progress})`;
        barRef.current.style.backgroundImage = `linear-gradient(90deg, #2D738D 0%, ${endColor} 100%)`;
      }

      const nextPercent = Math.round(progress * 100);
      setPercent((prev) => (prev === nextPercent ? prev : nextPercent));
    };

    const scheduleUpdate = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [targetSelector]);

  return (
    <div
      role="progressbar"
      aria-label="Article reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className="pointer-events-none fixed top-0 right-0 left-0 z-[60] h-[3px] bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left will-change-transform"
        style={{
          transform: "scaleX(0)",
          backgroundImage: "linear-gradient(90deg, #2D738D 0%, #2D738D 100%)",
        }}
      />
    </div>
  );
}

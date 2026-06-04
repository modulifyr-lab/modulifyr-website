"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

export function StartupBanner() {
  const [visible, setVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setVisible(!sessionStorage.getItem("modulifyr_startup_banner"));
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("modulifyr_startup_banner", "1");
    setVisible(false);
  };

  if (!isHydrated || !visible) return null;

  return (
    <div
      role="banner"
      aria-label="Startup announcement"
      className="bg-brand-navy border-brand-orange/30 sticky top-20 z-40 w-full border-b"
    >
      <div className="container-custom flex items-center justify-between gap-4 py-2.5">
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="bg-brand-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-brand-orange relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="text-brand-orange text-[10px] font-bold tracking-[0.18em] uppercase">
            Just launched
          </span>
        </div>

        <p className="flex-1 text-center text-xs leading-snug text-white/90 sm:text-sm">
          <span className="font-bold text-white">Modulifyr is brand-new</span>
          {" — "}built by our founder. We&rsquo;re bootstrapped on free tools and actively seeking{" "}
          <span className="text-brand-gold font-semibold">volunteers</span> or{" "}
          <span className="text-brand-gold font-semibold">collaborators</span>.{" "}
          <Link
            href="/careers"
            className="text-brand-orange hover:text-brand-orange/80 decoration-brand-orange/40 inline-flex items-center gap-1 font-bold underline underline-offset-2 transition-colors duration-150"
          >
            Interested? Apply inside
            <ArrowRight className="h-3 w-3 shrink-0" />
          </Link>
        </p>

        <button
          onClick={dismiss}
          aria-label="Dismiss announcement banner"
          className="shrink-0 rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

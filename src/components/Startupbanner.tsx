"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * StartupBanner
 * ─────────────
 * Dismissible top announcement bar shown above the Navbar.
 * Add <StartupBanner /> in layout.tsx BEFORE <Navbar />, inside <RegionProvider>.
 * Dismissal persists per session (sessionStorage). Reappears each new browser session.
 *
 * Save to: src/components/StartupBanner.tsx
 */
export function StartupBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem("modulifyr_startup_banner");
        if (!dismissed) setVisible(true);
    }, []);

    const dismiss = () => {
        sessionStorage.setItem("modulifyr_startup_banner", "1");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="banner"
            aria-label="Startup announcement"
            className="w-full bg-brand-navy border-b border-brand-orange/30"
        >
            <div className="container-custom flex items-center justify-between gap-4 py-2.5">

                {/* Pulsing dot + label — hidden on mobile */}
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                    </span>
                    <span className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.18em]">
                        Just launched
                    </span>
                </div>

                {/* Message */}
                <p className="flex-1 text-center text-white/90 text-xs sm:text-sm leading-snug">
                    <span className="font-bold text-white">Modulifyr is brand-new</span>
                    {" — "}built by our founder. We&rsquo;re bootstrapped on free tools and actively seeking{" "}
                    <span className="text-brand-gold font-semibold">volunteers</span>
                    {" "}or{" "}
                    <span className="text-brand-gold font-semibold">equity-only collaborators</span>.{" "}
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-1 font-bold text-brand-orange hover:text-brand-orange/80 underline underline-offset-2 decoration-brand-orange/40 transition-colors duration-150"
                    >
                        Interested? Apply inside
                        <ArrowRight className="w-3 h-3 shrink-0" />
                    </Link>
                </p>

                {/* Dismiss */}
                <button
                    onClick={dismiss}
                    aria-label="Dismiss announcement banner"
                    className="shrink-0 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>

            </div>
        </div>
    );
}
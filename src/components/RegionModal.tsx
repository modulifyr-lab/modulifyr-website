"use client";

import * as React from "react";
import { useRegion } from "./RegionProvider";
import { MapPin, Globe } from "lucide-react";

export function RegionModal() {
  const { hasChosen, setRegion } = useRegion();
  // Start as false — only show after we confirm localStorage has no saved choice
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // RegionProvider already reads localStorage on mount and sets hasChosen.
    // We wait one tick to let that hydration settle, then check.
    // No artificial delay — the provider's useEffect runs synchronously on mount.
    const timer = setTimeout(() => {
      if (!hasChosen) {
        setVisible(true);
      }
    }, 100); // minimal tick — just enough to avoid SSR flash
    return () => clearTimeout(timer);
  }, [hasChosen]);

  // If user already chose (from a previous visit), never render
  if (hasChosen || !visible) return null;

  const choose = (r: "nepal" | "international") => {
    setRegion(r);
    setVisible(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="region-modal-title"
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
      >
        <div className="dark:bg-bg-dark border-border-base w-full max-w-md overflow-hidden rounded-3xl border bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-brand-navy px-8 py-8 text-center">
            <div className="bg-brand-orange/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
              <Globe className="text-brand-orange h-6 w-6" />
            </div>
            <h2 id="region-modal-title" className="font-heading mb-2 text-2xl font-bold text-white">
              Where are you based?
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              We'll show you pricing and budget options relevant to your region.
            </p>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3 p-6">
            <button
              onClick={() => choose("nepal")}
              className="group border-border-base hover:border-brand-orange hover:bg-brand-orange/5 flex w-full items-center gap-5 rounded-2xl border-2 p-5 text-left transition-all"
            >
              <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                <MapPin className="text-brand-orange h-6 w-6" />
              </div>
              <div>
                <p className="font-heading text-brand-navy text-base font-bold dark:text-white">
                  Nepal / South Asia
                </p>
                <p className="text-text-muted mt-0.5 text-xs">
                  Pricing shown in NPR · Nepali market rates
                </p>
              </div>
            </button>

            <button
              onClick={() => choose("international")}
              className="group border-border-base hover:border-brand-teal hover:bg-brand-teal/5 flex w-full items-center gap-5 rounded-2xl border-2 p-5 text-left transition-all"
            >
              <div className="bg-brand-teal/10 group-hover:bg-brand-teal/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                <Globe className="text-brand-teal h-6 w-6" />
              </div>
              <div>
                <p className="font-heading text-brand-navy text-base font-bold dark:text-white">
                  International
                </p>
                <p className="text-text-muted mt-0.5 text-xs">
                  Pricing shown in USD · Global market rates
                </p>
              </div>
            </button>

            <p className="text-text-muted pt-2 text-center text-xs">
              You can change this at any time from the pricing page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
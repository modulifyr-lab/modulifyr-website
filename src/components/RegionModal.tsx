"use client";

import * as React from "react";
import { useRegion } from "./RegionProvider";
import { REGIONS, REGION_CODES } from "@/lib/regions";
import type { Region } from "@/lib/regions";
import { Globe } from "lucide-react";

export function RegionModal() {
  const { hasChosen, setRegion } = useRegion();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasChosen) setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [hasChosen]);

  if (hasChosen || !visible) return null;

  const choose = (r: Exclude<Region, null>) => {
    setRegion(r);
    setVisible(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="region-modal-title"
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
      >
        <div className="dark:bg-bg-dark border-border-base w-full max-w-lg overflow-hidden rounded-3xl border bg-white shadow-2xl">
          <div className="bg-brand-navy px-8 py-8 text-center">
            <div className="bg-brand-orange/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
              <Globe className="text-brand-orange h-6 w-6" />
            </div>
            <h2 id="region-modal-title" className="font-heading mb-2 text-2xl font-bold text-white">
              Where are you based?
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              We currently serve these regions and will show matching pricing and budget options.
            </p>
          </div>
          <div className="grid max-h-[60vh] grid-cols-1 gap-3 overflow-y-auto p-6 sm:grid-cols-2">
            {REGION_CODES.map((code) => (
              <button
                key={code}
                onClick={() => choose(code)}
                className="group border-border-base hover:border-brand-orange hover:bg-brand-orange/5 flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all"
              >
                <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 text-brand-orange flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors">
                  {code}
                </div>
                <div>
                  <p className="font-heading text-foreground text-sm font-bold dark:text-white">
                    {REGIONS[code].label}
                  </p>
                  <p className="text-text-muted mt-0.5 text-xs">
                    Pricing in {REGIONS[code].currency}
                  </p>
                </div>
              </button>
            ))}
            <p className="text-text-muted pt-2 text-center text-xs sm:col-span-2">
              You can change this any time from the site-wide region selector.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

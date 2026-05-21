"use client";

import { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";

export function DevelopmentAlertModal() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisible(!sessionStorage.getItem("modulifyr_development_alert"));
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("modulifyr_development_alert", "1");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="development-alert-title"
        className="fixed inset-0 z-[201] flex items-center justify-center p-4"
      >
        <div className="dark:bg-bg-dark border-brand-orange w-full max-w-2xl overflow-hidden rounded-3xl border-4 bg-white shadow-2xl">
          <div className="bg-brand-navy px-8 py-8 text-center">
            <div className="bg-brand-orange mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <AlertTriangle className="text-brand-navy h-8 w-8" />
            </div>
            <h2
              id="development-alert-title"
              className="font-heading mb-4 text-3xl font-extrabold text-white"
            >
              Under Active Development
            </h2>
          </div>

          <div className="p-8">
            <div className="space-y-4 text-left">
              <p className="text-lg font-semibold text-brand-navy">
                This website and our associated business are currently in active development.
              </p>
              <p className="text-gray-700">
                Our platform is not yet ready for public use. We are still working hard to prepare
                everything for our official launch.
              </p>
              <p className="text-xl font-bold text-brand-orange">
                Please do NOT place any orders or submit any transactions at this time.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={dismiss}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-navy px-8 py-4 font-heading text-lg font-bold text-white transition-all hover:bg-brand-navy/90 active:scale-[0.98]"
              >
                I Understand
                <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

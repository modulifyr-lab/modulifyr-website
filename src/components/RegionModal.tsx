"use client";

import * as React from "react";
import { useRegion } from "./RegionProvider";
import { MapPin, Globe } from "lucide-react";

export function RegionModal() {
    const { hasChosen, setRegion } = useRegion();
    const [visible, setVisible] = React.useState(false);

    // Small delay so it doesn't flash on SSR hydration
    React.useEffect(() => {
        if (!hasChosen) {
            const t = setTimeout(() => setVisible(true), 600);
            return () => clearTimeout(t);
        }
    }, [hasChosen]);

    if (!visible || hasChosen) return null;

    const choose = (r: "nepal" | "international") => {
        setRegion(r);
        setVisible(false);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="region-modal-title"
                className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
                <div className="bg-white dark:bg-bg-dark rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-border-base">

                    {/* Header */}
                    <div className="bg-brand-navy px-8 py-8 text-center">
                        <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-6 h-6 text-brand-orange" />
                        </div>
                        <h2
                            id="region-modal-title"
                            className="text-2xl font-heading font-bold text-white mb-2"
                        >
                            Where are you based?
                        </h2>
                        <p className="text-text-muted text-sm leading-relaxed">
                            We'll show you pricing and budget options relevant to your region.
                        </p>
                    </div>

                    {/* Options */}
                    <div className="p-6 flex flex-col gap-3">
                        <button
                            onClick={() => choose("nepal")}
                            className="group w-full flex items-center gap-5 p-5 rounded-2xl border-2 border-border-base hover:border-brand-orange hover:bg-brand-orange/5 transition-all text-left"
                        >
                            <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                                <MapPin className="w-6 h-6 text-brand-orange" />
                            </div>
                            <div>
                                <p className="font-heading font-bold text-brand-navy dark:text-white text-base">
                                    Nepal / South Asia
                                </p>
                                <p className="text-xs text-text-muted mt-0.5">
                                    Pricing shown in NPR · Nepali market rates
                                </p>
                            </div>
                        </button>

                        <button
                            onClick={() => choose("international")}
                            className="group w-full flex items-center gap-5 p-5 rounded-2xl border-2 border-border-base hover:border-brand-teal hover:bg-brand-teal/5 transition-all text-left"
                        >
                            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-teal/20 transition-colors">
                                <Globe className="w-6 h-6 text-brand-teal" />
                            </div>
                            <div>
                                <p className="font-heading font-bold text-brand-navy dark:text-white text-base">
                                    International
                                </p>
                                <p className="text-xs text-text-muted mt-0.5">
                                    Pricing shown in USD · Global market rates
                                </p>
                            </div>
                        </button>

                        <p className="text-center text-xs text-text-muted pt-2">
                            You can change this at any time from the pricing page.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
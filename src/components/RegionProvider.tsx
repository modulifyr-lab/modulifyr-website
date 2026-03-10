"use client";

import * as React from "react";

export type Region = "nepal" | "international" | null;

interface RegionContextValue {
    region: Region;
    setRegion: (r: Region) => void;
    hasChosen: boolean;
}

export const RegionContext = React.createContext<RegionContextValue>({
    region: null,
    setRegion: () => {},
    hasChosen: false,
});

export function RegionProvider({ children }: { children: React.ReactNode }) {
    const [region, setRegionState] = React.useState<Region>(null);
    const [hasChosen, setHasChosen] = React.useState(false);

    // On mount, read from localStorage
    React.useEffect(() => {
        try {
            const stored = localStorage.getItem("modulifyr_region") as Region;
            if (stored === "nepal" || stored === "international") {
                setRegionState(stored);
                setHasChosen(true);
            }
        } catch {
            // localStorage unavailable (SSR safety)
        }
    }, []);

    const setRegion = React.useCallback((r: Region) => {
        setRegionState(r);
        setHasChosen(true);
        try {
            if (r) localStorage.setItem("modulifyr_region", r);
        } catch {
            // ignore
        }
    }, []);

    return (
        <RegionContext.Provider value={{ region, setRegion, hasChosen }}>
            {children}
        </RegionContext.Provider>
    );
}

export function useRegion() {
    return React.useContext(RegionContext);
}
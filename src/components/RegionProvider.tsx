"use client";

import * as React from "react";
import { isRegion, REGION_COOKIE, REGION_STORAGE_KEY } from "@/lib/regions";
import type { Region } from "@/lib/regions";

export type { Region };

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

function persistRegion(r: Region) {
  try {
    if (r) {
      localStorage.setItem(REGION_STORAGE_KEY, r);
      document.cookie = `${REGION_COOKIE}=${r}; path=/; max-age=31536000; SameSite=Lax`;
    } else {
      localStorage.removeItem(REGION_STORAGE_KEY);
      document.cookie = `${REGION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
    }
  } catch {
    // Ignore storage/cookie failures in restricted browsers.
  }
}

export function RegionProvider({
  children,
  initialRegion = null,
}: {
  children: React.ReactNode;
  initialRegion?: Region;
}) {
  const [region, setRegionState] = React.useState<Region>(initialRegion);
  const [hasChosen, setHasChosen] = React.useState(Boolean(initialRegion));

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(REGION_STORAGE_KEY);
      if (isRegion(stored)) {
        setRegionState(stored);
        setHasChosen(true);
        persistRegion(stored);
      }
    } catch {
      // localStorage unavailable (SSR safety)
    }
  }, []);

  const setRegion = React.useCallback((r: Region) => {
    setRegionState(r);
    setHasChosen(Boolean(r));
    persistRegion(r);
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

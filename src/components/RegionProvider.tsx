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
  initialRegion = "NP",
}: {
  children: React.ReactNode;
  initialRegion?: Region;
}) {
  const [region, setRegionState] = React.useState<Region>(initialRegion ?? "NP");
  const [hasChosen, setHasChosen] = React.useState(true);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(REGION_STORAGE_KEY);
      if (isRegion(stored)) {
        setRegionState(stored);
        setHasChosen(true);
        persistRegion(stored);
        return;
      }

      const hasCookie = document.cookie
        .split(";")
        .some((c) => c.trim().startsWith(`${REGION_COOKIE}=`));
      if (!hasCookie) {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const autoRegion: Exclude<Region, null> = tz === "Asia/Kathmandu" ? "NP" : "US";
        setRegionState(autoRegion);
      }
      setHasChosen(true);
    } catch {
      // localStorage unavailable (SSR safety)
    }
  }, []);

  const setRegion = React.useCallback((r: Region) => {
    setRegionState(r ?? "NP");
    setHasChosen(Boolean(r));
    persistRegion(r ?? "NP");
  }, []);

  const contextValue = React.useMemo(
    () => ({ region, setRegion, hasChosen }),
    [region, setRegion, hasChosen]
  );

  return <RegionContext.Provider value={contextValue}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  return React.useContext(RegionContext);
}

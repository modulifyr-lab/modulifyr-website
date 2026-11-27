"use client";

import { useRegion } from "@/components/RegionProvider";
import { REGIONS, REGION_CODES } from "@/lib/regions";
import type { Region } from "@/lib/regions";

export function RegionSelector({ compact = false }: { compact?: boolean }) {
  const { region, setRegion } = useRegion();

  return (
    <label className="text-text-muted flex items-center gap-2 text-xs font-semibold">
      {!compact && <span className="tracking-widest uppercase">Currency</span>}
      <select
        aria-label="Select display currency"
        value={region ?? "NP"}
        onChange={(e) => setRegion(e.target.value as Exclude<Region, null>)}
        className="border-border-base bg-background text-foreground dark:text-foreground cursor-pointer rounded-lg border px-2.5 py-2 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D738D]"
      >
        {REGION_CODES.map((code) => (
          <option key={code} value={code}>
            {compact ? REGIONS[code].currency : `${REGIONS[code].currency} (${REGIONS[code].label})`}
          </option>
        ))}
      </select>
    </label>
  );
}

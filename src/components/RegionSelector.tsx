"use client";

import { useRegion } from "@/components/RegionProvider";
import { REGIONS, REGION_CODES } from "@/lib/regions";
import type { Region } from "@/lib/regions";

export function RegionSelector({ compact = false }: { compact?: boolean }) {
  const { region, setRegion } = useRegion();

  return (
    <label className="text-text-muted flex items-center gap-2 text-xs font-semibold">
      {!compact && <span className="tracking-widest uppercase">Region</span>}
      <select
        aria-label="Select pricing region"
        value={region ?? ""}
        onChange={(e) => setRegion(e.target.value as Exclude<Region, null>)}
        className="border-border-base bg-background text-foreground focus-visible:outline-brand-orange dark:text-foreground rounded-lg border px-2 py-2 text-xs font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <option value="" disabled>
          Choose
        </option>
        {REGION_CODES.map((code) => (
          <option key={code} value={code}>
            {compact ? code : `${REGIONS[code].label} (${REGIONS[code].currency})`}
          </option>
        ))}
      </select>
    </label>
  );
}

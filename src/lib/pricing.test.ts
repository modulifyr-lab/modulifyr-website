import { describe, it, expect } from "vitest";
import {
  getPackageRange,
  formatPackageRange,
  FOUNDING_SLOTS_REMAINING,
  pricingFounding,
  pricingStandard,
  type PackagePricingKey,
} from "./pricing";
import { REGION_CODES, REGIONS } from "./regions";

describe("pricing helpers", () => {
  const packages: PackagePricingKey[] = ["strategySprint", "launchKit", "automationLayer"];

  it("getPackageRange returns min of tier mins and max of tier maxes from active table", () => {
    const activeTable = FOUNDING_SLOTS_REMAINING > 0 ? pricingFounding : pricingStandard;

    for (const pkg of packages) {
      for (const region of REGION_CODES) {
        const currency = REGIONS[region].currency;
        const [low, high] = getPackageRange(pkg, region);

        const pkgData = activeTable[pkg];
        let expectedMin = Infinity;
        let expectedMax = -Infinity;

        for (const tierData of Object.values(pkgData)) {
          const range = (tierData as Record<string, readonly [number, number]>)[currency];
          if (range[0] < expectedMin) expectedMin = range[0];
          if (range[1] > expectedMax) expectedMax = range[1];
        }

        expect(low).toBe(expectedMin);
        expect(high).toBe(expectedMax);
      }
    }
  });

  it("formatPackageRange('strategySprint', 'NP') contains no Devanagari characters and starts with NPR", () => {
    const formatted = formatPackageRange("strategySprint", "NP");
    const normalized = formatted.replace(/\s/g, " ");

    expect(normalized.startsWith("NPR")).toBe(true);
    // Ensure no Devanagari characters exist (U+0900 to U+097F)
    expect(/[\u0900-\u097F]/.test(formatted)).toBe(false);
  });
});

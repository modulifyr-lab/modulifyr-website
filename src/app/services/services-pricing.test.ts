import { describe, it, expect } from "vitest";
import { SERVICES, serviceDetailHref, serviceRequestHref } from "@/lib/services";
import { formatPackageRange, getPackageRange } from "@/lib/pricing";
import { REGION_CODES } from "@/lib/regions";

describe("services pricing and data integrity", () => {
  it("formats US package range as a non-empty string containing an en dash for each service", () => {
    for (const service of SERVICES) {
      const range = formatPackageRange(service.pkgKey, "US");
      expect(range).toBeTruthy();
      expect(typeof range).toBe("string");
      expect(range).toContain("–");
    }
  });

  it("has no service title containing the word 'Placeholder'", () => {
    for (const service of SERVICES) {
      expect(service.title).not.toContain("Placeholder");
    }
  });

  it("returns min < max and formatPackageRange contains '–' for every region code and service", () => {
    for (const region of REGION_CODES) {
      for (const service of SERVICES) {
        const [min, max] = getPackageRange(service.pkgKey, region);
        expect(min).toBeLessThan(max);

        const formatted = formatPackageRange(service.pkgKey, region);
        expect(formatted).toContain("–");
      }
    }
  });

  it("has non-empty summary and bestFor, and valid href helper output", () => {
    for (const service of SERVICES) {
      expect(service.summary.trim()).toBeTruthy();
      expect(service.bestFor.trim()).toBeTruthy();
      expect(serviceDetailHref(service)).toBe(`/services/${service.slug}`);
      expect(serviceRequestHref(service)).toBe(`/request-proposal?pkg=${service.slug}`);
    }
  });
});

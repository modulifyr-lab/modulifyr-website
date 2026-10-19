import { describe, it, expect } from "vitest";
import { SERVICES_DATA } from "@/components/ui/ServicesSection";
import { formatPackageRange } from "@/lib/pricing";

describe("services pricing and data integrity", () => {
  it("formats US package range as a non-empty string containing an en dash for each service", () => {
    for (const service of SERVICES_DATA) {
      const range = formatPackageRange(service.pkgKey, "US");
      expect(range).toBeTruthy();
      expect(typeof range).toBe("string");
      expect(range).toContain("–");
    }
  });

  it("has no service title containing the word 'Placeholder'", () => {
    for (const service of SERVICES_DATA) {
      expect(service.title).not.toContain("Placeholder");
    }
  });
});

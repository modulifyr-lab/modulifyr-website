import { describe, it, expect } from "vitest";
import { computeReadingProgress, getProgressColor } from "./reading-progress";

describe("reading progress helpers", () => {
  it("computes 0 at top, proportional values mid-article, and 1 at article completion", () => {
    const input = {
      viewportHeight: 800,
      documentScrollHeight: 3600,
      articleTop: 360,
      articleHeight: 2200,
    };

    expect(computeReadingProgress({ ...input, scrollY: 0 })).toBe(0);

    const mid = computeReadingProgress({ ...input, scrollY: 992 });
    expect(mid).toBeGreaterThan(0.45);
    expect(mid).toBeLessThan(0.55);

    expect(computeReadingProgress({ ...input, scrollY: 2500 })).toBe(1);
  });

  it("falls back safely to document scroll height when article metrics are omitted", () => {
    expect(
      computeReadingProgress({
        scrollY: 500,
        viewportHeight: 1000,
        documentScrollHeight: 2000,
      })
    ).toBe(0.5);

    expect(
      computeReadingProgress({
        scrollY: 0,
        viewportHeight: 1000,
        documentScrollHeight: 1000,
      })
    ).toBe(0);
  });

  it("interpolates cleanly from teal through cyan to amber", () => {
    expect(getProgressColor(0)).toBe("rgb(45, 115, 141)");
    expect(getProgressColor(0.5)).toBe("rgb(64, 158, 183)");
    expect(getProgressColor(1)).toBe("rgb(232, 163, 61)");
  });
});

import { describe, it, expect } from "vitest";
import {
  SERVICES,
  PROJECT_TYPE_OPTIONS,
  NOT_SURE_PROJECT_TYPE,
  getServiceBySlug,
  getServiceByTitle,
} from "./services";

describe("services catalog and options", () => {
  it("PROJECT_TYPE_OPTIONS contains every SERVICES title plus NOT_SURE_PROJECT_TYPE and nothing else", () => {
    const expected = [...SERVICES.map((s) => s.title), NOT_SURE_PROJECT_TYPE];
    expect(PROJECT_TYPE_OPTIONS).toEqual(expected);
  });

  it("no entry in PROJECT_TYPE_OPTIONS contains a digit or the words 'week' or 'day'", () => {
    for (const option of PROJECT_TYPE_OPTIONS) {
      expect(option).not.toMatch(/\d/);
      expect(option.toLowerCase()).not.toContain("week");
      expect(option.toLowerCase()).not.toContain("day");
    }
  });

  it("lookup helpers work accurately", () => {
    expect(getServiceBySlug("strategy-sprint")?.title).toBe("Strategy Sprint");
    expect(getServiceBySlug("unknown-slug" as "strategy-sprint")).toBeUndefined();

    expect(getServiceByTitle("Launch Kit")?.slug).toBe("launch-kit");
    expect(getServiceByTitle("Not sure yet — help me decide")).toBeUndefined();
  });
});

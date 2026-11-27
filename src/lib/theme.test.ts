import { describe, it, expect } from "vitest";
import {
  THEME_STORAGE_KEY,
  getNextThemeMode,
  isThemeMode,
  persistThemeMode,
  readStoredThemeMode,
} from "./theme";

describe("theme preference helpers", () => {
  it("toggles cleanly between dark and light modes", () => {
    expect(getNextThemeMode("dark")).toBe("light");
    expect(getNextThemeMode("light")).toBe("dark");
    expect(getNextThemeMode(undefined)).toBe("dark");
  });

  it("persists and reads valid theme modes using THEME_STORAGE_KEY", () => {
    const store = new Map<string, string>();
    const mockStorage = {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    };

    expect(persistThemeMode("dark", mockStorage)).toBe(true);
    expect(store.get(THEME_STORAGE_KEY)).toBe("dark");
    expect(readStoredThemeMode(mockStorage)).toBe("dark");

    expect(persistThemeMode("light", mockStorage)).toBe(true);
    expect(readStoredThemeMode(mockStorage)).toBe("light");
  });

  it("ignores invalid stored values and handles throwing storage safely", () => {
    const throwingStorage = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
    };

    expect(isThemeMode("system")).toBe(false);
    expect(isThemeMode("dark")).toBe(true);
    expect(persistThemeMode("dark", throwingStorage)).toBe(false);
    expect(readStoredThemeMode(throwingStorage)).toBeNull();
    expect(
      readStoredThemeMode({
        getItem: () => "invalid",
      })
    ).toBeNull();
  });
});

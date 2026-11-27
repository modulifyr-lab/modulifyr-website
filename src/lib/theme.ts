export const THEME_STORAGE_KEY = "theme";

export type ThemeMode = "light" | "dark";

export function isThemeMode(value: unknown): value is ThemeMode {
  return value === "light" || value === "dark";
}

export function getNextThemeMode(currentResolvedTheme: string | undefined): ThemeMode {
  return currentResolvedTheme === "dark" ? "light" : "dark";
}

export function persistThemeMode(
  mode: ThemeMode,
  storage?: Pick<Storage, "setItem">
): boolean {
  const target =
    storage ?? (typeof window !== "undefined" ? window.localStorage : undefined);
  if (!target) return false;
  try {
    target.setItem(THEME_STORAGE_KEY, mode);
    return true;
  } catch {
    return false;
  }
}

export function readStoredThemeMode(
  storage?: Pick<Storage, "getItem">
): ThemeMode | null {
  const target =
    storage ?? (typeof window !== "undefined" ? window.localStorage : undefined);
  if (!target) return null;
  try {
    const stored = target.getItem(THEME_STORAGE_KEY);
    return isThemeMode(stored) ? stored : null;
  } catch {
    return null;
  }
}

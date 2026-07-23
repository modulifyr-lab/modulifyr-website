export type Region = "NP" | "US" | "GB" | "CA" | "AU" | "EU" | null;

export const REGION_COOKIE = "modulifyr_region";
export const REGION_STORAGE_KEY = "modulifyr_region";

export const REGIONS: Record<
  Exclude<Region, null>,
  { label: string; currency: "NPR" | "USD" | "GBP" | "CAD" | "AUD" | "EUR"; locale: string }
> = {
  NP: { label: "Nepal", currency: "NPR", locale: "ne-NP" },
  US: { label: "United States", currency: "USD", locale: "en-US" },
  GB: { label: "United Kingdom", currency: "GBP", locale: "en-GB" },
  CA: { label: "Canada", currency: "CAD", locale: "en-CA" },
  AU: { label: "Australia", currency: "AUD", locale: "en-AU" },
  EU: { label: "Europe", currency: "EUR", locale: "en-IE" },
};

export const REGION_CODES = Object.keys(REGIONS) as Exclude<Region, null>[];

export function isRegion(value: unknown): value is Exclude<Region, null> {
  return typeof value === "string" && value in REGIONS;
}

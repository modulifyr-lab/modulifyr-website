import { REGIONS } from "@/lib/regions";
import type { Region } from "@/lib/regions";

export const pricing = {
  strategySprint: {
    tier1_basicScoping: {
      USD: [100, 300],
      NPR: [15000, 45100],
      CAD: [145, 435],
      AUD: [145, 440],
      EUR: [90, 270],
      GBP: [75, 230],
    },
    tier2_fullDiscovery: {
      USD: [320, 450],
      NPR: [48100, 67700],
      CAD: [460, 650],
      AUD: [470, 665],
      EUR: [285, 405],
      GBP: [245, 345],
    },
    tier3_complexArchitecture: {
      USD: [500, 600],
      NPR: [75200, 90200],
      CAD: [720, 865],
      AUD: [735, 885],
      EUR: [450, 540],
      GBP: [380, 455],
    },
    tier4_enterpriseStrategy: {
      USD: [650, 800],
      NPR: [97700, 120300],
      CAD: [935, 1155],
      AUD: [955, 1180],
      EUR: [580, 715],
      GBP: [495, 610],
    },
  },
  launchKit: {
    tier1_essential: {
      USD: [20, 80],
      NPR: [3000, 12000],
      CAD: [30, 115],
      AUD: [30, 120],
      EUR: [20, 70],
      GBP: [15, 60],
    },
    tier2_business: {
      USD: [100, 240],
      NPR: [15000, 36100],
      CAD: [145, 345],
      AUD: [145, 355],
      EUR: [90, 215],
      GBP: [75, 185],
    },
    tier3_premium: {
      USD: [300, 450],
      NPR: [45100, 67700],
      CAD: [435, 650],
      AUD: [440, 665],
      EUR: [270, 405],
      GBP: [230, 345],
    },
    tier4_enterpriseLaunch: {
      USD: [500, 700],
      NPR: [75200, 105300],
      CAD: [720, 1010],
      AUD: [735, 1030],
      EUR: [450, 625],
      GBP: [380, 535],
    },
  },
  automationLayer: {
    tier1_basicConnection: { USD: 200, NPR: 30100, CAD: 290, AUD: 295, EUR: 180, GBP: 150 },
    tier2_multiSystemSync: {
      USD: [400, 800],
      NPR: [60200, 120300],
      CAD: [575, 1155],
      AUD: [590, 1180],
      EUR: [360, 715],
      GBP: [305, 610],
    },
    tier3_complexPipeline: {
      USD: [900, 1200],
      NPR: [135300, 180500],
      CAD: [1300, 1730],
      AUD: [1325, 1765],
      EUR: [805, 1075],
      GBP: [685, 915],
    },
    tier4_enterpriseAutomation: {
      USD: [1500, 2000],
      NPR: [225600, 300800],
      CAD: [2165, 2885],
      AUD: [2210, 2945],
      EUR: [1345, 1790],
      GBP: [1145, 1525],
    },
  },
} as const;

export type PackagePricingKey = keyof typeof pricing;
export type PriceValue = number | readonly [number, number];
export type TierPricingKey<T extends PackagePricingKey> = keyof (typeof pricing)[T];
export const pricingReviewReminder =
  "Re-check static FX spot rates every 1–3 months and regenerate src/lib/pricing.ts if USD conversion has drifted.";

export function formatCurrencyValue(value: number, region: Exclude<Region, null>): string {
  const { locale, currency } = REGIONS[region];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPrice(value: PriceValue, region: Exclude<Region, null>): string {
  if (typeof value === "number") {
    return formatCurrencyValue(value, region);
  }
  return `${formatCurrencyValue(value[0], region)} – ${formatCurrencyValue(value[1], region)}`;
}

export function formatTierPrice(
  pkg: PackagePricingKey,
  tier: string,
  region: Exclude<Region, null>
): string {
  const currency = REGIONS[region].currency;
  const packagePricing = pricing[pkg] as Record<string, Record<string, PriceValue>>;
  return formatPrice(packagePricing[tier][currency], region);
}

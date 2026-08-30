import { REGIONS } from "@/lib/regions";
import type { Region } from "@/lib/regions";

export const FOUNDING_SLOTS_REMAINING = 10;

export const pricingStandard = {
  strategySprint: {
    tier1_basicScoping: {
      USD: [200, 300],
      NPR: [25000, 35000],
      GBP: [150, 220],
      CAD: [280, 420],
      AUD: [285, 425],
      EUR: [175, 260],
    },
    tier2_fullDiscovery: {
      USD: [400, 550],
      NPR: [45000, 60000],
      GBP: [300, 405],
      CAD: [555, 765],
      AUD: [570, 780],
      EUR: [350, 480],
    },
    tier3_complexArchitecture: {
      USD: [650, 850],
      NPR: [70000, 90000],
      GBP: [480, 630],
      CAD: [905, 1180],
      AUD: [925, 1205],
      EUR: [565, 740],
    },
    tier4_enterpriseStrategy: {
      USD: [1000, 1400],
      NPR: [110000, 150000],
      GBP: [740, 1035],
      CAD: [1390, 1945],
      AUD: [1420, 1985],
      EUR: [870, 1220],
    },
  },
  launchKit: {
    tier1_essential: {
      USD: [300, 400],
      NPR: [30000, 40000],
      GBP: [220, 295],
      CAD: [415, 555],
      AUD: [425, 570],
      EUR: [260, 350],
    },
    tier2_business: {
      USD: [600, 800],
      NPR: [60000, 80000],
      GBP: [445, 590],
      CAD: [835, 1110],
      AUD: [850, 1135],
      EUR: [520, 695],
    },
    tier3_premium: {
      USD: [1000, 1300],
      NPR: [100000, 130000],
      GBP: [740, 960],
      CAD: [1390, 1805],
      AUD: [1420, 1845],
      EUR: [870, 1130],
    },
    tier4_enterpriseLaunch: {
      USD: [1600, 2200],
      NPR: [160000, 220000],
      GBP: [1185, 1630],
      CAD: [2225, 3060],
      AUD: [2270, 3125],
      EUR: [1390, 1915],
    },
  },
  automationLayer: {
    tier1_basicConnection: {
      USD: [350, 450],
      NPR: [35000, 45000],
      GBP: [260, 335],
      CAD: [485, 625],
      AUD: [495, 640],
      EUR: [305, 390],
    },
    tier2_multiSystemSync: {
      USD: [800, 1100],
      NPR: [80000, 110000],
      GBP: [590, 815],
      CAD: [1110, 1530],
      AUD: [1135, 1560],
      EUR: [695, 955],
    },
    tier3_complexPipeline: {
      USD: [1800, 2400],
      NPR: [180000, 240000],
      GBP: [1330, 1775],
      CAD: [2500, 3335],
      AUD: [2555, 3410],
      EUR: [1565, 2090],
    },
    tier4_enterpriseAutomation: {
      USD: [3200, 4500],
      NPR: [320000, 450000],
      GBP: [2370, 3330],
      CAD: [4450, 6255],
      AUD: [4545, 6390],
      EUR: [2785, 3915],
    },
  },
} as const;

export const pricingFounding = {
  strategySprint: {
    tier1_basicScoping: {
      USD: [160, 240],
      NPR: [20000, 28000],
      GBP: [120, 175],
      CAD: [225, 335],
      AUD: [225, 340],
      EUR: [140, 210],
    },
    tier2_fullDiscovery: {
      USD: [320, 440],
      NPR: [36000, 48000],
      GBP: [240, 325],
      CAD: [445, 610],
      AUD: [455, 625],
      EUR: [280, 385],
    },
    tier3_complexArchitecture: {
      USD: [520, 680],
      NPR: [56000, 72000],
      GBP: [385, 505],
      CAD: [720, 945],
      AUD: [740, 965],
      EUR: [450, 590],
    },
    tier4_enterpriseStrategy: {
      USD: [800, 1120],
      NPR: [88000, 120000],
      GBP: [590, 830],
      CAD: [1110, 1555],
      AUD: [1135, 1590],
      EUR: [695, 975],
    },
  },
  launchKit: {
    tier1_essential: {
      USD: [240, 320],
      NPR: [24000, 32000],
      GBP: [175, 235],
      CAD: [335, 445],
      AUD: [340, 455],
      EUR: [210, 280],
    },
    tier2_business: {
      USD: [480, 640],
      NPR: [48000, 64000],
      GBP: [355, 475],
      CAD: [665, 890],
      AUD: [680, 910],
      EUR: [415, 555],
    },
    tier3_premium: {
      USD: [800, 1040],
      NPR: [80000, 104000],
      GBP: [590, 770],
      CAD: [1110, 1445],
      AUD: [1135, 1475],
      EUR: [695, 905],
    },
    tier4_enterpriseLaunch: {
      USD: [1280, 1760],
      NPR: [128000, 176000],
      GBP: [945, 1300],
      CAD: [1780, 2445],
      AUD: [1815, 2495],
      EUR: [1115, 1530],
    },
  },
  automationLayer: {
    tier1_basicConnection: {
      USD: [280, 360],
      NPR: [28000, 36000],
      GBP: [205, 265],
      CAD: [390, 500],
      AUD: [395, 510],
      EUR: [245, 315],
    },
    tier2_multiSystemSync: {
      USD: [640, 880],
      NPR: [64000, 88000],
      GBP: [475, 650],
      CAD: [890, 1225],
      AUD: [910, 1250],
      EUR: [555, 765],
    },
    tier3_complexPipeline: {
      USD: [1440, 1920],
      NPR: [144000, 192000],
      GBP: [1065, 1420],
      CAD: [2000, 2670],
      AUD: [2045, 2725],
      EUR: [1250, 1670],
    },
    tier4_enterpriseAutomation: {
      USD: [2560, 3600],
      NPR: [256000, 360000],
      GBP: [1895, 2665],
      CAD: [3560, 5005],
      AUD: [3635, 5110],
      EUR: [2225, 3130],
    },
  },
} as const;

export const managedHostingPricing = {
  USD: [50, 150],
  NPR: [5000, 15000],
  GBP: [35, 110],
  CAD: [70, 210],
  AUD: [70, 215],
  EUR: [45, 130],
} as const;

export const pricing = FOUNDING_SLOTS_REMAINING > 0 ? pricingFounding : pricingStandard;

export type PackagePricingKey = keyof typeof pricingStandard;
export type PriceValue = number | readonly [number, number];
export type TierPricingKey<T extends PackagePricingKey> = keyof (typeof pricingStandard)[T];
const numberFormatterCache: Record<string, Intl.NumberFormat> = {};

function getNumberFormatter(locale: string, currency: string): Intl.NumberFormat {
  const key = `${locale}-${currency}`;
  if (!numberFormatterCache[key]) {
    numberFormatterCache[key] = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    });
  }
  return numberFormatterCache[key];
}

export function formatCurrencyValue(value: number, region: Exclude<Region, null>): string {
  const { locale, currency } = REGIONS[region];
  return getNumberFormatter(locale, currency).format(value);
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
  return formatTierPriceActive(pkg, tier, region);
}

export function formatTierPriceStandard(
  pkg: PackagePricingKey,
  tier: string,
  region: Exclude<Region, null>
): string {
  const currency = REGIONS[region].currency;
  const packagePricing = pricingStandard[pkg] as Record<string, Record<string, PriceValue>>;
  return formatPrice(packagePricing[tier][currency], region);
}

export function formatTierPriceFounding(
  pkg: PackagePricingKey,
  tier: string,
  region: Exclude<Region, null>
): string {
  const currency = REGIONS[region].currency;
  const packagePricing = pricingFounding[pkg] as Record<string, Record<string, PriceValue>>;
  return formatPrice(packagePricing[tier][currency], region);
}

export function formatTierPriceActive(
  pkg: PackagePricingKey,
  tier: string,
  region: Exclude<Region, null>
): string {
  if (FOUNDING_SLOTS_REMAINING > 0) {
    return formatTierPriceFounding(pkg, tier, region);
  }
  return formatTierPriceStandard(pkg, tier, region);
}

export function formatManagedHostingPrice(region: Exclude<Region, null>): string {
  const currency = REGIONS[region].currency;
  return formatPrice(managedHostingPricing[currency], region);
}

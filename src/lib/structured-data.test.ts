import { describe, it, expect } from "vitest";
import { buildHomeFaqSchemaOrg, buildRootSchemaOrg } from "./structured-data";
import { DEFAULT_FAQ_ITEMS } from "./faq";
import { SERVICES } from "./services";

describe("structured data (Organization + home FAQPage)", () => {
  it("models Organization + ProfessionalService with OfferCatalog strictly matching SERVICES and omits global FAQPage", () => {
    const schema = buildRootSchemaOrg();
    expect(schema["@context"]).toBe("https://schema.org");

    const org = schema["@graph"].find(
      (node) => node["@id"] === "https://modulifyr.com/#organization"
    ) as Record<string, unknown> | undefined;

    expect(org).toBeDefined();
    expect(org?.["@type"]).toEqual(["Organization", "ProfessionalService"]);
    expect(org?.legalName).toBe("Modulifyr Enterprise Pvt. Ltd.");
    expect(org?.telephone).toBe("+977-9764478571");
    expect(org?.email).toBe("contact@modulifyr.com");
    expect((org?.address as Record<string, unknown>)?.streetAddress).toBe("Gauri Tole, Birtamode-1");
    expect((org?.address as Record<string, unknown>)?.addressCountry).toBe("NP");

    const faqInRoot = schema["@graph"].find((node) => node["@type"] === "FAQPage");
    expect(faqInRoot).toBeUndefined();

    const catalog = org?.hasOfferCatalog as {
      "@type": string;
      itemListElement: Array<{
        "@type": string;
        priceCurrency: string;
        priceSpecification: { minPrice: number; maxPrice: number; priceCurrency: string };
        itemOffered: { "@type": string; name: string; serviceType: string; url: string };
      }>;
    };

    expect(catalog["@type"]).toBe("OfferCatalog");
    expect(catalog.itemListElement).toHaveLength(SERVICES.length);
    expect(catalog.itemListElement.map((o) => o.itemOffered.name)).toEqual([
      "Strategy Sprint",
      "Launch Kit",
      "Automation Layer",
    ]);

    for (const offer of catalog.itemListElement) {
      expect(offer["@type"]).toBe("Offer");
      expect(offer.priceSpecification.priceCurrency).toBe("NPR");
      expect(offer.priceSpecification.minPrice).toBeGreaterThan(0);
      expect(offer.priceSpecification.maxPrice).toBeGreaterThanOrEqual(
        offer.priceSpecification.minPrice
      );
      expect(offer.itemOffered["@type"]).toBe("Service");
    }
  });

  it("synchronizes home FAQPage mainEntity 1-to-1 with visible DEFAULT_FAQ_ITEMS", () => {
    const schema = buildHomeFaqSchemaOrg();
    expect(schema["@context"]).toBe("https://schema.org");

    const faq = schema["@graph"].find(
      (node) => node["@id"] === "https://modulifyr.com/#faq"
    ) as {
      "@type": string;
      mainEntity: Array<{
        "@type": string;
        name: string;
        acceptedAnswer: { "@type": string; text: string };
      }>;
    };

    expect(faq["@type"]).toBe("FAQPage");
    expect(faq.mainEntity).toHaveLength(DEFAULT_FAQ_ITEMS.length);

    DEFAULT_FAQ_ITEMS.forEach((item, index) => {
      expect(faq.mainEntity[index]["@type"]).toBe("Question");
      expect(faq.mainEntity[index].name).toBe(item.question);
      expect(faq.mainEntity[index].acceptedAnswer["@type"]).toBe("Answer");
      expect(faq.mainEntity[index].acceptedAnswer.text).toBe(item.answer);
    });

    const serialized = JSON.stringify({ root: buildRootSchemaOrg(), home: schema });
    expect(serialized).not.toContain("2026 Custom Software");
    expect(serialized).not.toContain("Custom Web Apps & MVPs");
    expect(serialized.toLowerCase()).not.toContain("planning bord");
  });
});

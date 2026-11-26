import { DEFAULT_FAQ_ITEMS } from "@/lib/faq";
import { SERVICES } from "@/lib/services";
import { getPackageRange } from "@/lib/pricing";

const SITE_URL = "https://modulifyr.com";

export function buildRootSchemaOrg() {
  const nprMinValues = SERVICES.map((service) => getPackageRange(service.pkgKey, "NP")[0]);
  const nprMaxValues = SERVICES.map((service) => getPackageRange(service.pkgKey, "NP")[1]);
  const overallMinNpr = Math.min(...nprMinValues);
  const overallMaxNpr = Math.max(...nprMaxValues);

  const formatNpr = (amount: number) => `NPR ${amount.toLocaleString("en-US")}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: "Modulifyr",
        legalName: "Modulifyr Enterprise Pvt. Ltd.",
        alternateName: "Modulifyr Enterprise Pvt. Ltd.",
        url: SITE_URL,
        mainEntityOfPage: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/company-logo.png`,
          contentUrl: `${SITE_URL}/company-logo.png`,
          width: 512,
          height: 512,
          caption: "Modulifyr Logo",
        },
        image: [`${SITE_URL}/og-image.png`, `${SITE_URL}/company-logo.png`],
        description:
          "2-person founder-led engineering & growth studio in Birtamode, Nepal delivering fast Launch Kit websites, Automation Layers, Strategy Sprints, and custom Next.js & Hono web apps.",
        email: "contact@modulifyr.com",
        telephone: "+977-9764478571",
        priceRange: `${formatNpr(overallMinNpr)} - ${formatNpr(overallMaxNpr)}`,
        currenciesAccepted: "NPR, USD, GBP, CAD, AUD, EUR",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gauri Tole, Birtamode-1",
          addressLocality: "Birtamode",
          addressRegion: "Jhapa",
          addressCountry: "NP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.6478125,
          longitude: 87.9888125,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "contact@modulifyr.com",
            telephone: "+977-9764478571",
            areaServed: ["NP", "US", "GB", "CA", "AU", "EU"],
            availableLanguage: ["English", "Nepali"],
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Birtamode",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Jhapa, Koshi Province, Nepal",
            },
          },
          { "@type": "Country", name: "Nepal" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Australia" },
        ],
        knowsAbout: [
          "Strategy Sprint",
          "Launch Kit",
          "Automation Layer",
          "Custom Web Apps & MVPs",
          "TypeScript, Next.js, Hono & PostgreSQL",
          "n8n & WhatsApp Automation",
        ],
        knowsLanguage: ["en", "ne"],
        foundingDate: "2025",
        foundingLocation: {
          "@type": "Place",
          name: "Gauri Tole, Birtamode-1, Jhapa, Nepal",
        },
        founder: {
          "@type": "Person",
          "@id": `${SITE_URL}/#founder`,
          name: "Rijan Mainali",
          jobTitle: "Founder, Architecture & Engineering",
          image: `${SITE_URL}/rijan-mainali.jpg`,
          worksFor: { "@id": `${SITE_URL}/#organization` },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gauri Tole, Birtamode-1",
            addressLocality: "Birtamode",
            addressRegion: "Jhapa",
            addressCountry: "NP",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fixed-Scope Local SMB & Digital Software Services",
          itemListElement: SERVICES.map((service) => {
            const [minNpr, maxNpr] = getPackageRange(service.pkgKey, "NP");
            const serviceUrl = `${SITE_URL}/services/${service.slug}`;
            return {
              "@type": "Offer",
              url: serviceUrl,
              priceCurrency: "NPR",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: minNpr,
                maxPrice: maxNpr,
                priceCurrency: "NPR",
              },
              itemOffered: {
                "@type": "Service",
                "@id": `${serviceUrl}#service`,
                name: service.title,
                serviceType: service.title,
                description: service.summary,
                url: serviceUrl,
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: [
                  { "@type": "City", name: "Birtamode" },
                  { "@type": "Country", name: "Nepal" },
                ],
                audience: {
                  "@type": "BusinessAudience",
                  audienceType: service.bestFor,
                },
              },
            };
          }),
        },
        sameAs: [
          "https://www.instagram.com/modulifyr/",
          "https://x.com/modulifyr",
          "https://web.facebook.com/profile.php?id=61591920842310",
          "https://www.linkedin.com/company/modulifyr/",
          "https://clutch.co/profile/modulifyr",
          "https://github.com/Modulifyr",
          "https://themanifest.com/company/modulifyr",
          "https://rocketreach.co/modulifyr-profile_b6410cbccbf776ff",
          "https://www.trustpilot.com/review/modulifyr.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Modulifyr",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "2026 Custom Software Systems Built to Scale | Modulifyr",
        description:
          "Modulifyr delivers Strategy Sprints, fast Launch Kit websites, and Automation Layers for growing organizations in Nepal and worldwide.",
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#faq` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
        },
        datePublished: "2025-01-01",
        dateModified: "2026-11-25",
        author: { "@id": `${SITE_URL}/#founder` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        url: `${SITE_URL}/#faq`,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: DEFAULT_FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

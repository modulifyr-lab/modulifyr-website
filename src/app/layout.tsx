import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RegionProvider } from "@/components/RegionProvider";
import { RegionModal } from "@/components/RegionModal";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import Script from "next/script";
import { cookies } from "next/headers";
import { isRegion, REGION_COOKIE } from "@/lib/regions";

// ── Brand fonts ───────────────────────────────────────────────────────────────
// DM Sans = body font  →  --font-dm-sans  →  --font-sans in globals.css
// Syne    = heading font → --font-syne    →  --font-heading in globals.css
// These variable names MUST match what globals.css @theme block references.

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modulifyr.com"),
  title: "2026 Custom Software Systems Built to Scale | Modulifyr",
  description:
    "Modulifyr builds scalable custom software, ERP platforms, and automation systems for growing organizations in Nepal and worldwide.",
  authors: [{ name: "Modulifyr Engineering" }],
  keywords: [
    "custom software development Nepal",
    "software company Birtamode",
    "software company Nepal",
    "modular software systems Nepal",
    "ERP system Nepal",
    "custom ERP Nepal",
    "school management system Nepal",
    "hospital management software Nepal",
    "retail POS system Nepal",
    "modular architecture",
    "system design Nepal",
    "enterprise software Nepal",
    "B2B software solutions Nepal",
    "custom software Jhapa",
    "software development Birtamode Jhapa",
    "business software Nepal SME",
    "custom software development",
    "software company",
    "modular software systems",
    "ERP system",
    "custom ERP",
    "school management system",
    "hospital management software",
    "retail POS system",
    "system design",
    "enterprise software",
    "B2B software solutions",
    "custom software",
    "software development",
    "business software SME",
  ],
  creator: "Modulifyr",
  openGraph: {
    title: "Modulifyr | Custom Software Systems Built to Scale",
    description:
      "Engineering tailored modular software solutions for businesses across Nepal and worldwide. Based in Birtamode, Jhapa.",
    url: "/",
    siteName: "Modulifyr",
    locale: "en_US",
    images: [
      {
        url: "https://modulifyr.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modulifyr - Custom Modular Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@modulifyr",
    title: "Modulifyr | Custom Software Systems",
    description:
      "Engineering tailored solutions for complex operational requirements with modular architecture.",
    images: ["https://modulifyr.com/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "128x128", type: "image/x-icon" }],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        {
          url: "/feed.xml",
          title: "Modulifyr Engineering Blog",
        },
      ],
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://modulifyr.com/#organization",
      name: "Modulifyr Enterprise Pvt. Ltd.",
      alternateName: "Modulifyr",
      url: "https://modulifyr.com",
      logo: {
        "@type": "ImageObject",
        url: "https://modulifyr.com/company-logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Custom modular software systems for small and medium-sized businesses in education, healthcare, retail, commerce, and IT.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gauri Tol, Ward 1",
        addressLocality: "Birtamode",
        addressRegion: "Jhapa",
        addressCountry: "NP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.6478125,
        longitude: 87.9888125,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@modulifyr.com",
        contactType: "sales",
        availableLanguage: ["English", "Nepali"],
      },
      areaServed: ["US", "GB", "CA", "AU", "NP", "EU"],
      foundingDate: "2025",
      foundingLocation: {
        "@type": "Place",
        name: "Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal",
      },
      founder: {
        "@type": "Person",
        "@id": "https://modulifyr.com/#founder",
        name: "Rijan Mainali",
        jobTitle: "Founder & Lead Engineer",
        image: "https://modulifyr.com/rijan-mainali.jpg",
        worksFor: { "@id": "https://modulifyr.com/#organization" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gauri Tol, Ward 1",
          addressLocality: "Birtamode",
          addressRegion: "Jhapa",
          addressCountry: "NP",
        },
      },
      serviceType: [
        "Custom Software Development",
        "System Architecture Consulting",
        "ERP Development",
        "Legacy System Modernization",
        "Cloud Infrastructure",
      ],
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
      "@type": "WebPage",
      "@id": "https://modulifyr.com/#webpage",
      url: "https://modulifyr.com",
      name: "2026 Custom Software Systems Built to Scale | Modulifyr",
      description:
        "Modulifyr builds scalable custom software, ERP platforms, and automation systems for growing organizations in Nepal and worldwide.",
      isPartOf: { "@id": "https://modulifyr.com/#website" },
      about: { "@id": "https://modulifyr.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://modulifyr.com/og-image.png",
        width: 1200,
        height: 630,
      },
      datePublished: "2025-01-01",
      dateModified: "2026-07-23",
      author: { "@id": "https://modulifyr.com/#founder" },
    },
    {
      "@type": "Article",
      "@id": "https://modulifyr.com/#article",
      headline: "2026 Custom Software Systems Built to Scale",
      description:
        "A concise overview of Modulifyr's modular software development, ERP, automation, and modernization services.",
      image: "https://modulifyr.com/og-image.png",
      mainEntityOfPage: { "@id": "https://modulifyr.com/#webpage" },
      datePublished: "2025-01-01",
      dateModified: "2026-07-23",
      author: { "@id": "https://modulifyr.com/#founder" },
      publisher: { "@id": "https://modulifyr.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://modulifyr.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Modulifyr build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modulifyr designs and builds custom software systems, ERP platforms, workflow automation, integrations, and modernization projects.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Modulifyr work with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modulifyr is based in Birtamode, Nepal and works with organizations in Nepal and worldwide through remote collaboration.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://modulifyr.com/#website",
      url: "https://modulifyr.com",
      name: "Modulifyr",
      publisher: { "@id": "https://modulifyr.com/#organization" },
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieRegion = (await cookies()).get(REGION_COOKIE)?.value;
  const initialRegion = isRegion(cookieRegion) ? cookieRegion : null;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* RSS autodiscovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/feed.xml"
          title="Modulifyr Engineering Blog"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg).replace(/</g, "\\u003c") }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NXGSWMQ5');`,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${syne.variable} font-sans antialiased transition-colors duration-300`}
        style={{ overflowY: "auto" }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXGSWMQ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RegionProvider initialRegion={initialRegion}>
            <LanguageProvider>
              <RegionModal />
              <CookieConsentBanner />
              <Navbar />
              <main id="main-content" className="min-h-screen pt-20">
                {children}
              </main>
              <Footer />
            </LanguageProvider>
          </RegionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

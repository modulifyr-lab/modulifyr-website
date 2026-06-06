import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RegionProvider } from "@/components/RegionProvider";
import { RegionModal } from "@/components/RegionModal";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StartupBanner } from "@/components/StartupBanner";
import { DevelopmentAlertModal } from "@/components/DevelopmentAlertModal";
import Script from "next/script";

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
  title: "Modulifyr | Custom Software Systems & Modular Architecture",
  description:
    "Modulifyr designs and builds modular software systems for organizations requiring flexibility, scalability, and long-term reliability. Custom software development company based in Birtamode, Nepal serving businesses globally.",
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
    url: "https://modulifyr.com",
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
    types: {
      "application/rss+xml": [
        {
          url: "https://modulifyr.com/feed.xml",
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
      name: "Modulifyr",
      alternateName: "Modulifyr Lab",
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
        addressLocality: "Birtamode",
        addressRegion: "Jhapa",
        addressCountry: "NP",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@modulifyr.com",
        contactType: "sales",
        availableLanguage: ["English", "Nepali"],
      },
      areaServed: "Worldwide",
      foundingDate: "2025",
      foundingLocation: {
        "@type": "Place",
        name: "Birtamode, Jhapa, Nepal",
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
      sameAs: ["https://linkedin.com/company/modulifyr", "https://github.com/modulifyr-lab"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${syne.variable} font-sans antialiased transition-colors duration-300`}
        style={{ overflowY: "auto" }}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TX4PZBKK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RegionProvider>
            <LanguageProvider>
              <RegionModal />
              <DevelopmentAlertModal />
              <Navbar />
              <main id="main-content" className="min-h-screen pt-20">
                <StartupBanner />
                {children}
              </main>
              <Footer />
            </LanguageProvider>
          </RegionProvider>
        </ThemeProvider>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TX4PZBKK');`,
          }}
        />

        {/* Crisp Live Chat */}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="cb4cf5d8-e26a-408e-8bd0-5ed3a98c1022";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
          }}
        />

        {/* CookieHub Consent Banner */}
        <Script
          id="cookiehub"
          strategy="afterInteractive"
          src="https://cdn.cookiehub.eu/c2/ed0faa37.js"
        />
      </body>
    </html>
  );
}
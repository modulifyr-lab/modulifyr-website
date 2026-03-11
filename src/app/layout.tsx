import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Modulifyr | Custom Software Systems & Modular Architecture",
    template: "%s | Modulifyr"
  },
  description: "Modulifyr designs and builds modular software systems for organizations requiring flexibility, scalability, and long-term reliability. Custom software development company based in Birtamode, Nepal serving businesses globally.",
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
    "modular architecture",
    "system design",
    "enterprise software",
    "B2B software solutions",
    "custom software",
    "software development",
    "business software SME"
  ],
  authors: [{ name: "Modulifyr Engineering" }],
  creator: "Modulifyr",
  metadataBase: new URL("https://modulifyr.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modulifyr.vercel.app",
    siteName: "Modulifyr",
    title: "Modulifyr | Custom Software Systems Built to Scale",
    description: "Engineering tailored modular software solutions for businesses across Nepal and worldwide. Based in Birtamode, Jhapa.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Modulifyr - Custom Modular Systems" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulifyr | Custom Software Systems",
    description: "Engineering tailored solutions for complex operational requirements with modular architecture.",
    images: ["/og-image.png"],
    creator: "@modulifyr"
  }
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RegionProvider } from "@/components/RegionProvider";
import { RegionModal } from "@/components/RegionModal";
import { StartupBanner } from "@/components/StartupBanner";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "name": "Modulifyr",
  "url": "https://modulifyr.vercel.app",
  "logo": "https://modulifyr.vercel.app/company-logo.png",
  "description": "Custom modular software systems for small and medium-sized businesses in education, healthcare, retail, commerce, and IT.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birtamode",
    "addressRegion": "Jhapa",
    "addressCountry": "NP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@modulifyr.com",
    "contactType": "sales",
    "availableLanguage": ["English", "Nepali"]
  },
  "areaServed": "Worldwide",
  "foundingLocation": { "@type": "Place", "name": "Birtamode, Jhapa, Nepal" },
  "serviceType": [
    "Custom Software Development",
    "System Architecture Consulting",
    "ERP Development",
    "Legacy System Modernization",
    "Cloud Infrastructure"
  ],
  "sameAs": [
    "https://linkedin.com/company/modulifyr",
    "https://github.com/Modulifyr"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans transition-colors duration-300`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TX4PZBKK"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <RegionProvider>
            <RegionModal />
            <Navbar />
            {/*
              StartupBanner lives INSIDE main, at the very top.
              It uses `sticky top-20` so it sticks just below the fixed Navbar (h-20 = 80px).
              It scrolls away with the page — zero overlap with nav links.
              Remove the line below to disable the banner permanently.
            */}
            <main className="min-h-screen pt-20">
              <StartupBanner />
              {children}
            </main>
            <Footer />
          </RegionProvider>
        </ThemeProvider>

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TX4PZBKK');`
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RegionProvider } from "@/components/RegionProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import Script from "next/script";
import { cookies } from "next/headers";
import { isRegion, REGION_COOKIE } from "@/lib/regions";
import { buildRootSchemaOrg } from "@/lib/structured-data";

import { DM_Sans, Syne, Inter } from "next/font/google";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne-family",
  subsets: ["latin"],
  weight: ["700"],
});

// ── Brand fonts ───────────────────────────────────────────────────────────────
// DM Sans = headline & body font → --font-dm-sans → --font-sans & --font-heading in globals.css
// Inter   = Special 1 utility    → --font-inter   → --font-inter in globals.css

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modulifyr.com"),
  title: "2026 Custom Software Systems Built to Scale | Modulifyr",
  description:
    "Modulifyr delivers Strategy Sprints, fast Launch Kit websites, and Automation Layers for growing organizations in Nepal and worldwide.",
  authors: [{ name: "Modulifyr Engineering" }],
  keywords: [
    "Strategy Sprint Nepal",
    "Launch Kit website Nepal",
    "Automation Layer Nepal",
    "software company Birtamode",
    "software company Nepal",
    "system architecture consulting Nepal",
    "static website development Nepal",
    "workflow automation Nepal",
    "API integration Nepal",
    "modular architecture",
    "system design Nepal",
    "B2B software solutions Nepal",
    "software development Birtamode Jhapa",
    "business automation Nepal SMB",
    "Strategy Sprint",
    "Launch Kit",
    "Automation Layer",
    "system design",
    "workflow automation",
    "API integration",
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

const schemaOrg = buildRootSchemaOrg();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieRegion = (await cookies()).get(REGION_COOKIE)?.value;
  const initialRegion = isRegion(cookieRegion) ? cookieRegion : "NP";

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
        className={`${dmSans.variable} ${syne.variable} ${inter.variable} font-sans antialiased transition-colors duration-300`}
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

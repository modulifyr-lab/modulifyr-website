import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Modulifyr | Custom Software Systems & Modular Architecture",
    template: "%s | Modulifyr"
  },
  description: "Modulifyr designs and builds modular software systems for organizations requiring flexibility, scalability, and long-term reliability. Custom engineering for B2B and enterprise.",
  keywords: ["custom software development", "modular architecture", "system design", "enterprise software", "Kathmandu software company", "modular systems", "B2B software solutions"],
  authors: [{ name: "Modulifyr Engineering" }],
  creator: "Modulifyr",
  metadataBase: new URL("https://modulifyr.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modulifyr.com",
    siteName: "Modulifyr",
    title: "Modulifyr | Custom Software Systems Built to Scale",
    description: "Engineering tailored solutions for complex operational requirements with modular architecture.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TX4PZBKK');`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans transition-colors duration-300`}
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
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

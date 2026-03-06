import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans transition-colors duration-300`}
      >
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

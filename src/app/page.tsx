import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/links";
import { LogoMarquee } from "@/components/sections/LandingPage/LogoMarquee";
import { IntegrationsShowcase } from "@/components/sections/LandingPage/IntegrationsShowcase";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  ShieldCheck,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Layers,
  CreditCard,
  UserCheck,
  Eye,
} from "lucide-react";
import { HeroSection } from "@/components/sections/LandingPage";
import { ServicesSection } from "@/components/sections/LandingPage/ServiceSection";
import { ProcessSection } from "@/components/sections/LandingPage/ProcessSection";
import { WhyModulifyrSection } from "@/components/sections/LandingPage/Whymodulifyrsection";
import { BlogAndCaseStudiesSection } from "@/components/sections/LandingPage/BlodAndCaseStudiesSection";
import { FeaturedCaseStudy } from "@/components/sections/LandingPage/FeaturedCaseStudy";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Modulifyr",
    url: "https://modulifyr.com",
    logo: "https://modulifyr.com/company-logo.png",
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gauri Tol, Ward 1",
      addressLocality: "Birtamode",
      addressRegion: "Jhapa",
      addressCountry: "NP",
    },
  };

  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <HeroSection />

      {/* Below Hero: Continuous Logo Marquee */}
      <LogoMarquee />

      {/* ── 2. WHY MODULIFYR ───────────────────────────────────────────────── */}
      <WhyModulifyrSection />

      {/* ── 3. SERVICES SECTION ───────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── 4. HOW WE WORK (5-PHASE PROCESS) ──────────────────────────────── */}
      <ProcessSection />

      {/* ── 5. INTEGRATIONS SHOWCASE ──────────────────────────────────────── */}
      <IntegrationsShowcase />

      {/* ── 6. BLOGS & CASE STUDIES ───────────────────────────────────────── */}
      <BlogAndCaseStudiesSection />

      {/* ── 7. FEATURED CASE STUDY ────────────────────────────────────────── */}
      <FeaturedCaseStudy />

      {/* ── 8. FAQ ACCORDION ──────────────────────────────────────────────── */}
      <FaqAccordion />

      {/* ── 9. CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-border-main relative overflow-hidden border-t py-24 transition-colors duration-300">
        <div
          className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />

        <div className="container-custom relative z-10 max-w-3xl space-y-6 text-center">
          <h2 className="text-display text-foreground font-extrabold">Ready To Build Together?</h2>
          <p className="text-subhead text-text-alt">Better technology starts here.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              href="/request-proposal"
              className="cursor-pointer rounded-lg bg-[#2D738D] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-100 ease-in hover:bg-[#235b70]"
            >
              Request a Proposal
            </Button>
            <Button
              href={BOOKING_URL}
              external
              className="bg-bg-main border-border-main text-foreground hover:bg-bg-alt cursor-pointer rounded-lg border px-8 py-3.5 text-base font-semibold transition-colors duration-100 ease-in"
            >
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

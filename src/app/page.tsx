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
import { CtaSection } from "@/components/sections/LandingPage/CTABanner";

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
      <CtaSection />
    </div>
  );
}

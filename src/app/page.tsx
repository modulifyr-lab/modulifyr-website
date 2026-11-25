import {
  HeroSection,
  LogoMarquee,
  WhyModulifyrSection,
  ServicesSection,
  ScopeEstimatorSection,
  ProcessSection,
  IntegrationsShowcase,
  FeaturedCaseStudy,
  BlogAndCaseStudiesSection,
  TalentCalloutSection,
  CtaSection,
} from "@/components/sections/LandingPage";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

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

      {/* 1. 3D Interactive Hero Split */}
      <HeroSection />

      {/* 2. Continuous Capability Strip */}
      <LogoMarquee />

      {/* 3. Why Modulifyr */}
      <WhyModulifyrSection />

      {/* 4. Interactive Services & Micro-Demos */}
      <ServicesSection />

      {/* 5. Interactive Scope & Budget Estimator */}
      <ScopeEstimatorSection />

      {/* 6. 5-Phase Engineering Process */}
      <ProcessSection />

      {/* 7. Nepal & Global Integrations */}
      <IntegrationsShowcase />

      {/* 8. Featured Internal Build */}
      <FeaturedCaseStudy />

      {/* 9. Insights, Standards & Guides */}
      <BlogAndCaseStudiesSection />

      {/* 10. Careers & Talent Callout */}
      <TalentCalloutSection />

      {/* 11. FAQ Accordion */}
      <FaqAccordion />

      {/* 12. Final Conversion Banner */}
      <CtaSection />
    </div>
  );
}

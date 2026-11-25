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
  return (
    <div className="flex w-full flex-col">

      {/* 1. Hero Section */}
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

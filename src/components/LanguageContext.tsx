"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ne";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// ─── Full translation dictionary ────────────────────────────────────────────
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.process": "Process",
    "nav.industries": "Industries",
    "nav.work": "Work",
    "nav.career": "Career",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.request_proposal": "Request Proposal",
    "nav.open_menu": "Open navigation menu",
    "nav.close_menu": "Close navigation menu",
    "nav.toggle_theme": "Toggle colour theme",
    "nav.switch_language": "Switch language",
    "nav.skip_to_content": "Skip to main content",

    // Home hero
    "home.hero.headline": "Custom Software Systems Built to Scale With Your Organization",
    "home.hero.sub":
      "Modulifyr designs and builds modular software systems for organizations that require flexibility, scalability, and long-term reliability. We partner with companies worldwide and in Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal to architect and deliver software tailored to their operations.",
    "home.hero.cta_primary": "Request Proposal",
    "home.hero.cta_secondary": "Book Discovery Call",
    "home.hero.badge_nda": "NDA available",
    "home.hero.badge_global": "Global collaboration",

    // Home philosophy
    "home.philosophy.headline":
      "Built for organizations that need systems that evolve — not generic software.",
    "home.philosophy.body":
      "Many businesses rely on rigid software that cannot adapt as their operations grow. Modulifyr takes a different approach. We design systems using modular architecture so that new functionality, integrations, and workflows can evolve over time without rebuilding the entire platform.",
    "home.philosophy.quote":
      '"Our work focuses on building long-term digital infrastructure rather than short-term software products."',

    // Services
    "services.label": "Our Capabilities",
    "services.headline": "What We Do",
    "services.sub": "Engineering tailored solutions for complex operational requirements.",
    "services.explore_all": "Explore All Services",
    "services.custom_dev": "Custom Software Development",
    "services.custom_dev_desc":
      "Design and development of tailored systems aligned with your workflows, data structures, and operational processes.",
    "services.architecture": "System Architecture",
    "services.architecture_desc":
      "Design scalable architectures that allow software to evolve as your organization grows.",
    "services.integrations": "Integrations & Automation",
    "services.integrations_desc":
      "Connect internal tools, APIs, databases, and third-party platforms into unified workflows.",
    "services.modernization": "Modernization & Rebuilds",
    "services.modernization_desc":
      "Replace legacy systems with modern, scalable platforms built for future expansion.",

    // How we work
    "process.headline": "How We Work",
    "process.sub": "A systematic, engineering-first approach to delivering modular systems.",
    "process.discovery": "Discovery",
    "process.discovery_desc": "Understanding operations, workflows, and requirements.",
    "process.architecture": "Architecture",
    "process.architecture_desc": "Designing system structure, modules, and roadmap.",
    "process.development": "Development",
    "process.development_desc": "Building secure, maintainable systems tailored to you.",
    "process.deployment": "Deployment",
    "process.deployment_desc": "Cloud deployment, infrastructure, and testing.",
    "process.support": "Support",
    "process.support_desc": "Maintenance, upgrades, and continuous improvements.",

    // Industries
    "industries.headline": "Industries We Serve",
    "industries.sub":
      "Our modular architecture approach adapts to the operational requirements of different industries.",
    "industries.education": "Education",
    "industries.commerce": "Commerce",
    "industries.healthcare": "Healthcare",
    "industries.it": "IT",
    "industries.retail": "Retail",
    "industries.services": "Services",

    // CTA section
    "cta.headline": "Planning a system for your organization?",
    "cta.body":
      "Whether you're building new digital infrastructure or replacing legacy systems, Modulifyr can help design and build a scalable solution tailored to your organization.",
    "cta.primary": "Request Proposal",
    "cta.secondary": "Schedule Discovery Call",

    // Footer
    "footer.tagline":
      "Custom modular software systems for SMBs that have outgrown off-the-shelf tools. Based in Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal. Building for clients worldwide.",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.work": "Work",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.services_heading": "Services",
    "footer.custom_dev": "Custom Dev",
    "footer.process": "Process",
    "footer.tech_stack": "Tech Stack",
    "footer.pricing": "Pricing",
    "footer.industries": "Industries",
    "footer.contact_heading": "Contact",
    "footer.location": "Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal",
    "footer.response_time": "Response within 1 business day",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
    "footer.copyright": "© 2026 Modulifyr Enterprise Pvt. Ltd. All rights reserved.",
    "footer.tagline_short": "Custom software development for businesses in Nepal and worldwide.",
    "cookie.banner.title": "About cookies on this site",
    "cookie.banner.text":
      "We use cookies to collect and analyse information on site performance and usage to improve your experience.",
    "cookie.banner.accept": "Allow all cookies",
    "cookie.banner.deny": "Deny all",
    "cookie.banner.learn_more": "Learn more",
  },

  ne: {
    "nav.services": "सेवाहरू",
    "nav.pricing": "मूल्य निर्धारण",
    "nav.process": "प्रक्रिया",
    "nav.industries": "उद्योगहरू",
    "nav.work": "काम",
    "nav.career": "करियर",
    "nav.about": "हाम्रो बारे",
    "nav.contact": "सम्पर्क",
    "nav.request_proposal": "प्रस्ताव अनुरोध",
    "nav.open_menu": "नेभिगेसन मेनु खोल्नुहोस्",
    "nav.close_menu": "नेभिगेसन मेनु बन्द गर्नुहोस्",
    "nav.toggle_theme": "रङ थिम परिवर्तन गर्नुहोस्",
    "nav.switch_language": "भाषा परिवर्तन गर्नुहोस्",
    "nav.skip_to_content": "मुख्य सामग्रीमा जानुहोस्",
    "home.hero.headline": "तपाईंको संस्थासँगै बढ्न बनाइएका कस्टम सफ्टवेयर प्रणालीहरू",
    "home.hero.sub":
      "Modulifyr ले लचिलोपन, मापनीयता र दीर्घकालीन भरोसायोग्यता चाहने संस्थाहरूका लागि मड्युलर सफ्टवेयर प्रणालीहरू डिजाइन र निर्माण गर्दछ।",
    "home.hero.cta_primary": "प्रस्ताव अनुरोध गर्नुहोस्",
    "home.hero.cta_secondary": "खोज कल बुक गर्नुहोस्",
    "home.hero.badge_nda": "NDA उपलब्ध",
    "home.hero.badge_global": "विश्वव्यापी सहकार्य",
    "home.philosophy.headline":
      "विकसित हुने प्रणाली चाहने संस्थाहरूका लागि — सामान्य सफ्टवेयर होइन।",
    "home.philosophy.body": "धेरै व्यवसायहरू कठोर सफ्टवेयरमा निर्भर छन्।",
    "home.philosophy.quote":
      '"हाम्रो काम अल्पकालीन सफ्टवेयर उत्पादनभन्दा दीर्घकालीन डिजिटल पूर्वाधार निर्माणमा केन्द्रित छ।"',
    "services.label": "हाम्रा क्षमताहरू",
    "services.headline": "हामी के गर्छौं",
    "services.sub": "जटिल सञ्चालन आवश्यकताहरूका लागि अनुकूलित समाधानहरूको इन्जिनियरिङ।",
    "services.explore_all": "सबै सेवाहरू हेर्नुहोस्",
    "services.custom_dev": "कस्टम सफ्टवेयर विकास",
    "services.custom_dev_desc":
      "तपाईंको कार्यप्रवाह, डेटा संरचना र सञ्चालन प्रक्रियाहरूसँग मेल खाने अनुकूलित प्रणालीहरूको डिजाइन र विकास।",
    "services.architecture": "प्रणाली आर्किटेक्चर",
    "services.architecture_desc":
      "तपाईंको संस्था बढ्दै जाँदा सफ्टवेयरलाई विकसित हुन दिने मापनीय आर्किटेक्चरहरू डिजाइन गर्नुहोस्।",
    "services.integrations": "एकीकरण र स्वचालन",
    "services.integrations_desc":
      "आन्तरिक उपकरणहरू, API हरू, डेटाबेसहरू र तृतीय-पक्ष प्लेटफर्महरूलाई एकीकृत कार्यप्रवाहमा जोड्नुहोस्।",
    "services.modernization": "आधुनिकीकरण र पुनर्निर्माण",
    "services.modernization_desc":
      "पुराना प्रणालीहरूलाई भविष्यको विस्तारका लागि निर्मित आधुनिक, मापनीय प्लेटफर्महरूले प्रतिस्थापन गर्नुहोस्।",
    "process.headline": "हामी कसरी काम गर्छौं",
    "process.sub": "मड्युलर प्रणालीहरू डेलिभर गर्न व्यवस्थित, इन्जिनियरिङ-प्रथम दृष्टिकोण।",
    "process.discovery": "खोज",
    "process.discovery_desc": "सञ्चालन, कार्यप्रवाह र आवश्यकताहरू बुझ्ने।",
    "process.architecture": "आर्किटेक्चर",
    "process.architecture_desc": "प्रणाली संरचना, मड्युलहरू र रोडम्याप डिजाइन गर्ने।",
    "process.development": "विकास",
    "process.development_desc": "तपाईंका लागि सुरक्षित, रखरखाव योग्य प्रणालीहरू निर्माण।",
    "process.deployment": "तैनाथी",
    "process.deployment_desc": "क्लाउड डिप्लोयमेन्ट, पूर्वाधार र परीक्षण।",
    "process.support": "समर्थन",
    "process.support_desc": "मर्मत, स्तरवृद्धि र निरन्तर सुधारहरू।",
    "industries.headline": "हामी सेवा गर्ने उद्योगहरू",
    "industries.sub":
      "हाम्रो मड्युलर आर्किटेक्चर दृष्टिकोण विभिन्न उद्योगहरूको सञ्चालन आवश्यकताहरूमा अनुकूल हुन्छ।",
    "industries.education": "शिक्षा",
    "industries.commerce": "वाणिज्य",
    "industries.healthcare": "स्वास्थ्य सेवा",
    "industries.it": "सूचना प्रविधि",
    "industries.retail": "खुद्रा व्यापार",
    "industries.services": "सेवाहरू",
    "cta.headline": "तपाईंको संस्थाका लागि प्रणाली योजना बनाउँदै हुनुहुन्छ?",
    "cta.body":
      "Modulifyr ले तपाईंको संस्थाका लागि अनुकूलित मापनीय समाधान डिजाइन र निर्माण गर्न मद्दत गर्न सक्छ।",
    "cta.primary": "प्रस्ताव अनुरोध गर्नुहोस्",
    "cta.secondary": "खोज कल तालिका गर्नुहोस्",
    "footer.tagline":
      "तयारी उपकरणहरू भन्दा बढेका SMB हरूका लागि कस्टम मड्युलर सफ्टवेयर प्रणालीहरू।",
    "footer.company": "कम्पनी",
    "footer.about": "हाम्रो बारे",
    "footer.work": "काम",

    "footer.careers": "करियर",
    "footer.services_heading": "सेवाहरू",
    "footer.custom_dev": "कस्टम विकास",
    "footer.process": "प्रक्रिया",
    "footer.tech_stack": "प्रविधि स्ट्याक",
    "footer.pricing": "मूल्य निर्धारण",
    "footer.industries": "उद्योगहरू",
    "footer.contact_heading": "सम्पर्क",
    "footer.location": "बिर्तामोड, वडा नं. १, गौरी टोल, झापा, नेपाल",
    "footer.response_time": "१ कार्य दिनभित्र जवाफ",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सर्तहरू",
    "footer.copyright": "© २०२६ Modulifyr Enterprise Pvt. Ltd. सर्वाधिकार सुरक्षित।",
    "footer.tagline_short": "नेपाल र विश्वभरका व्यवसायहरूका लागि कस्टम सफ्टवेयर विकास।",
    "cookie.banner.title": "यस साइटमा कुकीहरू बारे",
    "cookie.banner.text":
      "तपाईंको अनुभव सुधार गर्न साइटको प्रदर्शन र प्रयोगको बारेमा जानकारी संकलन र विश्लेषण गर्न हामी कुकीहरू प्रयोग गर्दछौं।",
    "cookie.banner.accept": "सबै कुकीहरू स्वीकार गर्नुहोस्",
    "cookie.banner.deny": "सबै अस्वीकार गर्नुहोस्",
    "cookie.banner.learn_more": "थप जान्नुहोस्",
  },
};

// ─── Context ─────────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("modulifyr_lang") as Language | null;
  return stored === "en" || stored === "ne" ? stored : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "ne" ? "ne" : "en";
  }, [language]);

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("modulifyr_lang", lang);
    document.documentElement.lang = lang === "ne" ? "ne" : "en";
  }, []);

  const t = React.useCallback(
    (key: string): string => {
      return translations[language][key] ?? translations["en"][key] ?? key;
    },
    [language]
  );

  const contextValue = React.useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

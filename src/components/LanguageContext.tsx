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
      "Modulifyr designs and builds modular software systems for organizations that require flexibility, scalability, and long-term reliability. We partner with companies worldwide and in Gauri Tole, Birtamode-1, Jhapa, Nepal to architect and deliver software tailored to their operations.",
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
    "services.label": "Our Services",
    "services.headline": "Three Fixed-Scope Packages",
    "services.sub": "Strategy Sprint, Launch Kit websites, and Automation Layer workflows.",
    "services.explore_all": "Explore All Services",
    "services.strategy_sprint": "Strategy Sprint",
    "services.strategy_sprint_desc":
      "Scope complex platforms and multi-tool workflows before writing code, with 100% credited toward your build.",
    "services.launch_kit": "Launch Kit",
    "services.launch_kit_desc":
      "Fast, mobile-first Next.js websites built to convert local and global searches into real inquiries.",
    "services.automation_layer": "Automation Layer",
    "services.automation_layer_desc":
      "Connect forms, WhatsApp, CRMs, and eSewa/Khalti/Fonepay/Stripe webhooks without manual copy-pasting.",

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
      "Software, fast Launch Kit websites, and workflow automation for SMBs in Gauri Tole, Birtamode-1, Jhapa, Nepal and global teams.",
    "footer.quick_links": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About Us",
    "footer.services": "Services",
    "footer.work": "Case Studies",
    "footer.resources": "Resources",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.contact": "Contact Us",
    "footer.contact_heading": "Contact",
    "footer.location": "Gauri Tole, Birtamode-1, Jhapa, Nepal",
    "footer.response_time": "Response within 1 business day",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
    "footer.copyright": "© 2026 Modulifyr Enterprise Pvt. Ltd. All rights reserved.",
    "footer.tagline_short": "Software, websites, and automation for businesses in Nepal and worldwide.",
  },

  ne: {
    "nav.services": "सेवाहरू",
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
    "services.label": "हाम्रा सेवाहरू",
    "services.headline": "तीन स्पष्ट प्याकेजहरू",
    "services.sub": "Strategy Sprint, Launch Kit वेबसाइट र Automation Layer कार्यप्रवाह।",
    "services.explore_all": "सबै सेवाहरू हेर्नुहोस्",
    "services.strategy_sprint": "Strategy Sprint",
    "services.strategy_sprint_desc":
      "कोड लेख्नु अघि जटिल प्रणाली र कार्यप्रवाहको स्पष्ट योजना बनाउनुहोस्, जसको १००% शुल्क निर्माणमा समायोजन हुन्छ।",
    "services.launch_kit": "Launch Kit",
    "services.launch_kit_desc":
      "स्थानीय र विश्वव्यापी खोजबाट वास्तविक सोधपुछ बढाउने छिटो, मोबाइल-मैत्री Next.js वेबसाइटहरू।",
    "services.automation_layer": "Automation Layer",
    "services.automation_layer_desc":
      "फर्म, WhatsApp, CRM र eSewa/Khalti/Fonepay/Stripe वेबहुकलाई म्यानुअल काम बिना स्वचालित जोड्नुहोस्।",
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
      "गौरी टोल, बिर्तामोड-१, झापा, नेपाल तथा विश्वभरका व्यवसायहरूका लागि सफ्टवेयर, छिटो वेबसाइट र स्वचालन सेवाहरू।",
    "footer.quick_links": "छिटो लिङ्कहरू",
    "footer.home": "गृहपृष्ठ",
    "footer.about": "हाम्रो बारे",
    "footer.services": "सेवाहरू",
    "footer.work": "केस स्टडीज",
    "footer.resources": "स्रोतहरू",
    "footer.blog": "ब्लग",
    "footer.careers": "करियर",
    "footer.contact": "सम्पर्क गर्नुहोस्",
    "footer.contact_heading": "सम्पर्क",
    "footer.location": "गौरी टोल, बिर्तामोड-१, झापा, नेपाल",
    "footer.response_time": "१ कार्य दिनभित्र जवाफ",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सर्तहरू",
    "footer.copyright": "© २०२६ Modulifyr Enterprise Pvt. Ltd. सर्वाधिकार सुरक्षित।",
    "footer.tagline_short": "नेपाल र विश्वभरका व्यवसायहरूका लागि सफ्टवेयर, वेबसाइट र स्वचालन।",
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

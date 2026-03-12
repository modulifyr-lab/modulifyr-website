"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.switch_language")}
      className="flex items-center rounded-full border border-border-base overflow-hidden text-xs font-bold tracking-wide"
    >
      <button
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
        className={`px-3 py-1.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
          language === "en"
            ? "bg-brand-navy text-white"
            : "bg-transparent text-text-alt hover:bg-bg-secondary"
        }`}
      >
        EN
      </button>
      <span className="w-px h-4 bg-border-base" aria-hidden="true" />
      <button
        onClick={() => setLanguage("ne")}
        aria-pressed={language === "ne"}
        aria-label="नेपालीमा परिवर्तन गर्नुहोस्"
        className={`px-3 py-1.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
          language === "ne"
            ? "bg-brand-navy text-white"
            : "bg-transparent text-text-alt hover:bg-bg-secondary"
        }`}
      >
        नेपाली
      </button>
    </div>
  );
}
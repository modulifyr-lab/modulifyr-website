"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.switch_language")}
      className="border-border-main flex items-center overflow-hidden rounded-full border text-xs font-bold tracking-wide"
    >
      <button
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
        className={`focus-visible:outline-[#2D738D] px-3 py-1.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          language === "en"
            ? "bg-[#0F1724] text-white"
            : "text-text-alt hover:bg-bg-alt bg-transparent"
        }`}
      >
        EN
      </button>
      <span className="bg-border-main h-4 w-px" aria-hidden="true" />
      <button
        onClick={() => setLanguage("ne")}
        aria-pressed={language === "ne"}
        aria-label="नेपालीमा परिवर्तन गर्नुहोस्"
        className={`focus-visible:outline-[#2D738D] px-3 py-1.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          language === "ne"
            ? "bg-[#0F1724] text-white"
            : "text-text-alt hover:bg-bg-alt bg-transparent"
        }`}
      >
        नेपाली
      </button>
    </div>
  );
}

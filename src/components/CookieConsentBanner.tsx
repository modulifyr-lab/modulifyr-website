"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("modulifyr_cookie_consent");
    setIsHydrated(true);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("modulifyr_cookie_consent", accepted ? "accepted" : "denied");
    setVisible(false);
  };

  if (!isHydrated || !visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Cookie consent"
      className="fixed right-6 bottom-6 left-6 z-[99] max-w-xl md:right-6 md:left-auto"
    >
      <div className="border-border-base rounded-3xl border bg-white p-6 shadow-2xl dark:bg-zinc-900">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-brand-orange/10 text-brand-orange flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <Shield className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading text-brand-navy text-sm font-bold dark:text-white">
                {t("cookie.banner.title")}
              </h4>
              <p className="text-text-secondary mt-1 text-xs leading-relaxed dark:text-zinc-400">
                {t("cookie.banner.text")}{" "}
                <Link
                  href="/cookie-policy"
                  className="text-brand-orange font-semibold hover:underline"
                >
                  {t("cookie.banner.learn_more")}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
            <Button
              onClick={() => handleConsent(false)}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              {t("cookie.banner.deny")}
            </Button>
            <Button onClick={() => handleConsent(true)} size="sm" className="text-xs">
              {t("cookie.banner.accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

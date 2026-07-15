"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSwitcher from "@/contexts/LanguageSwitcher";

const NAV_LINKS = [
  { href: "/services", key: "nav.services" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/process", key: "nav.process" },
  { href: "/industries", key: "nav.industries" },
  { href: "/work", key: "nav.work" },
  { href: "/career", key: "nav.career" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Skip to main content ───────────────────────────────────────── */}
      <a
        href="#main-content"
        className="bg-brand-orange sr-only fixed top-2 left-2 z-[100] rounded-lg px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {t("nav.skip_to_content")}
      </a>

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 right-0 left-0 z-50 flex h-20 items-center transition-all duration-300 ${scrolled ? "bg-background/95 border-border-base border-b shadow-sm backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container-custom flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Modulifyr — go to homepage"
            className="focus-visible:outline-brand-orange flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Image
              src="/company-logo.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="h-10 w-10 object-contain dark:invert"
            />
            <span className="font-heading text-brand-navy dark:text-foreground hidden text-xl font-bold tracking-tight sm:block">
              Modulifyr
            </span>
          </Link>

          {/* ── Desktop links ──────────────────────────────────────────── */}
          <div className="hidden items-center gap-6 lg:flex" role="list">
            {NAV_LINKS.map(({ href, key }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  role="listitem"
                  aria-current={active ? "page" : undefined}
                  className={`focus-visible:outline-brand-orange rounded-sm text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${active ? "text-brand-orange font-semibold" : "text-text-alt hover:text-brand-orange"}`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop right controls ─────────────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <div className="border-border-base flex items-center gap-3 border-l pl-4">
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  aria-label={t("nav.toggle_theme")}
                  className="text-foreground hover:bg-bg-secondary focus-visible:outline-brand-orange inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Moon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              )}
              <Link href="/request-proposal">
                <button
                  aria-label={t("nav.request_proposal")}
                  className="bg-brand-orange hover:bg-brand-orange/90 focus-visible:outline-brand-orange inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {t("nav.request_proposal")}
                </button>
              </Link>
            </div>
          </div>

          {/* ── Mobile controls ────────────────────────────────────────── */}
          <div className="flex items-center gap-3 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label={t("nav.toggle_theme")}
                className="text-foreground hover:bg-bg-secondary focus-visible:outline-brand-orange inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            )}
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t("nav.close_menu") : t("nav.open_menu")}
              className="text-foreground focus-visible:outline-brand-orange rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`bg-background fixed inset-0 top-20 z-40 transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-5 p-6">
          {NAV_LINKS.map(({ href, key }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`focus-visible:outline-brand-orange rounded-sm text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${active ? "text-brand-orange" : "text-text-main hover:text-brand-orange"}`}
              >
                {t(key)}
              </Link>
            );
          })}
          <div className="border-border-base border-t pt-2">
            <LanguageSwitcher />
          </div>
          <Link href="/request-proposal">
            <button
              aria-label={t("nav.request_proposal")}
              className="bg-brand-orange hover:bg-brand-orange/90 focus-visible:outline-brand-orange inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t("nav.request_proposal")}
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}

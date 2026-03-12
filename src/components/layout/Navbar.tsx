"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_LINKS = [
  { href: "/services",   key: "nav.services" },
  { href: "/process",    key: "nav.process" },
  { href: "/industries", key: "nav.industries" },
  { href: "/work",       key: "nav.work" },
  { href: "/resources",  key: "nav.resources" },
  { href: "/about",      key: "nav.about" },
  { href: "/contact",    key: "nav.contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme, mounted } = useTheme();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

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
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Skip to main content (screen-reader / keyboard users) ─────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100]
          bg-brand-orange text-white font-bold text-sm px-4 py-2 rounded-lg
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {t("nav.skip_to_content")}
      </a>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300
          ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border-base shadow-sm" : "bg-transparent"}`}
      >
        <div className="container-custom flex items-center justify-between w-full">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Modulifyr — go to homepage"
            className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-brand-orange rounded-md"
          >
            <Image
              src="/company-logo.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="w-10 h-10 object-contain dark:invert"
            />
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:block text-brand-navy dark:text-foreground">
              Modulifyr
            </span>
          </Link>

          {/* ── Desktop links ─────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6" role="list">
            {NAV_LINKS.map(({ href, key }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  role="listitem"
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-brand-orange rounded-sm
                    ${active ? "text-brand-orange font-semibold" : "text-text-alt hover:text-brand-orange"}`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop right controls ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher — left side, opposite to Request Proposal */}
            <LanguageSwitcher />

            <div className="flex items-center gap-3 border-l border-border-base pl-4">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  aria-label={t("nav.toggle_theme")}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full
                    text-foreground hover:bg-bg-secondary transition-colors
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-brand-orange"
                >
                  {resolvedTheme === "dark"
                    ? <Sun className="h-5 w-5" aria-hidden="true" />
                    : <Moon className="h-5 w-5" aria-hidden="true" />}
                </button>
              )}

              {/* Request Proposal */}
              <Link href="/request-proposal">
                <button
                  aria-label={t("nav.request_proposal")}
                  className="inline-flex items-center justify-center rounded-lg
                    bg-brand-orange text-white hover:bg-brand-orange/90
                    px-4 py-2 text-sm font-semibold transition-colors
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-brand-orange"
                >
                  {t("nav.request_proposal")}
                </button>
              </Link>
            </div>
          </div>

          {/* ── Mobile controls ────────────────────────────────────────────── */}
          <div className="flex items-center gap-3 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label={t("nav.toggle_theme")}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full
                  text-foreground hover:bg-bg-secondary transition-colors
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-brand-orange"
              >
                {resolvedTheme === "dark"
                  ? <Sun className="h-5 w-5" aria-hidden="true" />
                  : <Moon className="h-5 w-5" aria-hidden="true" />}
              </button>
            )}
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t("nav.close_menu") : t("nav.open_menu")}
              className="p-2 text-foreground rounded-md
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-brand-orange"
            >
              {menuOpen
                ? <X className="w-6 h-6" aria-hidden="true" />
                : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 top-20 bg-background z-40 lg:hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col p-6 gap-5">
          {NAV_LINKS.map(({ href, key }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`text-lg font-semibold
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-brand-orange rounded-sm
                  ${active ? "text-brand-orange" : "text-text-main hover:text-brand-orange"}`}
              >
                {t(key)}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-border-base">
            <LanguageSwitcher />
          </div>

          <Link href="/request-proposal">
            <button
              aria-label={t("nav.request_proposal")}
              className="inline-flex items-center justify-center rounded-lg w-full
                bg-brand-orange text-white hover:bg-brand-orange/90
                px-6 py-3 text-base font-semibold
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-brand-orange"
            >
              {t("nav.request_proposal")}
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}
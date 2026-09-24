"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/components/LanguageContext";

import { DesktopActions } from "./DesktopActions";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileControls } from "./MobileControls";
import { MobileMenu } from "./MobileMenu";
import { NavbarLogo } from "./NavbarLogo";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setActiveDropdown(null);

      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleDropdown = (groupName: string) => {
    setActiveDropdown((current) => (current === groupName ? null : groupName));
  };

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="bg-cta text-on-cta focus-visible:outline-cta sr-only fixed top-2 left-2 z-100 rounded-lg px-4 py-2 text-sm font-bold focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {t("nav.skip_to_content")}
      </a>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        aria-label="Main navigation"
        className={`bg-background fixed top-0 right-0 left-0 z-50 flex h-24 items-center border-b border-transparent duration-300 [border-image:linear-gradient(90deg,rgba(232,90,51,0.3)_0%,rgba(255,194,75,0.3)_100%)_1]`}
      >
        <div className="container-custom flex w-full items-center justify-between">
          <NavbarLogo />

          <DesktopNavigation
            pathname={pathname}
            activeDropdown={activeDropdown}
            onToggleDropdown={toggleDropdown}
            onCloseDropdown={() => setActiveDropdown(null)}
          />

          <DesktopActions />

          <MobileControls
            menuOpen={menuOpen}
            onToggleMenu={() => setMenuOpen((current) => !current)}
            menuButtonRef={menuButtonRef}
          />
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

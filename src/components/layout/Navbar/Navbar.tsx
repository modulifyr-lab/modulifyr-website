"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/components/LanguageContext";
import { LOCAL_SEARCH_INDEX, type SearchIndexItem } from "@/lib/search-index";

import { DesktopActions } from "./DesktopActions";
import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderSearchModal } from "./HeaderSearchModal";
import { MobileControls } from "./MobileControls";
import { MobileMenu } from "./MobileMenu";
import { NavbarLogo } from "./NavbarLogo";

interface NavbarProps {
  searchItems?: SearchIndexItem[];
}

export function Navbar({ searchItems = LOCAL_SEARCH_INDEX.items }: NavbarProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
    setSearchOpen(false);
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
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setActiveDropdown(null);
        setMenuOpen(false);
        setSearchOpen((prev) => !prev);
        return;
      }

      if (event.key !== "Escape") return;

      setActiveDropdown(null);

      if (searchOpen) {
        setSearchOpen(false);
        return;
      }

      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  const toggleDropdown = (groupName: string) => {
    setActiveDropdown((current) => (current === groupName ? null : groupName));
  };

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="bg-cta text-on-cta focus-visible:outline-cta sr-only fixed top-2 z-100 rounded-lg py-2 text-sm font-bold focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {t("nav.skip_to_content")}
      </a>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        aria-label="Main navigation"
        className={`bg-background/95 fixed top-0 right-0 left-0 z-50 flex h-20 items-center border-b backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-border-base shadow-sm"
            : "border-transparent [border-image:linear-gradient(90deg,rgba(232,90,51,0.3)_0%,rgba(255,194,75,0.3)_100%)_1]"
        }`}
      >
        <div className="container-custom flex w-full items-center justify-between">
          <NavbarLogo />

          <DesktopNavigation
            pathname={pathname}
            activeDropdown={activeDropdown}
            onToggleDropdown={toggleDropdown}
            onCloseDropdown={() => setActiveDropdown(null)}
          />

          <DesktopActions onOpenSearch={() => setSearchOpen(true)} />

          <MobileControls
            menuOpen={menuOpen}
            onToggleMenu={() => setMenuOpen((current) => !current)}
            onOpenSearch={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
            menuButtonRef={menuButtonRef}
          />
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <HeaderSearchModal
        open={searchOpen}
        items={searchItems}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}

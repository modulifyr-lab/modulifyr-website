"use client";

import { Menu, Search, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";

interface MobileControlsProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onOpenSearch: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileControls({
  menuOpen,
  onToggleMenu,
  onOpenSearch,
  menuButtonRef,
}: MobileControlsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <button
        type="button"
        onClick={onOpenSearch}
        aria-label="Search blog posts and resources"
        className="text-on-background hover:bg-surface-container flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 transition-colors"
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>

      <ThemeToggle className="h-10 w-10" />

      <button
        ref={menuButtonRef}
        type="button"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? t("nav.close_menu") : t("nav.open_menu")}
        className="text-on-background rounded-lg p-2"
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
}

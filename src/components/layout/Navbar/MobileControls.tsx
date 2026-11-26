"use client";

import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/LanguageContext";

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
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <button
        type="button"
        onClick={onOpenSearch}
        aria-label="Search blog posts and resources"
        className="text-on-background hover:bg-surface-container inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label={t("nav.toggle_theme")}
        className="text-on-background hover:bg-surface-container inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
      >
        <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
        <Moon className="block h-5 w-5 dark:hidden" aria-hidden="true" />
      </button>

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

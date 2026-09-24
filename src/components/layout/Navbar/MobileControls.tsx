"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/LanguageContext";

interface MobileControlsProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileControls({ menuOpen, onToggleMenu, menuButtonRef }: MobileControlsProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3 lg:hidden">
      <button
        type="button"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label={t("nav.toggle_theme")}
        className="text-on-background hover:bg-surface-container inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
      >
        {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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

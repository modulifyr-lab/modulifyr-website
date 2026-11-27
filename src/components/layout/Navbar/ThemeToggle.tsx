"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { getNextThemeMode, persistThemeMode } from "@/lib/theme";

const emptySubscribe = () => () => {};

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "h-9 w-9" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = isMounted && resolvedTheme === "dark";
  const label = isMounted
    ? isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle theme";

  const handleToggle = () => {
    const nextTheme = getNextThemeMode(resolvedTheme);
    persistThemeMode(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      aria-pressed={isMounted ? isDark : undefined}
      title={label}
      className={`border-border-base/70 bg-surface-container/40 text-on-surface-variant hover:border-cta/40 hover:bg-surface-container hover:text-on-background relative inline-flex cursor-pointer items-center justify-center rounded-lg border transition-colors duration-200 ${className}`}
    >
      <Sun
        className="hidden h-4 w-4 text-[#FFC24B] transition-transform duration-200 dark:block"
        aria-hidden="true"
      />
      <Moon
        className="block h-4 w-4 transition-transform duration-200 dark:hidden"
        aria-hidden="true"
      />
    </button>
  );
}

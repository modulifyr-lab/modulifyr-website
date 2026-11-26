import { Phone, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/Button";

interface DesktopActionsProps {
  onOpenSearch: () => void;
}

export function DesktopActions({ onOpenSearch }: DesktopActionsProps) {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <button
        type="button"
        onClick={onOpenSearch}
        aria-label="Search blog posts and resources"
        className="border-outline/30 text-on-surface-variant hover:bg-surface-container hover:text-on-background inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border px-3 text-xs font-medium transition-colors"
      >
        <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Search</span>
        <kbd className="border-outline/30 bg-surface-container hidden rounded border px-1.5 py-0.5 text-[10px] font-semibold xl:inline">
          ⌘K
        </kbd>
      </button>

      <ThemeToggle />

      <Button href="/contact" icon={Phone}>
        Contact Us
      </Button>
    </div>
  );
}

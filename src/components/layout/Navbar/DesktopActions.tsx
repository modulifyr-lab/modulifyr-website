import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Phone } from "lucide-react";

export function DesktopActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <ThemeToggle />

      <Link
        href="/contact"
        className="bg-cta text-on-cta hover:bg-cta/90 flex rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-100 gap-2"
      >
        <Phone className="w-4 h-5" />
        Contact Us
      </Link>
    </div>
  );
}

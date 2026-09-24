"use client";

import Link from "next/link";
import { NAV_GROUPS } from "./navbar-data";
import LanguageSwitcher from "@/contexts/LanguageSwitcher";
import { RegionSelector } from "@/components/RegionSelector";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`bg-background fixed inset-0 top-20 z-40 overflow-y-auto transition-transform duration-300 ease-in lg:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav aria-label="Mobile navigation" className="flex flex-col gap-6 p-6">
        {NAV_GROUPS.map((group) => (
          <div key={group.name} className="border-outline/20 flex flex-col gap-2 border-b pb-4">
            {group.href ? (
              <Link
                href={group.href}
                onClick={onClose}
                className="text-on-background hover:text-cta text-lg font-bold transition-colors"
              >
                {group.name}
              </Link>
            ) : (
              <>
                <span className="text-on-surface-variant text-xs font-bold tracking-wider uppercase">
                  {group.name}
                </span>

                <div className="grid grid-cols-1 gap-2 pl-2">
                  {group.items?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="text-on-background hover:text-cta py-1 text-base font-semibold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-3 py-2">
          <span className="text-on-surface-variant text-xs font-bold tracking-wider uppercase">
            Preferences
          </span>

          <div className="flex items-center justify-between">
            <RegionSelector compact={false} />
            <LanguageSwitcher />
          </div>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="bg-cta text-on-cta hover:bg-cta/90 w-full rounded-lg py-3.5 text-center text-base font-semibold transition-colors"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

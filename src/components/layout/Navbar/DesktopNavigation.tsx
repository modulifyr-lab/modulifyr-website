"use client";

import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import { NAV_GROUPS } from "./navbar-data";
import { NavDropdown } from "./NavDropdown.tsx";

interface DesktopNavigationProps {
  pathname: string;
  activeDropdown: string | null;
  onToggleDropdown: (name: string) => void;
  onCloseDropdown: () => void;
}

export function DesktopNavigation({
  pathname,
  activeDropdown,
  onToggleDropdown,
  onCloseDropdown,
}: DesktopNavigationProps) {
  return (
    <div className="hidden items-center gap-8 lg:flex" role="menubar">
      {NAV_GROUPS.map((group) => {
        const isOpen = activeDropdown === group.name;

        if (group.href) {
          const isActive = pathname === group.href;

          return (
            <Magnetic key={group.name} radius={5} scale={1.06} className="px-1 py-1.5">
              <Link
                href={group.href}
                role="menuitem"
                className={`group relative inline-flex items-center gap-1.5 text-sm leading-none font-medium tracking-[0.28px] whitespace-nowrap shrink-0 transition-colors duration-300 ease-in ${
                  isActive ? "text-cta" : "text-on-surface-variant"
                } hover:text-cta`}
              >
                {group.name}
                {group.badge && (
                  <span className="bg-cta/12 text-cta border-cta/25 rounded border px-1.5 py-0.5 text-[10px] font-semibold tracking-normal">
                    {group.badge}
                  </span>
                )}

                <span
                  className={`bg-cta absolute -bottom-3 left-0 h-0.5 w-full cursor-pointer transition-transform duration-300 ease-in ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </Magnetic>
          );
        }

        return (
          <NavDropdown
            key={group.name}
            group={group}
            pathname={pathname}
            isOpen={isOpen}
            onToggle={() => onToggleDropdown(group.name)}
            onClose={onCloseDropdown}
          />
        );
      })}
    </div>
  );
}

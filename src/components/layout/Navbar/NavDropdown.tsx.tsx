"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavGroup } from "./navbar-data";

interface NavDropdownProps {
  group: NavGroup;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function NavDropdown({ group, pathname, isOpen, onToggle, onClose }: NavDropdownProps) {
  const isChildActive = group.items?.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );

  const isActive = Boolean(isChildActive);

  return (
    <div className="relative">
      <button
        type="button"
        role="menuitem"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={`group relative inline-flex h-6 cursor-pointer items-center gap-1 text-sm leading-none font-medium tracking-[0.28px] transition-colors duration-300 ease-in ${
          isActive || isOpen ? "text-cta" : "text-on-surface-variant"
        } hover:text-cta`}
      >
        {group.name}

        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
            isOpen ? "text-cta rotate-180" : ""
          }`}
        />

        <span
          className={`bg-cta absolute -bottom-1.5 left-0 h-0.5 w-full transition-transform duration-300 ease-in ${
            isActive || isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="border-outline/20 bg-surface absolute top-full left-0 mt-3 w-72 rounded-xl border p-2 shadow-xl backdrop-blur-lg"
        >
          {group.items?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className="hover:bg-surface-container flex flex-col rounded-lg p-2.5 transition-colors duration-150"
            >
              <span className="text-on-background text-sm font-semibold">{item.label}</span>

              {item.description && (
                <span className="text-on-surface-variant mt-0.5 text-xs">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

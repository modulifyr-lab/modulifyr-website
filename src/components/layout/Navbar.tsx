"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ChevronDown, Globe } from "lucide-react";
import { RegionSelector } from "@/components/RegionSelector";

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavGroup {
  name: string;
  href?: string;
  items?: NavDropdownItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    name: "Solution",
    items: [
      { label: "Services", href: "/services", description: "Custom ERP, web apps & automation" },
      { label: "Our Process", href: "/process", description: "5-phase engineering approach" },
      { label: "Industries", href: "/industries", description: "Solutions for education, health, POS & enterprise" },
      { label: "Capabilities", href: "/capabilities", description: "Tech stack, cloud & system architecture" },
    ],
  },
  {
    name: "Company",
    items: [
      { label: "About Us", href: "/about", description: "Who we are, principles & team" },
      { label: "Careers", href: "/careers", description: "Join us in building Modulifyr" },
      { label: "Case Studies", href: "/work", description: "Featured projects & client outcomes" },
      { label: "Technical Standards", href: "/about/technical-standards", description: "Our engineering guidelines & practices" },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Resources",
    items: [
      { label: "Resources Hub", href: "/resources", description: "Guides, templates & system blueprints" },
      { label: "Engineering Blog", href: "/blog", description: "Insights on software architecture & tech" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        if (menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleDropdown = (groupName: string) => {
    setActiveDropdown((prev) => (prev === groupName ? null : groupName));
  };

  return (
    <>
      <a
        href="#main-content"
        className="bg-[#2D738D] sr-only fixed top-2 left-2 z-[100] rounded-lg px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Skip to main content
      </a>

      <nav
        ref={dropdownRef}
        aria-label="Main navigation"
        className={`fixed top-0 right-0 left-0 z-50 flex h-20 items-center border-b transition-colors duration-300 ${
          scrolled
            ? "bg-bg-main/95 border-border-main shadow-sm backdrop-blur-md"
            : "bg-bg-main/80 border-border-main/50 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Modulifyr — go to homepage"
            className="focus-visible:outline-[#2D738D] flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Image
              src="/company-logo.png"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
              className="h-9 w-9 object-contain dark:invert"
            />
            <span className="font-heading text-foreground text-xl font-bold tracking-tight">
              Modulifyr
            </span>
          </Link>

          {/* ── Desktop Navigation Links (4 main items) ──────────────────────── */}
          <div className="hidden items-center gap-8 lg:flex" role="menubar">
            {NAV_GROUPS.map((group) => {
              const isDropdown = Boolean(group.items);
              const isOpen = activeDropdown === group.name;
              const isDirectActive = group.href ? pathname === group.href : false;
              const isChildActive = group.items?.some(
                (item) => pathname === item.href || pathname.startsWith(item.href + "/")
              );
              const isActive = isDirectActive || isChildActive;

              if (group.href) {
                return (
                  <Link
                    key={group.name}
                    href={group.href}
                    role="menuitem"
                    className={`group relative text-sm font-medium transition-colors duration-300 ease-in hover:text-[#2D738D] ${
                      isActive ? "text-[#2D738D] font-semibold" : "text-text-alt"
                    }`}
                  >
                    {group.name}
                    <span
                      className={`absolute bottom-[-6px] left-0 h-[2px] w-full bg-[#2D738D] transition-transform duration-300 ease-in ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              }

              return (
                <div key={group.name} className="relative">
                  <button
                    type="button"
                    role="menuitem"
                    aria-expanded={isOpen}
                    onClick={() => toggleDropdown(group.name)}
                    className={`group relative inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ease-in hover:text-[#2D738D] ${
                      isActive || isOpen ? "text-[#2D738D] font-semibold" : "text-text-alt"
                    }`}
                  >
                    {group.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#2D738D]" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-[-6px] left-0 h-[2px] w-full bg-[#2D738D] transition-transform duration-300 ease-in ${
                        isActive || isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>

                  {/* Dropdown Overlay Menu */}
                  {isOpen && (
                    <div
                      role="menu"
                      className="bg-bg-main border-border-main absolute top-full left-0 mt-3 w-72 rounded-xl border p-2 shadow-xl backdrop-blur-lg transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-top-2"
                    >
                      {group.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                          className="hover:bg-bg-alt flex flex-col rounded-lg p-2.5 transition-colors duration-150"
                        >
                          <span className="text-foreground text-sm font-semibold">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-text-dim text-xs mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Desktop Right Controls (Theme toggle, Region selector, CTA) ─── */}
          <div className="hidden items-center gap-4 lg:flex">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="text-foreground hover:bg-bg-alt inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-main transition-colors"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <RegionSelector compact={true} />

            {/* CTA Button: Contact Us */}
            <Link href="/contact">
              <button
                type="button"
                className="bg-[#2D738D] hover:bg-[#235b70] text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-100 ease-in active:scale-100 shadow-sm cursor-pointer"
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* ── Mobile Controls ────────────────────────────────────────── */}
          <div className="flex items-center gap-3 lg:hidden">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="text-foreground hover:bg-bg-alt inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}
            <button
              type="button"
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="text-foreground p-2 rounded-lg"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ───────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`bg-bg-main fixed inset-0 top-20 z-40 overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-6 p-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.name} className="flex flex-col gap-2 border-b border-border-main/60 pb-4">
              {group.href ? (
                <Link
                  href={group.href}
                  className="text-foreground text-lg font-bold hover:text-[#2D738D]"
                  onClick={() => setMenuOpen(false)}
                >
                  {group.name}
                </Link>
              ) : (
                <>
                  <span className="text-text-dim text-xs font-bold tracking-wider uppercase">
                    {group.name}
                  </span>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {group.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-foreground hover:text-[#2D738D] text-base font-semibold py-1"
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
            <span className="text-text-dim text-xs font-bold tracking-wider uppercase">
              Region / Currency
            </span>
            <div className="flex items-center justify-between">
              <RegionSelector compact={false} />
            </div>
          </div>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button
              type="button"
              className="bg-[#2D738D] hover:bg-[#235b70] text-white w-full rounded-lg py-3.5 text-base font-semibold transition-colors duration-100 ease-in"
            >
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}

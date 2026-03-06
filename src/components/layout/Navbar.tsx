"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center",
                scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border-base" : "bg-transparent"
            )}
        >
            <div className="container-custom flex items-center justify-between w-full">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/company-logo.png"
                        alt="Modulifyr Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain dark:invert"
                    />
                    <span className={cn(
                        "font-heading font-bold text-xl tracking-tight hidden sm:block",
                        scrolled ? "text-foreground" : "text-brand-navy dark:text-foreground"
                    )}>
                        Modulifyr
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-alt hover:text-brand-orange transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 ml-2 border-l border-border-base pl-6">
                        <ThemeToggle />
                        <Link href="/request-proposal">
                            <Button size="sm">Request Proposal</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 top-20 bg-background z-40 lg:hidden transition-transform duration-300 ease-in-out transform",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col p-6 gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-semibold text-text-main hover:text-brand-orange"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/request-proposal" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Request Proposal</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-border-main text-text-main pt-16 pb-12 transition-colors duration-300">
      <div className="container-custom flex flex-col gap-12">
        {/* ── Mini-CTA Card ─────────────────────────────────────────────────── */}
        <div className="bg-bg-alt border-border-main relative overflow-hidden rounded-2xl border p-8 md:p-10 shadow-lg">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B8E0E9]/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-2">
              <span className="text-caption1 font-semibold text-[#2D738D] tracking-wider uppercase">
                Free Strategic Session
              </span>
              <h3 className="text-h4 font-bold text-foreground">
                Book a Free Consultation with Our Expert
              </h3>
              <p className="text-body2 text-text-alt">
                Unlock scalable systems and lasting digital infrastructure, let's build your next
                chapter together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-[#2D738D] hover:bg-[#235b70] text-white inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer"
                >
                  Book Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/request-proposal">
                <button
                  type="button"
                  className="bg-bg-main border-border-main text-foreground hover:bg-bg-deep/10 inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors duration-100 ease-in cursor-pointer"
                >
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Column 1: Logo & Tagline (4 cols) */}
          <div className="flex flex-col gap-4 md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image
                src="/company-logo.png"
                alt="Modulifyr Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain dark:invert"
              />
              <span className="font-heading text-foreground text-xl font-bold tracking-tight">
                Modulifyr
              </span>
            </Link>
            <p className="text-body2 text-text-alt max-w-sm leading-relaxed">
              Custom software systems for growing businesses. Modular ERP, automation, and
              integrations built to scale — from Nepal, for clients worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://web.facebook.com/profile.php?id=61591920842310"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-alt hover:text-[#2D738D] bg-bg-alt border-border-main rounded-lg border p-2 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/modulifyr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-text-alt hover:text-[#2D738D] bg-bg-alt border-border-main rounded-lg border p-2 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/modulifyr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-alt hover:text-[#2D738D] bg-bg-alt border-border-main rounded-lg border p-2 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (4 cols) */}
          <div className="flex flex-col gap-3 md:col-span-4">
            <h4 className="text-body1 font-bold text-foreground mb-1">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Home
              </Link>
              <Link href="/about" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                About Us
              </Link>
              <Link href="/services" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Services
              </Link>
              <Link href="/work" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Case Study
              </Link>
              <Link href="/pricing" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Pricing
              </Link>
              <Link href="/contact" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Contact Us
              </Link>
              <Link href="/careers" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Careers
              </Link>
              <Link href="/resources" className="text-text-alt hover:text-[#2D738D] transition-colors py-1">
                Resources
              </Link>
            </div>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="flex flex-col gap-3 md:col-span-4">
            <h4 className="text-body1 font-bold text-foreground mb-1">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-text-alt">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#2D738D] shrink-0 mt-0.5" />
                <span>Birtamode, Ward 1, Gauri Tole, Jhapa, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#2D738D] shrink-0" />
                <a href="tel:+9779764478571" className="hover:text-[#2D738D] transition-colors">
                  +977 9764478571
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#2D738D] shrink-0" />
                <a href="mailto:contact@modulifyr.com" className="hover:text-[#2D738D] transition-colors">
                  contact@modulifyr.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Copyright Bar ──────────────────────────────────────────── */}
        <div className="border-border-main text-caption1 text-text-dim flex flex-col items-center justify-between gap-4 border-t pt-8 text-center sm:flex-row sm:text-left">
          <p>
            Copyright © 2026 Modulifyr Enterprise Pvt. Ltd. | All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-[#2D738D] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-[#2D738D] transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#2D738D] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

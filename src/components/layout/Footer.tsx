import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-navy py-16 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Logo & Mission */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex w-fit items-center gap-2 rounded-lg bg-white/10 p-2">
              <Image
                src="/company-logo.png"
                alt="Modulifyr Logo"
                width={40}
                height={40}
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="font-heading text-xl font-bold tracking-tight">Modulifyr</span>
            </Link>
            <p className="text-text-muted max-w-xs text-sm leading-relaxed">
              Custom modular software systems for SMBs that have outgrown off-the-shelf tools. Based
              in Birtamode, Jhapa, Nepal. Building for clients worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <h4 className="font-heading mb-2 font-semibold text-white">Company</h4>
              <Link href="/about" className="text-text-muted hover:text-brand-orange text-sm">
                About
              </Link>
              <Link href="/work" className="text-text-muted hover:text-brand-orange text-sm">
                Work
              </Link>
              <Link href="/resources" className="text-text-muted hover:text-brand-orange text-sm">
                Resources
              </Link>
              <Link href="/blog" className="text-text-muted hover:text-brand-orange text-sm">
                Blog
              </Link>
              <Link href="/careers" className="text-text-muted hover:text-brand-orange text-sm">
                Careers
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-heading mb-2 font-semibold text-white">Services</h4>
              <Link href="/services" className="text-text-muted hover:text-brand-orange text-sm">
                Custom Dev
              </Link>
              <Link href="/process" className="text-text-muted hover:text-brand-orange text-sm">
                Process
              </Link>
              <Link
                href="/capabilities"
                className="text-text-muted hover:text-brand-orange text-sm"
              >
                Tech Stack
              </Link>
              <Link href="/pricing" className="text-text-muted hover:text-brand-orange text-sm">
                Pricing
              </Link>
              <Link href="/industries" className="text-text-muted hover:text-brand-orange text-sm">
                Industries
              </Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white">Contact</h4>
            <p className="text-text-muted text-sm">Birtamode, Jhapa, Nepal</p>
            <a
              href="mailto:contact@modulifyr.com"
              className="text-text-muted hover:text-brand-orange text-sm transition-colors"
            >
              contact@modulifyr.com
            </a>
            <p className="text-text-muted mt-1 text-xs">Response within 1 business day</p>
            <div className="mt-2 flex gap-4">
              <Link href="/privacy" className="text-text-muted text-xs hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-muted text-xs hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="text-text-muted mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <span>
            © {new Date().getFullYear()} Modulifyr. All rights reserved. Birtamode, Jhapa, Nepal.
          </span>
          <span>Custom software development for businesses in Nepal and worldwide.</span>
        </div>
      </div>
    </footer>
  );
}

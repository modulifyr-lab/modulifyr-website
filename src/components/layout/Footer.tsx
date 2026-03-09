import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-brand-navy text-white py-16">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Logo & Mission */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 bg-white/10 p-2 rounded-lg w-fit">
                            <Image
                                src="/company-logo.png"
                                alt="Modulifyr Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 brightness-0 invert"
                            />
                            <span className="font-heading font-bold text-xl tracking-tight">Modulifyr</span>
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                            Custom modular software systems for SMBs that have outgrown off-the-shelf tools. Based in Birtamode, Jhapa, Nepal. Building for clients worldwide.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-heading font-semibold text-white mb-2">Company</h4>
                            <Link href="/about" className="text-sm text-text-muted hover:text-brand-orange">About</Link>
                            <Link href="/work" className="text-sm text-text-muted hover:text-brand-orange">Work</Link>
                            <Link href="/resources" className="text-sm text-text-muted hover:text-brand-orange">Resources</Link>
                            <Link href="/blog" className="text-sm text-text-muted hover:text-brand-orange">Blog</Link>
                            <Link href="/careers" className="text-sm text-text-muted hover:text-brand-orange">Careers</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-heading font-semibold text-white mb-2">Services</h4>
                            <Link href="/services" className="text-sm text-text-muted hover:text-brand-orange">Custom Dev</Link>
                            <Link href="/process" className="text-sm text-text-muted hover:text-brand-orange">Process</Link>
                            <Link href="/capabilities" className="text-sm text-text-muted hover:text-brand-orange">Tech Stack</Link>
                            <Link href="/pricing" className="text-sm text-text-muted hover:text-brand-orange">Pricing</Link>
                            <Link href="/industries" className="text-sm text-text-muted hover:text-brand-orange">Industries</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-semibold text-white">Contact</h4>
                        <p className="text-sm text-text-muted">Birtamode, Jhapa, Nepal</p>
                        <a href="mailto:contact@modulifyr.com" className="text-sm text-text-muted hover:text-brand-orange transition-colors">
                            contact@modulifyr.com
                        </a>
                        <p className="text-xs text-text-muted mt-1">Response within 1 business day</p>
                        <div className="flex gap-4 mt-2">
                            <Link href="/privacy" className="text-xs text-text-muted hover:text-white">Privacy Policy</Link>
                            <Link href="/terms" className="text-xs text-text-muted hover:text-white">Terms</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
                    <span>© {new Date().getFullYear()} Modulifyr. All rights reserved. Birtamode, Jhapa, Nepal.</span>
                    <span>Custom software development for businesses in Nepal and worldwide.</span>
                </div>
            </div>
        </footer>
    );
}

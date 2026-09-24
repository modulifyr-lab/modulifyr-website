import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://web.facebook.com/profile.php?id=61591920842310",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://x.com/modulifyr",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/modulifyr/",
    label: "Instagram",
  },
];

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-sm text-slate-500 sm:flex-row">
      <div className="flex items-center gap-4 pt-1">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center transition-all duration-200 hover:text-slate-400"
            >
              <Icon className="h-6 w-6" />
            </a>
          );
        })}
      </div>
      <p>Copyright © 2026 Modulifyr Enterprise Pvt. Ltd. All rights reserved.</p>

      <div className="flex items-center gap-6">
        <Link href="/privacy" className="transition-colors hover:text-slate-400">
          Privacy
        </Link>

        <Link href="/terms" className="transition-colors hover:text-slate-400">
          Terms
        </Link>

        <Link href="/cookie-policy" className="transition-colors hover:text-slate-400">
          Cookies
        </Link>
      </div>
    </div>
  );
}

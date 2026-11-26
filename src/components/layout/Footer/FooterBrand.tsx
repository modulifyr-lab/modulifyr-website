import Image from "next/image";
import Link from "next/link";
import { FULL_ADDRESS } from "@/lib/links";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-5 pr-6">
      <Link href="/" className="flex items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/company-logo.png"
            alt="Modulifyr Logo"
            width={34}
            height={34}
            className="object-contain"
          />
        </div>

        <span className="font-syne text-2xl tracking-tight text-white">Modulifyr</span>
      </Link>

      <p className="max-w-sm text-justify text-sm leading-relaxed text-slate-400">
        Founder-led engineering &amp; growth studio delivering Launch Kit websites, Automation
        Layers, and custom Next.js &amp; Hono web apps from {FULL_ADDRESS} for clients worldwide.
      </p>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-5 pr-0 lg:col-span-4 lg:pr-8">
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
        Custom software systems for growing businesses. Modular ERP, automation, and integrations
        built to scale — engineered for global clients.
      </p>
    </div>
  );
}

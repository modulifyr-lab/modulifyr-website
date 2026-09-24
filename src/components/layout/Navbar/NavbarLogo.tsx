import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Modulifyr — go to homepage"
      className="focus-visible:outline-cta flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <Image
        src="/image.png"
        alt="Company Logo"
        aria-hidden="true"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />

      <span className="font-syne text-2xl leading-none font-bold tracking-normal">Modulifyr</span>
    </Link>
  );
}

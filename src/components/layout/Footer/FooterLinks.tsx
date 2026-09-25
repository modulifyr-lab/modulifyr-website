import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h4 className="font-sans text-sm leading-[110%] font-normal tracking-normal text-[#FFC24B]">
        {title}
      </h4>

      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-slate-400 transition-colors hover:text-cyan-400">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

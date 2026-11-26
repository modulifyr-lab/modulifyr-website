import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
  badge?: string;
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
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-400"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="rounded border border-cyan-400/30 bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                  {link.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

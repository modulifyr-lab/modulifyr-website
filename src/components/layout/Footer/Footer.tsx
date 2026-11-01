import { FooterBrand } from "./FooterBrand";
import { FooterBottom } from "./FooterBottom";
import { FooterBook } from "./FooterBook";
import { FooterContactInfo } from "./FooterContactInfo";
import { FooterLinks } from "./FooterLinks";
import { FooterCTA } from "./FooterCTA";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/work" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="dark:bg-background border-t border-slate-200 bg-white py-14 text-slate-700 transition-colors dark:border-t-0 dark:bg-[linear-gradient(180deg,#0F172A_0%,rgba(51,79,144,0.4)_100%)] dark:text-slate-300 [html:not(.dark)_&_a]:text-slate-700 [html:not(.dark)_&_a:hover]:text-black [html:not(.dark)_&_h1]:text-black [html:not(.dark)_&_h2]:text-black [html:not(.dark)_&_h3]:text-black [html:not(.dark)_&_h4]:text-black [html:not(.dark)_&_li]:text-slate-700 [html:not(.dark)_&_p]:text-slate-700 [html:not(.dark)_&_span]:text-slate-700">
      <div className="container-custom flex flex-col gap-14">
        {/* <FooterCTA /> */}
        <div className="grid grid-cols-1 gap-10 pt-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <FooterBrand />

          <FooterLinks title="Quick Links" links={QUICK_LINKS} />

          <FooterContactInfo />

          <FooterBook />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

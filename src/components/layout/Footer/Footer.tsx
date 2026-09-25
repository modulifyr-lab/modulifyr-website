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
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer className="bg-background bg-[linear-gradient(180deg,#0F172A_0%,rgba(51,79,144,0.4)_100%)] py-14 text-slate-300 transition-colors">
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

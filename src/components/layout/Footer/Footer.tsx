import { FooterBrand } from "./FooterBrand";
import { FooterBottom } from "./FooterBottom";
import { FooterContact } from "./FooterBook";
import { FooterContactInfo } from "./FooterContactInfo";
import { FooterLinks } from "./FooterLinks";
import { FooterCTA } from "./FooterCTA";

const COMPANY_LINKS = [
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
      <div className="container-custom flex flex-col gap-14 px-4 sm:px-6 lg:px-8">
        {/* <FooterCTA /> */}
        <div className="grid grid-cols-1 gap-10 pt-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-0">
          <FooterBrand />

          <FooterLinks title="Quick Links" links={COMPANY_LINKS} />

          <FooterContactInfo />

          <FooterContact />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

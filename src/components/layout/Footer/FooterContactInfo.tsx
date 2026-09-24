import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "+977 9764478571",
    href: "tel:+9779764478571",
  },
  {
    icon: Mail,
    label: "contact@modulifyr.com",
    href: "mailto:contact@modulifyr.com",
  },
];

export function FooterContactInfo() {
  return (
    <div className="flex flex-col gap-4 lg:col-span-2">
      <h4 className="font-sans text-sm leading-[110%] font-normal tracking-normal text-[#FFC24B]">
        Contact
      </h4>

      <div className="flex flex-col gap-3 text-sm">
        {CONTACT_INFO.map((contact) => {
          const Icon = contact.icon;

          return (
            <a
              key={contact.label}
              href={contact.href}
              className="flex items-start gap-3 text-slate-400 transition-colors hover:text-cyan-400"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <span>{contact.label}</span>
            </a>
          );
        })}

        <div className="flex items-start gap-3 text-sm text-slate-400">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

          <span className="leading-relaxed">
            Birtamode, Ward 1, Gauri Tole,
            <br />
            Jhapa, Nepal
          </span>
        </div>
      </div>
    </div>
  );
}

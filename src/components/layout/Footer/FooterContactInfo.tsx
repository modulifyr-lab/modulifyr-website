import { Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  CONTACT_EMAIL,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/links";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: Mail,
    label: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

export function FooterContactInfo() {
  return (
    <div className="flex flex-col gap-4">
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

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
        >
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

          <span className="leading-relaxed">
            {ADDRESS_LINE_1}
            <br />
            {ADDRESS_LINE_2}
          </span>
        </a>

        <p className="pt-1 text-xs leading-relaxed text-slate-400">
          बिर्तामोड, झापाबाट नेपालभर र विश्वभर सेवा — सिधै WhatsApp वा फोनमा कुरा गर्नुहोस्।
        </p>
      </div>
    </div>
  );
}

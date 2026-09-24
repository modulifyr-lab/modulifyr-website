import { Phone } from "lucide-react";

export function FooterContact() {
  return (
    <div className="flex flex-col gap-4 lg:col-span-3">
      <h4 className="font-sans text-sm leading-[110%] font-normal tracking-normal text-[#FFC24B]">
        Book a Free Consultation with Our Expert
      </h4>

      <div className="flex flex-col gap-3 text-sm text-slate-400">
        Unlock scalable systems and lasting digital infrastructure, let's build your next chapter
        together.
      </div>

      <div className="mt-2 flex flex-col gap-3 pt-2">
        <button className="flex h-12 w-72.25 cursor-pointer items-center justify-center gap-2 rounded-[28px] bg-[radial-gradient(89.24%_91.67%_at_5.83%_8.33%,#409EB7_0%,#87C9D9_100%)] px-6 py-3 text-sm font-semibold text-[#003349] shadow-[inset_0_-1px_3px_1px_#00334966,inset_0_4px_8px_1px_#93C9E94D] transition-opacity hover:opacity-90">
          Book a free Consultation Today
        </button>

        <button className="flex h-12 w-72.25 cursor-pointer items-center justify-center gap-2 rounded-[28px] border border-[#409EB7] px-6 py-3 text-sm font-semibold text-[#409EB7] transition-colors hover:bg-[#409EB7]/10">
          <Phone className="h-4 w-4" />
          Request a Call Back
        </button>
      </div>
    </div>
  );
}

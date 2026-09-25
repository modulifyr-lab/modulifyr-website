import { Button } from "@/components/Button";
import { Phone } from "lucide-react";

export function FooterBook() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-sans text-sm leading-[110%] font-normal tracking-normal text-[#FFC24B]">
        Book a Free Consultation with Our Expert
      </h4>

      <div className="flex flex-col gap-3 text-sm text-slate-400">
        Unlock scalable systems and lasting digital infrastructure, let's build your next chapter
        together.
      </div>

      <div className="mt-2 flex flex-col gap-3 pt-2">
        <Button>Book a Free Consultation Today</Button>

        <Button variant="outline" icon={Phone}>
          Request a Call Back
        </Button>
      </div>
    </div>
  );
}

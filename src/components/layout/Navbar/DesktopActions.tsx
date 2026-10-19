import { ThemeToggle } from "./ThemeToggle";
import { Phone } from "lucide-react";
import { Button } from "@/components/Button";

export function DesktopActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <ThemeToggle />

      <Button href="/request-proposal" icon={Phone}>
        Request Proposal
      </Button>
    </div>
  );
}

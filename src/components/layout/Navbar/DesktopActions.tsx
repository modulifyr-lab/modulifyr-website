import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Phone } from "lucide-react";
import { Button } from "@/components/Button";

export function DesktopActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <ThemeToggle />

      <Button>
        <Link href="/contact" className="flex items-center gap-2">
          <Phone className="h-5 w-4" />
          Contact Us
        </Link>
      </Button>
    </div>
  );
}

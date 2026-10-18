import React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  icon?: LucideIcon;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  icon: Icon,
  type = "button",
  onClick,
  className = "",
  href,
  external,
}: ButtonProps) {
  const baseStyles =
    "inline-flex h-12 w-full max-w-72 cursor-pointer items-center justify-center gap-2 rounded-[28px] p-3 text-md font-semibold transition-all";

  const variants = {
    primary:
      "bg-[radial-gradient(89.24%_91.67%_at_5.83%_8.33%,#409EB7_0%,#87C9D9_100%)] text-[#003349] shadow-[inset_0_-1px_3px_1px_#00334966,inset_0_4px_8px_1px_#93C9E94D] hover:opacity-90",

    outline: "border border-[#409EB7] text-[#409EB7] hover:bg-[#409EB7]/10",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={onClick}
        >
          {Icon && <Icon className="h-4 w-4" />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {Icon && <Icon className="h-4 w-4" />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}

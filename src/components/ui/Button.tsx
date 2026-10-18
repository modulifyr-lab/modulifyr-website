import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  external?: boolean;
}

const buttonVariants = {
  primary: "bg-[#2D738D] text-white hover:bg-[#235b70] shadow-sm active:opacity-90",
  secondary: "bg-bg-alt text-foreground border border-border-main hover:bg-bg-main active:bg-bg-alt",
  ghost: "bg-transparent text-foreground hover:bg-bg-alt active:bg-transparent",
  outline: "bg-transparent border border-border-main text-foreground hover:bg-bg-alt active:bg-transparent",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-8 py-3.5 text-base font-semibold",
  icon: "h-10 w-10 p-0",
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
    const combinedClasses = cn(
      "inline-flex items-center justify-center rounded-lg font-sans transition-colors duration-100 ease-in disabled:pointer-events-none disabled:opacity-50 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D738D]",
      buttonVariants[variant],
      buttonSizes[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

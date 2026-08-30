import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
}

const buttonVariants = {
  primary: "bg-brand-orange text-white hover:bg-brand-orange/90",
  secondary: "bg-brand-navy text-white hover:bg-brand-navy/90",
  ghost: "bg-transparent text-foreground hover:bg-bg-secondary",
  outline: "bg-transparent border border-border-base text-foreground hover:bg-bg-secondary",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base font-medium",
  lg: "px-8 py-4 text-lg font-semibold",
  icon: "h-10 w-10 p-0",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "duration-base ease-base inline-flex items-center justify-center rounded-lg transition-colors disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

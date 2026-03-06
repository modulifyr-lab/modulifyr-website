import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-background border border-border-base rounded-2xl p-8 transition-all duration-base ease-base",
                    hover && "hover:shadow-lg hover:-translate-y-1",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn("text-xl font-heading font-bold mb-4 text-foreground", className)}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-text-secondary text-base leading-relaxed", className)}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

export { Card, CardTitle, CardDescription };

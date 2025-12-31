import { cn } from "@/lib/cn";
import { forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("isolate px-4 py-3 rounded-2xl bg-white/60 ", className)}
      {...props}
    />
  ),
);

Card.displayName = "Card";
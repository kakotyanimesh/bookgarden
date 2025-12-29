import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const InputVariants = cva(
    "w-full focus:ring-1 px-4 py-2 text-sm rounded-full placeholder:text-xs focus:outline-none disabled:cursor-not-allowed disabled:opacity-25 font-semibold",
    {
        variants: {
            variant: {
                primary:
                    // "focus:border-foreground  focus:ring-primary/40 focus:ring-2 ",
                    "shadow-tertiary focus:ring-foreground/50 bg-cream/70"
            },
            sizes: {
                sm: "text-sm h-9"
            }
        },
        defaultVariants: {
            variant: "primary",
            sizes: "sm"
        },
    },
);

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> { }

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, sizes, ...props }, ref) => {
        return (
            <input
                required
                className={cn(InputVariants({ variant, sizes }), className)}
                {...props}
                ref={ref}
            />
        );
    },
);
Input.displayName = "Input";

import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ButtonHTMLAttributes } from "react";

const ButtonVariants = cva(
    "w-fit cursor-pointer font-quickSand rounded-full whitespace-nowrap font-semibold transition-all ease-out duration-200 disabled:cursor-not-allowed disabled:opacity-25",
    {
        variants: {
            variant: {
                primary: "bg-primary text-cream hover:shadow-primary/20",
                secondary:
                    "bg-dark text-cream  px-5 hover:shadow-primary/20 font-semibold py-2",
                tertiary : "bg-blue-500 hover:shadow-primary/20 py-2 text-cream",
                transparent:
                    "bg-transparent border border-dark text-dark hover:bg-secondary hover:text-cream focus:ring-2 focus:ring-secondary focus:ring-offset-2",
            },
            size: {
                default: "px-4 py-2 md:text-sm text-xs",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof ButtonVariants> {
    asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(
                    ButtonVariants({ variant, size }),
                    className,
                    
                )}
                {...props}
                ref={ref}
            />
        );
    }
);

Button.displayName = "Button";

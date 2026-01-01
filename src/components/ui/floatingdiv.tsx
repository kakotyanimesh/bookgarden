"use client"
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/cn';

const floatingDivVariants = cva(
    'rounded-full md:py-2 py-1 text-sm font-semibold',
    {
        variants: {
            variant: {
                default: 'bg-bluecolor/60 text-blue-900',
                primary: 'bg-secondary/60 text-cream',
                secondary: 'bg-purplecolor/60 text-purple-900',
                success: 'bg-greencolor text-green-900',
                warning: 'bg-yellow-500 text-white shadow-lg',
                danger: 'bg-red-500 text-white shadow-lg',
            },
            size: {
                sm: 'md:px-2 px-1',
                md: 'md:px-4 px-2',
                lg: 'md:px-6 px-3',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
);

interface FloatingDivProps
    extends HTMLMotionProps<"div">,
    VariantProps<typeof floatingDivVariants> {
    title: string;
}

export const FloatingDiv = forwardRef<HTMLDivElement, FloatingDivProps>(
    ({ title, variant, size, className, animate, transition, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(floatingDivVariants({ variant, size }), className)}
                animate={animate ?? { y: [0, -6, 0] }}
                transition={transition ?? {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                {...props}
            >
                {title}
            </motion.div>
        );
    }
);

FloatingDiv.displayName = 'FloatingDiv';

"use client";

import { cn } from "@/lib/cn";
import { forwardRef, InputHTMLAttributes, useId } from "react";

interface TodoDoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onToggle"> {
    label: string;
    todoId: string;
    onToggle?: (todoId: string, checked: boolean) => Promise<void> | void;
}

export const TodoDone = forwardRef<HTMLInputElement, TodoDoneProps>(
    ({ className, label, todoId, checked, onToggle, onChange, ...props }, ref) => {
        const id = useId();

        const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            await onToggle?.(todoId, e.target.checked);
        };

        return (
            <label
                htmlFor={id}
                className={cn(
                    "group flex items-center md:gap-4 gap-3 md:px-5 md:py-2 px-2 py-1 rounded-2xl cursor-pointer w-full",
                    checked ? "bg-secondary/20" : "bg-dark/10",
                    className
                )}
            >
                <input
                    ref={ref}
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    className="sr-only peer"
                    {...props}
                />
                {/* Custom checkbox */}
                <div className="relative w-4 h-4 md:w-6 md:h-6 shrink-0">
                    {/* Outer ring */}
                    <div className={cn(
                        "absolute inset-0 rounded-full border-2 transition-all duration-300",
                        checked
                            ? "border-secondary bg-secondary/10"
                            : "border-dark/20 group-hover:border-primary/50"
                    )} />
                    {/* Checkmark */}
                    <svg
                        className={cn(
                            "absolute inset-0 w-4 h-4 md:w-6 md:h-6 p-0.5 md:p-1 text-primary transition-all duration-300",
                            checked
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-50"
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f34f8b"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12l5 5L20 7" />
                    </svg>
                </div>
                {/* Label */}
                <span
                    className={cn(
                        "text-sm md:text-base font-medium transition-all duration-300",
                        checked
                            ? "text-secondary/40 line-through decoration-primary/60 decoration-2"
                            : "text-dark"
                    )}
                >
                    {label}
                </span>
            </label>
        );
    }
);

TodoDone.displayName = "TodoDone";

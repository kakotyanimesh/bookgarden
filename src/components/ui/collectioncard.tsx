import { cn } from "@/lib/cn";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type FolderColor = "pink" | "cream" | "blue" | "green";

const folderColors: Record<FolderColor, { tab: string; body: string; front: string }> = {
    pink: {
        tab: "#ffb3c6",
        body: "#ff8fab",
        front: "#fb6f92",
    },
    cream: {
        tab: "#ffc9ff",
        body: "#ffb7ff",
        front: "#f2a8ff",
    },
    blue: {
        tab: "#caf0f8",
        body: "#90e0ef",
        front: "#00b4d8",
    },
    green: {
        tab: "#bfd8bd",
        body: "#98c9a3",
        front: "#77bfa3",
    },
};

interface CollectionCardProps extends ComponentPropsWithoutRef<typeof Link> {
    label: string;
    color?: FolderColor;
}

export const CollectionCard = forwardRef<HTMLAnchorElement, CollectionCardProps>(
    ({ className, color = "pink", label, ...props }, ref) => {
        const colors = folderColors[color];

        return (
            <Link
                ref={ref}
                className={cn(
                    "group relative flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] md:w-32 w-27",
                    className
                )}
                {...props}
            >
                <div className="relative md:w-44 w-30 h-30">
                    <svg
                        viewBox="0 0 208 176"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        {/* Tab */}
                        <path
                            d="M24 52 C24 36, 36 24, 52 24 L80 24 C92 24, 100 32, 108 48 L108 52 Z"
                            fill={colors.tab}
                        />

                        {/* Body */}
                        <path
                            d="M16 60 C16 48, 28 40, 44 40 L164 40 C180 40, 192 48, 192 60 L192 144 C192 152, 184 160, 168 160 L40 160 C24 160, 16 152, 16 144 Z"
                            fill={colors.body}
                        />

                        {/* Front */}
                        <rect
                            x="16"
                            y="56"
                            width="176"
                            height="104"
                            rx="16"
                            fill={colors.front}
                        />
                    </svg>
                </div>
                <span className="-mt-2 text-sm font-semibold">{label}</span>
            </Link>
        );
    }
);

CollectionCard.displayName = "CollectionCard";

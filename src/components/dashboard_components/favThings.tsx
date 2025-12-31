import Link from "next/link";
import { Card } from "../ui/card";
import { cn } from "@/lib/cn";
import Image from "next/image";

export interface FavouriteItem {
    id: string;
    title: string;
    time: string; // e.g., "2h 15m" for movies, "320 pages" for books
    href: string;
    type?: "movie" | "book" | "series" | "other";
}

interface FavouriteThingsProps {
    items: FavouriteItem[];
    className?: string;
}

export const FavouriteThings = ({ items, className }: FavouriteThingsProps) => {
    return (
        <Card
            className={cn("bg-bluecolor/20 rounded-2xl px-4 py-3", className)}>
            <h1 className='font-semibold text-md text-dark mb-3'>
                Your favorite things
            </h1>
            <div className='flex flex-col'>
                {items.map((fav, key) => (
                    <Link
                        href={fav.href}
                        key={fav.id}
                        className={cn(
                            "flex flex-row justify-between border-b border-b-secondary bg-secondary/30 px-3 py-2 hover:bg-secondary transition-all ease-in-out duration-75",
                            key === 0
                                ? "rounded-t-2xl"
                                : key === items.length - 1
                                ? "rounded-b-2xl"
                                : ""
                        )}>
                        <span className='font-medium flex flex-row gap-3 items-center text-sm text-dark'>
                            <Image src={"/women.jpg"} width={100} height={100} alt="fav logos" className="size-6 rounded-md -rotate-12" />

                            {fav.title}
                        </span>
                        <span className='text-xs text-dark'>{fav.time}</span>
                    </Link>
                ))}
            </div>
        </Card>
    );
};

// Skeleton for Suspense
export const FavouriteThingsSkeleton = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <Card
            className={cn("bg-bluecolor/20 rounded-2xl px-4 py-3", className)}>
            <div className='h-5 bg-dark/10 rounded w-32 mb-3 animate-pulse' />
            <div className='space-y-2'>
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className='flex items-center justify-between px-3 py-2 rounded-xl bg-cream/50 animate-pulse'>
                        <div className='h-4 bg-dark/10 rounded w-24' />
                        <div className='h-3 bg-dark/10 rounded w-12' />
                    </div>
                ))}
            </div>
        </Card>
    );
};

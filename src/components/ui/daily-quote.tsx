import { cn } from "@/lib/cn";
import { Card } from "./card";

export interface Quote {
    text: string;
    source: string;
    sourceType: "movie" | "book" | "series" | "other";
    author?: string;
}

interface DailyQuoteProps {
    quote: Quote;
    className?: string;
}

export const DailyQuoteSkeleton = ({ className }: { className?: string }) => {
    return (
        <Card
            className={cn(
                "flex-1 text-center py-4 px-4 h-fit rounded-2xl bg-secondary/30",
                className
            )}
        >
            <div className="animate-pulse space-y-2">
                <div className="h-5 bg-pink-900/20 rounded w-3/4 mx-auto" />
                <div className="h-5 bg-pink-900/20 rounded w-1/2 mx-auto" />
                <div className="h-3 bg-pink-900/10 rounded w-1/3 mx-auto mt-3" />
            </div>
        </Card>
    );
};

export const DailyQuote = async ({ quote, className }: DailyQuoteProps) => {
    return (
        <div className={cn("w-full text-center h-fit relative", className)}>
            <Card className="h-5 absolute w-full bg-secondary/30 -z-20 -mt-2 rounded-none rounded-t-3xl"/>
            <Card
                className="py-4 px-4 h-fit rounded-2xl bg-secondary/70 backdrop-blur-3xl z-30"
            >
                <h1 className="font-taylerSwift md:text-xl text-sm font-semibold text-pink-900">
                    &ldquo;{quote.text}&rdquo;
                </h1>
                <p className="md:text-sm text-xs text-pink-900/60 mt-2">
                    — {quote.author && `${quote.author}, `}
                    <span className="italic">{quote.source}</span>
                </p>
            </Card>
        </div>
    );
};

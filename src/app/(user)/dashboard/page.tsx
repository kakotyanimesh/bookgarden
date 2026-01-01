import {
    FavouriteThings,
    FavouriteThingsSkeleton,
} from "@/components/dashboard_components/favThings";
import { HealthyBoard } from "@/components/dashboard_components/healthyboard";
import { LilDashboard } from "@/components/dashboard_components/lildahsboard";
import { VisionBoard } from "@/components/dashboard_components/visionboard";

import { DailyQuote, DailyQuoteSkeleton } from "@/components/ui/daily-quote";

import { Suspense } from "react";

export default function DashboardPage() {
    return (
        <div className='space-y-3'>
            <div className='font-semibold'>
                <h1 className=' md:text-2xl text-xl'>Hi, Animesh !</h1>
                <p className='text-xs  text-black/60'>
                    Let`s make your 2026 rock and rolling
                </p>
            </div>
            <div className='flex lg:flex-row flex-col gap-3'>
                <div className='lg:w-[56vw] space-y-4'>
                    <LilDashboard />
                    {/* <div className="flex md:flex-row flex-col justify-between gap-3 max-h-76 h-76"> */}
                    <VisionBoard />
                    {/* <Card className="flex-1"></Card> */}
                    {/* </div> */}
                </div>
                <div className='flex-1 space-y-3'>
                    <Suspense fallback={<DailyQuoteSkeleton />}>
                        <DailyQuote quote={demoQuote} />
                    </Suspense>
                    <Suspense fallback={<FavouriteThingsSkeleton />}>
                        <FavouriteThings items={demoFavourites} />
                    </Suspense>
                    <HealthyBoard />
                </div>
            </div>
        </div>
    );
}

const demoQuote = {
    id: "1",
    text: "hope is a good thing, maybe the best of things, and no good thing ever dies",
    author: "Andy Dufresne",
    source: "The Shawshank Redemption",
    sourceType: "movie" as const,
};

const demoFavourites = [
    {
        id: "1",
        title: "Inception",
        time: "2h 28m",
        href: "/",
        type: "movie" as const,
    },
    {
        id: "2",
        title: "Atomic Habits",
        time: "320 pages",
        href: "/",
        type: "book" as const,
    },
    {
        id: "3",
        title: "Breaking Bad",
        time: "5 seasons",
        href: "/",
        type: "series" as const,
    },
    {
        id: "4",
        title: "Breaking Bad",
        time: "5 seasons",
        href: "/",
        type: "series" as const,
    },
    {
        id: "5",
        title: "Breaking Bad",
        time: "5 seasons",
        href: "/",
        type: "series" as const,
    },
];

import {
    FavouriteThings,
    FavouriteThingsSkeleton,
} from "@/components/dashboard_components/favThings";
import { LilDashboard } from "@/components/dashboard_components/lildahsboard";
import { VisionBoard } from "@/components/dashboard_components/visionboard";
import { Card } from "@/components/ui/card";

import { DailyQuote, DailyQuoteSkeleton } from "@/components/ui/daily-quote";

import { Suspense } from "react";

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
                    <Card className='w-full max-h-49.5 h-full space-y-4'>
                        <section>
                            <h1 className='font-semibold text-blue-700'>
                                your health board
                            </h1>
                            <p className='text-xs font-semibold text-primary'>
                                track and plan your health & get better every
                                day
                            </p>
                        </section>
                        <section className='flex gap-5 flex-row justify-between'>
                            <Card className='w-full bg-purplecolor'>
                                <div>
                                    <h1 className='text-xs underline font-semibold'>
                                        your poop calandar
                                    </h1>
                                    
                                </div>
                            </Card>
                            <Card className='w-full bg-secondary'>
                                <div>
                                    <h1 className='text-xs underline font-semibold'>
                                        gym progress
                                    </h1>

                                </div>
                            </Card>
                        </section>
                    </Card>
                </div>
            </div>
        </div>
    );
}

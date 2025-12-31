import { Suspense } from "react"
import { DailyTodos, DailyTodosSkeleton } from "./dailytodos"
import { Button } from "../ui/button"
import Link from "next/link"
import { Card } from "../ui/card"
import { CollectionCard } from "../ui/collectioncard"

// Demo data - will come from API
const initialTodos = [
    { id: "1", label: "Paris trip", done: true },
    { id: "2", label: "Start a blog", done: true },
    { id: "3", label: "Learn Next.js", done: false },
];

export const LilDashboard = () => {
    return (
        <Card className=' h-fit w-full rounded-3xl px-4 py-4 space-y-3 '>
            <h1 className='font-semibold text-secondary'>
                your 2026 is gonna be crazy
                {/* we have to make it editable */}
            </h1>
            <div className='flex md:flex-row flex-col ml-5 gap-4 xl:gap-30 md:gap-10'>
                <div className='flex flex-row gap-5 '>
                    <CollectionCard
                        label='movies'
                        href={"/"}
                        color='purple'
                    />
                    <CollectionCard
                        className='hidden md:block'
                        label='movies'
                        href={"/"}
                        color='blue'
                    />
                </div>

                {/* have to fix the skeletons  */}
                <Suspense fallback={<DailyTodosSkeleton />}>
                    <DailyTodos initialTodos={initialTodos} />
                </Suspense>
            </div>

            <div className='flex justify-end'>
                <Button
                    asChild
                    variant={"secondary"}
                    className='px-5'>
                    <Link href={"/collections"}>
                        View Collections
                    </Link>
                </Button>
            </div>
        </Card>
    )
}
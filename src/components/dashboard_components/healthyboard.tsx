import Link from "next/link"
import { Card } from "../ui/card"

export const HealthyBoard = () => {
    return (
        <Card className='w-full md:max-h-49.5 h-full space-y-4'>
            <section>
                <h1 className='font-semibold text-blue-700'>
                    your health board
                </h1>
                <p className='text-xs font-semibold text-primary'>
                    track and plan your health & get better every
                    day
                </p>
            </section>
            <section className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {healthyList.map((hlist, key) => (
                    <Link
                        href={hlist.src}
                        key={key}
                        className={`text-xs underline font-semibold rounded-2xl py-2 px-5 ${hlist.bgColor} ${hlist.textColor}`}>
                        {hlist.title}
                    </Link>
                ))}
            </section>
        </Card>
    )
}


const healthyList: { title: string; src: string; bgColor: string; textColor: string }[] = [
    {
        title: "poop calandar",
        src: "/poopcalandar",
        bgColor: "bg-purplecolor",
        textColor: "text-purple-900",
    },
    {
        title: "gym calandar",
        src: "/gymcalandar",
        bgColor: "bg-bluecolor",
        textColor: "text-blue-900",
    },
    {
        title: "how was my day",
        src: "/houwasyourday",
        bgColor: "bg-greencolor",
        textColor: "text-green-900",
    },
];
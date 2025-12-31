import Image from "next/image"
import ImageCard from "../ui/imagecard"
import { Button } from "../ui/button"
import Link from "next/link"
import { Card } from "../ui/card"

export const VisionBoard = () =>{
    return (
        <Card className=' flex-2 bg-greencolor flex flex-col max-h-82 h-82 justify-between px-5 pt-5 gap-4 rounded-3xl'>
            <section>
                <h1 className='font-semibold '>
                    inspiration vision board
                </h1>
                <p className='text-xs text-primary'>
                    save your ideas and images for your dream future
                </p>
            </section>
            <div className='flex flex-row relative'>
                <ImageCard
                    className=''
                    image='/women.jpg'
                    title='goal one'
                />
                <ImageCard
                    className='mt-5 hidden md:block'
                    image='/women.jpg'
                    title='goal one'
                />
                <ImageCard
                    className='rotate-5 -ml-2 lg:hidden xl:block block'
                    image='/women.jpg'
                    title='goal one'
                />
                <ImageCard
                    className='rotate-12 -ml-3 mt-6 hidden xl:block'
                    image='/women.jpg'
                    title='goal one'
                />
                <ImageCard
                    className='-ml-4 mt-4 z-4'
                    image='/women.jpg'
                    title='goal one'
                />
                <Image
                    src={"/2026_fonts.png"}
                    draggable="false"
                    className='md:rotate-320 right-10 lg:scale-125 md:scale-100 md:-right-5 lg:right-2 -scale-50 md:top-10 -bottom-12 -rotate-180 absolute'
                    width={200}
                    height={200}
                    alt='2026'
                />
            </div>
            <div className='flex justify-end'>
                <Button asChild variant={"tertiary"}>
                    <Link href={"/"}>vision board</Link>
                </Button>
            </div>
        </Card>
    )
}
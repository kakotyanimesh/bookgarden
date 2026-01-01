import { Button } from "@/components/ui/button";
import { FloatingDiv } from "@/components/ui/floatingdiv";
import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <div className='flex flex-col justify-center text-center items-center min-h-screen space-y-3'>
                <h1 className='lg:text-6xl md:text-4xl text-2xl'>
                    <span className='text-secondary font-semibold'>oops!</span>{" "}
                    page not found
                </h1>
                <p className='text-dark-light'>
                    the page you&apos;re looking for doesn&apos;t exist
                </p>
                <Button
                    asChild
                    variant={"transparent"}
                    className='bg-secondary px-10 hover:shadow-[-5px_5px_0px_0px_var(--color-bluecolor)]'>
                    <Link href={"/"}>go back home</Link>
                </Button>
                <FloatingDiv
                    title='lost in the clouds'
                    className='fixed right-1/2 -translate-x-45 top-42'
                />
                <FloatingDiv
                    title='404'
                    variant={"primary"}
                    animate={{ x: [-6, 0, -6] }}
                    size={"lg"}
                    className='fixed right-32 top-56'
                />
                <FloatingDiv
                    title='page missing'
                    animate={{ x: [6, 0, 6] }}
                    variant={"secondary"}
                    className='fixed bottom-40 left-56'
                />
            </div>
        </div>
    );
}

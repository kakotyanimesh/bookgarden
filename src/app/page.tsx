import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { FloatingDiv } from "@/components/ui/floatingdiv";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center text-center items-center min-h-screen space-y-3'>
        <h1 className='lg:text-6xl md:text-4xl text-2xl font-taylerSwift'>
          a{" "}
          <span className='text-secondary font-semibold'>softer</span>{" "}
          way to notice your{" "}
          <span className='text-secondary font-semibold'>life</span>
        </h1>
        <Button
          asChild
          variant={"transparent"}
          className='bg-secondary px-10 hover:shadow-[-5px_5px_0px_0px_rgba(109,40,217)] hover:border-[rgba(109,40,217)] ring-0 transition-all ease-linear duration-200'>
          <Link href={"/signup"}>get started</Link>
        </Button>
        <FloatingDiv
          title='your gentle corner'
          className='fixed md:left-10 lg:left-auto lg:right-1/2 lg:-translate-x-45 top-38 left-4'
        /> 
        <FloatingDiv
          title='notice patterns'
          variant={"primary"}
          animate={{ x: [-6, 0, -6] }}
          // size={"lg"}
          className='fixed lg:right-32 md:right-10 right-4 lg:top-56 top-50'
        />
        <FloatingDiv
          title='vision board'
          animate={{ x: [6, 0, 6] }}
          variant={"secondary"}
          className='fixed bottom-40 lg:left-56 left-10'
        />
        <FloatingDiv
          animate={{ y: [6, 0, 6] }}
          title='feeling calm'
          variant={"success"}
          className='fixed md:bottom-40 bottom-30 lg:right-auto lg:left-1/2 right-3 lg:translate-x-56'
        />
      </div>
    </div>
  );
}

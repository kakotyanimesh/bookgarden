"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import React from "react";

export const AuthComponent = ({ type }: { type: "signup" | "signin" }) => {
    const isSignup = type === "signup";
    const router = useRouter()
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push("/dashboard")
    }
    return ( 
        <div className='flex flex-col justify-center items-center mt-32 space-y-4'>
            
            <h1 className='text-2xl text-primary font-taylerSwift mb-6'>
                {isSignup ? "Design your year, Visually ⭐" : "Return to your intentions"}
            </h1>
            <form
                onSubmit={handleSubmit}
                className='bg-dark/10 py-3 w-66 space-y-5 px-5 backdrop-blur-3xl lg:w-99'>
                <div>
                    <label>Email</label>
                    <Input placeholder='demouser@email.com' />
                </div>
                <div>
                    <label>Password</label>
                    <Input placeholder='your password here' />
                </div>
                <Button className='w-full'>
                    {isSignup ? "signup" : "signin"}
                </Button>
                <div className='flex flex-row items-center'>
                    <div className='flex-1 bg-cream-dark h-0.5' />
                    <span className='text-foreground mx-2 text-xs'>
                        Or
                    </span>
                    <div className='flex-1 bg-cream-dark h-0.5' />
                </div>
                <h1 className='text-xs text-center text-foreground'>
                    {!isSignup
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <Link
                        href={isSignup ? "signup" : "signin"}
                        className='hover:underline underline-offset-2 text-beige'>
                        {isSignup ? "Sign up" : "Log in"}{" "}
                    </Link>
                </h1>
            </form>
            
        </div>
    );
};

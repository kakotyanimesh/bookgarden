"use client";

import { ReactNode } from "react";
import { Logo } from "./ui/Logo";
import { HomeIcon } from "./ui/icons/home";
import Link from "next/link";
import { CollectionIcon } from "./ui/icons/collections";
import { AddIcon } from "./ui/icons/add";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { Button } from "./ui/button";

export const Sidebar = () => {
    const pathname = usePathname();
    const activeIndex = SideBarItems.findIndex((item) => item.src === pathname);

    return (
        <div className='flex fixed z-99 flex-col md:gap-10 gap-4 md:ml-4 ml-3 text-center'>
            {/* have to fix the vouble here on mobile scrolling */}
            <div className=''>
                <Logo />
            </div>
            <Button asChild variant={"secondary"} className="fixed md:top-5 md:right-10 px-5 md:bottom-auto bottom-3 right-4 z-99">
                <Link href={"/"} >
                    Upgrade
                </Link>
            </Button>
            
            <div className="flex flex-col items-center gap-4 bg-cream py-3 px-2 rounded-full relative">
                {/* Sliding indicator */}
                {activeIndex !== -1 && (
                    <motion.div
                        initial={false}
                        animate={{
                            y: activeIndex * 53, // 40px (p-3 + icon) + 16px gap
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className={cn("absolute w-10 h-13.5 bg-dark rounded-full z-0", pathname === "/Addons" ? "top-2.5" : "top-2")}
                    />
                )}
                {SideBarItems.map((items, key) => {
                    const isActive = pathname === items.src;
                    return (
                        <Link
                            href={items.src}
                            key={key}
                            className={`relative z-10 p-2 rounded-full ${isActive ? "text-yellow-400" : "text-dark"}`}
                        >
                            {items.icon}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

const SideBarItems: { icon: ReactNode; src: string }[] = [
    {
        icon: <HomeIcon />,
        src: "/dashboard",
    },
    {
        icon: <CollectionIcon />,
        src: "/collections",
    },
    {
        icon: <AddIcon />,
        src: "/Addons",
    }
];

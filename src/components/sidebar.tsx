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
import Image from "next/image";
import { toast } from "sonner";
import { VisionBoard } from "./dashboard_components/visionboard";
import { HeartIcon } from "./ui/icons/heart";
import { VisionIcon } from "./ui/icons/vision";

export const Sidebar = () => {
    const pathname = usePathname();
    const activeIndex = SideBarItems.findIndex((item) => item.src === pathname);

    return (
        <div className='flex fixed z-99 flex-col md:gap-10 gap-4 md:ml-4 ml-3 text-center'>
            {/* have to fix the vouble here on mobile scrolling */}
            <div className=''>
                <Logo />
            </div>
            <Button
                onClick={() =>
                    toast.info("This feature is not available yet", {
                        description: "You don't have to upgrade for now , for more feature contact the developer",
                    })
                }
                variant={"secondary"}
                className='fixed md:top-5 md:right-10 px-5 md:bottom-auto bottom-3 right-4 z-99'>
                Upgrade
            </Button>

            <div className='flex flex-col items-center gap-4 bg-cream py-3 px-2 rounded-full relative'>
                {/* Sliding indicator */}
                {activeIndex !== -1 && (
                    <motion.div
                        initial={false}
                        animate={{
                            y: activeIndex * 56, // 40px (icon + padding) + 16px (gap-4)
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="absolute w-10 h-10 bg-dark rounded-full z-0 top-3"
                    />
                )}
                {SideBarItems.map((items, key) => {
                    const isActive = pathname === items.src;
                    return (
                        <Link
                            href={items.src}
                            key={key}
                            className={cn(
                                "relative z-10 p-2 rounded-full transition-colors",
                                isActive ? "text-yellow-400" : "text-dark"
                            )}>
                            {items.icon}
                        </Link>
                    );
                })}
            </div>
            <div className='fixed space-y-2  bottom-10'>
                <Link
                    href={"/profile"}
                    className={cn(
                        "flex flex-col items-center gap-4 py-3 px-2 rounded-full transition-all ease-out",
                        pathname === "/profile" ? "bg-dark" : "bg-cream"
                    )}>
                    <Image
                        src={"/women.jpg"}
                        className='size-10 rounded-full'
                        width={200}
                        height={200}
                        alt='profile pic'
                    />
                </Link>
                <h1 className='font-semibold text-xs '>Animesh</h1>
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
        icon: <VisionIcon />,
        src: "/visionboard"
    },
    {
        icon: <HeartIcon />,
        src: "/favourite-items"
    }
];

import Link from "next/link";
import { Card } from "./ui/card";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/button";

export const Navbar = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Card className='bg-bluecolor/70 border-2 backdrop-blur-3xl border-bluecolor rounded-3xl md:w-[50vw] w-[80vw] mt-28 items-center fixed flex flex-row justify-between '>
                <Logo />
                <Button asChild variant={"tertiary"}>
                    <Link href={"/"}>Join Pinnly</Link>
                </Button>
            </Card>
        </div>
    );
};

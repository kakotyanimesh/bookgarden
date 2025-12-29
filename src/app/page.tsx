import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-dotted text-2xl">Your Saved Board for 2026</h1>
      <Card>
        <h1>Its a fucking card component</h1>
      </Card>
      <Button asChild>
        <Link href={"/signup"}>Get started</Link>
      </Button>
    </div>
  ); 
}

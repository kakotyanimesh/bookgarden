import { Sidebar } from "@/components/sidebar"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="md:ml-6 mt-5 font-quickSand">
            <Sidebar/>
            <div className="ml-20 md:ml-32">
                {children}
            </div>
        </div>
    )
}
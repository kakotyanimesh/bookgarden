import { Sidebar } from "@/components/sidebar"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="md:ml-3 mt-5  mb-2 font-quickSand">
            <Sidebar/>
            <div className="ml-20 md:ml-27 mr-5">
                {children}
            </div>
        </div>
    )
}
import { CollectionCard } from "@/components/ui/collectioncard";
import { HomeIcon } from "@/components/ui/icons/home";
import { Input } from "@/components/ui/input";

export default function CollectionPage() {
    return (
        <div className=''>
            <div>
                <h1 className='font-semibold text-xl'>Collections</h1>
                <p className='text-xs font-semibold text-black/60'>
                    Organise your links into visual folder
                </p>
            </div>
            <div className='space-y-10'>
                {/* <div className="bg-red-400 relative">
                    <SearchIcon className="absolute top-7 left-3 "/> */}
                <Input placeholder='Search Collections' className='mt-4 md:w-82 w-auto' />
                {/* </div> */}
                <div className='grid md:grid-cols-6 grid-cols-2 md:gap-4 gap-2 w-full'>
                    <CollectionCard href='/' label='movies' color='pink' />
                    <CollectionCard href='/' label='Books' color='purple' />
                    <CollectionCard href='/' label='Reels' color='blue' />
                    <CollectionCard href='/' label='Trips' color='green' />
                    <CollectionCard href='/' label='movies' color='pink' />
                    <CollectionCard href='/' label='Books' color='purple' />
                    <CollectionCard href='/' label='Reels' color='blue' />
                    <CollectionCard href='/' label='Trips' color='green' />
                </div>
            </div>
        </div>
    );
}

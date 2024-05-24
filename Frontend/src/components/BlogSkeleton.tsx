
export const BlogsSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}

export const BlogSkeleton = () => {
    return <div className="pb-7">
        <div role="status" className="space-y-2.5 animate-pulse w-screen max-w-screen-lg px-6">
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-8/12"></div>
            </div>
            <div className="flex items-center w-full max-w-[900px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[200px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-200 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-200 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[400px]">
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-200 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[1000px]">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-200 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[600px]">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-200 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-200 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>

    </div>
}
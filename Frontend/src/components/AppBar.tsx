import { Link } from "react-router-dom"

export const AppBar = () => {
    return <div className="border-b flex justify-between  sm:px-12 px-3 py-4">
        <Link to={"/blogs"} className="text-2xl tracking-wide font-serif font-semibold flex flex-col justify-center cursor-pointer" >
            Medium
        </Link>
        <div className="flex justify-center flex-row">
            <div className="mt-1">
                <Link to={"/publish"}>
                    <button type="button" className="mr-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2">Create Blog</button>
                </Link>
            </div>
            <div className="mt-0.5">
                <div className="rounded-full cursor-pointer h-10 w-10 flex items-center justify-center bg-[#475A64]" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round w-4 h-4"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg></div>
            </div>
        </div>
    </div>
}
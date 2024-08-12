import { Link, useNavigate } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export const AppBar = () => {
    return <div className="fixed w-full z-50 shadow-sm backdrop-blur-md">
        <div className="border-b flex justify-between sm:px-12 px-3 py-2">
            <Link to={"/blogs"} className="text-2xl md:text-3xl tracking-wide font-BioRhyme font-extrabold flex flex-col justify-center cursor-pointer" >
                Medium
            </Link>
            <div className="flex justify-center flex-row mr-2">
                <div className="flex justify-center flex-col">
                    <Link to={"/publish"}>
                        <button type="button" className="inline-block px-4 py-2 mr-3 font-semibold text-center text-white align-middle transition-all rounded-3xl cursor-pointer bg-green-600 text-sm ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:shadow-lg ">Create Blog</button>
                    </Link>
                </div>
                <AvtarIconMenu />
            </div>
        </div>
    </div>
}

export default function AvtarIconMenu() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton>
                    <div>
                        <div className="rounded-full cursor-pointer h-9 w-9 flex items-center justify-center bg-[#475A64]" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round w-4 h-4"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg></div>
                    </div>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute font-normal right-0 z-10 mt-2 w-52 origin-top-right rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="py-1">
                    <a
                        className="block px-4 pt-1 text-sm mx-1">
                        <div>
                            Signed in as-
                        </div>
                        <div className="font-medium">
                            tom@example.com
                        </div>
                    </a>
                    <hr className="my-1 mx-3"></hr>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm data-[focus]:bg-blue-50 data-[focus]:rounded-md mx-1">
                            Account settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm data-[focus]:bg-blue-50 data-[focus]:rounded-md mx-1">
                            Support
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm data-[focus]:bg-blue-50 data-[focus]:rounded-md mx-1">
                            License
                        </a>
                    </MenuItem>
                    <hr className="my-1 mx-3"></hr>
                    <form action="#" method="POST">
                        <MenuItem>
                            <button
                                type="button"
                                className="block w-[200px] px-4 py-2 text-left text-sm data-[focus]:bg-red-100 data-[focus]:rounded-md mx-1" onClick={handleLogout}>
                                Logout
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </Menu >
    )
}
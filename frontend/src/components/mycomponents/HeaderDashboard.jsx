import { Laptop } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar'
import ProfileButton from './ProfileButton'

const HeaderDashboard = () => {
    const username = localStorage.getItem("username");
    return (
        <header className="max-w-7xl border-b border-gray-800 px-4 py-3 flex justify-between items-center m-auto sticky top-0 bg-[#121212] cursor-pointer z-10">
            <Link to={"/"} className="flex items-center gap-2">
                <div className="bg-purple-600 rounded-full p-1.5">
                    <Laptop className="h-5 w-5" />
                </div>
                <span className="text-xl font-semibold">IntervuAI</span>
            </Link>
            <ProfileButton username={username}/>
        </header>
    )
}

export default HeaderDashboard

import { Laptop } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderDashboard = () => {
    const username = localStorage.getItem("username");
    return (
        <header className="max-w-7xl border-b border-gray-800 px-4 py-3 flex justify-between items-center m-auto sticky top-0 bg-[#121212]">
            <Link to={"/"} className="flex items-center gap-2">
                <div className="bg-purple-600 rounded-full p-1.5">
                    <Laptop className="h-5 w-5" />
                </div>
                <span className="text-xl font-semibold">IntervuAI</span>
            </Link>
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full p-2">
                <h2 className="text-xl font-bold">{username.charAt(0).toUpperCase()}</h2>
            </div>
        </header>
    )
}

export default HeaderDashboard

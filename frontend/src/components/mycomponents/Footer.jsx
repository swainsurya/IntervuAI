import { Laptop } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-12 cursor-pointer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="bg-purple-600 rounded-full p-1.5">
                            <Laptop className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-xl">IntervuAI</span>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-white transition font-bold">
                            Terms
                        </Link>
                        <Link to="/about" className="text-gray-400 hover:text-white transition font-bold">
                            About
                        </Link>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} IntervuAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

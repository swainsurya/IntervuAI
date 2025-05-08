import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function InterviewCard({ interview, type }) {
    return (
        <div className="bg-[#1E1E2D] rounded-lg overflow-hidden border border-gray-800">
            <div className="p-4">
                {/* head of card */}
                <div className="flex items-center justify-between mb-4">
                    <div className='flex flex-row items-center gap-2'>
                        <div className="w-10 h-10 rounded-full bg-[#2A2A3A] flex items-center justify-center">
                            <img src={interview.icon} className="h-7 w-7 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="font-medium">{interview.title}</h3>
                        </div>
                    </div>
                    <Badge
                        variant="outline"
                        className={`${interview.technical ? "bg-blue-900/20 text-blue-400 border-blue-800" : "bg-green-900/20 text-green-400 border-green-800"}`}
                    >
                        {interview.technical ? "Technical" : "Non-Technical"}
                    </Badge>
                </div>
                {/* date and review */}
                {type == "own" && (
                    <div className='flex items-center gap-3 mb-4'>
                        {/* time */}
                        <div className='flex items-center gap-1 font-semibold'>
                            <img src="/calendar.svg" alt="calendar" />
                            <div>May 12, 2025</div>
                        </div>
                        {/* stars */}
                        <div className='flex items-center gap-1 font-semibold'>
                            <img src="/star.svg" alt="calendar" />
                            <div>50 / 100</div>
                        </div>
                    </div>
                )}
                {/* desc of card */}
                <p className="text-sm text-gray-400 mb-3 h-20 overflow-hidden">{interview.description}</p>
                {/* footer of card */}
                <div className="flex justify-between items-center">
                    <div className='flex items-center gap-1'>
                        <img src="/react.svg" alt="" className='bg-blue-900/20 p-2 rounded-full h-8 w-8' />
                        <img src="/tailwind.svg" alt="" className='bg-blue-900/20 p-2 h-8 w-8 rounded-full' />
                    </div>
                    <Button variant="outline" size="sm" className="text-xs bg-blue-900/20">
                        {type == "own" ? "View Interview" : "Take Interview"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

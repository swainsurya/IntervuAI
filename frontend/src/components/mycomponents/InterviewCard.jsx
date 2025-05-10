import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { randomIcons } from '@/lib/randomIcons';
import { Link } from 'react-router-dom';

const InterviewCard = ({ interview, type }) => {
    const icon = randomIcons();
    return (
        <div className="bg-[#1E1E2D] rounded-2xl border border-gray-800 shadow-md p-5 space-y-5 hover:shadow-lg transition-all duration-200">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2A2A3A] flex items-center justify-center">
                        <img src={icon} alt="icon" className="h-7 w-7" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className="text-lg font-semibold text-white">{interview.role || "Unknown Role"}</span>
                    </div>
                </div>

                <Badge
                    variant="outline"
                    className={`text-xs px-3 py-1 rounded-full ${interview.technical
                            ? "bg-blue-900/20 text-blue-400 border-blue-800"
                            : "bg-green-900/20 text-green-400 border-green-800"
                        }`}
                >
                    {interview.type || "General"}
                </Badge>
            </div>

            {/* Time & Score */}
            {type === "own" && (
                <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <img src="/calendar.svg" alt="Calendar" className="h-4 w-4" />
                        <span>May 12, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/star.svg" alt="Rating" className="h-4 w-4" />
                        <span>50 / 100</span>
                    </div>
                </div>
            )}

            {/* Techstacks */}
            <div className="text-sm text-gray-400 line-clamp-3">
                {interview?.questions[0] || "No tech stack information provided."}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <img src="/react.svg" alt="React" className="h-8 w-8 p-1.5 bg-blue-900/20 rounded-full" />
                    <img src="/tailwind.svg" alt="Tailwind" className="h-8 w-8 p-1.5 bg-blue-900/20 rounded-full" />
                </div>
                <Link to={type!="own"? `/take-interview/${interview._id}`: ``}>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs bg-blue-900/20 text-blue-400 border-blue-800 hover:bg-blue-800/30"
                    >
                        {type === "own" ? "View Interview" : "Take Interview"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default InterviewCard;

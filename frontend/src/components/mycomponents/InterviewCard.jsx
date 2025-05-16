import React, { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { randomIcons } from '@/lib/randomIcons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';

const InterviewCard = ({ interview, type }) => {
    const icon = randomIcons();
    const handleDelInterview = async() => {
        if(confirm("Are you sure? ")) {
            window.location.reload();
            const response = await axios.post("https://intervuai-3id4.onrender.com/ai/del-id",{interviewId: interview._id})
            const data = response.data;
        }
    }
    return (
        <div className="bg-gradient-to-br from-[#1E1E2D] to-[#131321] rounded-3xl border border-[#2A2A3A] shadow-xl p-6 space-y-6 hover:shadow-2xl transition-all duration-300 group">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#2F2F40] flex items-center justify-center shadow-inner">
                        <img src={icon} alt="icon" className="h-7 w-7" />
                    </div>
                    <div className='flex flex-col'>
                        <span className="text-lg font-semibold text-white tracking-wide">
                            {interview.role || "Unknown Role"}
                        </span>
                        {type === "own" && (
                            <span className="text-xs text-gray-400">
                                My Interview
                            </span>
                        )}
                    </div>
                </div>

                {type !== "own" && (
                    <Badge
                        variant="outline"
                        className={`text-xs px-3 py-1 rounded-full border ${interview.technical
                            ? "bg-blue-900/20 text-blue-400 border-blue-700"
                            : "bg-green-900/20 text-green-400 border-green-700"
                            }`}
                    >
                        {interview.type || "General"}
                    </Badge>
                )}
            </div>

            {/* Time & Score */}
            {type === "own" && (
                <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <img src="/calendar.svg" alt="Calendar" className="h-4 w-4" />
                        <span>
                            {interview?.createdDate
                                ? dayjs(interview?.createdDate).format("MMM D, YYYY h:mm A")
                                : "N/A"}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/star.svg" alt="Rating" className="h-4 w-4" />
                        <span> {interview.totalScore} / 100</span>
                    </div>
                </div>
            )}

            {/* Techstacks / Description */}
            <div className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                {type !== "own"
                    ? interview?.questions[0] || "No tech stack information provided."
                    : interview.desc}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <img src="/react.svg" alt="React" className="h-8 w-8 p-2 bg-[#243c5a] rounded-full shadow-sm" />
                    <img src="/tailwind.svg" alt="Tailwind" className="h-8 w-8 p-2 bg-[#1f334d] rounded-full shadow-sm" />
                </div>


                {(type === "self" || type == "admin")  && (
                    <Button
                        size="sm"
                        className="text-xs bg-red-900/20 text-red-400 border border-red-700 hover:bg-red-800/30 transition-colors rounded-full px-4 py-1 shadow-sm"
                        onClick={handleDelInterview}
                    >
                        🗑️ Delete
                    </Button>

                )}

                <Link to={type !== "own" ? `/take-interview/${interview._id}` : `/interview/feedback/${interview._id}`}>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-xs bg-blue-900/20 text-blue-400 border-blue-700 hover:bg-blue-800/30 transition-colors"
                    >
                        {type === "own" ? "View Feedback" : "Take Interview"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default InterviewCard;

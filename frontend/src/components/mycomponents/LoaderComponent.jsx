import axios from 'axios';
import { Laptop, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners';

const LoaderComponent = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const userid = localStorage.getItem("userid");
    const [allInterviews, setAllInterviews] = useState([]);

    const getAllInterviews = async () => {
        setLoader(true);
        try {
            const response = await axios.post("https://intervuai-3id4.onrender.com/ai/others", {});
            const interviews = response.data.interviews;
            setAllInterviews(interviews);
        } catch (error) {
            setAllInterviews([]);
        }
        finally {
            setTimeout(() => {
                setLoader(false);
            }, 2000);
        }
    }

    useEffect(() => { getAllInterviews() }, [userid])
    if (loader) {
        return (
            <div className='w-screen h-screen flex flex-col justify-center items-center gap-4 relative'>
                <div className="flex items-center gap-2 animate-pulse">
                    <div className="bg-purple-600 rounded-full p-1.5">
                        <Laptop className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-semibold">IntervuAI</span>
                </div>
                <span className='opacity-40'>Practice with AI</span>
            </div>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default LoaderComponent

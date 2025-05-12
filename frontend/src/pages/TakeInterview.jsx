import AgentComponent from '@/components/mycomponents/AgentComponent';
import { randomIcons } from '@/lib/randomIcons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TakeInterview = () => {
    const { id } = useParams();
    const [interview, setInterview] = useState(null);

    const username = localStorage.getItem("username");
    const userid = localStorage.getItem("userid");

    const getInterview = async() => {
        try {
            const response = await axios.post(`https://intervuai-3id4.onrender.com/ai/interview/${id}`);
            const data = response.data.interview ;
            setInterview(data);
        } catch (error) {
            setInterview(null);
        }
    }

    useEffect(()=>{
        getInterview();
    },[id])

    return (
        <>
            <div className='max-w-7xl mx-auto flex-col gap-4 p-4 md:flex-row'>
                {/* header div */}
                <div className='flex items-center w-full justify-between mb-9'>
                    <div className='flex items-center gap-4'>
                        <img 
                            src={randomIcons()} 
                            alt="i-icon"
                            className='md:w-18 md:h-18 w-10 h-10 bg-dark-300 rounded-full p-2'
                        />
                        <div className='md:text-3xl capitalize font-bold'>{interview?.role}</div>
                    </div>

                    <div className='md:text-xl bg-dark-200 rounded-lg p-2 capitalize font-semibold'>{interview?.type}</div>
                </div>

                {/* Agent */}
                <AgentComponent
                    username={username}
                    userid={userid}
                    interviewId={id}
                    type={"interview"}
                    questions={interview?.questions}
                    interview={interview}
                />
            </div>
        </>
    )
}

export default TakeInterview

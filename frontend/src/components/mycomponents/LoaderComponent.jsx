import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners';

const LoaderComponent = ({children}) => {
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

    useEffect(()=>{getAllInterviews()},[userid])
    if(loader) {
        return (
            <div className='w-screen h-screen flex items-center justify-center'>
                <PuffLoader color='white' size={50} />
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

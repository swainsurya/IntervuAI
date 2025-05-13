import CardSkeleton from '@/components/mycomponents/CardSkeleton'
import InterviewCard from '@/components/mycomponents/InterviewCard'
import React, { useEffect, useState } from 'react'

const CreatedInterviewPage = () => {
    const [allInterviews, setAllInterviews] = useState([]);
    const userid = localStorage.getItem("userid");
    const [loading, setLoading] = useState(true);
    const getAllInterviews = async () => {
        setLoading(true);
        try {
            const response = await axios.post("https://intervuai-3id4.onrender.com/ai/my-interviews", { userid });
            const data = await response ;
            setAllInterviews(response.data.interviews || []);
            console.log(response)
            console.log(data)
        } catch (error) {
            setAllInterviews([]);
        } finally {
            setTimeout(() => setLoading(false), 2000);
        }
    };

    useEffect(() => {
        getAllInterviews();
    }, [userid])
    return (
        <main className="container mx-auto px-4 py-10 max-w-7xl no_Scrollbar">
            <section className="mb-24">
                <h2 className="text-2xl font-bold text-white mb-6">🌍 Your Created Interviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
                        : allInterviews.map((interview) => (
                            <InterviewCard key={interview._id} interview={interview} type="other" />
                        ))}
                </div>
            </section>
        </main>
    )
}

export default CreatedInterviewPage

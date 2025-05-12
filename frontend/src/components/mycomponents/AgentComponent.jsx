import React, { useEffect, useState } from 'react'
import "@/index.css"
import { vapi } from '@/lib/vapi.sdk'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { interviewer } from '@/constants'
import axios from 'axios'
import toast from 'react-hot-toast'

const AgentComponent = ({ username, userid, type, interviewId, questions, interview }) => {

    const listStatus = {
        INACTIVE: "INACTIVE",
        ACTIVE: "ACTIVE",
        CONNECTING: "CONNECTING",
        FINISHED: "FINISHED"
    }

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [CallStatus, setCallStatus] = useState(listStatus.INACTIVE);
    const [messages, setMessages] = useState([]);

    const navigate = useNavigate();

    const addToPastInterview = async () => {
        const response = await axios.post("https://intervuai-3id4.onrender.com/ai/past-interview", {
            userid, interviewId, role: interview?.role, description: questions[0]
        });
        toast.success("Interview Completed");
    }


    useEffect(() => {
        const onCallStart = () => setCallStatus(listStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(listStatus.FINISHED);
        const onMessage = (message) => {
            if (message.type == "transcript" && message.transcriptType == "final") {
                const newMsg = { role: message.role, content: message.transcript }

                setMessages((prev) => [...prev, newMsg])
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error) => console.log('Error', error);

        // vapi listner

        vapi.on("call-start", onCallStart);
        vapi.on("call-end", onCallEnd);
        vapi.on("message", onMessage);
        vapi.on("speech-start", onSpeechStart);
        vapi.on("speech-end", onSpeechEnd);
        vapi.on("error", onError);

        return () => {
            vapi.off("call-start", onCallStart);
            vapi.off("call-end", onCallEnd);
            vapi.off("message", onMessage);
            vapi.off("speech-start", onSpeechStart);
            vapi.off("speech-end", onSpeechEnd);
            vapi.off("error", onError);
        }

    }, [])

    useEffect(() => {
        if (CallStatus == listStatus.FINISHED) {
            if (type == "generate") {
                navigate("/");
            }
            else {
                handleGenerateFeedback(messages)
            }
        }
    }, [messages, CallStatus, type, userid])

    const handleCall = async () => {
        setCallStatus(listStatus.CONNECTING);

        try {
            if (type == "generate") {
                const res = await vapi.start("b0ce4ebb-ac21-4b74-8add-f9d9c00754b9", {
                    variableValues: {
                        username: username,
                        userid: userid
                    }
                })
            }
            else {
                let formattedQuestions = '';
                if (questions) {
                    formattedQuestions = questions.map((question) => `-${question}`).join('\n')
                    addToPastInterview();
                }

                await vapi.start(interviewer, {
                    variableValues: {
                        questions: formattedQuestions
                    }
                })
            }
        } catch (error) {
            toast.error("Error in connecting try again");
            return;
        }
    }

    const handleDisconnectCall = async () => {
        setCallStatus(listStatus.FINISHED);
        vapi.stop();
    }

    const handleGenerateFeedback = async (messages) => {
        const response = await axios.post("https://intervuai-3id4.onrender.com/feedback/create", {
            userid, interviewId, messages,role: interview.role, desc: questions[0]
        })

        const result = response.data;
        console.log("result :", result)
        if (result.success && result.feedbackId) {
            navigate(`/interview/feedback/${result.feedbackId}`, { state: { interviewRole: interview?.role } })
        }
        else {
            console.log("Error saving feedback");
            navigate("/");
        }
    }

    const lastMessage = messages[messages.length - 1]?.content;
    const isCallStatusInactiveORFinished = CallStatus == listStatus.INACTIVE || CallStatus == listStatus.FINISHED;

    return (
        <>
            <div className='call-view'>
                {/* AI interviewer */}
                <div className='card-interviewer'>
                    <div className='avatar'>
                        <img src="/ai-avatar.png" alt="ai_interviewer" className='object-cover' />
                        {isSpeaking && <span className='animate-speak' />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                {/* User */}
                <div className='card-border'>
                    <div className='card-content'>
                        <img src="/user-avatar.png" alt="user" height={540} width={540} className='rounded-full object-cover size-[120px]' />
                        <h3>You{` ( ${username} )`}</h3>
                    </div>
                </div>
            </div>

            {/* message board */}
            {messages.length > 0 && (
                <div className='transcript-border mt-5'>
                    <div className='transcript'>
                        <p key={lastMessage} className=''>
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}

            {/* call button */}
            <div className='w-full flex justify-center'>
                {CallStatus !== 'ACTIVE' ? (
                    <button className='relative btn-call mt-8' onClick={handleCall}>
                        <span>
                            {isCallStatusInactiveORFinished ? 'Call' : <BeatLoader color="#fff" size={7} />}
                        </span>
                    </button>
                ) : (
                    <button className='btn-disconnect mt-8' onClick={handleDisconnectCall}>
                        End
                    </button>
                )}
            </div>
        </>
    )
}

export default AgentComponent

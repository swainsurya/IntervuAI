import AgentComponent from '@/components/mycomponents/AgentComponent'
import React from 'react'

const GenerateInterviewPage = () => {
    const username = localStorage.getItem("username");
    const userid = localStorage.getItem("userid");

    console.log(username, userid)
  return (
    <div className='container mx-auto px-4 py-6 max-w-7xl'>
      <h3 className='text-2xl font-bold mb-8'>Generate Interview</h3>
      <AgentComponent username={username} userid={userid} type={"generate"} />
    </div>
  )
}

export default GenerateInterviewPage

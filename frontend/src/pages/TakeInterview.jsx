import React from 'react'
import { useParams } from 'react-router-dom'

const TakeInterview = () => {
    const {id} = useParams();
  return (
    <div className='min-h-screen'>
      take interview &{id}
    </div>
  )
}

export default TakeInterview

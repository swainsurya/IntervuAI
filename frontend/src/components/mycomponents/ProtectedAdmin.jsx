import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdmin = () => {
    const userid = localStorage.getItem("userid");

    if(userid == "69d322fc1345f83d53e72c61") {
        return <Outlet/>
    }
    return <Navigate to="/" />
}

export default ProtectedAdmin

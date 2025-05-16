import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdmin = () => {
    const userid = localStorage.getItem("userid");

    if(userid == "68205b3161be9593900eda0c") {
        return <Outlet/>
    }
    return <Navigate to="/" />
}

export default ProtectedAdmin

import { Link, Navigate, Outlet } from "react-router-dom";
import React, { useState } from 'react'
import { useUser } from "@/store/UserStore";
import HeaderDashboard from "./HeaderDashboard";
import "@/index.css"

const ProtectedRoutes = () => {
  const { checkAuth } = useUser();
  
  return (
    checkAuth() ? (
      <div className="min-h-screen bg-[#121212] text-white cursor-pointer">
        <HeaderDashboard/>
        <Outlet/>
      </div>
    ) : <Navigate to={"/landing"} />
  )
}

export default ProtectedRoutes

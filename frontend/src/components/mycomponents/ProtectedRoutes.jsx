import { Link, Navigate, Outlet } from "react-router-dom";
import React, { useState } from 'react'
import { useUser } from "@/store/UserStore";
import { Laptop } from "lucide-react";
import HeaderDashboard from "./HeaderDashboard";
import Footer from "./Footer";

const ProtectedRoutes = () => {
  const { checkAuth } = useUser();
  const [isAuthenticated, setIsAuth] = useState(false)
  
  return (
    checkAuth() ? (
      <div className="min-h-screen bg-[#121212] text-white cursor-pointer">
        <HeaderDashboard/>
        <Outlet/>
        <Footer/>
      </div>
    ) : <Navigate to={"/landing"} />
  )
}

export default ProtectedRoutes

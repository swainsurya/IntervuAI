import { Navigate, Outlet } from "react-router-dom";
import React, { useState } from 'react'

const ProtectedRoutes = () => {
    const [auth, setAuth] = useState(true);
  return (
    auth? <Outlet/>: <Navigate to={"/landing"} />
  )
}

export default ProtectedRoutes

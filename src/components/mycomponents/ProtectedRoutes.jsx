import { Navigate, Outlet } from "react-router-dom";
import React, { useState } from 'react'

const ProtectedRoutes = () => {
    const [auth, setAuth] = useState(false);
  return (
    auth? <Outlet/>: <Navigate to={"/landing"} />
  )
}

export default ProtectedRoutes

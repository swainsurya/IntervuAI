import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectLanding = () => {
    const [auth, setAuth] = useState(false);
  return (
    !auth?<Outlet/>:<Navigate to={"/"} />
  )
}

export default ProtectLanding

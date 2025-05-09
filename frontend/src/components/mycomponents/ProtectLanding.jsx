import { useUser } from '@/store/UserStore';
import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectLanding = () => {
    const { checkAuth } = useUser();
  return (
    !checkAuth()?<Outlet/>:<Navigate to={"/"} />
  )
}

export default ProtectLanding

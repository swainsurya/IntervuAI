import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProtectedRoutes from './components/mycomponents/ProtectedRoutes'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectLanding from './components/mycomponents/ProtectLanding'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import { Toaster } from 'react-hot-toast'
import GenerateInterviewPage from './pages/GenerateInterviewPage'
import TakeInterview from './pages/TakeInterview'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectLanding/>}>
          <Route path='/landing' element={<LandingPage />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/generate-interview' element={<GenerateInterviewPage/>} />
          <Route path='/take-interview/:id' element={<TakeInterview />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
      <Toaster toastOptions={{position:"top-center"}}/>
    </BrowserRouter>
  )
}

export default App

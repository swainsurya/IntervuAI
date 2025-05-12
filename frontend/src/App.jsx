import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProtectedRoutes from './components/mycomponents/ProtectedRoutes'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectLanding from './components/mycomponents/ProtectLanding'
import AboutPage from './pages/AboutPage'
import { Toaster } from 'react-hot-toast'
import GenerateInterviewPage from './pages/GenerateInterviewPage'
import TakeInterview from './pages/TakeInterview'
import FeedbackPage from './pages/FeedbackPage'

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
          <Route path='/interview/feedback/:id' element={<FeedbackPage/>} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
      <Toaster toastOptions={{position:"top-center"}}/>
    </BrowserRouter>
  )
}

export default App

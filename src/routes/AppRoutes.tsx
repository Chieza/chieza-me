import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Experiences from '../pages/Experiences'
import Portfolio from '../pages/Portfolio'
import SideProjects from '../pages/SideProjects'

interface AppRoutesProps { openContact: () => void }

export default function AppRoutes({ openContact }: AppRoutesProps) {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home openContact={openContact} />} />

      {/* Other Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/side-projects" element={<SideProjects />} />
      {/* …etc… */}

      {/* catch‐all: redirect back to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

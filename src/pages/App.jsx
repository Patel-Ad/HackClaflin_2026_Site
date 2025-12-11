import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import ApplyForm from './ApplyForm.jsx'
import VolunteerForm from './VolunteerForm.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/apply/volunteers" element={<VolunteerForm />} />
    </Routes>
  )
}

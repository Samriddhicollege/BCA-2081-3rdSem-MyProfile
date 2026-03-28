import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfileGeneratorPage from './pages/ProfileGeneratorPage'
import ProfileDisplayPage from './pages/ProfileDisplayPage'
import ProfilesListPage from './pages/ProfilesListPage'
import './css/App.css'

function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile-generator" element={<ProfileGeneratorPage />} />
        <Route path="/profile-display" element={<ProfileDisplayPage />} />
        <Route path="/profiles-list" element={<ProfilesListPage />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <span className="logo-icon">📋</span>
          <span className="logo-text">MyProfile</span>
        </div>
        
        <div className="navbar-menu">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#benefits" className="navbar-link">Benefits</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
        </div>

        <div className="navbar-actions">
          <button className="navbar-btn secondary" onClick={() => navigate('/login')}>
            Sign In
          </button>
          <button className="navbar-btn primary" onClick={() => navigate('/profile-generator')}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const [showFeaturesModal, setShowFeaturesModal] = useState(false)

  const handleLogoClick = () => {
    navigate('/')
  }

  const features = [
    { title: 'Beautiful Templates', description: 'Choose from modern, professional profile card designs' },
    { title: 'Photo Upload', description: 'Add your professional photo directly to your profile card' },
    { title: 'Multiple Profiles', description: 'Create and manage multiple profile cards with ease' }
  ]

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={handleLogoClick}>
            <span className="logo-icon">📋</span>
            <span className="logo-text">MyProfile</span>
          </div>
          
          <div className="navbar-menu">
            <button 
              className="navbar-link features-btn" 
              onClick={() => setShowFeaturesModal(!showFeaturesModal)}
            >
              Features
            </button>
          </div>

          <div className="navbar-actions">
            <button className="navbar-btn secondary" onClick={() => navigate('/login')}>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Features Modal */}
      {showFeaturesModal && (
        <div className="features-modal-overlay" onClick={() => setShowFeaturesModal(false)}>
          <div className="features-modal" onClick={e => e.stopPropagation()}>
            <div className="features-modal-header">
              <h2>Features</h2>
              <button className="close-btn" onClick={() => setShowFeaturesModal(false)}>✕</button>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">✨</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

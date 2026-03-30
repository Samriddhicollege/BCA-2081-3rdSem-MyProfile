import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import '../css/HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()
  const [savedProfiles, setSavedProfiles] = useState([])

  // Load saved profiles on component mount
  useEffect(() => {
    const allProfiles = JSON.parse(localStorage.getItem('allProfiles') || '[]')
    setSavedProfiles(allProfiles.slice(0, 4)) // Show first 4 profiles
  }, [])

  const handleStartAsGuest = () => {
    navigate('/profile-generator')
  }

  const handleViewProfiles = () => {
    navigate('/profiles-list')
  }

  const handleViewProfile = (profileId) => {
    const profile = JSON.parse(localStorage.getItem('allProfiles') || '[]').find(p => p.id === profileId)
    if (profile) {
      localStorage.setItem('currentProfile', JSON.stringify(profile))
      navigate('/profile-display')
    }
  }

  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-tag">Create Professional Profiles</div>
          
          <h1 className="hero-title">
            Build Your Professional <span className="highlight">Profile Card</span> in Minutes
          </h1>
          
          <p className="hero-subtitle">
            MyProfile helps you create beautiful, modern profile cards with photos, 
            custom information, and professional styling. Manage multiple profiles and 
            showcase your professional identity effortlessly.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={handleStartAsGuest}>
              Start as Guest
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
       <div style={{padding: '0 40px', maxWidth: '1200px', margin: '0 auto'}}>
        <div className="dashboard-preview">
          <div className="dashboard-card">
            <div className="dashboard-header">
              <div className="dashboard-title">Profile Card Preview</div>
              <div className="dashboard-controls">
                <div className="dashboard-dot"></div>
                <div className="dashboard-dot"></div>
                <div className="dashboard-dot"></div>
              </div>
            </div>
            <div className="dashboard-body">
              <span>✨ Your profile card will appear here</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <div className="section-subtitle">Why MyProfile?</div>
          <h2 className="section-title">
            Everything You Need to Create Professional Profile Cards
          </h2>
        </div>
      </section>

      {/* Saved Profiles Section */}
      <section className="saved-profiles-section">
        <div className="profiles-section-container">
          <div className="profiles-section-header">
            <h2>Your Saved Profiles</h2>
            <button className="btn btn-primary" onClick={handleViewProfiles}>
              View All Profiles
            </button>
          </div>
          <div className="profiles-preview-grid">
            {savedProfiles.length === 0 ? (
              <div className="no-profiles-message">
                <p>No profiles yet. Create your first profile to get started!</p>
              </div>
            ) : (
              savedProfiles.map(profile => (
                <div key={profile.id} className="profile-preview-card">
                  <div className="preview-avatar">
                    {profile.photo ? (
                      <img src={profile.photo} alt={profile.name} />
                    ) : (
                      profile.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <h3>{profile.name}</h3>
                  <p>{profile.jobRole}</p>
                  <button className="btn btn-secondary" onClick={() => handleViewProfile(profile.id)}>
                    View Profile
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

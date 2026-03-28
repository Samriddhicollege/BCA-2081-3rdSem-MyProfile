import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import '../css/HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/profile-generator')
  }

  const handleLearnMore = () => {
    navigate('/login')
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
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started Free
            </button>
            <button className="btn btn-secondary" onClick={handleLearnMore}>
              Learn More
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

        {/* Floating Stat Cards */}
        <div className="stat-cards-container">
          <div className="stat-card stat-card-1">
            <div className="stat-label">Profiles Created</div>
            <div className="stat-value">1000+</div>
          </div>
          <div className="stat-card stat-card-2">
            <div className="stat-label">Active Users</div>
            <div className="stat-value">500+</div>
          </div>
          <div className="stat-card stat-card-3">
            <div className="stat-label">Countries</div>
            <div className="stat-value">45+</div>
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
    </div>
  )
}

export default HomePage

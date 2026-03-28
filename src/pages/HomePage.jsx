import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import '../css/HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  // Navigate to profile generator for guest users
  const handleGuestAccess = () => {
    navigate('/profile-generator')
  }

  // Navigate to login page
  const handleLoginClick = () => {
    navigate('/login')
  }

  // Navigate to profiles list
  const handleViewProfiles = () => {
    navigate('/profiles-list')
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Profile Card Generator</h1>
          <p className="home-subtitle">Create your professional profile in minutes</p>
          
          <div className="home-description">
            <p>
              Welcome to the Profile Card Generator! Choose how you'd like to continue:
            </p>
            <ul className="features-list">
              <li>✓ Create and customize your professional profile</li>
              <li>✓ Generate beautiful profile cards</li>
              <li>✓ Save and manage multiple profiles</li>
              <li>✓ Add photos to your profiles</li>
              <li>✓ Access your profiles anytime</li>
            </ul>
          </div>

          <div className="home-actions">
            <div className="action-card guest-card">
              <h3>Continue as Guest</h3>
              <p>Create a profile without logging in. Your data will be saved locally.</p>
              <Button 
                text="Continue as Guest" 
                onClick={handleGuestAccess}
                variant="primary"
              />
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <div className="action-card login-card">
              <h3>Sign In</h3>
              <p>Log in to your account to access saved profiles and more features.</p>
              <Button 
                text="Sign In" 
                onClick={handleLoginClick}
                variant="secondary"
              />
            </div>

            <div className="action-card">
              <h3>View All Profiles</h3>
              <p>See all your saved profiles in one place.</p>
              <Button 
                text="View Profiles" 
                onClick={handleViewProfiles}
                variant="secondary"
              />
            </div>
          </div>
        </div>

        <div className="home-illustration">
          <div className="illustration-card">
            <div className="illustration-avatar">👤</div>
            <div className="illustration-title" style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '5px'}}>
              Profile Card
            </div>
            <div className="illustration-line medium"></div>
            <div className="illustration-line"></div>
            <div className="illustration-line short"></div>
            
            {/* Placeholder profile content */}
            <div style={{marginTop: '20px', paddingTop: '20px', borderTop: '2px dashed #ccc', textAlign: 'left'}}>
              <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '8px'}}>
                <span style={{fontWeight: 'bold', color: '#1a1a1a'}}>Name:</span> {' '} ***
              </div>
              <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '8px'}}>
                <span style={{fontWeight: 'bold', color: '#1a1a1a'}}>Role:</span> {' '} ***
              </div>
              <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '8px'}}>
                <span style={{fontWeight: 'bold', color: '#1a1a1a'}}>Email:</span> {' '} ***
              </div>
              <div style={{fontSize: '0.9rem', color: '#666'}}>
                <span style={{fontWeight: 'bold', color: '#1a1a1a'}}>Bio:</span> {' '} ***
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Button from '../components/Button'
import '../css/ProfileDisplayPage.css'

const ProfileDisplayPage = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load profile from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('currentProfile')
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setProfile(parsedData)
      } catch (error) {
        console.error('Error parsing saved profile:', error)
      }
    }
    setLoading(false)
  }, [])

  const handleCreateNew = () => {
    navigate('/profile-generator')
  }

  const handleClearProfile = () => {
    if (window.confirm('Are you sure you want to remove this profile?')) {
      // Get all profiles
      const allProfiles = JSON.parse(localStorage.getItem('allProfiles') || '[]')
      
      // Remove current profile from list
      const updatedProfiles = allProfiles.filter(p => p.id !== profile.id)
      
      // Update localStorage
      localStorage.setItem('allProfiles', JSON.stringify(updatedProfiles))
      localStorage.removeItem('currentProfile')
      
      setProfile(null)
    }
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  if (loading) {
    return (
      <div className="profile-display-page">
        <p>Loading your profile...</p>
      </div>
    )
  }

  return (
    <div className="profile-display-page">
      <div className="display-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
        <h1>Your Profile Card</h1>
        <p>View and manage your professional profile</p>
      </div>

      <div className="display-container">
        <div className="card-wrapper">
          <ProfileCard profile={profile} />
        </div>

        <div className="display-actions">
          {profile && (
            <>
              <Button 
                text="Edit Profile" 
                onClick={handleCreateNew}
                variant="primary"
              />
              <Button 
                text="Clear Profile" 
                onClick={handleClearProfile}
                variant="danger"
              />
            </>
          )}
          {!profile && (
            <>
              <p className="no-profile-message">No profile created yet</p>
              <Button 
                text="Create Your First Profile" 
                onClick={handleCreateNew}
                variant="primary"
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileDisplayPage

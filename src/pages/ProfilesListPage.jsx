import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import '../css/ProfilesListPage.css'

const ProfilesListPage = () => {
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  // Load all profiles from localStorage on component mount
  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem('allProfiles') || '[]')
    setProfiles(savedProfiles)
    setLoading(false)
  }, [])

  const handleViewProfile = (profileId) => {
    // Find profile and set as current
    const profile = profiles.find(p => p.id === profileId)
    if (profile) {
      localStorage.setItem('currentProfile', JSON.stringify(profile))
      navigate('/profile-display')
    }
  }

  const handleDeleteProfile = (profileId) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      const updatedProfiles = profiles.filter(p => p.id !== profileId)
      setProfiles(updatedProfiles)
      localStorage.setItem('allProfiles', JSON.stringify(updatedProfiles))
    }
  }

  const handleCreateNew = () => {
    navigate('/profile-generator')
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  if (loading) {
    return (
      <div className="profiles-list-page">
        <p>Loading profiles...</p>
      </div>
    )
  }

  return (
    <div className="profiles-list-page">
      <div className="list-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
        <h1>All Profiles</h1>
        <p>Manage all your saved profiles</p>
        
        <div className="list-actions">
          <Button
            text="Create New Profile"
            onClick={handleCreateNew}
            variant="primary"
          />
        </div>
      </div>

      <div className="profiles-container">
        {profiles.length === 0 ? (
          <div className="empty-profiles-message">
            <p>No profiles created yet</p>
            <Button
              text="Create Your First Profile"
              onClick={handleCreateNew}
              variant="primary"
            />
          </div>
        ) : (
          <div className="profiles-grid">
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-card-item">
                <div className="profile-item-header">
                  <div className="profile-item-avatar">
                    {profile.photo ? (
                      <img src={profile.photo} alt={profile.name} />
                    ) : (
                      profile.name.charAt(0).toUpperCase()
                    )}
                  </div>
                </div>
                <div className="profile-item-content">
                  <h3 className="profile-item-name">{profile.name}</h3>
                  <p className="profile-item-role">{profile.jobRole}</p>
                  <p className="profile-item-email">{profile.email}</p>
                  <div className="profile-item-actions">
                    <Button
                      text="View"
                      onClick={() => handleViewProfile(profile.id)}
                      variant="primary"
                    />
                    <Button
                      text="Delete"
                      onClick={() => handleDeleteProfile(profile.id)}
                      variant="danger"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilesListPage

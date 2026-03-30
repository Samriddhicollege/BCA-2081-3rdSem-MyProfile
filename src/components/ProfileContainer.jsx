import React, { useState } from 'react'
import ProfileForm from './ProfileForm'
import ProfileCard from './ProfileCard'
import '../styles/ProfileContainer.css'

// Sample data for demo
const SAMPLE_PROFILE = {
  name: 'Arthur Morgan',
  email: 'arthur.morgan@tech.com',
  jobRole: 'Senior Frontend Developer',
  phone: '+977 987-6543',
  location: 'Bhaktapur, Nepal',
  bio: 'Passionate about building amazing user experiences with React and modern web technologies. Coffee enthusiast and tech blogger.'
}

const getStoredProfile = () => {
  const savedData = localStorage.getItem('profileData')
  if (!savedData) return null

  try {
    return JSON.parse(savedData)
  } catch (error) {
    console.error('Error parsing saved profile:', error)
    return null
  }
}

const emptyForm = {
  name: '',
  email: '',
  jobRole: '',
  phone: '',
  location: '',
  bio: ''
}

const ProfileContainer = () => {
  const [savedProfile, setSavedProfile] = useState(() => getStoredProfile())
  const [formData, setFormData] = useState(() => getStoredProfile() || emptyForm)

  // Custom handler to fill sample data
  const handleFillSampleData = () => {
    setFormData(SAMPLE_PROFILE)
  }

  // Custom handler to save profile
  const handleSaveProfile = () => {
    // Store data in localStorage
    localStorage.setItem('profileData', JSON.stringify(formData))
    setSavedProfile(formData)
    alert('Profile saved successfully!')
  }

  // Custom handler to clear profile
  const handleClearProfile = () => {
    if (window.confirm('Are you sure you want to clear the profile?')) {
      localStorage.removeItem('profileData')
      setSavedProfile(null)
      setFormData(emptyForm)
    }
  }

  return (
    <div className="profile-container">
      <div className="form-section">
        <ProfileForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSaveProfile}
          onFillSample={handleFillSampleData}
        />
        {savedProfile && (
          <button className="btn-clear" onClick={handleClearProfile}>
            Clear Profile
          </button>
        )}
      </div>

      <div className="card-section">
        <ProfileCard profile={savedProfile} />
      </div>
    </div>
  )
}

export default ProfileContainer

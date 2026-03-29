import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileForm from '../components/ProfileForm'
import '../css/ProfileGeneratorPage.css'

// Sample data for demo
const SAMPLE_PROFILE = {
  name: 'Sarah Anderson',
  email: 'sarah.anderson@tech.com',
  jobRole: 'Senior Frontend Developer',
  phone: '+1 (555) 987-6543',
  location: 'San Francisco, USA',
  bio: 'Passionate about building amazing user experiences with React and modern web technologies. Coffee enthusiast and tech blogger.'
  // Note: photo is intentionally NOT included here so it doesn't override uploaded photos
}

const ProfileGeneratorPage = () => {
  const navigate = useNavigate()
  
  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobRole: '',
    phone: '',
    location: '',
    bio: '',
    photo: null
  })

  // Custom handler to fill sample data
  const handleFillSampleData = () => {
    setFormData(prev => ({
      ...prev,
      ...SAMPLE_PROFILE
    }))
  }

  // Custom handler to save profile and navigate
  const handleSaveProfile = () => {
    // Generate unique ID for profile
    const profileId = Date.now().toString()
    
    // Get existing profiles from localStorage
    const existingProfiles = JSON.parse(localStorage.getItem('allProfiles') || '[]')
    
    // Create new profile with ID
    const newProfile = {
      ...formData,
      id: profileId
    }
    
    // Add to profiles list
    existingProfiles.push(newProfile)
    
    // Save all profiles
    localStorage.setItem('allProfiles', JSON.stringify(existingProfiles))
    
    // Also save as current profile for display
    localStorage.setItem('currentProfile', JSON.stringify(newProfile))
    
    alert('Profile saved successfully!')
    
    // Navigate to profile display page
    navigate('/profile-display')
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="profile-generator-page">
      <button className="back-button" onClick={handleBackToHome}>
        ← Back to Home
      </button>

      <div className="generator-header">
        <h1>Create Your Profile</h1>
        <p>Fill in your details to generate a professional profile card</p>
      </div>

      <div className="generator-container">
        <ProfileForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSaveProfile}
          onFillSample={handleFillSampleData}
        />
      </div>
    </div>
  )
}

export default ProfileGeneratorPage

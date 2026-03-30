import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileForm from '../components/ProfileForm'
import TemplateSelector from '../components/TemplateSelector'
import ConfirmationModal from '../components/ConfirmationModal'
import '../css/ProfileGeneratorPage.css'

// Sample data for demo
const SAMPLE_PROFILE = {
  name: 'Arthur Morgan',
  email: 'arthur.morgan@tech.com',
  jobRole: 'Senior Frontend Developer',
  phone: '+977 988787898',
  location: 'Bhaktapur, Nepal',
  bio: 'Passionate about building amazing user experiences with React and modern web technologies. Coffee enthusiast and tech blogger.'
  // Note: photo is intentionally NOT included here so it doesn't override uploaded photos
}

const ProfileGeneratorPage = () => {
  const navigate = useNavigate()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  
  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobRole: '',
    phone: '',
    location: '',
    bio: '',
    photo: null,
    template: 'idCard'
  })

  // Custom handler to fill sample data
  const handleFillSampleData = () => {
    setFormData(prev => ({
      ...prev,
      ...SAMPLE_PROFILE
    }))
  }

  // Handle template selection
  const handleSelectTemplate = (templateId) => {
    setFormData(prev => ({
      ...prev,
      template: templateId
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
    
    setShowSuccessModal(true)
  }

  const handleSuccessModalConfirm = () => {
    setShowSuccessModal(false)
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
        <TemplateSelector 
          selectedTemplate={formData.template}
          onSelectTemplate={handleSelectTemplate}
        />
        <ProfileForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSaveProfile}
          onFillSample={handleFillSampleData}
        />
      </div>

      <ConfirmationModal
        isOpen={showSuccessModal}
        title="Profile Saved"
        message="Your profile has been created successfully! Click 'Continue' to view your profile card."
        onConfirm={handleSuccessModalConfirm}
        onCancel={handleSuccessModalConfirm}
        confirmText="Continue"
        cancelText="Continue"
        type="success"
      />
    </div>
  )
}

export default ProfileGeneratorPage

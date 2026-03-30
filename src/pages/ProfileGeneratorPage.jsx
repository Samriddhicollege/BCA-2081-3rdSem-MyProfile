import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const editingProfile = location.state?.editProfile
  
  // State management
  const [formData, setFormData] = useState(() => ({
    id: editingProfile?.id || null,
    name: editingProfile?.name || '',
    email: editingProfile?.email || '',
    jobRole: editingProfile?.jobRole || '',
    phone: editingProfile?.phone || '',
    location: editingProfile?.location || '',
    bio: editingProfile?.bio || '',
    photo: editingProfile?.photo || null,
    template: editingProfile?.template || 'idCard'
  }))

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
    // Get existing profiles from localStorage
    const existingProfiles = JSON.parse(localStorage.getItem('allProfiles') || '[]')

    const isEditMode = Boolean(formData.id)
    const profileToSave = isEditMode
      ? { ...formData }
      : { ...formData, id: Date.now().toString() }

    const updatedProfiles = isEditMode
      ? existingProfiles.map(profile =>
          profile.id === profileToSave.id ? profileToSave : profile
        )
      : [...existingProfiles, profileToSave]
    
    // Save all profiles
    localStorage.setItem('allProfiles', JSON.stringify(updatedProfiles))
    
    // Also save as current profile for display
    localStorage.setItem('currentProfile', JSON.stringify(profileToSave))
    
    setShowSuccessModal(true)
  }

  const handleSuccessModalConfirm = () => {
    setShowSuccessModal(false)
    navigate('/profile-display')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="profile-generator-page">
      <div className="top-actions">
        <button className="back-button" onClick={handleGoBack}>
          ← Back
        </button>
        <button className="home-button" onClick={handleBackToHome}>
          Home
        </button>
      </div>

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

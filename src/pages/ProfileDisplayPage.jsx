import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Button from '../components/Button'
import ConfirmationModal from '../components/ConfirmationModal'
import '../css/ProfileDisplayPage.css'

const ProfileDisplayPage = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const profileRef = useRef(null)

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
    navigate('/profile-generator', {
      state: { editProfile: profile }
    })
  }

  const handleClearProfile = () => {
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    // Get all profiles
    const allProfiles = JSON.parse(localStorage.getItem('allProfiles') || '[]')
    
    // Remove current profile from list
    const updatedProfiles = allProfiles.filter(p => p.id !== profile.id)
    
    // Update localStorage
    localStorage.setItem('allProfiles', JSON.stringify(updatedProfiles))
    localStorage.removeItem('currentProfile')
    
    setShowDeleteModal(false)
    setProfile(null)
  }

  const handleCancelDelete = () => {
    setShowDeleteModal(false)
  }

  const handleDownloadPNG = async () => {
    try {
      console.log('Starting PNG download...')
      
      const wrapper = profileRef.current
      if (!wrapper) {
        console.warn('Profile card not found.')
        return
      }

      const element = wrapper.querySelector('.profile-card') || wrapper

      // Import dependency lazily so normal page load stays fast.
      const html2canvas = (await import('html2canvas')).default
      
      // Wait for images to load
      const images = element.querySelectorAll('img')
      console.log('Waiting for images...')
      
      await Promise.all(Array.from(images).map(img => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve()
          } else {
            img.onload = resolve
            img.onerror = resolve
          }
        })
      }))

      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready
      }

      // Let the browser finish paint/layout before capturing.
      await new Promise((resolve) => requestAnimationFrame(resolve))
      
      console.log('All assets loaded, capturing canvas...')

      const rect = element.getBoundingClientRect()
      if (!rect.width || !rect.height) {
        console.warn('Profile card is not visible yet.')
        return
      }
      
      // Capture the profile card and download as PNG.
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: false,
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height),
        foreignObjectRendering: false,
        onclone: (clonedDoc) => {
          const clonedEl = clonedDoc.querySelector('.profile-card')
          if (clonedEl) {
            clonedEl.style.animation = 'none'
            clonedEl.style.transition = 'none'
            clonedEl.style.transform = 'none'
            clonedEl.style.opacity = '1'
          }
        }
      })
      
      console.log('Canvas captured successfully, generating PNG...')

      const imageData = canvas.toDataURL('image/png', 1.0)
      const link = document.createElement('a')
      link.href = imageData
      link.download = `${profile.name}_Profile_Card.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Error downloading PNG:', error)
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
        <div className="card-wrapper" ref={profileRef}>
          <ProfileCard profile={profile} template={profile?.template || 'idCard'} />
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
                text="Download as PNG" 
                onClick={handleDownloadPNG}
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

      <ConfirmationModal
        isOpen={showDeleteModal}
        title="Delete Profile"
        message="Are you sure you want to remove this profile? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
        type="danger"
      />
    </div>
  )
}

export default ProfileDisplayPage

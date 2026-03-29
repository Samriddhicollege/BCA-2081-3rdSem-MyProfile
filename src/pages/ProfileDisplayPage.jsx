import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Button from '../components/Button'
import '../css/ProfileDisplayPage.css'

const ProfileDisplayPage = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
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

  const handleDownloadPDF = async () => {
    try {
      // Dynamically import required libraries
      const html2pdf = (await import('html2pdf.js')).default
      
      // Create a clone of the profile card for PDF generation
      const element = profileRef.current
      
      // Ensure all images are loaded before generating PDF
      const images = element.querySelectorAll('img')
      const imagePromises = Array.from(images).map(img => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve()
          } else {
            img.onload = resolve
            img.onerror = resolve
          }
        })
      })
      
      await Promise.all(imagePromises)
      
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `${profile.name}_Profile_Card.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          windowHeight: element.scrollHeight
        },
        jsPDF: { 
          orientation: 'portrait', 
          unit: 'mm', 
          format: 'a4',
          compress: true
        }
      }
      
      html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to download PDF. Please try again.')
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
                text="Download as PDF" 
                onClick={handleDownloadPDF}
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

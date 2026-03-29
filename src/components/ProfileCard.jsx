import React from 'react'
import '../css/ProfileCard.css'

const ProfileCard = ({ profile }) => {
  // Conditional rendering - show if profile has name
  if (!profile || !profile.name) {
    return <div className="profile-card empty-state">No profile data yet. Fill the form to create a profile.</div>
  }

  return (
    <div className="profile-card">
      <div className="profile-avatar">
        {profile.photo && profile.photo.trim() ? (
          <img src={profile.photo} alt={profile.name} className="avatar-image" />
        ) : (
          <div className="avatar-letter">{profile.name.charAt(0).toUpperCase()}</div>
        )}
      </div>
      <div className="profile-content">
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-role">{profile.jobRole || 'Job Role'}</p>
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{profile.email}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{profile.phone || 'Not provided'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{profile.location || 'Not provided'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Bio:</span>
            <span className="detail-value">{profile.bio || 'Not provided'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

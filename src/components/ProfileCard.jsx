import React from 'react'
import '../css/ProfileCard.css'

const ProfileCard = ({ profile, template = 'idCard' }) => {
  // Conditional rendering - show if profile has name
  if (!profile || !profile.name) {
    return <div className="profile-card empty-state">No profile data yet. Fill the form to create a profile.</div>
  }

  // Template 1: ID Card Style (teal & dark gray)
  if (template === 'idCard') {
    return (
      <div className="profile-card id-card">
        {/* Dark Gray Header */}
        <div className="id-card-header">
          <p className="id-card-company">{profile.jobRole || 'Professional'}</p>
        </div>

        {/* Teal Accent Bar with Avatar */}
        <div className="id-card-accent">
          <div className="id-card-avatar">
            {profile.photo && profile.photo.trim() ? (
              <img src={profile.photo} alt={profile.name} className="avatar-image" />
            ) : (
              <div className="avatar-letter">{profile.name.charAt(0).toUpperCase()}</div>
            )}
          </div>
        </div>

        {/* White Lower Section */}
        <div className="id-card-details">
          <div className="id-row">
            <span className="id-label">Name</span>
            <span className="id-value">{profile.name}</span>
          </div>
          {profile.email && (
            <div className="id-row">
              <span className="id-label">Email</span>
              <span className="id-value">{profile.email}</span>
            </div>
          )}
          {profile.phone && (
            <div className="id-row">
              <span className="id-label">Phone</span>
              <span className="id-value">{profile.phone}</span>
            </div>
          )}
          {profile.location && (
            <div className="id-row">
              <span className="id-label">Location</span>
              <span className="id-value">{profile.location}</span>
            </div>
          )}
          {profile.bio && (
            <div className="id-row">
              <span className="id-label">Bio</span>
              <span className="id-value">{profile.bio}</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Template 2: Rounded Card with Red Gradient
  if (template === 'roundedCard') {
    return (
      <div className="profile-card rounded-card">
        <div className="rounded-card-top">
          <div className="rounded-card-avatar">
            {profile.photo && profile.photo.trim() ? (
              <img src={profile.photo} alt={profile.name} className="avatar-image" />
            ) : (
              <div className="avatar-letter">{profile.name.charAt(0).toUpperCase()}</div>
            )}
          </div>
        </div>

        <div className="rounded-card-bottom">
          <h2 className="rounded-card-name">{profile.name}</h2>
          <p className="rounded-card-role">{profile.jobRole || 'Professional'}</p>
          {profile.bio && <p className="rounded-card-bio">{profile.bio}</p>}
          {profile.email && <p className="rounded-card-contact">{profile.email}</p>}
          {profile.phone && <p className="rounded-card-contact">{profile.phone}</p>}
          {profile.location && <p className="rounded-card-contact">{profile.location}</p>}
        </div>
      </div>
    )
  }

  // Template 3: Full-Bleed Photo Card with Dark Green Border
  if (template === 'fullBleed') {
    return (
      <div className="profile-card full-bleed-card" style={{
        backgroundImage: profile.photo && profile.photo.trim() ? `url(${profile.photo})` : 'none',
        backgroundColor: !profile.photo || !profile.photo.trim() ? '#2C3E50' : 'transparent'
      }}>
        <div className="full-bleed-overlay">
          <div className="full-bleed-content">
            <h2 className="full-bleed-name">{profile.name}</h2>
            <p className="full-bleed-role">{profile.jobRole || 'Professional'}</p>
            {profile.bio && <p className="full-bleed-bio">{profile.bio}</p>}
          </div>
          <button className="full-bleed-follow-btn">Follow</button>
        </div>
      </div>
    )
  }

  // Default fallback (should not reach here)
  return (
    <div className="profile-card empty-state">
      Unable to render card with template: {template}
    </div>
  )
}

export default ProfileCard

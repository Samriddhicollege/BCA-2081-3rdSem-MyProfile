import React from 'react'
import '../css/ProfileCard.css'

const ProfileCard = ({ profile, template = 'idCard' }) => {
  // Conditional rendering - show if profile has name
  if (!profile || !profile.name) {
    return <div className="profile-card empty-state">No profile data yet. Fill the form to create a profile.</div>
  }

  // Template 1: Red Gradient with Circular Photo
  if (template === 'idCard') {
    return (
      <div className="profile-card id-card">
        {/* Red Gradient Top Section */}
        <div className="id-card-gradient"></div>

        {/* Circular Photo Overlay */}
        <div className="id-card-avatar-wrapper">
          <div className="id-card-avatar">
            {profile.photo && profile.photo.trim() ? (
              <img src={profile.photo} alt={profile.name} className="avatar-image" />
            ) : (
              <div className="avatar-letter">{profile.name.charAt(0).toUpperCase()}</div>
            )}
          </div>
        </div>

        {/* White Content Section */}
        <div className="id-card-content">
          <h2 className="id-card-name">{profile.name}</h2>
          <p className="id-card-role">{profile.jobRole || 'Professional'}</p>
          <div className="id-card-separator"></div>
          
          {profile.bio && <p className="id-card-bio">{profile.bio}</p>}
          
          <div className="id-card-fields">
            {profile.email && <p className="id-card-field">{profile.email}</p>}
            {profile.phone && <p className="id-card-field">{profile.phone}</p>}
            {profile.location && <p className="id-card-field">{profile.location}</p>}
          </div>
          
          <div className="id-card-icons">📧 𝕏 📱</div>
        </div>
      </div>
    )
  }

  // Template 2: Design Preservation (Static Layout with Dynamic Content)
  if (template === 'roundedCard') {
    return (
      <div className="profile-card design-card">
        {/* Dark Charcoal Header */}
        <div className="design-header">
          <p className="design-header-text">{profile.jobRole || 'Professional'}</p>
        </div>

        {/* Teal Band with Circular Photo */}
        <div className="design-photo-section">
          <div className="design-photo-frame">
            {profile.photo && profile.photo.trim() ? (
              <img src={profile.photo} alt={profile.name} className="design-photo" />
            ) : (
              <div className="design-photo-letter">{profile.name.charAt(0).toUpperCase()}</div>
            )}
          </div>
        </div>

        {/* White Main Content Area */}
        <div className="design-content">
          <h2 className="design-name">{profile.name}</h2>
          
          <div className="design-fields">
            {profile.email && (
              <div className="design-field">
                <span className="design-label">Email</span>
                <span className="design-value">{profile.email}</span>
              </div>
            )}
            {profile.phone && (
              <div className="design-field">
                <span className="design-label">Phone</span>
                <span className="design-value">{profile.phone}</span>
              </div>
            )}
            {profile.location && (
              <div className="design-field">
                <span className="design-label">Location</span>
                <span className="design-value">{profile.location}</span>
              </div>
            )}
            {profile.bio && (
              <div className="design-field">
                <span className="design-label">Bio</span>
                <span className="design-value">{profile.bio}</span>
              </div>
            )}
          </div>
        </div>

        {/* Dark Gray Footer with Teal Stripe */}
        <div className="design-footer">
          <div className="design-footer-stripe"></div>
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
          <div className="full-bleed-details">
            <div className="full-bleed-detail-left">
              {profile.email && (
                <div className="full-bleed-detail-item">
                  <span className="full-bleed-detail-label">Email</span>
                  <span className="full-bleed-detail-value">{profile.email}</span>
                </div>
              )}
              {profile.phone && (
                <div className="full-bleed-detail-item">
                  <span className="full-bleed-detail-label">Phone</span>
                  <span className="full-bleed-detail-value">{profile.phone}</span>
                </div>
              )}
            </div>
            <div className="full-bleed-detail-right">
              {profile.location && (
                <div className="full-bleed-detail-item">
                  <span className="full-bleed-detail-label">Location</span>
                  <span className="full-bleed-detail-value">{profile.location}</span>
                </div>
              )}
            </div>
          </div>
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

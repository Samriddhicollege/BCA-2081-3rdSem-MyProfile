import React from 'react'
import Input from './Input'
import Button from './Button'
import '../css/ProfileForm.css'

const ProfileForm = ({ formData, setFormData, onSubmit, onFillSample }) => {
  // Custom handler for input change
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          photo: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  // Validation function
  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!formData.jobRole.trim()) {
      errors.jobRole = 'Job role is required'
    }

    return errors
  }

  // Custom handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()

    if (Object.keys(errors).length === 0) {
      onSubmit()
    } else {
      alert(Object.values(errors).join('\n'))
    }
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Create Your Profile</h2>

      <div className="photo-upload-container">
        <label className="photo-upload-label">Profile Photo (Optional)</label>
        <div className="photo-input-wrapper">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="photo-input-field"
          />
          {formData.photo && (
            <img src={formData.photo} alt="Preview" className="photo-preview" />
          )}
        </div>
      </div>

      <Input
        label="Full Name"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        placeholder="John Doe"
        required={true}
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="john@example.com"
        required={true}
      />

      <Input
        label="Job Role"
        value={formData.jobRole}
        onChange={(e) => handleInputChange('jobRole', e.target.value)}
        placeholder="e.g., Frontend Developer"
        required={true}
      />

      <Input
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        placeholder="+1 (555) 123-4567"
      />

      <Input
        label="Location"
        value={formData.location}
        onChange={(e) => handleInputChange('location', e.target.value)}
        placeholder="e.g., New York, USA"
      />

      <div className="bio-container">
        <label htmlFor="bio" className="input-label">Bio</label>
        <textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          placeholder="Tell us about yourself..."
          className="textarea-field"
          rows="4"
        />
      </div>

      <div className="form-actions">
        <Button text="Create Profile" onClick={handleSubmit} variant="primary" type="submit" />
        <Button text="Fill Sample Data" onClick={onFillSample} variant="secondary" type="button" />
      </div>
    </form>
  )
}

export default ProfileForm

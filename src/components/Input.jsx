import React from 'react'
import '../css/Input.css'

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false }) => {
  return (
    <div className="input-group">
      <label htmlFor={label} className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  )
}

export default Input

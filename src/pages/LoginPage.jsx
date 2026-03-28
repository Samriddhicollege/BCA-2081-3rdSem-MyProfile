import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'
import '../css/LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Static login - just navigate to profile generator for now
    if (email && password) {
      navigate('/profile-generator')
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-header">
            <h1>Sign In</h1>
            <p>Enter your credentials to access your profiles</p>
          </div>

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required={true}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required={true}
          />

          <div className="login-note">
            <p>📝 <strong>Note:</strong> This login is static for demonstration. Any email/password combination will work.</p>
          </div>

          <Button 
            text="Sign In" 
            onClick={handleLogin}
            variant="primary"
            type="submit"
          />
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Sign up here</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

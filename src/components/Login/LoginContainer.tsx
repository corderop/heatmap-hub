import React from 'react'
import LoginComponent from './LoginComponent'
import User from '../../services/auth/domain/User'

const ERRORS = {
  INVALID_EMAIL: 'You must enter a valid email',
  INVALID_PASSWORD: 'Your password should have more than 8 characters'
}

const LoginContainer: React.FC = () => {
  const [errors, setErrors] = React.useState<string[]>([])

  const getInputErrors = (email: string, password: string): string[] => {
    const newErrors = []

    if (!User.isValidEmail(email)) newErrors.push(ERRORS.INVALID_EMAIL)
    if (!User.isValidPassword(password)) newErrors.push(ERRORS.INVALID_PASSWORD)

    return newErrors
  }

  const onLogin = (email: string, password: string): void => {
    const newErrors = getInputErrors(email, password)
    setErrors(newErrors)

    if (newErrors.length === 0) {
      // Call the login service
    }
  }

  const onSignUp = (email: string, password: string): void => {
    const newErrors = getInputErrors(email, password)
    setErrors(newErrors)

    if (newErrors.length === 0) {
      // Call the sign up service
    }
  }

  return (
    <LoginComponent onLogin={onLogin} onSignUp={onSignUp} errors={errors}/>
  )
}

export default LoginContainer

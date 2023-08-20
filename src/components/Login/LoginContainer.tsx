import React, { useState } from 'react'
import LoginComponent from './LoginComponent'
import User from '../../services/auth/domain/User'
import SignUpUser from '../../services/auth/application/SignUpUser'
import { InfraestructureAuthClient } from '../../config/dependencies'
import { AlreadyExistingUserError, InvalidEmailError, InvalidPasswordError } from '../../services/auth/domain/errors'
import type { AlertProp } from '../Alerts/types'

const MISSING_REQUIREMENTS_ERROR_MESSAGE = '⚠️ These requirements are missing:'
const SUCCESFULLY_SIGN_UP_MESSAGE = (
  'Your account was created successfully! ' +
  'Please check your inbox and verify your account. ' +
  'Then, you will be able to login.'
)

const ERRORS = {
  INVALID_EMAIL: 'You must enter a valid email',
  INVALID_PASSWORD: 'Your password should have more than 8 characters',
  ALREADY_EXISTING_USER: 'This email is already used. Login instead or use another one',
  UNEXPECTED: 'A unexpected error has ocurred. Please try again later'
}

const LoginContainer: React.FC = () => {
  const [alert, setAlert] = useState<AlertProp | null>(null)

  const getInputErrors = (email: string, password: string): string[] => {
    const newErrors = []

    if (!User.isValidEmail(email)) newErrors.push(ERRORS.INVALID_EMAIL)
    if (!User.isValidPassword(password)) newErrors.push(ERRORS.INVALID_PASSWORD)

    return newErrors
  }

  const setMissingRequirementsAlert = (errors: string[]): void => {
    setAlert({
      type: 'error',
      message: MISSING_REQUIREMENTS_ERROR_MESSAGE,
      subMessages: errors
    })
  }

  const onLogin = (email: string, password: string): void => {
    const newErrors = getInputErrors(email, password)

    if (newErrors.length > 0) {
      setMissingRequirementsAlert(newErrors)
      return
    }

    setAlert(null)
    // Call the login service
  }

  const onSignUp = async (email: string, password: string): Promise<void> => {
    const newErrors = getInputErrors(email, password)

    if (newErrors.length > 0) {
      setMissingRequirementsAlert(newErrors)
      return
    }

    setAlert(null)
    try {
      const signUpService = new SignUpUser(InfraestructureAuthClient)
      await signUpService.execute(email, password)
    } catch (error) {
      if (error instanceof InvalidEmailError) {
        setAlert({
          type: 'error',
          message: ERRORS.INVALID_EMAIL
        })
      } else if (error instanceof InvalidPasswordError) {
        setAlert({
          type: 'error',
          message: ERRORS.INVALID_PASSWORD
        })
      } else if (error instanceof AlreadyExistingUserError) {
        setAlert({
          type: 'error',
          message: ERRORS.ALREADY_EXISTING_USER
        })
      } else {
        setAlert({
          type: 'error',
          message: ERRORS.UNEXPECTED
        })
      }

      return
    }

    setAlert({
      type: 'success',
      message: SUCCESFULLY_SIGN_UP_MESSAGE
    })
  }

  return (
    <LoginComponent onLogin={onLogin} onSignUp={onSignUp} alert={alert}/>
  )
}

export default LoginContainer

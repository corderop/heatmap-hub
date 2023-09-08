import React from 'react'
import LoginComponent from './LoginComponent'

const LoginContainer: React.FC = () => {
  const onLogin = (email: string, password: string): void => {}

  const onSignUp = (email: string, password: string): void => {}

  return (
    <LoginComponent onLogin={onLogin} onSignUp={onSignUp}/>
  )
}

export default LoginContainer

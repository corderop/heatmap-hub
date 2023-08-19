import React, { useState } from 'react'
import LoginForm from './LoginForm'
import TabSelector from '../TabSelector'

const TABS = {
  LOGIN: 'Login',
  SIGN_UP: 'Sign Up'
}

interface Props {
  onLogin: (email: string, password: string) => void
  onSignUp: (email: string, password: string) => void
  errors?: string[]
}

const LoginComponent: React.FC<Props> = ({ onLogin, onSignUp, errors = [] }) => {
  const [selectedTab, setSelectedTab] = useState(TABS.LOGIN)
  const tabs = Object.values(TABS)

  const onTabChange = (tab: string): void => {
    setSelectedTab(tab)
  }

  return (
    <>
      <TabSelector tabs={tabs} value={selectedTab} onChange={onTabChange} />
      <div className={`${selectedTab !== TABS.LOGIN ? 'hidden' : ''}`}>
        <LoginForm onSubmit={onLogin} errors={errors}/>
      </div>
      <div className={`${selectedTab !== TABS.SIGN_UP ? 'hidden' : ''}`}>
        <LoginForm isSignUp onSubmit={onSignUp} errors={errors}/>
      </div>
    </>
  )
}

export default LoginComponent

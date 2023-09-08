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
}

const LoginComponent: React.FC<Props> = ({ onLogin, onSignUp }) => {
  const [selectedTab, setSelectedTab] = useState(TABS.LOGIN)
  const tabs = Object.values(TABS)

  const onTabChange = (tab: string): void => {
    setSelectedTab(tab)
  }

  return (
    <>
      <TabSelector tabs={tabs} value={selectedTab} onChange={onTabChange} />
      <div className={`${selectedTab !== TABS.LOGIN ? 'hidden' : ''}`}>
        <LoginForm onSubmit={onSignUp}/>
      </div>
      <div className={`${selectedTab !== TABS.SIGN_UP ? 'hidden' : ''}`}>
        <LoginForm onSubmit={onLogin}/>
      </div>
    </>
  )
}

export default LoginComponent

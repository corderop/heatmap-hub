import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import TabSelector from '../TabSelector'
import Alert from '../Alerts/Alert'
import type { AlertProp } from '../Alerts/types'

const TABS = {
  LOGIN: 'Login',
  SIGN_UP: 'Sign Up'
}

interface Props {
  onLogin: (email: string, password: string) => void
  onSignUp: (email: string, password: string) => void
  alert: AlertProp | null
}

const LoginComponent: React.FC<Props> = ({ onLogin, onSignUp, alert = null }) => {
  const [modificableAlert, setModificableAlert] = React.useState<AlertProp | null>(alert)
  const [selectedTab, setSelectedTab] = useState(TABS.LOGIN)
  const tabs = Object.values(TABS)

  useEffect(() => {
    setModificableAlert(alert)
  }, [alert])

  const onTabChange = (tab: string): void => {
    setModificableAlert(null)
    setSelectedTab(tab)
  }

  return (
    <>
      <TabSelector tabs={tabs} value={selectedTab} onChange={onTabChange} />
      { modificableAlert !== null &&
        <div className='mx-auto w-full max-w-sm'>
          <Alert alert={modificableAlert}/>
        </div>
      }
      <div className={`${selectedTab !== TABS.LOGIN ? 'hidden' : ''}`}>
        <LoginForm onSubmit={onLogin} />
      </div>
      <div className={`${selectedTab !== TABS.SIGN_UP ? 'hidden' : ''}`}>
        <LoginForm isSignUp onSubmit={onSignUp} />
      </div>
    </>
  )
}

export default LoginComponent

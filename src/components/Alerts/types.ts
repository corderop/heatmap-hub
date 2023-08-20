type AlertType = 'error' | 'warning' | 'success'

interface AlertProp {
  type: AlertType
  message: string
  subMessages?: string[]
}

export type { AlertProp, AlertType }

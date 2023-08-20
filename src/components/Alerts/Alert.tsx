import React from 'react'
import type { AlertProp } from './types'

const TYPES = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
}

interface Props {
  alert: AlertProp
}

const Alert: React.FC<Props> = ({ alert: { type, message, subMessages = [] } }) => {
  const colorClasses = {
    [TYPES.ERROR]: 'bg-red-100 border-red-300 text-red-700',
    [TYPES.WARNING]: 'bg-yellow-100 border-yellow-300 text-yellow-700',
    [TYPES.SUCCESS]: 'bg-green-100 border-green-300 text-green-700'
  }

  return (
    <div className={`mx-auto w-full p-3 border rounded-md text-sm ${colorClasses[type]}`} role='alert'>
      <p>{message}</p>
      { subMessages.length > 0 && <ul className='list-disc ml-10 mt-2 gap-2'>
        {subMessages.map((m) => <li className="mb-1 not-last:mb-0" key={m}>{m}</li>)}
      </ul>}
    </div>
  )
}

export default Alert

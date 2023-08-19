import React from 'react'

interface Props {
  errors: string[]
}

const ErrorAlert: React.FC<Props> = ({ errors }) => {
  return (
    <div className="mx-auto w-full max-w-sm p-3 bg-red-100 border border-red-300 rounded-md text-sm text-red-700" role='alert'>
      <p>⚠️ These requirements are missing:</p>
      <ul className='list-disc ml-10 mt-2 gap-2'>
        {errors.map((error) => <li className="mb-1 not-last:mb-0" key={error}>{error}</li>)}
      </ul>
    </div>
  )
}

export default ErrorAlert

import React, { useState } from 'react'

interface Props {
  isSignUp?: boolean
  onSubmit: (email: string, password: string) => void
}

const LoginForm: React.FC<Props> = ({ isSignUp = false, onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit(email, password)
  }

  const buttonMessage = isSignUp ? 'Sign Up' : 'Login'

  return (
    <>
      <form className='flex flex-col gap-5 mx-auto w-full max-w-sm' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className="text-slate-500 text-sm" htmlFor='login-email' >Email</label>
          <input
            className='p-2 rounded-lg bg-transparent border border-slate-300 font-semibold'
            id='login-email'
            name='login-email'
            type="email"
            value={email} onChange={(event) => { setEmail(event.target.value) }}
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className="text-slate-500 text-sm" htmlFor='login-password'>Password</label>
          <input
            className='p-2 rounded-lg bg-transparent border border-slate-300 font-semibold'
            id='login-password'
            name='login-password'
            type="password"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
            required
          />
        </div>
        <button className="bg-green-600 text-white h-12 my-4 p-2 rounded-lg font-semibold" type='submit'>{ buttonMessage }</button>
      </form>
    </>
  )
}

export default LoginForm

import React from 'react'
import Logo from './Logo'
import UserAvatar from './UserAvatar'

const Navbar: React.FC = () => {
  const isLogged = true

  return (
    <nav className='max-w-4xl mx-auto flex flex-row'>
      <div className='w-full flex-grow flex-shrink'></div>
      <div className='flex-shrink-0'>
        <Logo/>
      </div>
      <div className='w-full flex-grow flex-shrink flex flex-row justify-end items-center gap-3'>
        {!isLogged && (<>
          <a href="/login" className='flex flex-col justify-center rounded-md px-2 py-1 font-semibold bg-green-500 text-green-950 hover:bg-opacity-50 bg-opacity-20'>Sign Up</a>
          <a href="/login" className='flex flex-col justify-center rounded-md px-2 py-1 font-semibold bg-green-500 text-green-950 hover:bg-opacity-100 bg-opacity-70'>Login</a>
        </>)}
        {isLogged && (<UserAvatar />)}
      </div>
    </nav>
  )
}

export default Navbar

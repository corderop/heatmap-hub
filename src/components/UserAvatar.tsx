import { useEffect, useRef, useState } from 'react'

const UserAvatar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const avatarButton = useRef<HTMLButtonElement>(null)

  const toggleShowMenu = (): void => {
    setShowMenu(prevValue => !prevValue)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current === null) return
      if (avatarButton.current === null) return

      const isClickedOutside = !menuRef.current.contains(event.target as Node)
      const isClickedInAvatarButton = avatarButton.current.contains(event.target as Node) // Avoid flickering and menu appearing again
      if (isClickedOutside && !isClickedInAvatarButton) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <div className="relative">
      <button ref={avatarButton} onClick={toggleShowMenu} aria-label="User Menu" className="rounded-full bg-green-300 w-8 h-8 font-semibold">
        👤
      </button>
      { showMenu && (
        <section ref={menuRef} className="absolute w-48 border border-gray-200 rounded-md bg-[#f6f6f6] top-9 right-0">
          <ul>
            <li className="border hover:bg-gray-200">
              <a href="/profile" className="block px-4 py-2 w-full">Edit profile</a>
            </li>
            <li className="border hover:bg-gray-200">
              <button className="px-4 py-2 w-full text-left">Logout</button>
            </li>
          </ul>
        </section>
      )}
    </div>
  )
}

export default UserAvatar

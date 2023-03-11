// MobileMenuContext
import { createContext, useContext, useState, useEffect } from 'react'
import type { MobileMenuContextValue, MobileMenuProviderProps } from '@/types/mobileMenu'

const MobileMenuContext = createContext({} as MobileMenuContextValue)

const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.classList.add('isLocked')
    } else {
      body.classList.remove('isLocked')
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const openMenu = () => setIsOpen(true)

  const closeMenu = () => setIsOpen(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleMenu, openMenu, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenuContext = () => useContext(MobileMenuContext)

export default MobileMenuProvider

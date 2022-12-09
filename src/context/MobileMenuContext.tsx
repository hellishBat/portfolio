// MobileMenuContext
import { createContext, useContext, useState } from 'react'
import type { IMobileMenuContext, IMobileMenuProviderProps } from '@/types/mobileMenu'

const MobileMenuContext = createContext({} as IMobileMenuContext)

const MobileMenuProvider = ({ children }: IMobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('isLocked')
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

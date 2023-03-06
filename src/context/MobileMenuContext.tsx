// MobileMenuContext
import { createContext, useContext, useState, useEffect } from 'react'
import type { MobileMenuContextTypes, MobileMenuProviderTypes } from '@/types/mobileMenu'

const MobileMenuContext = createContext({} as MobileMenuContextTypes)

const MobileMenuProvider = ({ children }: MobileMenuProviderTypes) => {
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

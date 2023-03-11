// mobileMenu Types
import { ReactNode } from 'react'

export interface MobileMenuContextValue {
  toggleMenu: () => void
  openMenu: () => void
  closeMenu: () => void
  isOpen: boolean
}

export interface MobileMenuProviderProps {
  children: ReactNode
}

export interface MobileMenuButtonProps {
  isOpen: boolean
  clickHandler?: () => void
}

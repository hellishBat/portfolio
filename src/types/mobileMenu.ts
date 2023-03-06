// mobileMenu Types
import { ReactNode } from 'react'

export interface MobileMenuContextTypes {
  toggleMenu: () => void
  openMenu: () => void
  closeMenu: () => void
  isOpen: boolean
}

export interface MobileMenuProviderTypes {
  children: ReactNode
}

export interface MobileMenuProps {
  isOpen: boolean
  clickHandler?: () => void
}

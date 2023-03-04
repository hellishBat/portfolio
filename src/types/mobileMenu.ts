// mobileMenu Types
// export interface IMobileMenuContext {
//   toggleMenu: (fn: boolean) => void
//   openMenu: (fn: boolean) => void
//   closeMenu: (fn: boolean) => void
//   isOpen: boolean
// }

// export interface IMobileMenuProviderProps {
//   children: React.ReactNode
// }

import { ReactNode } from 'react'

export interface IMobileMenuContext {
  toggleMenu: (fn: boolean) => void
  openMenu: () => void
  closeMenu: () => void
  isOpen: boolean
}

export interface IMobileMenuProviderProps {
  children: ReactNode
}

export type MobileMenuProps = {
  isOpen: boolean
  clickHandler?: (fn: any) => void
}

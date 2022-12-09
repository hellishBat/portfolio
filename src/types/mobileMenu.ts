// mobileMenu Types
export interface IMobileMenuContext {
  toggleMenu: (fn: boolean | any) => void
  openMenu: (fn: boolean | any) => void
  closeMenu: (fn: boolean | any) => void
  isOpen: boolean
}

export interface IMobileMenuProviderProps {
  children: React.ReactNode
}

export type MobileMenuProps = {
  isOpen: boolean
  clickHandler?: (fn: any) => void
}

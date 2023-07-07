// mobileMenu Types
export interface MobileMenuStore {
  isOpen: boolean
  toggleMenu: () => void
  openMenu: () => void
  closeMenu: () => void
}

export interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

// Store
import { create } from 'zustand'
import { LightTheme, DarkTheme } from '@/styles/themes'
import { Mode } from '@/types/theme'
import type { MobileMenuStore } from '@/types/mobileMenu'
import type { NavStore } from '@/types/nav'
import type { ThemeStore } from '@/types/theme'

export const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}))

export const useNavStore = create<NavStore>((set) => ({
  activeNavLinkId: '',
  setActiveNavLinkId: (linkId) => set({ activeNavLinkId: linkId }),
}))

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: LightTheme,
  mode: Mode.Light,
  changeMode: (mode) => {
    const newTheme = mode === Mode.Light ? LightTheme : DarkTheme
    set({ theme: newTheme, mode })
    window.localStorage.setItem('theme', mode)
  },
}))

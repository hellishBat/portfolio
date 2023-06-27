// Theme Types
import { ReactNode } from 'react'

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeProviderProps {
  children: ReactNode
}

export interface ThemeContextValue {
  changeMode: (mode: Mode) => void
  mode: Mode
}

export interface ThemeColorPalette {
  primary: string
  secondary: string
  secondaryGradient: string
  accent: string
  accentHovered: string
  accentGradient: string
  overlay: string
  textPrimary: string
  textSecondary: string
}

export interface Theme {
  colors: ThemeColorPalette
}

export type ThemeSwitchButtonProps = {
  onClick: () => void
  mode: Mode
  animate?: boolean
}

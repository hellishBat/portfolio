// Theme Types
import { ReactNode } from 'react'

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeProviderTypes {
  children: ReactNode
}

export interface ThemeContextTypes {
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

export interface ThemeTypes {
  colors: ThemeColorPalette
}

export type ThemeSwitchProps = {
  clickHandler: () => void
  mode: Mode
}

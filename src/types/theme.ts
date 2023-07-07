// Theme Types

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeStore {
  theme: Theme
  mode: Mode
  changeMode: (mode: Mode) => void
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

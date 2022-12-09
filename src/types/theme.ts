// Theme Types
export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface IThemeProviderProps {
  children: React.ReactNode
}

export interface IThemeContext {
  changeMode: (mode: Mode) => void
  mode: Mode
}

export interface ITheme {
  colors: {
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
}

export type ThemeSwitchTypes = {
  clickHandler: (fn: any) => void
  mode: string
}

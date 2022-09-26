// Theme Types
export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeProviderProps {
  children: React.ReactNode
}

export interface ThemeContext {
  changeMode: (mode: Mode) => void
  mode: Mode
}

export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    text: string
  }
}

export type ThemeSwitchTypes = {
  clickHandler: (fn: any) => void
  mode: string
}

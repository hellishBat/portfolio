// ThemeContext
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from '@/themes'
import GlobalStyles from '@/styles/global'
import { Mode } from '@/types/theme'
import type { ThemeContextValue, ThemeProviderProps, Theme } from '@/types/theme'

const getInitialMode = (): Mode => {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return isDark ? Mode.Dark : Mode.Light
}

const AppThemeContext = createContext<ThemeContextValue>({
  changeMode: () => {},
  mode: Mode.Light,
})

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(LightTheme)
  const [mode, setMode] = useState<Mode>(getInitialMode())

  const changeMode = (mode: Mode | any) => {
    setTheme(mode === Mode.Light ? LightTheme : DarkTheme)
    setMode(mode)
    window.localStorage.setItem('theme', mode)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && changeMode(localTheme)
  }, [theme])

  return (
    <AppThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(AppThemeContext)

export default AppThemeProvider

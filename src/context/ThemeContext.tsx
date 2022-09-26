// ThemeContext
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from '@/themes'
import GlobalStyles from '@/styles/global'
import type { ThemeContext, ThemeProviderProps, Theme } from '@/types/theme'
import { Mode } from '@/types/theme'

const initialValue = {
  changeMode: () => {},
  mode: Mode.Light,
}

const AppThemeContext = createContext<ThemeContext>(initialValue)

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(LightTheme)
  const [mode, setMode] = useState<Mode>(Mode.Light)

  const changeMode = (mode: Mode | any) => {
    setTheme(mode === Mode.Light ? LightTheme : DarkTheme)
    setMode(mode)
    window.localStorage.setItem('theme', mode)
    console.log(window.localStorage.getItem('theme'))
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

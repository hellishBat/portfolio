// ThemeContext
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from '@/themes'
import GlobalStyles from '@/styles/global'
import type { IThemeContext, IThemeProviderProps, ITheme } from '@/types/theme'
import { Mode } from '@/types/theme'

const initialValue = {
  changeMode: () => {},
  mode: Mode.Light,
}

const AppThemeContext = createContext<IThemeContext>(initialValue)

const AppThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(LightTheme)
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

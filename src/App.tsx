// App
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useMobileMenuStore, useThemeStore } from '@/store'
import Home from '@/pages/Home'
import GlobalStyles from '@/styles/global'
import { Mode } from '@/types/theme'

const App = () => {
  const { isOpen } = useMobileMenuStore()
  const { theme, changeMode } = useThemeStore()

  useEffect(() => {
    const body = document.body
    isOpen ? body.classList.add('isLocked') : body.classList.remove('isLocked')
  }, [isOpen])

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      changeMode(localTheme as Mode)
    }
  }, [changeMode])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App

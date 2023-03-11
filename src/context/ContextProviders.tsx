// ContextProviders
import { FC } from 'react'
import AppThemeProvider from './ThemeContext'
import NavProvider from './NavContext'
import type { ChildrenProp } from '@/types'

const ContextProviders: FC<ChildrenProp> = ({ children }) => {
  return (
    <AppThemeProvider>
      <NavProvider>{children}</NavProvider>
    </AppThemeProvider>
  )
}

export default ContextProviders

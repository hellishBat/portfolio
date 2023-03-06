// ContextProviders
import { FC } from 'react'
import AppThemeProvider from './ThemeContext'
import NavProvider from './NavContext'
import type { ChildrenProps } from '@/types'

const ContextProviders: FC<ChildrenProps> = ({ children }) => {
  return (
    <AppThemeProvider>
      <NavProvider>{children}</NavProvider>
    </AppThemeProvider>
  )
}

export default ContextProviders

// ContextProviders
import { FC } from 'react'
import AppThemeProvider from './ThemeContext'
import NavProvider from './NavContext'
import type { ChildrenTypes } from '@/types'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return (
    <AppThemeProvider>
      <NavProvider>{children}</NavProvider>
    </AppThemeProvider>
  )
}

export default ContextProviders

// ContextProviders
import { FC } from 'react'
import AppThemeProvider from './ThemeContext'
import type { ChildrenTypes } from '@/types'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>
}

export default ContextProviders

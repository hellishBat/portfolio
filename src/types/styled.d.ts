import type {} from 'styled-components/cssprop'
import type { ThemeTypes } from '@/types/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}

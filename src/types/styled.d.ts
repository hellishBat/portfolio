import type {} from 'styled-components/cssprop'
import type { ITheme } from '@/types/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

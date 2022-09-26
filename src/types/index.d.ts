// Types
import { ReactNode } from 'react'

// Common
export type ChildrenTypes = {
  children: ReactNode | ReactNode[]
}

export type ClickHandlerType = {
  clickHandler: (fn: any) => void
}

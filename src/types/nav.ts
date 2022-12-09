// Nav Types
import type { ChildrenTypes } from '@/types'

export interface INavContext {
  activeNavLinkId: string
  setActiveNavLinkId: (fn: string) => void
}

export type NavProps = ChildrenTypes & {
  data: NavLinkProps[]
}

export type NavLinkProps = ChildrenTypes & {
  linkId: string
  targetId: string
  text: string
}

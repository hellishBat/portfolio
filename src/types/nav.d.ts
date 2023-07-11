// Nav Types
import { MutableRefObject } from 'react'

export interface NavStore {
  activeNavLinkId: string
  setActiveNavLinkId: (linkId: string) => void
}

export interface NavLinkProps {
  linkId: string
  targetId: string
  text: string
  onClick?: () => void
}

export interface NavProps {
  data: NavLinkProps[]
}

export type ElementRef = MutableRefObject<HTMLElement | null>

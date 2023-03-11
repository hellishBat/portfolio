// Nav Types
import { MutableRefObject } from 'react'

export interface NavContextValue {
  activeNavLinkId: string
  setActiveNavLinkId: (id: string) => void
}

export interface NavLinkProps {
  linkId: string
  targetId: string
  text: string
  onClick?: () => void
}

export type NavDataProps = {
  data: NavLinkProps[]
}

export type NavRef = MutableRefObject<HTMLElement | null>

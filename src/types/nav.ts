// Nav Types
import { MutableRefObject } from 'react'

export interface NavContextTypes {
  activeNavLinkId: string
  setActiveNavLinkId: (id: string) => void
}

export interface NavLinkProps {
  linkId: string
  targetId: string
  text: string
  onClick?: () => void
}

export type NavProps = {
  data: NavLinkProps[]
}

export type UseNavReturnType = MutableRefObject<HTMLElement | null>

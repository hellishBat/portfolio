// NavLink
import { FC } from 'react'
import * as S from './styles'
import { useNavContext } from '@/context'
import { scrollToSection } from '@/utils/scrolling'
import type { NavLinkProps } from '@/types/nav'

export const NavLink: FC<NavLinkProps> = ({ linkId, targetId, text }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useNavContext()

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setActiveNavLinkId(linkId)
    scrollToSection(targetId)
  }

  return (
    <S.Link
      className={`${activeNavLinkId === linkId ? 'isActive' : ''}`}
      id={linkId}
      href="#"
      onClick={handleClick}
    >
      {text}
    </S.Link>
  )
}

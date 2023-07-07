// Nav
import { FC } from 'react'
import { useMobileMenuStore } from '@/store'
import { NavLink } from '../'
import * as S from './styles'
import { NavDataProps } from '@/types/nav'

export const Nav: FC<NavDataProps> = ({ data }) => {
  const { isOpen, toggleMenu, openMenu, closeMenu } = useMobileMenuStore()

  return (
    <S.Nav isOpen={isOpen}>
      <S.Ul>
        {data.map((link, idx) => (
          <S.Li onClick={toggleMenu} onBlur={closeMenu} onFocus={openMenu} key={idx}>
            <NavLink linkId={link.linkId} targetId={link.targetId} text={link.text} />
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  )
}

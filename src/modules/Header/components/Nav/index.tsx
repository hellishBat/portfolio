// Nav
import { FC, Key } from 'react'
import { useMobileMenuContext } from '@/context/MobileMenuContext'
import { NavLink } from '../'
import * as S from './styles'
import { NavProps } from '@/types/nav'

export const Nav: FC<NavProps> = ({ data }) => {
  const { isOpen, toggleMenu, openMenu, closeMenu } = useMobileMenuContext()

  return (
    <S.Nav isOpen={isOpen}>
      <S.Ul>
        {data.map((link, idx: Key | null | undefined) => (
          <S.Li onClick={toggleMenu} onBlur={closeMenu} onFocus={openMenu} key={idx}>
            <NavLink linkId={link.linkId} targetId={link.targetId} text={link.text} />
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  )
}

// Nav Styles
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { media } from '@/styles/media'
import { MobileMenuProps } from '@/types/mobileMenu'

const Nav = styled.nav<MobileMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 6.5rem 0 3rem;
  margin: 0 auto;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.85)};
  font-size: 1.5rem;
  text-align: center;
  transform: translateX(100%);
  transition: transform 0.5s ease-out 0s;
  backdrop-filter: saturate(180%) blur(20px);

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}

  ${media.lg} {
    position: static;
    height: auto;
    align-items: center;
    padding: 0;
    background-color: transparent;
    font-size: 1rem;
    transform: unset;
    backdrop-filter: none;
  }
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.lg} {
    flex-direction: row;
    gap: 0;
    margin: 0 -0.75em;
  }

  ${media.xl} {
    gap: 2rem;
  }
`

const Li = styled.li`
  ${media.lg} {
    padding: 0 0.75em;
  }
`

export { Nav, Ul, Li }

// Logo Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

export const LogoLink = styled.a`
  display: flex;
  margin-right: 0.5rem;
  font-size: 2rem;
  line-height: 1;
  border-radius: 50%;

  ${media.lg} {
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transition: all 0.25s ease-out;
    }
  }
`

// ThemeSwitch Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 0.5rem;
  border-radius: 50%;

  > svg {
    font-size: 1.5em;
  }

  ${media.md} {
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transition: all 0.25s ease-out;
    }
  }
`

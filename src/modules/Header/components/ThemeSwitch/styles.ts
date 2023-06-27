// ThemeSwitch Styles
import styled, { css, keyframes } from 'styled-components'
import { media } from '@/styles/media'

const scaleIn = keyframes`
  0% {
    transform: scale(0) rotate(-90deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`

export const Button = styled.button<{ animate?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 0.5rem;
  border-radius: 50%;

  > svg {
    font-size: 1.5em;
    transition: transform 0.3s ease-out;
  }

  ${media.md} {
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transition: all 0.25s ease-out;

      > svg {
        transform: scale(1.2);
      }
    }
  }

  ${({ animate }) =>
    animate &&
    css`
      > svg {
        transform: scale(0) rotate(-90deg);
        animation: ${scaleIn} 0.5s ease-out forwards;
      }
    `}
`

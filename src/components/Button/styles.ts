// Button Styles
import styled, { css } from 'styled-components'
import { darken, rgba } from 'polished'
import { media } from '@/styles/media'
import { ButtonProps } from '@/types'

const SIZE = {
  sm: css`
    gap: 0.25rem;
    padding: 0.5rem 0.625rem;
    font-size: 0.875rem;
  `,
  md: css`
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  `,
  lg: css`
    gap: 0.75rem;
    padding: 0.9375rem 1.875rem;
    font-size: 1.25rem;
  `,
}

const VARIANT = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: var(--shadow-md);
    font-weight: 700;
    color: var(--color-white);

    ${media.lg} {
      &:hover {
        background-color: ${({ theme }) => theme.colors.accentHovered};
        box-shadow: var(--shadow-lg);
      }

      &:active {
        box-shadow: inset 0 0.1875rem 0.25rem rgba(0, 0, 0, 0.5);
      }
    }
  `,

  secondary: css`
    outline: 0.125rem solid currentColor;
    outline-offset: -0.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};

    ${media.lg} {
      &:hover {
        color: ${({ theme }) => theme.colors.accentHovered};
        background-color: ${({ theme }) => rgba(theme.colors.accentHovered, 0.1)};
      }

      &:active {
        color: ${({ theme }) => darken('0.075', theme.colors.accentHovered)};
      }
    }
  `,

  text: css`
    gap: 0.5rem;
    padding: 0 0.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    ${media.lg} {
      &:hover {
        color: ${({ theme }) => theme.colors.accentHovered};
      }

      &:active {
        color: ${({ theme }) => darken('0.075', theme.colors.accentHovered)};
      }
    }
  `,

  icon: css`
    svg:only-child {
      font-size: 1em;
    }

    ${media.lg} {
      &:hover {
        color: ${({ theme }) => theme.colors.accentHovered};
      }

      &:active {
        color: ${({ theme }) => darken('0.075', theme.colors.accentHovered)};
      }
    }
  `,
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
  ${({ size }) => size && SIZE[size]}
  ${({ variant }) => variant && VARIANT[variant]}
  
  svg {
    font-size: 1.25em;
  }

  ${media.lg} {
    &:hover {
      transition: all 0.25s ease-out;
    }
  }
`

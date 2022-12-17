// Chip Styles
import styled, { css } from 'styled-components'
import { ChipProps } from '@/types'

const COLOR = {
  yellow: css`
    background-color: var(--color-yellow-200);
    color: var(--color-yellow-900);
  `,
  brown: css`
    background-color: var(--color-brown-200);
    color: var(--color-brown-900);
  `,
  cyan: css`
    background-color: var(--color-cyan-200);
    color: var(--color-cyan-900);
  `,
  blue: css`
    background-color: var(--color-blue-200);
    color: var(--color-blue-900);
  `,
  sky: css`
    background-color: var(--color-sky-200);
    color: var(--color-sky-900);
  `,
  royal: css`
    background-color: var(--color-royal-200);
    color: var(--color-royal-900);
  `,
  indigo: css`
    background-color: var(--color-indigo-200);
    color: var(--color-indigo-900);
  `,
  pink: css`
    background-color: var(--color-pink-200);
    color: var(--color-pink-900);
  `,
  rose: css`
    background-color: var(--color-rose-200);
    color: var(--color-rose-900);
  `,
}

export const Chip = styled.span<ChipProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.275rem 0.5rem;
  border-radius: 1rem;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  ${({ color }) => color && COLOR[color]}

  > svg {
    font-size: 1.25em;
  }
`

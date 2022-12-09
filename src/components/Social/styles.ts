// Social Styles
import styled, { css } from 'styled-components'
import { media } from '@/styles/media'
import { SocialProps } from '@/types'

const SIZE = {
  md: css`
    gap: 0.75rem;
    font-size: 1.5rem;
  `,
  lg: css`
    gap: 1rem;
    font-size: 2rem;
  `,
}

const Ul = styled.ul<SocialProps>`
  display: flex;
  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
    `}
  padding: 0;
  ${({ size }) => size && SIZE[size]}
  line-height: 1;
`

const Link = styled.a`
  ${media.md} {
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transition: all 0.25s ease-out;
    }
  }
`
export { Ul, Link }

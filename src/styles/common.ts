// Common Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

export const Section = styled.section`
  padding: 4rem 0;
  will-change: opacity;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  ${media.md} {
    padding: 5rem 0;
  }

  ${media.xxl} {
    padding: 6rem 0;
  }
`

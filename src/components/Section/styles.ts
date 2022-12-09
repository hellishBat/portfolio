// Section Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

interface SectionProps {
  imageUrl?: string
}

export const Section = styled.section<SectionProps>`
  padding: 4rem 0;

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

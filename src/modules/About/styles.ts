// About Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.25rem;

  ${media.md} {
    font-size: 1.125rem;
    gap: 3rem;
  }

  ${media.lg} {
    flex-direction: row;
    gap: 4rem;
  }

  ${media.xl} {
    gap: 6rem;
  }
`

const Col = styled.div`
  > p:last-of-type {
    margin-bottom: 1.5rem;
  }
`

export { Content, Col }

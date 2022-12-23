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

const Img = styled.figure`
  flex-shrink: 0;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-image: ${({ theme }) => theme.colors.accentGradient};
  overflow: hidden;

  > img {
    max-width: 100%;
    height: auto;
  }

  ${media.md} {
    width: 12rem;
    height: 12rem;
  }

  ${media.xxl} {
    width: 16rem;
    height: 16rem;
  }
`

const Col = styled.div`
  > p:last-of-type {
    margin-bottom: 1.5rem;
  }
`

export { Content, Img, Col }

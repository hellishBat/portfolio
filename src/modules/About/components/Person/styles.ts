// Person Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

const Person = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 10rem;

  ${media.md} {
    width: 12rem;
  }

  ${media.xxl} {
    width: 16rem;
  }
`

const PersonContainer = styled.div`
  display: grid;
  align-items: end;
  border-radius: 0 0 100vw 100vw;
  aspect-ratio: 1/1.17;
  overflow: hidden;
`

const Circle = styled.figure`
  position: absolute;
  z-index: 1;
  inset: auto 0 0;
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background-image: ${({ theme }) => theme.colors.accentGradient};
`

const Image = styled.img`
  position: relative;
  z-index: 2;
  inset: auto 0 5%;
  max-width: 100%;
  height: auto;
  transform: scale(1.4);
  pointer-events: none;
`

export { Person, PersonContainer, Circle, Image }

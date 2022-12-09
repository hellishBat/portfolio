// WorksCard Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondaryGradient};
  border-radius: 0.5rem;
  box-shadow: var(--shadow-xl);
  overflow: hidden;

  ${media.lg} {
    flex-direction: row;

    &:hover img {
      transform: scale(1.05);
    }
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--spacing-sm);
`

const Figure = styled.figure`
  flex: 1 0 auto;
  overflow: hidden;

  ${media.lg} {
    aspect-ratio: 1/1;
    flex-basis: 50%;
  }
`

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  object-position: top;
  transition: transform 0.25s ease-out;
  will-change: transform;

  ${media.lg} {
    aspect-ratio: 1/1;
  }
`

const TagArray = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: var(--spacing-sm) 0;
`

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.75rem;
`

export { Card, Body, Figure, Img, TagArray, Buttons }

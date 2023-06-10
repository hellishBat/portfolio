// Works Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

export const Gallery = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  padding: 0 1rem;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  ${media.sm} {
    padding: 0;
  }
`

export const GalleryItem = styled.div`
  flex-shrink: 0;
  max-width: 18rem;
  height: auto;
  cursor: grab;

  &:first-child {
    margin-left: calc(((100% - var(--max-width)) / 2) + 1rem);
  }

  &:last-child {
    margin-right: calc(((100% - var(--max-width)) / 2) + 1rem);
  }

  ${media.sm} {
    max-width: 20rem;
  }

  ${media.lg} {
    max-width: 39.5rem;
  }
`

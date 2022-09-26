// Container Styles
import styled from 'styled-components'
import { media } from '@/styles/media'
import { mxWidth } from '@/constants'

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  ${media.xs} {
    max-width: ${mxWidth.xs};
  }

  ${media.sm} {
    max-width: ${mxWidth.sm};
  }

  ${media.md} {
    max-width: ${mxWidth.md};
  }

  ${media.lg} {
    max-width: ${mxWidth.lg};
  }

  ${media.xl} {
    max-width: ${mxWidth.xl};
  }

  ${media.xxl} {
    max-width: ${mxWidth.xxl};
  }
`

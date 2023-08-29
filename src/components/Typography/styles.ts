// Typography Styles
import styled from 'styled-components'
import { media } from '@/styles/media'

const Title = styled.h1`
  margin: 0 0 0.75rem;
  font-weight: 300;
  line-height: 1;
  font-size: 3.75rem;

  > strong {
    font-weight: 700;
  }

  ${media.md} {
    margin: 0 0 1rem;
    font-size: 4.5rem;
  }

  ${media.lg} {
    font-size: 5.25rem;
  }

  ${media.xl} {
    margin: 0 0 1.5rem;
    font-size: 6rem;
  }

  ${media.xxl} {
    font-size: 6.75rem;
  }
`

const Subtitle = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.1;
  opacity: 0.55;

  ${media.md} {
    font-size: 1.75rem;
  }

  ${media.xxl} {
    font-size: 2.25rem;
  }
`

const Heading = styled.h3`
  margin: 0 0 2rem 0;
  font-size: 1.875rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;

  ${media.md} {
    margin: 0 0 3rem 0;
    font-size: 2.25rem;
  }
`

const Subheading = styled.h4`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;

  ${media.md} {
    font-size: 1.5rem;
  }
`

const CardHeading = styled.h5`
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};

  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`

export { Title, Subtitle, Heading, Subheading, CardHeading, Paragraph }

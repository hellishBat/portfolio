// Skills Styles
import styled from 'styled-components'
import { rgba } from 'polished'
import { media } from '@/styles/media'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2.25rem;
  align-items: center;

  ${media.lg} {
    flex-direction: row;
    gap: 3rem;
  }

  ${media.lg} {
    gap: 4rem;
  }
`

const ContentCol = styled.div`
  width: 100%;
`

const CloudCol = styled.div`
  max-width: 18rem;

  ${media.lg} {
    max-width: 16rem;
  }

  ${media.xxl} {
    max-width: 20rem;
  }
`

const Ul = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const Li = styled.li`
  padding: 0 0.75rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => rgba(theme.colors.textSecondary, 0.1)};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
`

export { Wrapper, ContentCol, CloudCol, Ul, Li }

// ScrollIndicator Styles
import styled from 'styled-components'

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1875rem;
`

const ScrollProgress = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.accentGradient};
`

export { ScrollContainer, ScrollProgress }

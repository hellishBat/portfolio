// Loader Styles
import styled, { keyframes } from 'styled-components'

const elasticShake = keyframes`
0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
  
  `

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

const LogoWrapper = styled.figure`
  font-size: 3rem;
  animation: ${elasticShake} 0.8s ease-in-out infinite both;
`

export { Container, LogoWrapper }

// Footer Styles
import styled from 'styled-components'

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
`

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export { Footer, Inner }

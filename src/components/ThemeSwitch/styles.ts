// ThemeSwitch Styles
import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.25em;
  font-weight: bold;
  color: #fff;

  > svg {
    font-size: 1.25em;
  }
`

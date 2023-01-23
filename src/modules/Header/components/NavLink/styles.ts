// NavLink Styles
import styled from 'styled-components'

export const Link = styled.a`
  position: relative;
  padding: 0 0.1rem;
  border-radius: 0.25rem;
  font-weight: 700;
  letter-spacing: 0.094em;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:before {
    position: absolute;
    bottom: -0.1875em;
    left: 0;
    width: 100%;
    height: 0.1875em;
    display: block;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.25s ease-out 0s;
    content: '';
  }

  &.isActive,
  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: all 0.25s ease-out;

    &.isActive::before,
    &::before {
      transform: scaleX(1);
    }
  }
`

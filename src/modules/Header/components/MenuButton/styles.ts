// MenuButton Styles
import styled, { css } from 'styled-components'
import { media } from '@/styles/media'
import { MobileMenuButtonProps } from '@/types/mobileMenu'

export const Button = styled.button<MobileMenuButtonProps>`
  position: relative;
  z-index: 102;
  display: flex;
  padding: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      > svg path {
        &:first-child {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
        }

        &:nth-child(2) {
          stroke-dasharray: 1 60;
          stroke-dashoffset: -30;
          stroke-width: 6;
        }

        &:last-child {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
        }
      }
    `}

  & path {
    fill: none;
    stroke: currentColor;
    stroke-width: 6;
    transition: stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:first-child {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }

    &:nth-child(2) {
      stroke-dasharray: 60 60;
      stroke-width: 6;
    }

    &:last-child {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
  }

  ${media.lg} {
    display: none;
  }
`

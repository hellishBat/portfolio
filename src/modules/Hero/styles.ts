// Hero Styles
import styled from 'styled-components'
import { HeroProps } from '@/types'

const Section = styled.section<HeroProps>`
  position: relative;
  z-index: 0;
  margin-top: var(--header-height);
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--color-white);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.overlay};
    mix-blend-mode: multiply;
    content: '';
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0;
  min-height: 45vh;
`

const SocialCol = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
`

const PointerText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
  writing-mode: vertical-lr;
  opacity: 0.6;

  &:before {
    display: block;
    width: 3px;
    height: 50px;
    background-color: currentColor;
    content: '';
  }
`

export { Section, Inner, SocialCol, PointerText }

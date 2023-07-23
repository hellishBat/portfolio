// Header
import { useRef } from 'react'
import { Container } from '@/components'
import { Nav, Logo, MenuButton, ThemeSwitch, ScrollIndicator } from './components'
import { scrollToTop } from '@/utils/scrolling'
import * as S from './styles'
import { Mode } from '@/types/theme'
import { useMobileMenuStore, useThemeStore } from '@/store'
import data from '@/data/index.json'

const navData = data.nav

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  const { isOpen, toggleMenu } = useMobileMenuStore()
  const { mode, changeMode } = useThemeStore()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }

  return (
    <S.Header ref={headerRef}>
      <Container>
        <S.Wrapper>
          <Logo href="#" onClick={scrollToTop} />
          <Nav data={navData} />
          <S.Buttons>
            <ThemeSwitch onClick={toggleMode} mode={mode} />
            <MenuButton onClick={toggleMenu} isOpen={isOpen} />
          </S.Buttons>
        </S.Wrapper>
      </Container>
      <ScrollIndicator />
    </S.Header>
  )
}

export default Header

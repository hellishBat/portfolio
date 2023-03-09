// Header
import { useThemeContext } from '@/context/ThemeContext'
import { useMobileMenuContext } from '@/context/MobileMenuContext'
import { Container } from '@/components'
import { Nav, Logo, MenuButton, ThemeSwitch, ScrollIndicator } from './components'
import { scrollToTop } from '@/utils/scrolling'
import * as S from './styles'
import { Mode } from '@/types/theme'
import data from '@/data/index.json'

const navData = data.nav

const Header = () => {
  const { mode, changeMode } = useThemeContext()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }

  const { isOpen, toggleMenu } = useMobileMenuContext()

  return (
    <S.Header>
      <Container>
        <S.Wrapper>
          <Logo href="#" clickHandler={scrollToTop} />
          <Nav data={navData} />
          <ThemeSwitch clickHandler={toggleMode} mode={mode} />
          <MenuButton clickHandler={toggleMenu} isOpen={isOpen} />
        </S.Wrapper>
      </Container>
      <ScrollIndicator />
    </S.Header>
  )
}

export default Header

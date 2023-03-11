// Header
import { useMobileMenuContext, useThemeContext } from '@/context'
import { Container } from '@/components'
import { Nav, Logo, MenuButton, ThemeSwitch, ScrollIndicator } from './components'
import { scrollToTop } from '@/utils/scrolling'
import * as S from './styles'
import { Mode } from '@/types/theme'
import data from '@/data/index.json'

const navData = data.nav

const Header = () => {
  const { isOpen, toggleMenu } = useMobileMenuContext()

  const { mode, changeMode } = useThemeContext()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }

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

// Header
import { useEffect, useState, useRef } from 'react'
import { useThemeContext } from '@/context/ThemeContext'
import Container from '@/components/Container'
import ThemeSwitch from '@/components/ThemeSwitch'
import { StyledHeader } from './styles'
import { Mode } from '@/types/theme'

const Header = () => {
  const { mode, changeMode } = useThemeContext()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)

  const handleScroll = () => {
    const offsetY = window.scrollY
    if (offsetY >= 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <StyledHeader ref={headerRef}>
      <Container>
        <div
          css={`
            display: flex;
            justify-content: space-between;
          `}
        >
          <a href="/">Link</a>
          <ThemeSwitch clickHandler={toggleMode} mode={mode} />
        </div>
      </Container>
    </StyledHeader>
  )
}

export default Header

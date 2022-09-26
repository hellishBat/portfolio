// ThemeSwitch
import { FC } from 'react'
import { StyledButton } from './styles'
import { IconLightMode, IconDarkMode } from '@/assets'
import { Mode, ThemeSwitchTypes } from '@/types/theme'

const ThemeSwitch: FC<ThemeSwitchTypes> = ({ clickHandler, mode }) => {
  return (
    <StyledButton onClick={clickHandler}>
      {mode === Mode.Light ? (
        <>
          <IconLightMode />
          Light Mode
        </>
      ) : (
        <>
          <IconDarkMode /> Dark Mode
        </>
      )}
    </StyledButton>
  )
}

export default ThemeSwitch

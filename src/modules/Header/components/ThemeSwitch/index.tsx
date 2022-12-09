// ThemeSwitch
import { FC } from 'react'
import * as S from './styles'
import { IconLightMode, IconDarkMode } from '@/assets'
import { Mode, ThemeSwitchTypes } from '@/types/theme'

export const ThemeSwitch: FC<ThemeSwitchTypes> = ({ clickHandler, mode }) => {
  return (
    <S.Button onClick={clickHandler}>
      {mode === Mode.Light ? <IconLightMode /> : <IconDarkMode />}
    </S.Button>
  )
}

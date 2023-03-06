// ThemeSwitch
import { FC } from 'react'
import * as S from './styles'
import { IconLightMode, IconDarkMode } from '@/assets'
import { Mode, ThemeSwitchProps } from '@/types/theme'

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ clickHandler, mode }) => {
  return (
    <S.Button onClick={clickHandler} title="Switch Theme">
      {mode === Mode.Light ? <IconLightMode /> : <IconDarkMode />}
    </S.Button>
  )
}

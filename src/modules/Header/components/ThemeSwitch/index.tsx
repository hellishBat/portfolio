// ThemeSwitch
import { FC } from 'react'
import * as S from './styles'
import { IconLightMode, IconDarkMode } from '@/assets'
import { Mode } from '@/types/theme'
import type { ThemeSwitchButtonProps } from '@/types/theme'

export const ThemeSwitch: FC<ThemeSwitchButtonProps> = ({ clickHandler, mode }) => {
  return (
    <S.Button onClick={clickHandler} title="Switch Theme">
      {mode === Mode.Light ? <IconLightMode /> : <IconDarkMode />}
    </S.Button>
  )
}

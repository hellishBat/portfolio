// ThemeSwitch
import { FC, useState } from 'react'
import * as S from './styles'
import { IconLightMode, IconDarkMode } from '@/assets'
import { Mode } from '@/types/theme'
import type { ThemeSwitchButtonProps } from '@/types/theme'

export const ThemeSwitch: FC<ThemeSwitchButtonProps> = ({ onClick, mode }) => {
  const [animate, setAnimate] = useState<boolean>(false)

  const handleOnClick = () => {
    setAnimate(true)
    onClick()
  }

  return (
    <S.Button onClick={handleOnClick} title="Switch Theme" animate={animate}>
      {mode === Mode.Light ? <IconLightMode /> : <IconDarkMode />}
    </S.Button>
  )
}

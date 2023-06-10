// Logo
import { FC } from 'react'
import * as S from './styles'
import { LogoVS } from '@/assets'
import type { LogoProps } from '@/types'

export const Logo: FC<LogoProps> = ({ href, onClick }) => {
  return (
    <S.LogoLink href={href} onClick={onClick}>
      <LogoVS title="Valentine Samoylov" />
    </S.LogoLink>
  )
}

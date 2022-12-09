// Chip
import { FC } from 'react'
import * as S from './styles'
import type { ChipProps } from '@/types'

export const Chip: FC<ChipProps> = ({ color, children }) => {
  return <S.Chip color={color}>{children}</S.Chip>
}

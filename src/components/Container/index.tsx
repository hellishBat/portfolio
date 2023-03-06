// Container
import { FC } from 'react'
import * as S from './styles'
import type { ChildrenProps } from '@/types'

export const Container: FC<ChildrenProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

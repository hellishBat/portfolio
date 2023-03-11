// Container
import { FC } from 'react'
import * as S from './styles'
import type { ChildrenProp } from '@/types'

export const Container: FC<ChildrenProp> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

// Container
import { FC } from 'react'
import * as S from './styles'
import type { ChildrenTypes } from '@/types'

export const Container: FC<ChildrenTypes> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

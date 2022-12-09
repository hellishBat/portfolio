// Section
import { FC } from 'react'
import * as S from './styles'
import type { SectionProps } from '@/types'

export const Section: FC<SectionProps> = ({ id, imageUrl, children }) => {
  return (
    <S.Section id={id} imageUrl={imageUrl}>
      {children}
    </S.Section>
  )
}

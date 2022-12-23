// Person
import { FC } from 'react'
import * as S from './styles'
import type { PersonProps } from '@/types'

export const Person: FC<PersonProps> = ({ image }) => {
  return (
    <S.Person>
      <S.PersonContainer>
        <S.Circle id="aboutCircle" />
        <S.Image id="aboutImg" src={image} alt="Valentine Samoylov" loading="lazy" />
      </S.PersonContainer>
    </S.Person>
  )
}

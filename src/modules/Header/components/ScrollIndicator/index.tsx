//ScrollIndicator
import { useScrollIndicator } from '@/hooks/useScrollIndicator'
import * as S from './styles'

export const ScrollIndicator = () => {
  const scroll = useScrollIndicator()

  return (
    <S.ScrollContainer>
      <S.ScrollProgress style={{ width: `${scroll}%` }} />
    </S.ScrollContainer>
  )
}

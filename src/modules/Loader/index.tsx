// Loader
import * as S from './styles'
import data from '@/data/index.json'
import { LogoVS } from '@/assets'

const Loader = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoVS />
      </S.LogoWrapper>
      <S.LogoLabel>{data.loader.text}</S.LogoLabel>
    </S.Container>
  )
}

export default Loader

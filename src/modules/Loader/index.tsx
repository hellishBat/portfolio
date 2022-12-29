// Loader
import * as S from './styles'
import { Typography } from '@/components'
import data from '@/data/index.json'
import { LogoVS } from '@/assets'

const Loader = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoVS />
      </S.LogoWrapper>
      <Typography variant="p">{data.loader.text}</Typography>
    </S.Container>
  )
}

export default Loader

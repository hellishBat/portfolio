// Loader
import * as S from './styles'
import { Typography } from '@/components'
import { LogoVS } from '@/assets'

const Loader = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoVS />
      </S.LogoWrapper>
      <Typography variant="p">Loading...</Typography>
    </S.Container>
  )
}

export default Loader

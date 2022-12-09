// Footer
import { Container } from '@/components'
import * as S from './styles'
import data from '@/data/index.json'
import { IconHeart } from '@/assets'

const footerData = data.footer

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.Inner>
          <span>{footerData.text[0]}</span>
          <IconHeart />
          <span>{footerData.text[1]}</span>
        </S.Inner>
      </Container>
    </S.Footer>
  )
}

export default Footer

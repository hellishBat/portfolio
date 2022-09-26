// Footer
import Container from '@/components/Container'
import { flexJustifyCenter } from '@/styles'
import { StyledFooter } from './styles'
import { IconHeart } from '@/assets'

const Footer = () => {
  return (
    <StyledFooter
      css={`
        text-align: center;
      `}
    >
      <Container>
        <div
          css={`
            ${flexJustifyCenter} gap: 0.3em;
          `}
        >
          <span>Coded with</span>
          <IconHeart />
          <span>by Valentine Samoylov</span>
        </div>
      </Container>
    </StyledFooter>
  )
}

export default Footer

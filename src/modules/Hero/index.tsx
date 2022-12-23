// Hero
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThemeContext } from '@/context/ThemeContext'
import { Container, Typography, Button, Social } from '@/components'
import { useNav } from '@/hooks/useNav'
import { scrollToSection } from '@/utils/scrollToSection'
import * as S from './styles'
import data from '@/data/index.json'
import { IconArrowRight, heroBgLight, heroBgDark } from '@/assets'
import { Mode } from '@/types/theme'

const heroData = data.hero
const socialLinks = data.social.links

const handleClick = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  scrollToSection('worksSection')
}

const Hero = () => {
  const { mode } = useThemeContext()
  const heroRef = useNav('Hero')

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.to('#heroSection', {
      scrollTrigger: {
        trigger: '#heroSection',
        start: 'bottom 33%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#heroSection',
        },
      })
      .from('#heroTitle', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.25,
      })
      .from('#heroSubtitle', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      })
      .from('#heroSocial ul li', {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
      })
      .from('#heroSocial span', {
        yPercent: 15,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <S.Section
      id="heroSection"
      ref={heroRef}
      imageUrl={mode === Mode.Light ? heroBgLight : heroBgDark}
    >
      <Container>
        <S.Inner>
          <div>
            <Typography variant="h1" id="heroTitle">
              {heroData.firstName}
              <br />
              <strong>{heroData.lastName}</strong>
            </Typography>
            <Typography variant="h2" id="heroSubtitle">
              <span>{heroData.position}</span>
              <br />
              <span>{heroData.location}</span>
            </Typography>
            <Button size="lg" variant="primary" onClick={handleClick}>
              <span>{heroData.btn.label}</span>
              <IconArrowRight />
            </Button>
          </div>
          <S.SocialWrapper id="heroSocial">
            <Social data={socialLinks} vertical size="md" />
            <S.PointerText>{heroData.pointer}</S.PointerText>
          </S.SocialWrapper>
        </S.Inner>
      </Container>
    </S.Section>
  )
}

export default Hero

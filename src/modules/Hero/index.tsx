// Hero
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThemeStore } from '@/store'
import { Container, Typography, Button, Social } from '@/components'
import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
import { scrollToSection } from '@/utils/scrolling'
import * as S from './styles'
import data from '@/data/index.json'
import { IconArrowRight, heroBgLight, heroBgDark } from '@/assets'
import { Mode } from '@/types/theme'

const heroData = data.hero
const socialLinks = data.social.links

gsap.registerPlugin(ScrollTrigger)

const handleClick = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  scrollToSection('worksSection')
}

const Hero = () => {
  const { mode } = useThemeStore()
  const heroRef = useNav('Hero')

  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#heroSection',
        },
      })
      .from('#heroTitle', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine.out',
      })
      .from('#heroSubtitle', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine.out',
      })
      .from('#heroButton', {
        scale: 0,
        opacity: 0,
        stagger: 0.25,
        duration: 0.75,
        ease: 'back.out',
      })
      .from('#heroSocial ul li', {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: 'back.out',
      })
      .from('#heroSocial span', {
        yPercent: 15,
        opacity: 0,
        stagger: 0.25,
        duration: 0.5,
        ease: 'back.out',
      })

    gsap.to('#heroSection', {
      scrollTrigger: {
        trigger: '#heroSection',
        start: 'bottom 33%',
        end: 'bottom 0',
        scrub: true,
      },
      opacity: 0,
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
            <Button id="heroButton" size="lg" variant="primary" onClick={handleClick}>
              <span>{heroData.btn.label}</span>
              <IconArrowRight />
            </Button>
          </div>
          <S.SocialCol id="heroSocial">
            <Social data={socialLinks} vertical size="md" />
            <S.PointerText>{heroData.pointer}</S.PointerText>
          </S.SocialCol>
        </S.Inner>
      </Container>
    </S.Section>
  )
}

export default Hero

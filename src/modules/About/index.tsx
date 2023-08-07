// About
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
import { Container, Typography } from '@/components'
import { Person } from './components'
import * as S from './styles'
import * as SC from '@/styles/common'
import data from '@/data/index.json'
import { authorPhoto } from '@/assets'

const aboutData = data.about

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useNav('About')

  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#aboutSection',
          start: 'top 70%',
          end: 'top 33%',
        },
      })
      .from('#aboutHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine.out',
      })
      .from('#aboutCircle', {
        scale: 0,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
        ease: 'back.out',
      })
      .from('#aboutImg', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out',
      })
      .from('#aboutCol p', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        ease: 'sine.out',
      })

    gsap.to('#aboutSection', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'bottom 33%',
        end: 'bottom 0',
        scrub: true,
      },
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="aboutSection" ref={aboutRef}>
      <Container>
        <Typography variant="h3" id="aboutHeading">
          {aboutData.heading}
        </Typography>
        <S.Content>
          <Person image={authorPhoto} />
          <div id="aboutCol">
            {aboutData.description.map((paragraph, idx) => (
              <Typography variant="p" key={idx}>
                {paragraph.text}
              </Typography>
            ))}
          </div>
        </S.Content>
      </Container>
    </SC.Section>
  )
}

export default About

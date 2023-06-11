// Skills
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container, Typography } from '@/components'
import { IconCloud } from './components'
import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
import * as S from './styles'
import * as SC from '@/styles/common'
import data from '@/data/index.json'

const skillsData = data.skills

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const skillsRef = useNav('Skills')

  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#skillsSection',
          start: 'top 70%',
          end: 'top 33%',
        },
      })
      .from('#skillsHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine.out',
      })
      .from('#skillsCloud', {
        scale: 0,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
        ease: 'back.out',
      })
      .from('#skillsCol h4', {
        yPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        ease: 'sine.out',
      })
      .from('#skillsCol ul li', {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.25,
        ease: 'back.out',
      })

    gsap.to('#skillsSection', {
      scrollTrigger: {
        trigger: '#skillsSection',
        start: 'bottom 33%',
        end: 'bottom 0',
        scrub: true,
      },
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="skillsSection" ref={skillsRef}>
      <Container>
        <Typography variant="h3" id="skillsHeading">
          {skillsData.heading}
        </Typography>
        <S.Wrapper>
          <S.ContentCol id="skillsCol">
            <Typography variant="h4">{skillsData.subheading}</Typography>
            <S.Ul>
              {skillsData.list.map((skill, idx) => (
                <S.Li key={idx}>{skill}</S.Li>
              ))}
            </S.Ul>
          </S.ContentCol>
          <S.CloudCol id="skillsCloud">
            <IconCloud iconSlugs={skillsData.slugs} />
          </S.CloudCol>
        </S.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Skills

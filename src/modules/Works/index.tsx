// Works
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
import { Container, Typography } from '@/components'
import { WorksGallery } from './components'
import * as SC from '@/styles/common'
import data from '@/data/index.json'
import {
  previewMountain,
  previewPorten,
  previewCalc,
  previewKrypto,
  previewWeatherInsight,
} from '@/assets'

const worksData = data.works

const worksAssets = [
  {
    imgSrc: previewMountain,
  },
  {
    imgSrc: previewPorten,
  },
  {
    imgSrc: previewCalc,
  },
  {
    imgSrc: previewKrypto,
  },
  {
    imgSrc: previewWeatherInsight,
  },
]

const worksContent = worksAssets
  .map((item, idx) => ({
    ...item,
    ...worksData.content[idx],
  }))
  .reverse()

gsap.registerPlugin(ScrollTrigger)

const Works = () => {
  const worksRef = useNav('Works')

  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#worksSection',
          start: 'top 70%',
          end: 'top 33%',
        },
      })
      .from('#worksHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine.out',
      })
      .from('.swiper-slide article', {
        xPercent: 33,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out',
      })

    gsap.to('#worksSection', {
      scrollTrigger: {
        trigger: '#worksSection',
        start: 'bottom 33%',
        end: 'bottom 0',
        scrub: true,
      },
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="worksSection" ref={worksRef}>
      <Container>
        <Typography variant="h3" id="worksHeading">
          {worksData.heading}
        </Typography>
      </Container>
      <WorksGallery content={worksContent} />
    </SC.Section>
  )
}

export default Works

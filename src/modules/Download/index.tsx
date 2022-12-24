// Download
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import { Container, Typography, Button } from '@/components'
import * as SC from '@/styles/common'
import data from '@/data/index.json'
import { IconDownload } from '@/assets'

const downloadData = data.download

const Download = () => {
  const downloadRef = useNav('Download')

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#downloadSection',
          start: 'top bottom',
          end: 'top 40%',
        },
      })
      .from('#downloadHeading', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine',
      })
      .from('#downloadButton', {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        ease: 'back',
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="downloadSection" ref={downloadRef}>
      <Container>
        <Typography variant="h3" id="downloadHeading">
          {downloadData.heading}
        </Typography>
        <div
          css={`
            display: flex;
            justify-content: center;
          `}
        >
          <Button
            id="downloadButton"
            size="md"
            variant="primary"
            as="a"
            href={downloadData.btn.href}
            download
          >
            <IconDownload />
            {downloadData.btn.label}
          </Button>
        </div>
      </Container>
    </SC.Section>
  )
}

export default Download

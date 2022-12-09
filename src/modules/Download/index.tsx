// Download
import { useEffect } from 'react'
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

  useEffect(() => {
    gsap.from('#downloadHeading', {
      scrollTrigger: {
        trigger: '#downloadHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
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
          <Button size="md" variant="primary" as="a" href={downloadData.btn.href} download>
            <IconDownload />
            {downloadData.btn.label}
          </Button>
        </div>
      </Container>
    </SC.Section>
  )
}

export default Download

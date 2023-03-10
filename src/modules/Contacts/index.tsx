// Contacts
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import { Container, Typography } from '@/components'
import { Address } from './components'
import * as SC from '@/styles/common'
import data from '@/data/index.json'

const contactsData = data.contacts

const Contacts = () => {
  const contactsRef = useNav('Contacts')

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#contactsSection',
          start: 'top 70%',
          end: 'top 50%',
        },
      })
      .from('#contactsSection h3', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'sine',
      })
      .from('#contactsSection h4', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        ease: 'sine',
      })
      .from('#addressList a', {
        yPercent: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: 'sine',
      })
      .from('#addressSocial li', {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: 'back',
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <SC.Section id="contactsSection" ref={contactsRef}>
      <Container>
        <Typography variant="h3">{contactsData.heading}</Typography>
        <Typography variant="h4">{contactsData.subheading}</Typography>
        <Address />
      </Container>
    </SC.Section>
  )
}

export default Contacts

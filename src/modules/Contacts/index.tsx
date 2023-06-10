// Contacts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect, useNav } from '@/hooks'
import { Container, Typography } from '@/components'
import { Address } from './components'
import * as SC from '@/styles/common'
import data from '@/data/index.json'
import { IconPhone, IconMail } from '@/assets'

const socialLinks = data.social.links
const contactsData = data.contacts

const contactsIcons = [
  { icon: <IconPhone /> },
  {
    icon: <IconMail />,
  },
]

const contactsLinks = contactsData.links.map((item, idx) => ({
  ...item,
  ...contactsIcons[idx],
}))

gsap.registerPlugin(ScrollTrigger)

const Contacts = () => {
  const contactsRef = useNav('Contacts')

  useIsomorphicLayoutEffect(() => {
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
      .from('#contactsList a', {
        yPercent: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: 'sine',
      })
      .from('#contactsSocial li', {
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
        <Address contactsData={contactsLinks} socialData={socialLinks} />
      </Container>
    </SC.Section>
  )
}

export default Contacts

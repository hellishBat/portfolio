// SocialLink
import { FC, SVGProps } from 'react'
import { Button } from '@/components'
import { SocialLinkProps } from '@/types'
import { IconGitHub, IconLinkedIn, IconSkype, IconTelegram, IconInstagram } from '@/assets'

const iconMap = {
  github: IconGitHub,
  linkedin: IconLinkedIn,
  skype: IconSkype,
  telegram: IconTelegram,
  instagram: IconInstagram,
}

export const SocialLink: FC<SocialLinkProps> = ({ linkName, href }) => {
  let Component: FC<SVGProps<SVGSVGElement> & { title?: string }> | undefined
  let socialName: string | undefined

  switch (linkName) {
    case 'github':
      Component = iconMap.github
      socialName = 'GitHub'
      break
    case 'linkedin':
      Component = iconMap.linkedin
      socialName = 'LinkedIn'
      break
    case 'skype':
      Component = iconMap.skype
      socialName = 'Skype'
      break
    case 'telegram':
      Component = iconMap.telegram
      socialName = 'Telegram'
      break
    case 'instagram':
      Component = iconMap.instagram
      socialName = 'Instagram'
      break
      return null
  }

  if (!Component || !socialName || !href) {
    return null
  }

  return (
    <Button as="a" variant="icon" href={href} target="_blank" rel="noreferrer noopener">
      <Component title={socialName} />
    </Button>
  )
}

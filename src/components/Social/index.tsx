// Social
import { FC } from 'react'
import * as S from './styles'
import { Button } from '@/components'
import type { SocialProps } from '@/types'
import { IconGitHub, IconLinkedIn, IconSkype, IconTelegram, IconInstagram } from '@/assets'

const socialIcons = [
  {
    icon: <IconGitHub title="GitHub" />,
  },
  {
    icon: <IconLinkedIn title="LinkedIn" />,
  },
  {
    icon: <IconSkype title="Skype" />,
  },
  {
    icon: <IconTelegram title="Telegram" />,
  },
  {
    icon: <IconInstagram title="Instagram" />,
  },
]

export const Social: FC<SocialProps> = ({ data, vertical, size }) => {
  const socialData = data?.map((item, idx) => ({
    ...item,
    ...socialIcons[idx],
  }))

  return (
    <S.Ul vertical={vertical} size={size}>
      {socialData?.map((socialLink, idx) => (
        <li key={idx}>
          <Button
            as="a"
            variant="icon"
            href={socialLink.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {socialLink.icon}
          </Button>
        </li>
      ))}
    </S.Ul>
  )
}

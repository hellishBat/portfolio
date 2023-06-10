// Social
import { FC } from 'react'
import * as S from './styles'
import type { SocialProps } from '@/types'
import { SocialLink } from '@/components'

export const Social: FC<SocialProps> = ({ id, data, vertical, size }) => {
  return (
    <S.Ul vertical={vertical} size={size} id={id}>
      {data?.map((socialLink, idx) => (
        <li key={idx}>
          <SocialLink href={socialLink.href} linkName={socialLink.name} />
        </li>
      ))}
    </S.Ul>
  )
}

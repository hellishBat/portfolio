// Typography
import { FC } from 'react'
import * as S from './styles'
import type { TypographyProps } from '@/types'

enum Variant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  P = 'p',
}

export const Typography: FC<TypographyProps> = ({ variant, id, children }) => {
  let renderedElement

  switch (variant) {
    case Variant.H1:
      renderedElement = <S.Title id={id}>{children}</S.Title>
      break
    case Variant.H2:
      renderedElement = <S.Subtitle id={id}>{children}</S.Subtitle>
      break
    case Variant.H3:
      renderedElement = <S.Heading id={id}>{children}</S.Heading>
      break
    case Variant.H4:
      renderedElement = <S.Subheading>{children}</S.Subheading>
      break
    case Variant.H5:
      renderedElement = <S.CardHeading>{children}</S.CardHeading>
      break
    case Variant.P:
    default:
      renderedElement = <S.Paragraph>{children}</S.Paragraph>
  }

  return <>{renderedElement}</>
}

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
  let component

  if (variant === Variant.H1) {
    component = <S.Title id={id}>{children}</S.Title>
  }

  if (variant === Variant.H2) {
    component = <S.Subtitle id={id}>{children}</S.Subtitle>
  }

  if (variant === Variant.H3) {
    component = <S.Heading id={id}>{children}</S.Heading>
  }

  if (variant === Variant.H4) {
    component = <S.Subheading>{children}</S.Subheading>
  }

  if (variant === Variant.H5) {
    component = <S.CardHeading>{children}</S.CardHeading>
  }

  if (variant === Variant.P) {
    component = <S.Paragraph>{children}</S.Paragraph>
  }

  return <>{component}</>
}

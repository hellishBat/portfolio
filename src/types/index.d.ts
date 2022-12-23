// Types
import { ReactNode, MouseEvent } from 'react'

// Common
type ChildrenTypes = {
  children?: ReactNode | ReactNode[]
}

type ClickHandlerType = {
  clickHandler: (fn: any) => void
}

// Component-specific
type LogoProps = {
  href: string
}

type ButtonProps = ChildrenTypes & {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'text' | 'icon'
  as?: 'button' | 'a'
  href?: string
  download?: boolean
  target?: '_blank'
  rel?: string
}

type LinkProps = ChildrenTypes & {
  variant?: 'text' | 'icon'
  href?: string
  target?: '_blank'
  rel?: string
}

type TypographyProps = ChildrenTypes & {
  variant: Variant
  id?: string
}

type SectionProps = ChildrenTypes & {
  id?: string
  imageUrl?: string
}

type SocialProps = ChildrenTypes & {
  data?:
    | {
        href: string
      }[]
    | undefined
  vertical?: boolean | undefined
  size?: 'md' | 'lg'
}

type PersonProps = {
  image?: string
}

type WorksCardProps = {
  data: {
    title: string
    text: string
    hrefDemo: string
    hrefRepo: string
    imgSrc: string
    stack: {
      icon: JSX.Element
      title: string
      color?: any
    }[]
  }
}

type ChipProps = ChildrenTypes & {
  color?: 'yellow' | 'brown' | 'cyan' | 'blue' | 'sky' | 'royal' | 'indigo' | 'pink'
}

export {
  ChildrenTypes,
  ClickHandlerType,
  LogoProps,
  ButtonProps,
  LinkProps,
  TypographyProps,
  SectionProps,
  SocialProps,
  PersonProps,
  WorksCardProps,
  ChipProps,
}

// Types
import { ReactNode, MouseEvent } from 'react'

// Common
interface ChildrenProps {
  children?: ReactNode | ReactNode[]
}

interface ClickHandlerProps {
  clickHandler: (fn: any) => void
}

// Component-specific
interface LogoProps {
  href: string
}

interface ButtonProps extends ChildrenProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'text' | 'icon'
  as?: 'button' | 'a'
  href?: string
  download?: boolean
  target?: '_blank'
  rel?: string
  id?: string
}

interface LinkProps extends ChildrenProps {
  variant?: 'text' | 'icon'
  href?: string
  target?: '_blank'
  rel?: string
}

interface TypographyProps extends ChildrenProps {
  variant: Variant
  id?: string
}

interface SectionProps extends ChildrenProps {
  id?: string
  imageUrl?: string
}

interface SocialProps extends ChildrenProps {
  data?: { href: string }[]
  vertical?: boolean
  size?: 'md' | 'lg'
}

interface PersonProps {
  image?: string
}

interface StackItem {
  icon: JSX.Element
  title: string
  color?: any
}

interface WorksCardProps {
  data: {
    title: string
    text: string
    hrefDemo: string
    hrefRepo: string
    imgSrc: string
    stack: StackItem[]
  }
}

interface ChipProps extends ChildrenProps {
  color?: 'yellow' | 'brown' | 'cyan' | 'blue' | 'sky' | 'royal' | 'indigo' | 'pink'
}

export {
  ChildrenProps,
  ClickHandlerProps,
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

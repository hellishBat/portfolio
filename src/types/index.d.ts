// Types
import { ReactNode, MouseEvent } from 'react'

// Common
interface ChildrenProp {
  children?: ReactNode | ReactNode[]
}

interface ClickHandlerProp {
  clickHandler: (fn: any) => void
}

// Component-specific
interface LogoProps extends ClickHandlerProp {
  href: string
}

interface ButtonProps extends ChildrenProp {
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

interface LinkProps extends ChildrenProp {
  variant?: 'text' | 'icon'
  href?: string
  target?: '_blank'
  rel?: string
}

interface TypographyProps extends ChildrenProp {
  variant: Variant
  id?: string
}

interface SocialProps extends ChildrenProp {
  data?: { href: string }[]
  vertical?: boolean
  size?: 'md' | 'lg'
}

interface PersonProps {
  image?: string
}

interface StackItemProps {
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
    stack: StackItemProps[]
  }
}

interface ChipProps extends ChildrenProp {
  color?: 'yellow' | 'brown' | 'cyan' | 'blue' | 'sky' | 'royal' | 'indigo' | 'pink'
}

export {
  ChildrenProp,
  ClickHandlerProp,
  LogoProps,
  ButtonProps,
  LinkProps,
  TypographyProps,
  SocialProps,
  PersonProps,
  WorksCardProps,
  ChipProps,
}

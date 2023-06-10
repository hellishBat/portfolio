// Types
import React, { ReactNode } from 'react'

// Common
export interface ChildrenProp {
  children?: React.ReactNode | React.ReactNode[]
}

// Component-specific
export interface LogoProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>
  href: string
}

export interface ButtonProps extends ChildrenProp {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
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

export interface TypographyProps extends ChildrenProp {
  variant: Variant
  id?: string
}

export type SocialLinkName = 'github' | 'linkedin' | 'skype' | 'telegram' | 'instagram'

export interface SocialLinkProps {
  linkName?: SocialLinkName
  href: string
}

export interface SocialProps extends ChildrenProp {
  id?: string
  data?: { href: string }[]
  vertical?: boolean
  size?: 'md' | 'lg'
}

export interface PersonProps {
  image?: string
}

export interface WorksData {
  title: string
  text: string
  hrefDemo: string
  hrefRepo: string
  imgSrc: string
  stack: Stack[] | any[]
}

export interface WorksCardProps {
  data: WorksData
}
export interface WorkGalleryProps {
  content: WorksData[]
}

export type Stack =
  | 'js'
  | 'ts'
  | 'react'
  | 'reactQuery'
  | 'axios'
  | 'pug'
  | 'css'
  | 'sass'
  | 'tailwind'

export type ChipColor =
  | 'yellow'
  | 'brown'
  | 'cyan'
  | 'blue'
  | 'sky'
  | 'royal'
  | 'indigo'
  | 'pink'
  | 'rose'

export interface ChipProps {
  technology?: Stack
  color?: ChipColor
}

export interface ContactsListData {
  href: string
  text: string
  icon: ReactNode
}

export interface ContactsListProps {
  id?: string
  data: ContactsListData[]
}

export interface AddressProps {
  contactsData: ContactsListData[]
  socialData: SocialLinkProps[]
}

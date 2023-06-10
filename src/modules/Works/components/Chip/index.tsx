// Chip
import { FC } from 'react'
import * as S from './styles'
import { ChipProps, ChipColor } from '@/types'
import {
  IconJS,
  IconTS,
  IconReact,
  IconReactQuery,
  IconAxios,
  IconPug,
  IconCSS,
  IconSASS,
  IconTailwind,
} from '@/assets'

const iconMap = {
  js: IconJS,
  ts: IconTS,
  react: IconReact,
  reactQuery: IconReactQuery,
  axios: IconAxios,
  pug: IconPug,
  css: IconCSS,
  sass: IconSASS,
  tailwind: IconTailwind,
}

export const Chip: FC<ChipProps> = ({ technology }) => {
  let Component: FC | undefined
  let technologyName: string | undefined
  let iconColor: ChipColor | undefined

  switch (technology) {
    case 'js':
      Component = iconMap.js
      technologyName = 'JS'
      iconColor = 'yellow'
      break
    case 'ts':
      Component = iconMap.ts
      technologyName = 'TS'
      iconColor = 'blue'
      break
    case 'react':
      Component = iconMap.react
      technologyName = 'React'
      iconColor = 'sky'
      break
    case 'reactQuery':
      Component = iconMap.reactQuery
      technologyName = 'React Query'
      iconColor = 'pink'
      break
    case 'axios':
      Component = iconMap.axios
      technologyName = 'Axios'
      iconColor = 'indigo'
      break
    case 'pug':
      Component = iconMap.pug
      technologyName = 'Pug'
      iconColor = 'brown'
      break
    case 'css':
      Component = iconMap.css
      technologyName = 'CSS'
      iconColor = 'royal'
      break
    case 'sass':
      Component = iconMap.sass
      technologyName = 'SASS/SCSS'
      iconColor = 'rose'
      break
    case 'tailwind':
      Component = iconMap.tailwind
      technologyName = 'Tailwind CSS'
      iconColor = 'cyan'
      break
    default:
      return null
  }

  if (!Component || !technologyName || !iconColor) {
    return null
  }

  return (
    <S.Chip color={iconColor}>
      <Component />
      <span>{technologyName}</span>
    </S.Chip>
  )
}

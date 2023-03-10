// Button
import { FC } from 'react'
import * as S from './styles'
import type { ButtonProps } from '@/types'

export const Button: FC<ButtonProps> = ({ as, onClick, size, variant, children, ...props }) => {
  return (
    <S.Button as={as} onClick={onClick} size={size} variant={variant} {...props}>
      {children}
    </S.Button>
  )
}

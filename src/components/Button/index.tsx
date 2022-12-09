// Button
import { FC } from 'react'
import { StyledButton } from './styles'
import type { ButtonProps } from '@/types'

export const Button: FC<ButtonProps> = ({ as, onClick, size, variant, children, ...props }) => {
  return (
    <StyledButton as={as} onClick={onClick} size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

// Container
import { FC } from 'react'
import { StyledContainer } from './styles'
import type { ChildrenTypes } from '@/types'

const Container: FC<ChildrenTypes> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container

// ContactsList Styles
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`

const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`

export { List, Item }

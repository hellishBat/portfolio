// ContactsList
import { FC } from 'react'
import * as S from './styles'
import { Button } from '@/components'
import type { ContactsListProps } from '@/types'

export const ContactsList: FC<ContactsListProps> = ({ data, id }) => {
  return (
    <S.List id={id}>
      {data.map((contactsItem, idx) => (
        <S.Item key={idx}>
          <Button as="a" variant="text" href={contactsItem.href} rel="noopener noreferrer">
            {contactsItem.icon}
            <span>{contactsItem.text}</span>
          </Button>
        </S.Item>
      ))}
    </S.List>
  )
}

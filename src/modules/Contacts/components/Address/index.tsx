// Address
import { FC } from 'react'
import * as S from './styles'
import { Social } from '@/components'
import { ContactsList } from '../'
import type { AddressProps } from '@/types'

export const Address: FC<AddressProps> = ({ contactsData, socialData }) => {
  return (
    <S.Address>
      <ContactsList data={contactsData} id="contactsList" />
      <Social data={socialData} size="lg" id="contactsSocial" />
    </S.Address>
  )
}

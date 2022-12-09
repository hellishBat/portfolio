// Address
import * as S from './styles'
import { Button, Social } from '@/components'
import data from '@/data/index.json'
import { IconPhone, IconMail } from '@/assets'

const contactsIcons = [
  { icon: <IconPhone /> },
  {
    icon: <IconMail />,
  },
]

const socialLinks = data.social.links
const contactsData = data.contacts.links.map((item, idx) => ({
  ...item,
  ...contactsIcons[idx],
}))

export const Address = () => {
  return (
    <S.Address>
      <S.List id="addressList">
        {contactsData.map((contactsItem, idx) => (
          <S.Item key={idx}>
            <Button as="a" variant="text" href={contactsItem.href} rel="noopener noreferrer">
              {contactsItem.icon}
              <span>{contactsItem.text}</span>
            </Button>
          </S.Item>
        ))}
      </S.List>
      <div id="addressSocial">
        <Social data={socialLinks} size="lg" />
      </div>
    </S.Address>
  )
}

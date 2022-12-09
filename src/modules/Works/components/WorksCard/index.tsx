// WorksCard
import { FC } from 'react'
import { Button, Typography } from '@/components'
import { Chip } from '../'
import * as S from './styles'
import type { WorksCardProps } from '@/types'
import data from '@/data/index.json'
import { IconDemo, IconCode } from '@/assets'

const worksData = data.works

export const WorksCard: FC<WorksCardProps> = ({ data }) => {
  return (
    <S.Card>
      <S.Figure>
        <S.Img src={data.imgSrc} alt={`${data.title} - ${data.text}`} loading="lazy" />
      </S.Figure>
      <S.Body>
        <Typography variant="h5">{data.title}</Typography>
        <Typography variant="p">{data.text}</Typography>
        <S.TagArray>
          {data.stack.map((stackItem, idx) => (
            <li key={idx}>
              <Chip color={stackItem.color}>
                {stackItem.icon}
                <span>{stackItem.title}</span>
              </Chip>
            </li>
          ))}
        </S.TagArray>
        <S.Buttons>
          <Button
            as="a"
            size="sm"
            variant="primary"
            href={data.hrefDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconDemo />
            <span>{worksData.btn.demo}</span>
          </Button>
          <Button
            as="a"
            size="sm"
            variant="secondary"
            href={data.hrefRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconCode />
            <span>{worksData.btn.code}</span>
          </Button>
        </S.Buttons>
      </S.Body>
    </S.Card>
  )
}

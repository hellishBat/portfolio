// ScrollIndicator
import { useState, useEffect } from 'react'
import * as S from './styles'

export const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0)

  const getScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (winScroll / pageHeight) * 100
    setScroll(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener('scroll', getScrollProgress)

    return () => {
      window.removeEventListener('scroll', () => getScrollProgress)
    }
  }, [])

  return (
    <S.ScrollContainer>
      <S.ScrollProgress style={{ width: `${scroll}%` }} />
    </S.ScrollContainer>
  )
}

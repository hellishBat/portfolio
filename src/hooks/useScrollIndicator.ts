// useScrollIndicator Hook
import { useState, useEffect, useCallback } from 'react'

export const useScrollIndicator = () => {
  const [scroll, setScroll] = useState(0)

  const getScrollProgress = useCallback(() => {
    const winScroll = window.pageYOffset
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (winScroll / pageHeight) * 100
    setScroll(scrollPercent)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', getScrollProgress)

    return () => {
      window.removeEventListener('scroll', () => getScrollProgress)
    }
  }, [getScrollProgress])

  return scroll
}

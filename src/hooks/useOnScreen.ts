// useOnScreen
import { useState, useEffect, useMemo } from 'react'
import type { ElementRef } from '@/types/nav'

export const useOnScreen = (ref: ElementRef): boolean => {
  const [isOnScreen, setOnScreen] = useState<boolean>(false)

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      rootMargin: '-50% 0px',
    })
  }, [])

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [observer, ref])

  return isOnScreen
}

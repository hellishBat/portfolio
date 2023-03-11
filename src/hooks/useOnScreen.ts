// useOnScreen
import { useState, useEffect, useMemo, MutableRefObject } from 'react'

export const useOnScreen = (ref: MutableRefObject<Element | null>): boolean => {
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

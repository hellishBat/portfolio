// useNav Hook
import { useRef, useEffect } from 'react'
import { useOnScreen } from './useOnScreen'
import { useNavContext } from '@/context/NavContext'

export const useNav = (linkId: string) => {
  const ref = useRef(null)

  const { setActiveNavLinkId } = useNavContext()

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(linkId)
    }
  }, [isOnScreen, setActiveNavLinkId, linkId])

  return ref
}

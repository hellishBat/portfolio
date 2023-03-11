// useNav
import { useRef, useEffect } from 'react'
import { useOnScreen } from './useOnScreen'
import { useNavContext } from '@/context/NavContext'
import type { NavRef } from '@/types/nav'

export const useNav = (linkId: string): NavRef => {
  const ref = useRef<HTMLElement | null>(null)

  const { setActiveNavLinkId } = useNavContext()

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId?.(linkId)
    }
  }, [isOnScreen, setActiveNavLinkId, linkId])

  return ref
}

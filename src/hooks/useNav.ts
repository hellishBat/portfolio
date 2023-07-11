// useNav
import { useRef, useEffect } from 'react'
import { useOnScreen } from './useOnScreen'
import { useNavStore } from '@/store'
import type { ElementRef } from '@/types/nav'

export const useNav = (linkId: string): ElementRef => {
  const ref = useRef<HTMLElement | null>(null)
  const setActiveNavLinkId = useNavStore((state) => state.setActiveNavLinkId)

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(linkId)
    }
  }, [isOnScreen, setActiveNavLinkId, linkId])

  return ref
}

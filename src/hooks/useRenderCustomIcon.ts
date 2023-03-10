// useRenderCustomIcon Hook
import { useCallback } from 'react'
import { useTheme } from 'styled-components'
import { renderSimpleIcon } from 'react-icon-cloud'
import { Mode } from '@/types/theme'

export const useRenderCustomIcon = () => {
  const theme = useTheme()

  return useCallback(
    (icon: any, mode?: Mode) => {
      return renderSimpleIcon({
        icon,
        minContrastRatio: mode === Mode.Light ? 1 : 2,
        bgHex: theme.colors.primary,
        fallbackHex: theme.colors.textPrimary,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      })
    },
    [theme.colors.primary, theme.colors.textPrimary]
  )
}

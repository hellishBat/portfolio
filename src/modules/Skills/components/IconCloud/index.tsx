// IconCloud
import { useMemo, memo } from 'react'
import { Cloud } from 'react-icon-cloud'
import { useThemeStore } from '@/store'
import { useIconCloudData, useRenderCustomIcon } from '@/hooks'

export const IconCloud = memo(({ iconSlugs }: { iconSlugs: string[] }) => {
  const { mode } = useThemeStore()
  const data = useIconCloudData(iconSlugs)
  const renderCustomIcon = useRenderCustomIcon()

  const cloudProps: any = {
    containerProps: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
    },
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: 'transparent',
      reverse: true,
      tooltip: 'native',
      tooltipDelay: 0,
      wheelZoom: false,
    },
  }

  const renderedIcons = useMemo(() => {
    if (!data) {
      return null
    }

    const icons = Object.values(data.simpleIcons)

    return icons.map((i) => renderCustomIcon(i, mode))
  }, [data, mode, renderCustomIcon])

  return <Cloud {...cloudProps}>{[renderedIcons]}</Cloud>
})

IconCloud.displayName = 'IconCloud'

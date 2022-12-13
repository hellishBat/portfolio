import { useEffect, useState, useMemo, memo } from 'react'
import { fetchSimpleIcons, Cloud, renderSimpleIcon } from 'react-icon-cloud'
import { useThemeContext } from '@/context/ThemeContext'
import { Mode } from '@/types/theme'
import { useTheme } from 'styled-components'

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export const IconCloud = memo(function IconCloud(props: any) {
  const { mode } = useThemeContext()
  const theme = useTheme()

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
      outlineColour: '#0000',
      reverse: true,
      tooltip: 'native',
      tooltipDelay: 0,
      wheelZoom: false,
    },
  }

  const renderCustomIcon = (icon: any, mode?: Mode) => {
    return renderSimpleIcon({
      icon,
      minContrastRatio: mode === Mode.Light ? 1 : 1.2,
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
  }

  const [data, setData] = useState<IconData>()

  useEffect(() => {
    fetchSimpleIcons({ slugs: props.iconSlugs }).then(setData)
  }, [props.iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) {
      return null
    }

    const icons = []
    for (const key of Object.keys(data.simpleIcons)) {
      icons.push(data.simpleIcons[key])
    }

    return icons.map((i) => renderCustomIcon(i, mode))
  }, [data, mode])

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>
})

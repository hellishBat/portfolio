// useIconCloudData Hook
import { useEffect, useState } from 'react'
import { fetchSimpleIcons } from 'react-icon-cloud'

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export const useIconCloudData = (iconSlugs: string[]) => {
  const [data, setData] = useState<IconData>()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  return data
}

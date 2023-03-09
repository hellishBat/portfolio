// useLoader Hook
import { useEffect, useState } from 'react'

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    window.addEventListener('DOMContentLoaded', () => {
      clearTimeout(timeout)
      setIsLoading(false)
    })

    return () => clearTimeout(timeout)
  }, [])

  return isLoading
}

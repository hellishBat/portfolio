// NavContext
import { useState, createContext, FC, useContext } from 'react'
import type { ChildrenProps } from '@/types'
import type { NavContextTypes } from '@/types/nav'

const NavContext = createContext({} as NavContextTypes)

const NavProvider: FC<ChildrenProps> = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState<string>('')

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  }

  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
}

export const useNavContext = () => useContext(NavContext)

export default NavProvider

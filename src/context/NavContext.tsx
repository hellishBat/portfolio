// NavContext
import { useState, createContext, FC, useContext } from 'react'
import type { ChildrenProp } from '@/types'
import type { NavContextValue } from '@/types/nav'

const NavContext = createContext({} as NavContextValue)

const NavProvider: FC<ChildrenProp> = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState<string>('')

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  }

  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
}

export const useNavContext = () => useContext(NavContext)

export default NavProvider

// NavContext
import { useState, createContext, FC, useContext } from 'react'
import type { ChildrenTypes } from '@/types'
import type { INavContext } from '@/types/nav'

const NavContext = createContext({} as INavContext)

const NavProvider: FC<ChildrenTypes> = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState<string>('')

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  }

  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
}

export const useNavContext = () => useContext(NavContext)

export default NavProvider

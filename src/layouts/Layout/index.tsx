// Layout
import { FC } from 'react'
import MobileMenuProvider from '@/context/MobileMenuContext'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import type { ChildrenTypes } from '@/types'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <MobileMenuProvider>
        <Header />
      </MobileMenuProvider>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

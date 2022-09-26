// Layout
import { FC } from 'react'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import type { ChildrenTypes } from '@/types'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

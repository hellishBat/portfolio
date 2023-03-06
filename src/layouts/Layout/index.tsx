// Layout
import { FC, useEffect, useState } from 'react'
import MobileMenuProvider from '@/context/MobileMenuContext'
import Loader from '@/modules/Loader'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import type { ChildrenProps } from '@/types'

const Layout: FC<ChildrenProps> = ({ children }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MobileMenuProvider>
            <Header />
          </MobileMenuProvider>
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout

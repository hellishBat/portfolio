// Layout
import { FC } from 'react'
import MobileMenuProvider from '@/context/MobileMenuContext'
import Loader from '@/modules/Loader'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import { useLoader } from '@/hooks/useLoader'
import type { ChildrenProps } from '@/types'

const Layout: FC<ChildrenProps> = ({ children }) => {
  const isLoading = useLoader()

  return (
    <>
      {isLoading ? (
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

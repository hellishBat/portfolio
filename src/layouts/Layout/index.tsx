// Layout
import { FC } from 'react'
import Loader from '@/modules/Loader'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import { useLoader } from '@/hooks'
import type { ChildrenProp } from '@/types'

const Layout: FC<ChildrenProp> = ({ children }) => {
  const isLoading = useLoader()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout

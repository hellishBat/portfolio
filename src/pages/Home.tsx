// Home
import Layout from '@/layouts/Layout'
import Hero from '@/modules/Hero'
import About from '@/modules/About'
import Skills from '@/modules/Skills'
import Works from '@/modules/Works'
import Download from '@/modules/Download'
import Contacts from '@/modules/Contacts'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Download />
      <Contacts />
    </Layout>
  )
}

export default Home

// App
import 'reseter.css'
import GlobalStyles from '@/styles/global'
import ContextProviders from '@/context/ContextProviders'
import Home from '@/pages/Home'

const App = () => {
  return (
    <ContextProviders>
      <GlobalStyles />
      <Home />
    </ContextProviders>
  )
}

export default App

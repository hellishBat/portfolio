import { createRoot } from 'react-dom/client'
import ContextProviders from '@/context/ContextProviders'
import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ContextProviders>
    <App />
  </ContextProviders>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tabs from './Tabs.jsx'
import Menu_hover from './Menu_hover.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tabs/>
    <Menu_hover/>
  </StrictMode>,
)

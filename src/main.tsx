import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap'
import './index.css'
import App from './App.tsx'
// Import our custom CSS
import './assets/styles/style.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
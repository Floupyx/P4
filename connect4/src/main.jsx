import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Connect4 from './Components/Connect4'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Connect4 />
  </StrictMode>,
)

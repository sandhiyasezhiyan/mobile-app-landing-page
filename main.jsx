import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/Application.css'

import ApplicationWeb from './ApplicationWeb.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationWeb />
  </StrictMode>,
)

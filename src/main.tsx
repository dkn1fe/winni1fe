import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppRoutes} from './app/app-routes.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)

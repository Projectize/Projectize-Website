import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Landing from './components/pages/landing'
import About from "./components/pages/about"

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
    <About />
    <SpeedInsights/>
    <Analytics/>
  </StrictMode>,
)

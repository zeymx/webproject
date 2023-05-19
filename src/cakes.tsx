import React from 'react'
import ReactDOM from 'react-dom/client'
import Cakes from './components/Cakes.tsx'
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Cakes />
  </React.StrictMode>,
)
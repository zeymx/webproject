import React from 'react'
import ReactDOM from 'react-dom/client'
import Deserts from './components/Deserts.tsx'
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Deserts />
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/MainPage.tsx'
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import MainPage from './components/MainPage.tsx'
import './scss/style.scss'
import Deserts from './components/Deserts.tsx'
import Cakes from './components/Cakes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cakes/" element={<Cakes />} />
          <Route path="/deserts/" element={<Deserts />} />
      </Routes>
  </BrowserRouter>,
)
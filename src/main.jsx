import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componement/App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Footer from './componement/footer'
import Apropos from './pages/Apropos'
import Logementdetails from './pages/Logementdetails'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a propos" element={<Apropos />} />
        <Route path="/logement" element={<Logementdetails />} />

      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componement/App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Footer from './componement/footer'  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Router>
    <App />
      <Routes>
        <Route path="/" element={<Accueil />} />

        
      </Routes>
    <Footer />
    </Router>

  </React.StrictMode>,
)

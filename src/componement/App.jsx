import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import '../css/App.css'
import ReactDOM from 'react-dom/client'
function App() {
  

  return (
    <>
      <nav className='header'>
        <img src={Logo} className="logo" alt="logo Kasa" />
        <div>
          <ul className='header__nav'>
            
            <li className='header__nav__li'><Link to="">Accueil</Link></li>
            <li className='header__nav__li'><Link to="a propos">A propos</Link></li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default App

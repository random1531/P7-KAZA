import Logo from '../assets/logo.svg'
import '../css/App.css'

function App() {
  

  return (
    <>
      <nav className='header'>
        <img src={Logo} className="logo" alt="logo Kasa" />
        <div>
          <ul className='header__nav'>
            <li className='header__nav__li'><a>Accueil</a></li>
            <li className='header__nav__li'><a>A Propos</a></li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default App

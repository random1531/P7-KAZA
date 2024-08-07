import { Link, Outlet } from 'react-router-dom';
import Logo from '../image/logod.png';
import Footer from './footer';
import '../css/App.css';
import '../css/Banner.css'

function Headers(){

    return(
        <nav className='header'>
        <img src={Logo} className="logo" alt="logo Kasa" />
        <div>
          <ul className='header__nav'>
            <li className='header__nav__li'><Link to="/">Accueil</Link></li>
            <li className='header__nav__li'><Link to="/apropos">A propos</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Headers
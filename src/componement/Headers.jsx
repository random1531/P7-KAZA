import Logo from '../pictures/logod.png'
import '../css/header.css'
import { NavLink } from 'react-router-dom'

function Headers(){

    return(
        <>
        <header className='header'>
        <nav className='navBarre'>
        <img src={Logo} alt="Logo Kaza" className='logoHeader' />
        
            <ul>
             <NavLink className="navLink" to="/">Accueil</NavLink>
             <NavLink className="navLink" to="/apropos">A propos</NavLink>
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Headers
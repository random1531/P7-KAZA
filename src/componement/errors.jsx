import { Link } from "react-router-dom"
import '../css/eror.css'


function ErrorBis(){
    return(
        <div className='error_page'> 
        <div className='errorcode'>404</div>
        <p className='texterror'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default ErrorBis
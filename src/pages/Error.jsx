import React, { useCallback, useEffect } from 'react';
import '../css/eror.css'
import { Link } from 'react-router-dom';
import Footer from '../componement/Footer';
import Headers from '../componement/Headers'






function Error() {
    return (
        <>
            <Headers/>
            <div className='error_page'> 
            <div className='errorcode'>404</div>
            <p className='texterror'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
            <Footer/>
        </>

    )


}

export default Error
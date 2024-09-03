import React, { useCallback, useEffect } from 'react';
import '../../src/componement/main/Error/eror.css'
import { Link } from 'react-router-dom';
import Footer from '../componement/footer/footer';
import Headers from '../componement/Header/Headers'






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
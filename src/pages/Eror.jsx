import React, { useCallback, useEffect } from 'react';
import db from '../db.json';
import '../css/eror.css'
import Banner from '../componement/banner'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Footer from '../componement/footer';
import Headers from '../componement/header'
import Accueil from './Accueil';

function Eror() {
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

export default Eror
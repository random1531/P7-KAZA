import React, { useCallback, useEffect } from 'react';
import '../css/eror.css'
import { Link } from 'react-router-dom';
import Footer from '../componement/Footer';
import Headers from '../componement/Headers'
import ErrorContent from '../componement/ErrorContent'





function Error() {
    return (
        <>
            <Headers/>
            <ErrorContent/>
            <Footer/>
        </>

    )


}

export default Error
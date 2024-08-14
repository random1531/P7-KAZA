import React, { useCallback, useEffect } from 'react';
import Logements from '../componement/Logements';
import Banners from '../componement/Bannerhome'


function Accueil() {

    return (
        <>
            <Banners />
            <Logements />
        </>
    )
}

export default Accueil

import React, { useCallback, useEffect } from 'react';
import Logements from '../componement/main/AccueilLogments/Logements';
import Banners from '../componement/main/Banner/Bannerhome'


function Accueil() {

    return (
        <>
            <Banners />
            <Logements />
        </>
    )
}

export default Accueil

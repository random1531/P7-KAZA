import React from 'react';
import { useParams } from 'react-router-dom';
import Starts from '../componement/main/Logement details/Stars/Starts';
import useLogementDetails from '../componement/Hooks/useLogementDetails';
import Imglogment from '../componement/main/Logement details/ImgLogement/logementimg';
import Tags from '../componement/main/Logement details/Tags/Tags';
import Hostinfo from '../componement/main/Logement details/HostInfo/HostInfo';
import Details from '../componement/main/Details/Details'
import Error from './Error';
import LogementTitleAndLocalisation from '../componement/main/Logement details/NameAndLocLogment/LogementNameAndLocalisation';
import '../css/logement.css'
import ErrorBis from '../componement/main/Error/errors';

function LogementDetails() {
    const { id } = useParams();
    const logement = useLogementDetails(id);
    if (!logement) {
        return <ErrorBis />;
    }

    return (
        <>
            <section id='imdg'>
                <Imglogment logement={logement} />
                <div className='info_logement'>
                    <div className='firstcontenaire'>
                        <div className='logement_tile_location'>
                            <LogementTitleAndLocalisation logement={logement} />
                            <Tags logement={logement} />
                        </div>
                        <div className='hoste_rating'>
                            <Hostinfo logement={logement} />
                            <Starts logement={logement} />
                        </div>
                    </div>
                    <div className='summ'>
                        
                            <Details summary="Description" >{logement.description}</Details>
                        
                            <Details summary="Equipement" >{logement.equipments.map((element, index) => (

                                <li key={index} className="equipementss">{element}</li>
                            ))}</Details>
                       
                    </div>

                </div>

            </section>

        </>
    )
}

export default LogementDetails;
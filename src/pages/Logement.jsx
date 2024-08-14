import React from 'react';
import { useParams } from 'react-router-dom';
import Starts from '../componement/Starts';
import useLogementDetails from '../componement/useLogementDetails';
import Imglogment from '../componement/LogementImg';
import Tags from '../componement/Tags';
import Hostinfo from '../componement/HostInfo';
import Details from '../componement/Details'
import Error from './Error';

function LogementDetails() {
    const { id } = useParams();
    const logement = useLogementDetails(id);
    if (!logement) {
        return <Error />;
    }

    return (
        <>
            <section id='imdg'>

                <Imglogment logement={logement} />
                <div className='info_logement'>
                    <div className='firstcontenaire'>
                        <div>
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
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
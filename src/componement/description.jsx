import React, { createElement, useEffect, useState } from 'react';
import db from '../../public/db.json';
import '../css/logement.css'
import { useParams } from 'react-router-dom';
function Equipement (){
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    return(
        <div>

                        <details className='detailsadd'>
                            <summary className='summayradd'>Equipement<i className="fa-solid fa-angle-up rotate"></i>
                            </summary>
                            <p className='detailsp'> {logem.equipments.map((element, index) => (
                                <li key={index} className="equipementss">{element}</li>
                            ))}</p>
                        </details>
                    </div>
    )
}

export default Equipement
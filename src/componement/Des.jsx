import React, { createElement, useEffect, useState } from 'react';
import db from '../db.json';
import '../css/logement.css'
import { useParams } from 'react-router-dom';
function Description(){
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    return(
        <div>

                        <details className='detailsadd'>
                            <summary className='summayradd' >Description<i className="fa-solid fa-angle-up rotate"></i>
                            </summary>
                            <p className='detailsp'>{logem.description}</p>
                        </details>
                    </div>
    )
}
export default Description
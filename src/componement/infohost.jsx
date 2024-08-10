import React, { createElement, useEffect, useState } from 'react';
import db from '../db.json';
import '../css/logement.css'
import { useParams } from 'react-router-dom';

function Hostinfo(){
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    return(
        <div className='hoste'>
        <img src={logem.host.picture} alt="" className='picturehoste' />
        <p className='namehoste'>{logem.host.name}</p>
    </div>
    )
}

export default Hostinfo 
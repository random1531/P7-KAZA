import React, { useCallback, useEffect, useState } from 'react';
import db from '../../public/db.json';
import '../css/maincontener.css'
import Banner from '../componement/banner'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Getdata from '../componement/GetData';



function Accueil() {
     
    const [db, setDb] = useState([]);
    
    return (
        <>
        <Getdata onDataLoad={setDb} /> 
            <Banner  />
            <section className='contenaire' id='contenaire_loc'>
                {db.map(element => (
                    <Link to={`/logement/${element.id}`} key={element.id} id={element.id} className="location-item contloc">
                        <img src={element.cover} alt={element.title} className="location-image" id={element.id} />
                        <p>{element.title}</p>

                    </Link>
                ))}
            </section>
        </>
    )
}

export default Accueil

import React, { useCallback, useEffect } from 'react';
import db from '../../public/db.json';
import '../css/maincontener.css'
import Banner from '../componement/banner'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'



function Accueil() {
    useEffect(() => {
        async function database() {
            const data = await fetch ('../../public/db.json')
            const datata = await data.json()    
            console.log(datata)
            }
            
            database()
        });
       
    
    return (
        <>
            <Banner />

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

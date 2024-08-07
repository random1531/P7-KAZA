import React, { useCallback, useEffect } from 'react';
import db from '../db.json';
import '../css/maincontener.css'
import Banner from '../componement/banner'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

console.log(db.map(element => element))

function Accueil() {
    useEffect(() => {
        window.addEventListener('click', (e) => {
            localStorage.setItem("tokid", e.target.id)
        });

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

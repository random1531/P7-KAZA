import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Getdata from '../../Hooks/Data';
import './maincontener.css'


function Logements() {
    const [db, setDb] = useState([]);

    return (
        <>
            <Getdata onDataLoad={setDb} />
            <section className='contenaire' id='contenaire_loc'>
                {db.map(element => (
                    <Link to={`/logement/${element.id}`} key={element.id} id={element.id} className="location-item contloc">
                        <img src={element.cover} alt={element.title} className="location-image" id={element.id} />
                        <p>{element.title}</p>


                    </Link>
                ))}
            </section>
        </>)
}

export default Logements
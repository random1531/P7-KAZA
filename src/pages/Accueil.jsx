import React, { useEffect } from 'react';
import db from '../db.json';
import '../css/maincontener.css'
import Banner from '../componement/banner'

async function addLocation() {
    const container = document.getElementById('contenaire_loc');

    db.forEach(element => {
        const nameofLocation = element.title;
        const div = document.createElement('a');
        div.className = 'location-item';
        const documentTitle = document.createElement('p');
        documentTitle.textContent = nameofLocation;
        const img = document.createElement('img');
        img.src = element.cover;
        img.alt = nameofLocation;
        img.className = 'location-image';       
        div.setAttribute("id", element.id)
        div.appendChild(img);
        div.appendChild(documentTitle);
        container.appendChild(div);
        div.classList.add("contloc")
    });

    document.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', (e) => {
            localStorage.setItem("tokid", e.currentTarget.id)
            

        });
    });
}

function Accueil() {


    useEffect(() => {
        addLocation();
    }, []);
    return (
        <>
            <Banner />

            <section className='contenaire' id='contenaire_loc'>
                { }
            </section>
        </>
    )
}

export default Accueil

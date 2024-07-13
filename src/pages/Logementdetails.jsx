import React, { createElement, useEffect, useState } from 'react';
import db from '../db.json';
import ReactDOM from 'react-dom/client'
import '../css/logement.css'
import { useParams } from 'react-router-dom';


function Logementdetails() {
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);
    function right() {
        const rightclick = (currentIndex + 1) % logem.pictures.length
        setCurrentIndex(rightclick)
    }
    function left() {
        const rightclick = (currentIndex - 1 + logem.pictures.length) % logem.pictures.length
        setCurrentIndex(rightclick)
    }
  

    return (
        <>
            <section id='imdg'>
                <div className='imgcontente'>
                    <div className='arrows'>
                        <i className={`fa-solid fa-chevron-left ${logem.pictures.length === 1 ? 'activate' : ''}`} id='left' onClick={left}></i>
                        <i className={`fa-solid fa-chevron-right ${logem.pictures.length === 1 ? 'activate' : ''}`} id='right' onClick={right}></i>
                        <p className='picturet_lenght'>{currentIndex + 1}/{logem.pictures.length}</p>
                    </div>
                    <img src={logem.pictures[currentIndex]} className='img_logement' alt="" />

                </div>
                <div className='firstcontenaire'>
                    <div>
                        <h1>{logem.title}</h1>
                        <p>{logem.location}</p>
                        <div className='tagss'>
                            {logem.tags.map((element, index) => (
                                <p key={index} className="tag">
                                    {element}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='hoste_rating'>
                        <div className='hoste'>
                            <img src={logem.host.picture} alt="" className='picturehoste' />
                            <p className='namehoste'>{logem.host.name}</p>
                        </div>
                        <div>
                            <i className={`fa-solid fa-star ${"1" <= logem.rating ? "notat" : "notata"}`} ></i>
                            <i className={`fa-solid fa-star ${"2" <= logem.rating ? "notat" : "notata"}`}></i>
                            <i className={`fa-solid fa-star ${"3" <= logem.rating ? "notat" : "notata"}`}></i>
                            <i className={`fa-solid fa-star ${"4" <= logem.rating ? "notat" : "notata"}`}></i>
                            <i className={`fa-solid fa-star ${"5" <= logem.rating ? "notat" : "notata"}`}></i>
                        </div>
                    </div>
                </div>
                <div className='summ'>
                    <div>

                        <details className='detailsadd'>
                            <summary className='summayradd' >Description<i className="fa-solid fa-angle-up rotate"></i>
                            </summary>
                            <p className='detailsp'>{logem.description}</p>
                        </details>
                    </div>
                    <div>

                        <details className='detailsadd'>
                            <summary className='summayradd'>Equipement<i className="fa-solid fa-angle-up rotate"></i>
                            </summary>
                            <p className='detailsp'> {logem.equipments.map((element, index) => (
                                <li key={index} className="equipementss">{element}</li>
                            ))}</p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logementdetails;
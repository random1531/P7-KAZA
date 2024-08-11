import React, { createElement, useEffect, useState } from 'react';
import db from '../../public/db.json';
import ReactDOM from 'react-dom/client'
import '../css/logement.css'
import { useParams } from 'react-router-dom';
import Imglogment from '../componement/logementimg'
import Starts from '../componement/Starts';
import Equipement from '../componement/description';
import Description from '../componement/Des'
import Hostinfo from '../componement/infohost';
import Tags from '../componement/Tags';
function Logementdetails() {
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    return (
        <>
            <section id='imdg'>
                <Imglogment />
                <div className='info_logement'>
                    <div className='firstcontenaire'>
                        <div>
                            <h1>{logem.title}</h1>
                            <p>{logem.location}</p>
                            <Tags />
                        </div>

                        <div className='hoste_rating'>
                            <Hostinfo />
                            <Starts />
                        </div>
                    </div>
                    <div className='summ'>
                        <Description />
                        <Equipement />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logementdetails;
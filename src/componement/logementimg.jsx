import React, { createElement, useEffect, useState } from 'react';
import db from '../db.json';
import ReactDOM from 'react-dom/client'
import '../css/logement.css'
import { useParams } from 'react-router-dom';

export function Imglogment(){
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
    return(
        <>
        <div className='imgcontente'>
                    <div className='arrows'>
                        <i className={`fa-solid fa-chevron-left ${logem.pictures.length === 1 ? 'activate' : ''}`} id='left' onClick={left}></i>
                        <i className={`fa-solid fa-chevron-right ${logem.pictures.length === 1 ? 'activate' : ''}`} id='right' onClick={right}></i>
                        <p className='picturet_lenght'>{currentIndex + 1}/{logem.pictures.length}</p>
                    </div>
                    <img src={logem.pictures[currentIndex]} className='img_logement' alt="" />
                </div>
        </>
    )
}
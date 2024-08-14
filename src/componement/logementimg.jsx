import React, { createElement, useEffect, useState } from 'react';
import '../css/logementimg.css'


export function Imglogment({logement}) {
    
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    function right() {
        const rightclick = (currentIndex + 1) % logement.pictures.length
        setCurrentIndex(rightclick)
    }
    function left() {
        const rightclick = (currentIndex - 1 + logement.pictures.length) % logement.pictures.length
        setCurrentIndex(rightclick)
    }  
  
    return(
        <>
        
        <div className='imgcontente'>
                    <div className='arrows'>
                    
                        <i className={`fa-solid fa-chevron-left ${logement.pictures.length === 1 ? 'activate' : ''}`} id='left' onClick={left}></i>
                      
                        <i className={`fa-solid fa-chevron-right ${logement.pictures.length === 1 ? 'activate' : ''}`} id='right' onClick={right}></i>
                      
                        <p className='picturet_lenght'>{currentIndex + 1}/{logement.pictures.length}</p>
                    </div>
                    <img src={logement.pictures[currentIndex]} className='img_logement' alt="" />
                </div>
        </>
    )
}

export default Imglogment
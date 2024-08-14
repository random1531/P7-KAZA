import React, { createElement, useEffect, useState } from 'react';
import '../css/stars.css'


export function Starts({ logement }) {        
    return (
        <>       
      
        <div className='notation_starts'>
                {Array.from({ length: 5 }, (_, index) => (
                    <i
                        key={index}
                        className={`fa-solid fa-star ${index + 1 <= logement.rating ? "notat" : "notata"}`}
                    ></i>
                ))}
            </div>
        </>
    )
}
export default Starts


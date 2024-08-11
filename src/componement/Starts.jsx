import React, { createElement, useEffect, useState } from 'react';
import db from '../../public/db.json';
import '../css/logement.css'
import { useParams } from 'react-router-dom';



export function Starts() {
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    const arstart = []
    arstart.length = 5


    return (


        <>
            <div className='notation_starts'>
                <i className={`fa-solid fa-star ${"1" <= logem.rating ? "notat" : "notata"}`}></i>
                <i className={`fa-solid fa-star ${"2" <= logem.rating ? "notat" : "notata"}`}></i>
                <i className={`fa-solid fa-star ${"3" <= logem.rating ? "notat" : "notata"}`}></i>
                <i className={`fa-solid fa-star ${"4" <= logem.rating ? "notat" : "notata"}`}></i>
                <i className={`fa-solid fa-star ${"5" <= logem.rating ? "notat" : "notata"}`}></i>
            </div>
        </>
    )
}
export default Starts
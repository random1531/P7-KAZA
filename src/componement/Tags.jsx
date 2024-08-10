import React, { createElement, useEffect, useState } from 'react';
import db from '../db.json';
import '../css/logement.css'
import { useParams } from 'react-router-dom';

function Tags(){
    const { id } = useParams()
    const logem = db.find(item => item.id === id);
    return(
<div className='tagss'>
                            {logem.tags.map((element, index) => (
                                <p key={index} className="tag">
                                    {element}
                                </p>
                            ))}
                        </div>
    )
}
export default Tags
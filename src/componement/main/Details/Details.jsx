import { useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import './details.css'


function Details({ summary, children }) {
    const [colapse, setColapse] = useState(true);


    return (

        <div className={`details ${colapse ? 'collapsed' : 'expaded'}`}>
            <div className='details_header'>
                <h2>{summary}</h2>
                <i className="fa-solid fa-angle-up rotate" onClick={()=>{
                    setColapse(!colapse)
                }}></i>
            </div>
            <div className='details_content'>
                <p className='bgtest'>{children}</p>
            </div>
        </div>

    )
}

export default Details
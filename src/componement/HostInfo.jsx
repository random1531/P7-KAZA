import React, { createElement, useEffect, useState } from 'react';
import '../css/hosteinfo.css'


function Hostinfo({logement}){
    
    return(
        <div className='hoste'>
        <img src={logement.host.picture} alt="" className='picturehoste' />
        <p className='namehoste'>{logement.host.name}</p>
    </div>
    )
}

export default Hostinfo 
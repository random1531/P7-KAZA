import React, { createElement, useEffect, useState } from 'react';

import './tags.css'


function Tags({logement}){
    
    return(
<div className='tagss'>
                            {logement.tags.map((element, index) => (
                                <p key={index} className="tag">
                                    {element}
                                </p>
                            ))}
                        </div>
    )
}
export default Tags
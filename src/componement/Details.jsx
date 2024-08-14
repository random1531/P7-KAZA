import { useEffect, useRef } from 'react';
import React from 'react';
import '../css/details.css'


function Details({ summary, children }) {

    document.querySelectorAll('details').forEach((detail) => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                this.style.maxHeight = this.scrollHeight + 'px';
            } else {
                this.style.maxHeight = '34px';
            }
        });
    });
   

    return (
        <details>
            <summary>{summary}<i className="fa-solid fa-angle-up rotate"></i>
            </summary>
            <p className='bgtest'>{children}</p>
        </details>
    )
}

export default Details
import React, { useState, useEffect } from 'react';

function Getdata({onDataLoad}){
    const [database, SetData] = useState([]);

    useEffect(() => {
        async function database() {
            const data = await fetch ('../../public/db.json')
            const datata = await data.json()    
            SetData(datata)   
            onDataLoad(datata);         
            }            
            database()
        },[onDataLoad]);  
        
        return null;
}
export default Getdata
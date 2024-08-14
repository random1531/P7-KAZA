import React, { useState, useEffect } from 'react';

function Getdata({onDataLoad}){
    const [database, SetData] = useState([]);

    useEffect(() => {
        async function database() {
            const respons = await fetch ('../../public/db.json')
            const data = await respons.json()    
            SetData(data)   
            onDataLoad(data);         
            }            
            database()
        },[onDataLoad]);  
       
        return null;
}
export default Getdata
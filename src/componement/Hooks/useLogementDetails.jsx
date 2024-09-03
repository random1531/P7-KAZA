import { useState, useEffect } from 'react';

async function Getdatas() {
    const respons = await fetch('../../public/db.json');
    const data = await respons.json();
    return data;
}
export { Getdatas };

function useLogementDetails(id) {
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Getdatas();
            const foundLogement = data.find(item => item.id === id);
            setLogement(foundLogement);
        };

        fetchData();
    }, [id]);
    return logement;
}

export default useLogementDetails;
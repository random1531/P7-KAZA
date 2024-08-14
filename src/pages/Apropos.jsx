import bannerpic from '../assets/bannerapropo.svg'
import BannerApropo from '../componement/Bannerapropos'
import Details from '../componement/Details'


function Apropos() {
  
      
    return (
        <>
            <BannerApropo />
            <div className='aproposdetails'>
                <Details summary="Fiablité" >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Details>
                <Details summary="Respect" >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Details>
                <Details summary="Service" >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Details>
                <Details summary="Sécurité" >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Details>


            </div>
        </>
    )
}

export default Apropos
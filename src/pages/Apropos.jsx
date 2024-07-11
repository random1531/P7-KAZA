import bannerpic from '../assets/bannerapropo.svg'
import '../css/apropos.css'

function Apropos() {


    return (
        <>

            <img src={bannerpic} alt="banner" />
            <div className='aproposdetails'>
                <details>
                    <summary>Fiabilité <i class="fa-solid fa-angle-up rotate"></i></summary>
                    <p className='bgtest'>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                </details>

                <details>
                    <summary>Respect<i class="fa-solid fa-angle-up rotate"></i></summary>
                    <p className='bgtest'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </details>

                <details>
                    <summary>Service<i class="fa-solid fa-angle-up rotate"></i></summary>
                    <p className='bgtest'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </details>

                <details>
                    <summary>Sécurité<i class="fa-solid fa-angle-up rotate"></i></summary>
                    <p className='bgtest'>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </details>
            </div>
        </>
    )
}

export default Apropos
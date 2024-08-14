import bannerpic from '../pictures/banneraccueil.png'
import '../css/Banner.css'

function Banners() {
    return (
        <>
        <div className='ban'>
       
            <img src={bannerpic} className="bannerpic" alt="banner" />
            <h1 className='title'>Chez vous, partout et ailleurs</h1>
           

            </div>
        </>
    )
}

export default Banners
import bannerpics from '../pictures/bannerapropos.png'
import '../css/Banner.css'

function BannerApropo() {
    return (
        <>
        <div className='ban'>       
            <img src={bannerpics} className="bannerpic" alt="banner" />                      
            </div>
        </>
    )
}

export default BannerApropo
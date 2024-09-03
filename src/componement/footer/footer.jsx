import logowhite from '../../pictures/Logowhite.png'
import './footer.css'

function Footer() {
       return (
        <>
           <footer>
           <img src={logowhite} className="logofooter" alt="Logo kaza" />
           <p className='footerp'>© 2020 Kasa. All rights reserved</p>
           </footer>
        </>
    );
}

export default Footer;
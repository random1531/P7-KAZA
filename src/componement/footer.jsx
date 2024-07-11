import logofooters from '../assets/logofooter.svg'
import '../css/footer.css'
function Footer() {
       return (
        <>
           <footer>
           <img src={logofooters} className="logofooter" alt="banner" />
           <p className='footerp'>© 2020 Kasa. All rights reserved</p>
           </footer>
        </>
    );
}

export default Footer;
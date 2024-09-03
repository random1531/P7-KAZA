import { Link, Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import Headers from './Header/Headers'

function Template() {
    return (
        <>
            <Headers />
            <main>            
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Template;
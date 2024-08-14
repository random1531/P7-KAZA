import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers'

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
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Footer from './footer';
import '../css/App.css';
import '../css/Banner.css'
import Headers from './header'
function App() {
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

export default App;

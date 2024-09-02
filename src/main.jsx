import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css'
import Accueil from './pages/Accueil.jsx';
import Template from './componement/Template.jsx'
import Apropos from './pages/Apropos.jsx';
import Error from './pages/Error.jsx'
import LogementDetails from './pages/Logement.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,    
    errorElement:<Error />,
    children: [
      { path: '/', element: <Accueil />, key: 'accueil'},
      { path: 'logement/:id', element: <LogementDetails />, key: 'logement' },   
      { path: 'apropos', element: <Apropos />, key: 'apropos' },     
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

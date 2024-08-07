import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componement/App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Footer from './componement/footer'
import Apropos from './pages/Apropos'
import Eror from './pages/Eror'
import Logementdetails from './pages/Logementdetails'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement : <Eror/>,
    children: [
      { path: '/', element: <Accueil />, key: 'accueil'},
      { path: 'apropos', element: <Apropos />, key: 'apropos' },
      { path: 'logement/:id', element: <Logementdetails />, key: 'logementdetails' },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ClientsControl from './pages/clients';
import CarsControl from './pages/cars';
import Location from './pages/location';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/clientsControl' element={<ClientsControl/>}/>
        <Route path='/carcontrol' element={<CarsControl/>}/>
        <Route path='/location' element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


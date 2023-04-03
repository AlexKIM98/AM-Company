import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routers/Home';
import Contacto from './routers/Contacto';
import Telas from './routers/Telas';

import './App.css';

function App() {
  return (
  <React.Fragment>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/telas" element={<Telas />} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
  </React.Fragment>
  );
}

export default App;

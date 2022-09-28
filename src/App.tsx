import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { Sobre } from './pages/Sobre/Sobre';
import { Menu } from './components/Menu/Menu';
import { Contatos } from './pages/Contatos/Contatos';
import { Redes } from './components/Redes/Redes';

function App() {
  return (
   <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
      </Routes>
      <Redes/>
   </BrowserRouter>
  );
}

export default App;

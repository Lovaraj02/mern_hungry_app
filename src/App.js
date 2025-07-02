import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StaticImg from './components/StaticImg';
import Chains from './components/Chains';
import SliderComp from './components/SliderComp';
import Products from './components/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element = {
        <>
        <StaticImg/>
        <SliderComp/>
        <Chains/>
       </>
    }/>

    <Route path='/products/:firmId' element={<Products/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;

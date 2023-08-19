import React, { useEffect, useState } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css';
import { Dishes, Dish } from './dishes/';
import { About } from './about/About'
import { Home } from './home/Index'
import { Contact } from './contact/Contact'
import backgroungImage from "./images/dish-Background-Image.jpg" 


function App() {
  const  [stateBackgroungImage, setStateBackgroungImage]  = useState("");

  useEffect(()=>{
    setStateBackgroungImage(backgroungImage)
  },[backgroungImage]);

  return (
    <Routes>
      <Route exact element={<Dish image={stateBackgroungImage}/>} path="menu/:id" />
      <Route element={<Home />} path="/" />
      <Route element={<Dishes />} path="/menu" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

import {Route, Routes} from 'react-router-dom'
import './App.css';
import { Dishes, Dish } from './dishes/';
import { About } from './about/About'
import { Home } from './home/Index'
import { Contact } from './contact/Contact'
import { Error } from './components/Error'
import { Spinner } from './shared/Spinner'
import backgroungImage from "./images/dish-Background-Image.jpg" 


function App() {
  const  [stateBackgroungImage, setStateBackgroungImage]  = useState("");
  const  [stateSpinner]  = useState(Spinner);

  useEffect(()=>{
    setStateBackgroungImage(backgroungImage)
  },[backgroungImage, stateSpinner]);
  
<Spinner />
  return (
    <Routes>
      <Route exact element={<Dish image={stateBackgroungImage}/>} path="menu/:id" />
      <Route element={<Home />} path="/" />
      <Route element={<Error />} path="/error" />
      <Route element={<Dishes />} path="/menu" />
      <Route element={<About />} path={`/${('over ons').replace(/\s+/g, '-')}`} />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;

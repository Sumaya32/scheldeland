import React, { useEffect, useState } from 'react';

import {Route, Routes} from 'react-router-dom'
import './App.css';
import { Dishes, Dish } from './dishes/';
import { About } from './about/About'
import { Home } from './home/Index'
import { Contact } from './contact/Contact'
import { Error } from './components/Error'
import { Maintaince } from './Maintaince';
import { Spinner } from './shared/Spinner'
import backgroungImage from "./images/dish-Background-Image.jpg" 
import image from './images/oldPaperSheet.png'

function App() {
  const  [stateBackgroungImage, setStateBackgroungImage]  = useState("");
  const  [dishesBackgrounImage, setDishesBackgrounImage]  = useState(image);

  useEffect(()=>{
    setStateBackgroungImage(backgroungImage)
    setDishesBackgrounImage(image)
  },[backgroungImage, image]);
  
  if(image && backgroungImage) 
  return  (
    <Routes>
      <Route exact element={<Dish image={stateBackgroungImage}/>} path="menu/:id" />
      <Route element={<Maintaince/>} path="/" />
      <Route element={<Home />} path="/5" />
      <Route element={<Error />} path="/error" />
      <Route element={<Dishes image={image} />} path="/menu" />
      <Route element={<About />} path={`/${('over ons').replace(/\s+/g, '-')}`} />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;

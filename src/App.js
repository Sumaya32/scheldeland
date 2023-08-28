import React, { useEffect, useState } from 'react';
import { lazy,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import {  Dish } from './pages/dishes/';
import { About } from './pages/about/About'
import { Home } from './pages/home/Index'
import { Contact } from './pages/contact/Contact'
import { Error } from './components/Error'
import { Maintaince } from './Maintaince';
import { Spinner } from './components/shared/Spinner'
import backgroungImage from "./images/dish-Background-Image.jpg"
// import image from './images/oldPaperSheet.png'

function App() {
  const [stateBackgroungImage, setStateBackgroungImage] = useState("");
  // const [dishesBackgrounImage, setDishesBackgrounImage] = useState(image);
  const Dishes = lazy(() => import('./pages/dishes/Dishes'));

  useEffect(() => {
    setStateBackgroungImage(backgroungImage)
    // setDishesBackgrounImage(image)
  }, [backgroungImage]);

  if (backgroungImage)
    return (
      <Routes>
        <Route exact element={<Dish image={stateBackgroungImage} />} path="menu/:id" />
        <Route element={<Maintaince />} path="/" />
        {/* <Route element={<Home />} path="/" /> */}
        <Route element={<Error />} path="/error" />
        
          <Route element={<Suspense fallback={<Spinner />}> <Dishes/> </Suspense>} path="/menu" />
     
        <Route element={<About />} path={`/${('over ons').replace(/\s+/g, '-')}`} />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    );
}

export default App;

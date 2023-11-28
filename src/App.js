import React from 'react';
import { lazy,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import {  Dish, Dishes } from './pages/dishes';
import { About } from './pages/about/About'
import { Home } from './pages/home/Index'
import { Contact } from './pages/contact/Contact'
import { Error } from './components/Error'
import { Maintaince } from './Maintaince';
import { Spinner } from './components/shared/Spinner'


function App() {
    return (
      <Routes>
        <Route exact element={<Dish/>} path="menu/:id" />
        {/* <Route element={<Maintaince />} path="/" /> */}
        <Route element={<Home />} path="/" />
        <Route element={<Error />} path="/error" />
        <Route element={<Contact />} path="/contact" />
        
        <Route element={ <Dishes/> } path="/menu" />
          {/* <Route element={<Suspense fallback={<Spinner />}> <Dishes/> </Suspense>} path="/menu" /> */}
        <Route element={<About />} path={`/${('over ons').replace(/\s+/g, '-')}`} />
      </Routes>
    );
}

export default App;
